// making const var 
const Engine = Matter.Engine;
const Body = Matter.Body ;
const Bodies = Matter.Bodies ; 
const World = Matter.World ; 
const Constraint = Matter.Constraint
// end making const var 

var engine , world 
var ground1
var box1 , box2 
var sling1 
var ball1 

function setup () 
    {
       var canvas = createCanvas(1500,800);
       engine = Engine.create();
       world = engine.world;
        
       //creating Ground 
       ground1 = new ground(750,780,1500,80)

       box1 = new box(900,600,100,100)
       box3 = new box(800,500,100,100)
       box2 = new box(900,400,110,110)
       box4 = new box(800,350,110,110)
       box5 = new box(650,500,150,110)
       box6 = new box(1050,500,150,90)
       box7 = new box(900,100,130,130)

        ball1 = new sphere(500,500,100,100)

       sling1 = new SlingShot(ball1.body, {x: 200 , y:200})
    }

function draw () 
    {

        background(100);
        Engine.update(engine);

        //displaying the obss 
        ground1.display();
        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        box7.display();

        ball1.display();
        sling1.display();

    }

    function mouseDragged()
    {       
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    }