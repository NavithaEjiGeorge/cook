function preload(){
m = loadImage("full.png")
l1 = loadAnimation("1l.png")
l2 = loadAnimation("2l.png")
l5 = loadAnimation("3l.png")
l6 = loadAnimation("4l.png")
l3 = loadAnimation("lemon.png")
l4 = loadAnimation("squeeze.png")
l8 =loadAnimation("ls.png")
hm = loadImage("over st.png")
}

function setup() {
 createCanvas(1400,800)
  over = createSprite(1000,250)
  over.addImage(hm)
  over.scale=0.4
  cindrella = createSprite(200,200)
  cindrella.addImage(m)
  glass = createSprite(400,300,20,20)
  glass.addAnimation("1",l1)
  glass.addAnimation("2",l2)
  glass.addAnimation("3",l3)
  glass.addAnimation("4",l4)
  glass.addAnimation("5",l5)
  glass.addAnimation("6",l6)
    glass.addAnimation("et",l8)
  glass.scale = 0.5
  a = createSprite(500, 140, 20, 20);
  a.shapeColor = "gold"
  b = createSprite(500, 200, 20, 20);
  b.shapeColor = "gold"
  c = createSprite(500, 255, 20, 20);
  c.shapeColor = "gold";
  d = createSprite(500, 310, 20, 20);
  d.shapeColor = "gold";
  e = createSprite(500, 365, 20, 20);
  e.shapeColor = "gold";
  f = createSprite(500,420, 20, 20);
  f.shapeColor = "gold"
  g = createSprite(500,480,20, 20);
  g.shapeColor = "gold"
}

function draw() {
 background("pink")
 drawSprites()
  textSize(30)
  fill("red")
  stroke("green")
  strokeWeight(2)
  text("Welcome to my kitchen Helper App",300,50)
  textSize(15)
  fill("blue")
    strokeWeight(0)
  text("Cindrella:Hello this is my cooking helping app Do you know to make a lime juice ? I don't know.Lets learn it from this app by Navitha Eji George",200,100)
  text("Click the blocks to see the various steps",200,130)
  fill("black")
  text("Step1 : Take a glass",520,150)
  text("Step2 : Fill water in the glass",520,200)
  text("Step3 : now take a slice of lemon",520,255)
  text("Step4 : Squeeze it using a squeezer",520,310)
  text("Step5 : pour the lime drops into the glass of water",520,365)
  text("Step6 : Now stir it well using a spoon",520,420)
  text("Step7 : YUP! The lime juice is ready Have a cup of lime juice",520,480)


  if (mousePressedOver(a)) {
    glass.changeAnimation("1",l1)
    glass.scale = 0.5
  }
  if (mousePressedOver(b)) {
    glass.changeAnimation("2",l2)
  } 
   if (mousePressedOver(c)) {
    glass.changeAnimation("3",l3)
      glass.scale =0.3

  } 
     if (mousePressedOver(d)) {
    glass.changeAnimation("4",l4)
           glass.scale =0.4

  }
  
       if (mousePressedOver(e)) {
    glass.changeAnimation("et",l5)
    glass.scale = 0.4
  }
  
       if (mousePressedOver(f)) {
    glass.changeAnimation("5",l5)
             glass.scale =0.5

  }
         if (mousePressedOver(g)) {
    glass.changeAnimation("6",l6)
             glass.scale =0.5

  }
textSize(18)
text("BYE",1300,400)
text(" Hope you liked my cindrella game ",1300,600)
text("by : Navitha Eji George",1000,400)
 
}
