import { createDeformedPolygon, deformExistingPolygon } from "../watercolorBlot/geometryPolygon";


/*const DEFORMATION_ROUNDS = 3;
const GAUSSIAN_MULTIPLIER = 3;
const GAUSSIAN_BEGINNER_MULTIPLIER = 20;*/
const QUEUE_ADDITION = 8;
const SIDES = 5;
const AREA = 90000;
const CENTER: [number, number] = [0, 0];
const DEFORMATION_ROUNDS = 3;
const GAUSSIAN_MULTIPLIER = 2;
const GAUSSIAN_BEGINNER_MULTIPLIER = 10;

const config = () => ({
    sides: 9,
    radius: 100,
    xOffset: 0,
    yOffset: 0
});

const createPolygon = () => {

    let { sides, radius, xOffset, yOffset } = config();
    return createDeformedPolygon(SIDES, AREA, CENTER, DEFORMATION_ROUNDS, GAUSSIAN_BEGINNER_MULTIPLIER);
    //return createDeformedPolygon(sides, radius, [xOffset, yOffset], DEFORMATION_ROUNDS, GAUSSIAN_BEGINNER_MULTIPLIER)
}

let index = 0;
let polygon: geometric.Polygon;

console.log("worker");

self.onmessage = (e: MessageEvent<string>) => {


    if (e.data === "polygon") {

        index = index + 1;

        console.log("working for polygon " + index);

        let polygons: number[][][] = [];
        for (let i = 0; i < QUEUE_ADDITION; i++) {
            index = index + 1;
            if (!polygon) {
                polygon = createPolygon();
            }
            else {
                
                polygon = deformExistingPolygon(polygon, DEFORMATION_ROUNDS, index % 40 === 0, GAUSSIAN_MULTIPLIER)
            }
            polygons.push(polygon);
        } 
        self.postMessage(polygons);
    }

    else {
        console.log("just receiving messages")
    }

};

export { };
