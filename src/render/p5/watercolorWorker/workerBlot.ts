import * as p5 from 'p5';
import { getPolygon, setupWorker } from './queueHandler';
import { createDeformedPolygon, createRegularPolygon } from './turfGeometryPolygon';


const sketch = function (p5: p5) {

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    let row = 1;
    let column = 1;
    let polygonDraws = 0;

    let opacity = 5;
    let polygon: geometric.Polygon = [];


    p5.setup = () => {

        p5.createCanvas(WIDTH, HEIGHT - 10);
        p5.strokeWeight(0.5);
        p5.stroke(200, 5, 5);
        p5.background(255, 252, 235);
        p5.fill(255, 0, 0, opacity);

        setupWorker();

    };

    p5.draw = () => {

        if (p5.frameCount % 10 === 0) {
            //p5.background(255, 252, 235);

            polygon = getPolygon();

            if (!polygon) {
                return;
            }

            p5.translate(column * 300, 400);

            //draw blot
            p5.push();
            p5.noStroke();


            drawPolygon(polygon, opacity, p5);
            polygonDraws++;
            p5.pop();
        }
   


            if (polygonDraws >= 100) {
/*                polygon = createDeformedPolygon(SIDES, AREA, CENTER, DEFORMATION_ROUNDS, GAUSSIAN_BEGINNER_MULTIPLIER);
                polygonDraws = 0;
                column++;
                row++;
                if(row === 2){
                p5.fill(232, 163, 23, opacity);
                } else {
                    p5.fill(25, 0, 60, opacity);
                }

            }
            if (row === 4){
   */             
                p5.circle(100,100,10)
                p5.noLoop();
                console.log("Done")

            }
        }

    function drawPolygon(polygon: number[][], opacity: number, p5: p5) {

        let start = polygon[0];

        p5.beginShape();
        for (let i = polygon.length - 1; i >= 0; i--) {

            let end = polygon[i];

            p5.vertex(end[0] + 150, end[1]);

            start = end;
        }
        p5.endShape(p5.CLOSE);

    }
}

export const render = function () {
    let p5Instance = new p5(sketch, document.getElementById('p5-container'));
}

