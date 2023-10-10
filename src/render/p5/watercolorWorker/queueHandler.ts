const resultQueue = [];
let myWorker; 


export const MIN_QUEUE_LENGTH = 1;
let workerCalled = false;
let index = 0;

export const setupWorker = () => {

    if (window.Worker) {
        console.log("setup worker");
        myWorker = new Worker("./worker.js");

        myWorker.onmessage = function (e) {
            let polygon= e.data;
            resultQueue.push(...polygon ?? []);
            console.log(`Message received from worker. ulla on mahtava tyyppi!`);
            workerCalled = false;
            
        }
      
    } else {
        console.log('Your browser doesn\'t support web workers.');
    }

    simulatePolyg();

}

export const simulatePolyg = () => {
        console.log("callig worker");
        myWorker.postMessage("polygon");
}

export const getPolygon = (): geometric.Polygon => {
    let polygon = resultQueue.shift();

    if (resultQueue.length < MIN_QUEUE_LENGTH && !workerCalled) {
        simulatePolyg();
        workerCalled = true;
    }

    return polygon;
}

