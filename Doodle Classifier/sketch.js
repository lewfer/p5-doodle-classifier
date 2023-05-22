/*
Doodle Classifier

Classify images drawn on screen

Change the myModel to the link you created in Teachable Machine
*/

// Initialize the Image Classifier method with DoodleNet.
let classifier;

// Two variable to hold the label and confidence of the result
let labelSpan;
let confidenceSpan;
let modelSpan;

// Buttons
let clearButton;
let classifyButton;
let eraser;

// Configuration
let config;
let modelName;

// The trained model.  
//let myModel = "DoodleNet"
let myModel = "https://teachablemachine.withgoogle.com/models/QTFGnTjTM/model.json"

// Setup is called once
function setup() {
  createCanvas(280, 280);
  background(255);
  
  // Create spans to hold results
  label1Span = select("#label1");
  confidence1Span = select("#confidence1");
  label2Span = select("#label2");
  confidence2Span = select("#confidence2");
  label3Span = select("#label3");
  confidence3Span = select("#confidence3");
  
  
  eraser = select("#eraser");
  
  // Load the l
  classifier = ml5.imageClassifier(myModel);
  
  // Create a clear canvas button
  clearButton = select("#clearBtn");
  clearButton.mousePressed(clearCanvas);

  // Create a classify button
  classifyButton = select("#classifyBtn");
  classifyButton.mousePressed(classify);

}

// Draw is called repeatedly
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


// Called when the Classify button is called
function classify() {
  // Classify the current image
  classifier.classify(canvas, gotResult);
}


// Called when the Clear Canvas button is pressed
function clearCanvas() {
  background(255);
}


// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
    return;
  }

  print(results)
  
  // Show the first label and confidence
  label1Span.html(results[0].label);
  confidence1Span.html(floor(100 * results[0].confidence));

  label2Span.html(results[1].label);
  confidence2Span.html(floor(100 * results[1].confidence));
  
  label3Span.html(results[2].label);
  confidence3Span.html(floor(100 * results[2].confidence));
}

