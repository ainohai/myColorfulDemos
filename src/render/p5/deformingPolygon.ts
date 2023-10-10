import * as geometric from 'geometric';
import * as p5 from 'p5';
import { drawGrid } from '../../utils/p5DrawingHelper';


const sketch = function (p5: p5) {

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    const GAUSSIAN_MULTIPLIER = 3;
    let polygonSides = 5;
    let row = 0;
    let column = 0;
    
    let polygon: geometric.Polygon;

    p5.setup = () => {

        p5.createCanvas(WIDTH, HEIGHT - 10);
        p5.strokeWeight(1);
        p5.stroke(220, 5, 5);

        drawGrid(p5, WIDTH, HEIGHT);

    };

    p5.draw = () => {

        if (p5.frameCount % 7 === 1 ) {
            polygon = geometric.polygonRegular(polygonSides, 5000, [100, 0]);
            polygonSides++;
            row++;
            column = 0;
        }

        p5.translate(100 * column, row * 100);
        
        let start = polygon[0];
        let newPol = [];

        for(let i = polygon.length -1; i >= 0; i--) {

            let end = polygon[i];

            p5.line(start[0], start[1], end[0], end[1]);
            let midpoint = geometric.lineMidpoint([start, end]);

            newPol.push([midpoint[0] + p5.randomGaussian(0, 1) * GAUSSIAN_MULTIPLIER, midpoint[1] + p5.randomGaussian(0, 1) * GAUSSIAN_MULTIPLIER]);
            newPol.push(end);

            
            start = end;
        }
        polygon = newPol;
        column++;

        if (p5.frameCount >= (7 * 6)) {
             p5.noLoop()
        }



    };
}

export const render = function () {
    let p5Instance = new p5(sketch, document.getElementById('p5-container'));
}

