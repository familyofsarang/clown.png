noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');

}

function setup() {
canvas = createCanvas(300, 300);
canvas.center();
video= createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoded);
poseNet.on('pose', gotPoses);
}

function draw() {
image(video, 0, 0, 300, 300);
image(clown_nose, noseX ,noseY ,30 ,30);

}
function take_snapshot(){
    save('clown.png');
}

function modelLoded() {
    console.log('PoseNet Is Initialized');

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-5;
        noseY = results[0].pose.nose.y-5;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log(" nose y =" + results[0].pose.nose.y);

    }
}
