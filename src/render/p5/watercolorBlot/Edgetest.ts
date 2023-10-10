import * as geometric from 'geometric';
import * as p5 from 'p5';
import { createDeformedPolygon, deformExistingPolygon } from './geometryPolygon';
import polygonSmooth from '@turf/polygon-smooth';
import { Position, polygon as createTurfPol } from '@turf/helpers';
import simplify from '@turf/simplify';



const SIDES = 5;
const AREA = 90000;
const CENTER: [number, number] = [0, 0];
const DEFORMATION_ROUNDS = 2;
let GAUSSIAN_MULTIPLIER = 5;
const GAUSSIAN_BEGINNER_MULTIPLIER = 20;


const sketch = function (p5: p5) {

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    let row = 1;
    let column = 1;
    let polygonDraws = 0;

    let opacity = 5;
    let polygon: geometric.Polygon;

    p5.setup = () => {

        p5.createCanvas(WIDTH, HEIGHT - 10);
        p5.strokeWeight(0.5);
        p5.stroke(200, 5, 5);
        p5.background(255, 252, 235);
        p5.fill(255, 0, 0, opacity);
        p5.noStroke();

        //drawGrid(p5, WIDTH, HEIGHT);    
        polygon = createDeformedPolygon(SIDES, AREA, CENTER, DEFORMATION_ROUNDS, GAUSSIAN_BEGINNER_MULTIPLIER);

    };

    p5.draw = () => {

        if (p5.frameCount % 10 === 0) {
            //p5.background(255, 252, 235);

            p5.translate(column * 300, 400);

            //draw blot
            p5.push();
            

            polygon = deformExistingPolygon(polygon, DEFORMATION_ROUNDS, polygonDraws % 40 === 0, GAUSSIAN_MULTIPLIER);

            drawPolygon(polygon, opacity, p5);
            polygonDraws++;
            p5.pop();


            if(polygonDraws === 91) {

                let pol = createTurfPol([[...polygon, polygon[0]]] as Position[][]) 
                let smoothed = polygonSmooth(pol, {iterations: 3})
                let options = {tolerance: 0.1, highQuality: false};
                let simplified = simplify(smoothed, options);

                polygon = simplified.features[0].geometry.coordinates[0] as geometric.Polygon

            }

            if (polygonDraws > 90) {
                p5.stroke(150, 0, 0, 10);
                p5.strokeWeight(5);
                p5.noFill();


            } if (polygonDraws > 100) {

                polygon = createDeformedPolygon(SIDES, AREA, CENTER, DEFORMATION_ROUNDS, GAUSSIAN_BEGINNER_MULTIPLIER);
                polygonDraws = 0;
                column++;
                row++;
                if(row === 2){
                    p5.fill(232, 163, 23, opacity);
                    GAUSSIAN_MULTIPLIER = 3;
                } else {
                    p5.noFill();
                }
                p5.noStroke();

            }
            if (row === 4){
                
                p5.circle(100,100,10)
                p5.noLoop();

            }
        }
    }


}

function drawPolygon(polygon: geometric.Polygon, opacity: number, p5: p5) {

    let start = polygon[0];

    p5.beginShape();
    for (let i = polygon.length - 1; i >= 0; i--) {

        let end = polygon[i];

        p5.vertex(end[0] + 150, end[1]);

        start = end;
    }
    p5.endShape(p5.CLOSE);

}



export const render = function () {
    let p5Instance = new p5(sketch, document.getElementById('p5-container'));
}

