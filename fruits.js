model = "";
function preload(){
      image = loadImage("https://mnprairieroots.files.wordpress.com/2016/02/art-creation-16-fruit-in-bowl.jpg");
}
function setup(){
    canvas = createCanvas(640,480);
    canvas.center();
    objectDetector = objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "object being detected";
}
function modelLoaded(){
    console.log(" model loaded !")
    status = true;
    objectDetector.detect(img, gotresult)
}
function gotresult(error,results)
{
    if(error){
        console.log(error);
    }else{
        console.log(results);
    }
}