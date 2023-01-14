my_status = "";
myresults = [];

function preload() {
    pic_toys = loadImage("toys.jpg");
}

function setup() {
    canvas = createCanvas(600, 300);
    canvas.position(460, 300);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function draw() {
    image(pic_toys , 0, 0, 600, 360);
    if (my_status != "") {
        for(i = 0; i < myresults.length; i++){
          
            stroke("red");
            x = myresults[i].x;
            y = myresults[i].y;
            width = myresults[i].width;
            height =  myresults[i].height;
            confidence = floor(myresults[i].confidence*100) + "%";
            fill("white");
            rect(x+5,y+10,100,25);
            fill("black");
            text(myresults[i].label + " " + confidence, myresults[i].x + 10, myresults[i].y +25);
            noFill();
            rect(x,y, width, height);
        }
        //objectDetector.detect(pic_toys , gotResults);
    }
}

function modelLoaded() {
    console.log("Model is loaded.");
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    objectDetector.detect(pic_toys , gotResults);
}


function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        my_status = "true";
        console.log(results);
        myresults = results;
        document.getElementById("status").innerHTML = "Status: Objects Detected";
        document.getElementById("objects").innerHTML = "Number of objects detected: " + myresults.length;
    }
}

function back(){
    window.location = "index.html";
}