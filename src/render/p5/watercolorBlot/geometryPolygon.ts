import * as geometric from "geometric";
import random from "random";


export const deformExistingPolygon = (polygon: geometric.Polygon, rounds: number, split: boolean, gaussianMultiplier: number) => {
    if (split) {
        for (let i = 0; i < rounds; i++) {
            polygon = deform(polygon, gaussianMultiplier);
        }
    } else {
        polygon = deformNoSplit(polygon, gaussianMultiplier)
    }
    return polygon;
}

const randomGaussian = (gaussianMultiplier: number) => {
    const rand = random.normal();
    return rand() * gaussianMultiplier;
}

const deform = (polygon: geometric.Polygon, multip: number) => {
    let start = polygon[0];
    let newPol = [];

    for (let i = polygon.length - 1; i >= 0; i--) {

        let end = polygon[i];

        let midpoint = geometric.lineMidpoint([start, end]);

        newPol.push([midpoint[0] + randomGaussian(multip), midpoint[1] + randomGaussian(multip)]);
        newPol.push(end);

        start = end;
    }
    return newPol;
}

//Note: modifies existing. 
const deformNoSplit = (polygon: geometric.Polygon, multip: number) => {

    for (let i = polygon.length - 1; i >= 0; i--) {

        let point = polygon[i];

        polygon[i] = [point[0] + randomGaussian(multip), point[1] + randomGaussian(multip)]

    }
    return polygon;
}

export const createDeformedPolygon = (sides: number, area: number, center: [number, number], deformationRounds: number, multip: number) => {


    let polygon = geometric.polygonRegular(sides, area, center);

    for (let i = 0; i < deformationRounds; i++) {
        polygon = deform(polygon, multip);
    }

    return polygon;

}