my_status = "";

function preload(){
pic = loadImage("fruit.jpg");
}

function setup(){
    canvas = createCanvas(600, 300);
    canvas.position(460, 300);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function draw(){
    image(pic, 0, 0, 600, 360);
    if (my_status != "") {
        objectDetector.detect(pic, gotResults);}
}

function modelLoaded() {
    console.log("Model is loaded.");
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    objectDetector.detect(pic, gotResults);
}


    function gotResults(error, results) {
        if (error) {
            console.error(error);
        }
        else {
            my_status = "true";
            console.log(results);
            document.getElementById("status").innerHTML = "Status: Objects Detected";
        }
    }