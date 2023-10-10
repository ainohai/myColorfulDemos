//import { setupWorker, simulate } from './longTask/queueHandler';
import { render as deformingPolygon } from './render/p5/deformingPolygon';
import { render as colorfulBlot } from './render/p5/colorfulBlot';
import { render as watercolorBlot } from './render/p5/watercolorBlot/watercolorBlot';
import { render as edgetest } from './render/p5/watercolorBlot/Edgetest';
import { render as bgtest } from './render/p5/bgTest';
import { render as worker } from './render/p5/watercolorWorker/workerBlot';


const demos: {name: string, render: () => void}[] = [
    {name: "deforming polygon", render: deformingPolygon},
    {name: "colorful blot", render: colorfulBlot},
    {name: "watercolor blot", render: watercolorBlot},
    {name: "edge test", render: edgetest},
    {name: "bg test", render: bgtest},
    {name: "worker test", render: worker},
];


const change = (event: Event) => {
document.getElementById('p5-container').innerHTML = "";
console.log(event);
const target = event.target as HTMLSelectElement;
demos[target.selectedIndex].render();
}

const createDropDown = () => {

    const select= document.createElement("select");
    
    for (let [index, demo] of demos.entries()) {
        const option = document.createElement("option");
        option.setAttribute("name", `demo-${index}`);
        option.setAttribute("id", `demo-${index}`);
        const optionText = document.createTextNode(demo.name);
        option.append(optionText);
        select.append(option);
    }

    select.value = demos[demos.length-1].name
    select.onchange = (event) => change(event);
    return select;
}

const droppari = document.getElementById("droppari");
droppari.append(createDropDown());

demos[demos.length -1].render();




/*window.onload = function() {
    // Get a reference to the canvas object
    const canvas = document.getElementById('p5-container');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas as HTMLCanvasElement);
    // Create a Paper.js Path to draw a line into it:

    var values = {
        paths: 50,
        minPoints: 5,
        maxPoints: 15,
        minRadius: 30,
        maxRadius: 90
    };

    var hitOptions = {
        segments: true,
        stroke: true,
        fill: true,
        tolerance: 5
    };

    let stuff = paper.projects
    let pape = paper
    let pap = paper.project.activeLayer
    createPaths();
    paper.view.play()
    paper.view.update()

    function createPaths() {
        var radiusDelta = values.maxRadius - values.minRadius;
        var pointsDelta = values.maxPoints - values.minPoints;
        for (var i = 0; i < values.paths; i++) {
            var radius = values.minRadius + Math.random() * radiusDelta;
            var points = values.minPoints + Math.floor(Math.random() * pointsDelta);
            var path = createBlob(500, radius, points);
            var lightness = (Math.random() - 0.5) * 0.4 + 0.4;
            var hue = Math.random() * 360;
            //path.fillColor = new paper.Color({ hue: hue, saturation: 1, lightness: lightness });
            path.strokeColor = new paper.Color('red');
            //paper.project.activeLayer.addChild(path);
        };
        var pat = new paper.Path();
        pat.strokeColor = new paper.Color('red');
        var start = new Point(100, 100);
        pat.moveTo(start);
        pat.lineTo(start.add([ 200, -50 ]));
        //paper.view.draw();
    }

    function createBlob(center, maxRadius, points) {
        var path = new paper.Path();
        path.closed = true;
        for (var i = 0; i < points; i++) {
            var delta = new Point({
                length: (maxRadius * 0.5) + (Math.random() * maxRadius * 0.5),
                angle: (360 / points) * i,
                x: 500,
                y: 500
            });
            path.add(delta);
        }
        path.smooth();
        return path;
    }

    let segment, path;
    let movePath = false;

    function onMouseDown(event) {
        segment = path = null;
        var hitResult = paper.project.hitTest(event.point, hitOptions);
        if (!hitResult)
            return;

        if (event.modifiers.shift) {
            if (hitResult.type == 'segment') {
                hitResult.segment.remove();
            };
            return;
        }

        if (hitResult) {
            path = hitResult.item;
            if (hitResult.type == 'segment') {
                segment = hitResult.segment;
            } else if (hitResult.type == 'stroke') {
                var location = hitResult.location;
                segment = path.insert(location.index + 1, event.point);
                path.smooth();
            }
        }
        movePath = hitResult.type == 'fill';
        if (movePath)
            paper.project.activeLayer.addChild(hitResult.item);
    }

    function onMouseMove(event) {
        paper.project.activeLayer.selected = false;
        if (event.item)
            event.item.selected = true;
    }

    function onMouseDrag(event) {
        if (segment) {
            segment.point = event.point;
            path.smooth();
        }

        if (movePath)
            path.position += event.delta;
    }
}

*/