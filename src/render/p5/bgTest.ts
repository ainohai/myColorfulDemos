import * as p5 from 'p5';

// Just a slightly modified copy from:
// https://editor.p5js.org/StevesMakerspace/sketches/qzc_PQPP0
// https://editor.p5js.org/StevesMakerspace/sketches/5LrCjYNka
// Idea: 1) Draw wonky circle, 2) rotate it, 3) give it alpha, 4) draw bunch of them.
// Also clip masking. 
const sketch = function (p5: p5) {

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    let h1, h, i, j, h2, s1, s2, b1, b2, hMax, hMin, sMax, sMin, bMax, bMin;
    let mv = 50;
    let colmv = 2;
    let alph = 5;
    let maxVary;


    p5.setup = () => {

        
        p5.createCanvas(WIDTH, HEIGHT);
        p5.background(200);
        paperTexture2();
        s1 = 40; //starting/max saturation (out of 120)
        b1 = 65; //starting/max brightness (out of 100)
        maxVary = p5.random(20, 32);
        hMax = h1 + maxVary;
        hMin = h1 - maxVary;
        sMax = p5.min(s1 + maxVary, 100);
        sMin = p5.max(40, s1 - maxVary);
        bMax = p5.min(b1 + maxVary, 80);
        bMin = p5.max(30, b1 - maxVary);
        for (let k = 0; k < 3; k++) {
           makeCircle();
         }

         p5.fill(55, 0, 0)
         p5.translate(WIDTH/2, HEIGHT/2)
          p5.beginShape();
          for (let m = 0; m < p5.PI * 2; m += 1) {
            let r = p5.random(20, 50);
            let x = Math.cos(m) * r;
            let y = Math.sin(m) * r;
            p5.vertex(x, y);
          }
          p5.endShape(p5.CLOSE);
          p5.pop();  

    };

    p5.draw = () => {
        p5.noLoop();
    };

    function makeCircle() {
        let s = s1;
        let b = b1;
        let wid = p5.random(WIDTH / 4, WIDTH / 2);
        let numb = (wid * wid) / 20; //number of drawings
        let cnv:p5.Graphics = p5.createGraphics(wid*1.1, wid*1.1);
        cnv.colorMode('HSB', 360, 120, 100, 255);
        //@ts-ignore
        let ctx = cnv.canvas.getContext("2d");
        h1 = h = p5.random(360);
        cnv.noStroke();
        cnv.circle(cnv.width / 2, cnv.width / 2, wid);
        ctx.clip();
        cnv.background(h1, s1 - 20, b1 - 20);
        paperTexture(cnv);
        i = p5.random(wid);
        j = p5.random(wid);
        for (let q = 0; q < numb; q++) {
          i = i + p5.random(-mv, mv);
          j = j + p5.random(-mv, mv);
          h = h + p5.random(-colmv, colmv);
          s = s + p5.random(-colmv, colmv);
          b = b + p5.random(-colmv, colmv);
          if (i < 0) {
            i = wid;
          } else if (i > wid) {
            i = 0;
          }
          if (j < 0) {
            j = wid;
          } else if (j > wid) {
            j = 0;
          }
          if (h > hMax) {
            h = hMax;
          } else if (h < hMin) {
            h = hMin;
          }
          h2 = h;
          if (h > 360) {
            h2 = h - 360;
          } else if (h < 0) {
            h2 = h + 360;
          }
          if (s > sMax) {
            s = sMax;
          }
          if (s < sMin) {
            s = sMin;
          }
          if (b > bMax) {
            b = bMax;
          } else if (b < bMin) {
            b = bMin;
          }
          cnv.fill(h2, s, b, alph);
          cnv.push();
          cnv.translate(i, j);
          cnv.beginShape();
          for (let m = 0; m < p5.PI * 2; m += 1) {
            let r = p5.random(20, 50);
            let x = Math.cos(m) * r;
            let y = Math.sin(m) * r;
            cnv.vertex(x, y);
          }
          cnv.endShape(p5.CLOSE);
          cnv.pop();
        }
        cnv.filter(p5.BLUR, 0.25);
        cnv.stroke(0,200,10);
        cnv.strokeWeight(3);
        cnv.noFill();
        cnv.circle(cnv.width / 2, cnv.width / 2, wid);
        p5.image(cnv, p5.random(WIDTH) - wid / 2, p5.random(HEIGHT) - wid / 2);
        
      }

      function paperTexture(cnv: p5.Graphics){
        cnv.noFill();
        let textureNum = cnv.width*cnv.height/50;
        for(i=0;i<textureNum;i++){
          cnv.stroke(p5.random(100,150),p5.random(100,150),p5.random(100,150),6);
          let x = p5.random(-cnv.width*0.2,cnv.width*1.2);
          let y = p5.random(-cnv.height*0.2,cnv.height*1.2);
          cnv.push();
          cnv.translate(x,y);
          cnv.strokeWeight(3);
          cnv.point(0,0);
          cnv.strokeWeight(1);
          cnv.rotate(p5.random(Math.PI*2));
          cnv.curve(p5.random(60,220),0,0,p5.random(-50,50),p5.random(-50,50),p5.random(60,120),p5.random(60,120),p5.random(60,220));
          cnv.pop();
        }
      }
      
      function paperTexture2(){
        p5.noFill();
        let textureNum = WIDTH*HEIGHT/50;
        for(i=0;i<textureNum;i++){
          p5.stroke(p5.random(100,150),p5.random(100,150),p5.random(100,150),6);
          let x = p5.random(-WIDTH*0.2,WIDTH*1.2);
          let y = p5.random(-HEIGHT*0.2,HEIGHT*1.2);
          p5.push();
          p5.translate(x,y);
          p5.strokeWeight(3);
          p5.point(0,0);
          p5.strokeWeight(1);
          p5.rotate(p5.random(Math.PI*2));
          p5.curve(p5.random(60,220),0,0,p5.random(-50,50),p5.random(-50,50),p5.random(60,120),p5.random(60,120),p5.random(60,220));
          p5.pop();
        }
      }
      
}

export const render = function () {
    let p5Instance = new p5(sketch, document.getElementById('p5-container'));
}

