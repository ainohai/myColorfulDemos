import * as geometric from 'geometric';
import * as p5 from 'p5';
import { drawGrid } from '../../utils/p5DrawingHelper';


const sketch = function (p5: p5) {

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    let GAUSSIAN_MULTIPLIER = 3;
    let polygonSides = 3;
    let row = 0;
    let column = 0;
    let numOfBlots = 1;

    let polygon: geometric.Polygon;

    p5.setup = () => {

        p5.createCanvas(WIDTH, HEIGHT - 10);
        p5.strokeWeight(0.5);
        p5.stroke(200, 5, 5);

        //drawGrid(p5, WIDTH, HEIGHT);

    };

    p5.draw = () => {

        if (p5.frameCount % 7 === 1) {
            polygon = geometric.polygonRegular(polygonSides, 5000, [100, 0]);
            polygonSides++;
            row++;
        }

        p5.translate(column * 300, row * 100);

        let start = polygon[0];
        let newPol = [];

        for (let i = polygon.length - 1; i >= 0; i--) {

            let end = polygon[i];

            p5.line(start[0], start[1], end[0], end[1]);
            let midpoint = geometric.lineMidpoint([start, end]);

            newPol.push([midpoint[0] + p5.randomGaussian(0, 1) * GAUSSIAN_MULTIPLIER, midpoint[1] + p5.randomGaussian(0, 1) * GAUSSIAN_MULTIPLIER]);
            newPol.push(end);

            start = end;
        }

        polygon = newPol;

        let opacity = 5;

        for (let blot = 0; blot < numOfBlots; blot++) {

            //draw blot
            p5.push();
            p5.noStroke();
            p5.beginShape();


            for (let i = polygon.length - 1; i >= 0; i--) {

                let end = polygon[i];

                p5.fill(255, 0, 0, opacity);
                p5.vertex(end[0] + 150 * (blot + 1), end[1]);

                start = end;
            }

            p5.endShape(p5.CLOSE);
            p5.pop();

            opacity = opacity * 2;
        }

        if (p5.frameCount === (7 * 6)) {
            column++;
            row = 0;
            GAUSSIAN_MULTIPLIER = GAUSSIAN_MULTIPLIER + 5;
            numOfBlots = 5;
        }
        if (p5.frameCount === (2 * 7 * 6)) {
            p5.noLoop();
        }

    };
}

export const render = function () {
    let p5Instance = new p5(sketch, document.getElementById('p5-container'));
}

