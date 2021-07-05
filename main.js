song = "";
song_2 = "";

left_wrist_x = 0;
left_wrist_y = 0;

right_wrist_x = 0;
right_wrist_y = 0;


function preload() {
    song = "music.mp3";
    song_2 = "music2.mp3";
}


function setup() {
    canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", getPoses);
}


function modelLoaded() {
    console.log("PoseNet is Intialised");
}


function getPoses(error, results) {
    if (error) {
        console.error(error);
    }
    
    if (results.length > 0) {
        console.log(results);

        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;

        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.xy;
    }
}


function draw() {
    image(video, 0, 0, 600, 500);
}