/*
Doodle Creator

Creates some doodle images that we can use to train a neural network.

Change the class names according to what you want
*/

let class1Button;
let class2Button;
let class3Blet
let class1Count;
let class2Count;
let class3Count;
let eraser;
let class1Name = "poodle";
let class2Name = "avocado";
let class3Name = "scooter";

function preload() {
}

function setup() {
  canvas = createCanvas(280, 280);
  canvas.parent("canvasDiv")
  background(255);

  // Create 3 buttons
  class1Button = select("#class1Btn");
  class2Button = select("#class2Btn");
  class3Button = select("#class3Btn");
  class1Button.mousePressed(saveClass1);
  class2Button.mousePressed(saveClass2);
  class3Button.mousePressed(saveClass3);
  
  eraser = select("#eraser");


  class1Count = 0;
  class2Count = 0;
  class3Count = 0;

  updateButtonNames()
}

function updateButtonNames() {
  class1Button.html(class1Name + " (" + class1Count + ")")
  class2Button.html(class2Name + " (" + class2Count + ")")
  class3Button.html(class3Name + " (" + class3Count + ")")  
}

function saveClass1() {
  let fileName = 'class_' + class1Name + str(class1Count);
  saveCanvas(fileName, 'png');
  class1Count++;
  background(255);
  updateButtonNames();
}

function saveClass2() {
  let fileName = 'class_' + class2Name  + str(class2Count);
  saveCanvas(fileName, 'png');
  class2Count++;
  background(255);
  updateButtonNames();
  
}

function saveClass3() {
  let fileName = 'class_'  + class3Name + str(class3Count);
  saveCanvas(fileName, 'png');
  class3Count++;
  background(255);
  updateButtonNames();
  
}

function draw() {
  strokeWeight(16);
  if (eraser.checked())
    stroke(255)
  else
    stroke(0);
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}



