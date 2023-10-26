//Life Is What We Make Of It
//
//by Tommy Truong
//Created September 13th 2023
//ART-259
//Professor Stannard
//
//A generative abstract painting program where you can only control the cursor.
//
//Life (& art) are what we make of it.
//
//We can make whatever we will of the hands we are dealt or we do nothing with it.
//
//And if life is so transient why not make the most of everything?
//
//Why not carve your own path, irrespective of obstacles?
//
//Not beholden to causes you don't believe in nor people who oppose you
//
//Why hold back at all? Why should you play along to the whims of someone else?
//
//Live for yourself. And if you must make a few enemies so be it.
//
//Gods, I sound pretentious don't I?
//
//Anyways, you don't have to find meaning in any of this but that is all up to you.
//
//This is just a p5js program at the end of the day.
//
//Anyways, let's talk about how this program works.
//
//The setup() function will be used to define our initial background along with the variables, colorChange, xoff, & yoff.
//
//colorChange is the incremental value for the color change via noise.
//xoff & yoff hold the randomly generated values of our shapes.
//These values are created with the random values of noise(colorChange).
//Our canvas's size varies based on the window's width and height at the time of initial generation.
//
//We'll also begin with our background in black, which will be replaced with other colors as the draw() function is executed.
function setup() {
  let canvas = createCanvas(1000,1000);
  canvas.parent('game');
  background(0);
  colorChange = 0;
  xoff = 0;
  yoff = 0;
}
//
//The meat and potatoes of our program is in the draw() function.
//
//We'll let variables x and y change the location of our ellipses via noise and the location of our mouse cursor.
//
//The same will occur with variables xRect and yRect.
//
//Variables x2, y2, xRect2, and yRect2 all are randomly generated without noise.
//
//Meanwhile variables r, g, and b will change the color of the shapes via noise.
//
//This function also generates our background via Perlin noise.
//Of course, this will be done via xoff & yoff located in setup().
//It utilizes a series of for loops, IF, and ELSE IF statements to generate the pattern via Perlin noise.
//
//The result is a camouflage pattern in shades going from black to white. There are occasional patches of pure noise as it adds panache.
//
//If the mouse is pressed a series of ellipses and rectangles of varying sizes is drawn with their coordinates chosen via noise.
//
//Right now, the noise seed is preset to 1000. Comment out that line if you want a random seed each time you run this program.
//
function draw() {
  var x = mouseX  - random(50) + random(50);
  var y = mouseY  - random(50) + random(50);
  var xRect = mouseX  - random(50) + random(50);
  var yRect = mouseY - random(50) + random(50);
  var x2 = random(windowWidth);
  var y2 = random(windowHeight);
  var xRect2 = random(windowWidth);
  var yRect2 = random(windowHeight);
  var r = 255 * noise(colorChange + 20);
  var g = 255 * noise(colorChange + 40);
  var b = 255 * noise(colorChange + 60);
  rectMode(CENTER);

  noiseDetail(4, 0.5);
  noiseSeed(1000);

  if (yoff < windowHeight)
    for (xoff = 0; xoff < windowWidth; xoff += 1) {
      if (noise(xoff / 75, yoff / 75) > 0.5) {
        stroke(0);
      } else if (noise(xoff / 80 + 1000, yoff / 80) > 0.49) {
        stroke(50);
      } else if (noise(xoff / 85, yoff / 85 + 1000) > 0.48) {
        stroke(100);
      } else if (noise(xoff / 90 + 1500, yoff / 90 + 1500) > 0.47) {
        stroke(150);
      } else if (noise(xoff / 95 + 2000, yoff / 95 + 2000) > 0.46) {
        stroke(200);
      } else if (noise(xoff / 100 + 2500, yoff / 100 + 2500) > 0.45) {
        stroke(random(255), random(255), random(255));
      } else stroke(color(255, 255, 255));
      point(xoff, yoff, 1);
    }
  yoff += 1;
  
  if (mouseIsPressed) {
    noFill();
    strokeWeight(1);
    stroke(r, g, b);
    ellipse(x, y, random(10), random(10));
    rect(xRect, yRect, random(10), random(10));
    ellipse(x2, y2, random(10), random(10));
    rect(xRect2, yRect2, random(10), random(10));
    colorChange += 0.05;
  }
}
//
//This function draws a POINT where your cursor is.
//
//It changes color based on Perlin noise.
//
//Use the LMB to draw. There's no built in eraser function.
//
function mouseDragged() {
  var r = 255 * noise(colorChange + 10);
  var g = 255 * noise(colorChange + 15);
  var b = 255 * noise(colorChange + 20);
  colorChange += 0.01;

  strokeWeight(5);
  stroke(r, g, b);
  point(mouseX, mouseY);
}