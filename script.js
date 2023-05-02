let classifier;

let snake;
function modelLoaded() {
    console.log('Model Loaded!');
    classifier.predict(snake,gotResult);
  }


  function gotResult(err,res){
if(err){
    console.log("ERROR",err)
}
else{
    console.log(res)
    let label=res[0].label;
    fill(0);
    textSize(40);
    text(label,20,height-100);
}
  }

  function imageReady(){
    image(snake,0,0,width,height)
    console.log("Image is here")
  }
function setup(){
    createCanvas(640,480);
    background(0);
    snake=createImg('snake.jpg',imageReady);
    snake.hide();
    background(0);
  
    classifier =ml5.imageClassifier('MobileNet', modelLoaded);

}

