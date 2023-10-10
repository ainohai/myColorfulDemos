import * as p5 from 'p5';

export const drawGrid = (p5: p5, width: number, height: number) => {
    for (let i = 0; i < width; i += 100) {
        for (let j = 0; j < height; j += 100) {
            p5.strokeWeight(0.5);
            p5.line(i, 0, i, height);
            p5.fill(200, 0, 0);
            p5.text(i, i, 10);
            //green
            p5.fill(0, 200, 0);
            p5.line(0, j, width, j);
            p5.text(j, 0, j);

        }
    }
}
