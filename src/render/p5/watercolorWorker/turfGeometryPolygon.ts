import random from "random";
import polygonSmooth from '@turf/polygon-smooth';
import { Feature, Polygon, Position, polygon as createTurfPol, point } from '@turf/helpers';
import simplify from '@turf/simplify';
import * as geometric from "geometric";


// geometric seems to be more handy to use than turf. Turf has some features which geometric hasn't. They can be mapped like this:
//From geometric to turf:
// let pol = createTurfPol([[...polygon, polygon[0]]] as Position[][]) 
// let roo = polygonSmooth(pol, {iterations: 3})
// let options = {tolerance: 0.1, highQuality: false};
// let simplified = simplify(roo, options);

// From turf to geometric .Remember that the last point is duplicated in turf and needs probably to be removed. 
// polygon = simplified.features[0].geometry.coordinates[0] as geometric.Polygon

export const createRegularPolygon = (sides: number, radius: number, xOffset: number, yOffset: number): [number, number][] => {

    let polygon = [];

   for (let i = 0; i < sides; i++){
    let pointX = ( Math.sin( i / sides * 2 * Math.PI ) * radius ) + xOffset;
    let pointY = ( Math.cos( i / sides * 2 * Math.PI ) * radius ) + yOffset;
       polygon.push([pointX, pointY]);
   }

   return polygon;
}

export const createDeformedPolygon = (sides: number, radius: number, center: [number, number], deformationRounds: number, multip: number) => {

    let points = createRegularPolygon(sides, radius, center[0], center[1]);
    //Turf requires start point and end point to be the same.
    let polygon = createTurfPol([[...points, points[0]]]);

    for (let i = 0; i < deformationRounds; i++) {
        polygon = deform(polygon, multip);
    }

    return polygon;

}

export const deformExistingPolygon = (turfPolygon: Feature<Polygon, {[name: string]: any}>, rounds: number, split: boolean, gaussianMultiplier: number) => {
    
    let polygon: Feature<Polygon, {[name: string]: any}>;
    if (split) {
        for (let i = 0; i < rounds; i++) {
            polygon = deform(turfPolygon, gaussianMultiplier);
        }
        let smoothed = polygonSmooth(polygon, {iterations: 3})
        let options = {tolerance: 0.05, highQuality: false};
        polygon = simplify(smoothed, options).features[0];
    } else {
        polygon = deformNoSplit(turfPolygon, gaussianMultiplier)
    }
    return polygon;
}


const randomGaussian = (gaussianMultiplier: number) => {
    const rand = random.normal();
    return rand() * gaussianMultiplier;
}


const deform = (turfPolygon: Feature<Polygon, {[name: string]: any}>, multip: number): Feature<Polygon, {[name: string]: any}> => {
    
    let polygon = turfPolygon.geometry.coordinates[0];

    let start = polygon[0];
    let newPol: Position[] = [];

    //Omit the last item, as turf has same last and first items in the polygon
    for (let i = polygon.length - 2; i >= 0; i--) {

        let end = polygon[i];
    
        //Turf doesn't have a good midpoint for this purpose.
        var mid = geometric.lineMidpoint([start as geometric.Point, end as geometric.Point]);

        newPol.push([mid[0] + randomGaussian(multip), mid[1] + randomGaussian(multip)]);
        newPol.push(end);

        start = end;
    }
    return createTurfPol([[...newPol, newPol[0]]]);
}

//Note: modifies existing. 
const deformNoSplit = (turfPolygon: Feature<Polygon, {[name: string]: any}>, multip: number): Feature<Polygon, {[name: string]: any}> => {

    let polygon = turfPolygon.geometry.coordinates[0];
    for (let i = polygon.length - 2; i >= 0; i--) {

        let point = polygon[i];

        polygon[i] = [point[0] + randomGaussian(multip), point[1] + randomGaussian(multip)]

    }
    return createTurfPol([[...polygon, polygon[0]]]);
}
