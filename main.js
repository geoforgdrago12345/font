nose_X=0;
nose_Y=0;
left_wristX=0;
right_wristX=0;
difference=0;

function preload() {

}

function setup() {
    canvas = createCanvas(600, 490);
    canvas.position(400, 100);
    video = createCapture(VIDEO);
    video.size(400, 400);
    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background(125, 250, 146);
    textSize(difference);
    fill("red");
    text('Kishaanth',50,300);
}

function modelLoded() {
    console.log("poseNet is iniselized");

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_X= results[0].pose.nose.x;
        nose_Y= results[0].pose.nose.y;
        left_wristX= results[0].pose.leftWrist.x;
        right_wristX= results[0].pose.rightWrist.x;
        
        difference=floor(left_wristX-right_wristX);
        console.log("difference="+difference);

    }
}
