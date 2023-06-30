const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = 5000;
canvas.height = 5000;

ctx.scale(0.5, 0.5);

let screenToCanvas = {
  width : window.innerWidth * 2,
  height : window.innerHeight * 2
};

const gravity = 0.99;

let deltaTime;


let myId;

let currentPlayers = [];



const backgroundAudio = new Audio('./audio/background.mp3');

const backgroundBirdAudio = new Audio('./audio/background-birds.mp3');


const playerRightImg = new Image();
playerRightImg.src = './img/player-right.png';

const playerLeftImg = new Image();
playerLeftImg.src = './img/player-left.png';

const playerUpImg = new Image();
playerUpImg.src = './img/player-up.png';

const playerDownImg = new Image();
playerDownImg.src = './img/player-down.png';



const birdImg = new Image();
birdImg.src = './img/bird.png';


const lake1Img = new Image();
lake1Img.src = './img/lake-1.png';

const lake2Img = new Image();
lake2Img.src = './img/lake-2.png';

const lake3Img = new Image();
lake3Img.src = './img/lake-3.png';

const lake4Img = new Image();
lake4Img.src = './img/lake-4.png';


const pointFlower1Img = new Image();
pointFlower1Img.src = './img/point-flower-1.png';

const pointFlower2Img = new Image();
pointFlower2Img.src = './img/point-flower-2.png';

const pointFlower3Img = new Image();
pointFlower3Img.src = './img/point-flower-3.png';

const pointFlower4Img = new Image();
pointFlower4Img.src = './img/point-flower-4.png';

const pointFlower5Img = new Image();
pointFlower5Img.src = './img/point-flower-5.png';


const fiveFlower1Img = new Image();
fiveFlower1Img.src = './img/5-flower-1.png';

const fiveFlower2Img = new Image();
fiveFlower2Img.src = './img/5-flower-2.png';

const fiveFlower3Img = new Image();
fiveFlower3Img.src = './img/5-flower-3.png';

const fiveFlower4Img = new Image();
fiveFlower4Img.src = './img/5-flower-4.png';

const fiveFlower5Img = new Image();
fiveFlower5Img.src = './img/5-flower-5.png';


const sixFlower1Img = new Image();
sixFlower1Img.src = './img/6-flower-1.png';

const sixFlower2Img = new Image();
sixFlower2Img.src = './img/6-flower-2.png';

const sixFlower3Img = new Image();
sixFlower3Img.src = './img/6-flower-3.png';

const sixFlower4Img = new Image();
sixFlower4Img.src = './img/6-flower-4.png';

const sixFlower5Img = new Image();
sixFlower5Img.src = './img/6-flower-5.png';


const lilly1Img = new Image();
lilly1Img.src = './img/lilly-1.png';

const lilly2Img = new Image();
lilly2Img.src = './img/lilly-2.png';

const lilly3Img = new Image();
lilly3Img.src = './img/lilly-3.png';

const lilly4Img = new Image();
lilly4Img.src = './img/lilly-4.png';


const rock1Img = new Image();
rock1Img.src = './img/rock-1.png';

const rock2Img = new Image();
rock2Img.src = './img/rock-2.png';

const rock3Img = new Image();
rock3Img.src = './img/rock-3.png';

const rock4Img = new Image();
rock4Img.src = './img/rock-4.png';


const grass1Img = new Image();
grass1Img.src = './img/grass-1.png';

const grass2Img = new Image();
grass2Img.src = './img/grass-2.png';

const grass3Img = new Image();
grass3Img.src = './img/grass-3.png';

const grass4Img = new Image();
grass4Img.src = './img/grass-4.png';


const tree1Img = new Image();
tree1Img.src = './img/tree-1.png';

const tree2Img = new Image();
tree2Img.src = './img/tree-2.png';


const levelBarInImg = new Image();
levelBarInImg.src = './img/level-bar-in.png';

const levelBarOutImg = new Image();
levelBarOutImg.src = './img/level-bar-out.png';


const blueprint = {
  lakes : [
    {
        "x": 200,
        "y": 100,
        "w": 1530,
        "h": 658,
        "image": lake1Img,
    },
    {
        "x": 550,
        "y": 1350,
        "w": 2052,
        "h": 918,
        "image": lake2Img,
    },
    {
        "x": 200,
        "y": 3500,
        "w": 1530,
        "h": 658,
        "image": lake1Img,
    },
    {
        "x": 2500,
        "y": 3900,
        "w": 2216,
        "h": 1030,
        "image": lake4Img,
    },
    {
        "x": 2650,
        "y": 2700,
        "w": 2052,
        "h": 918,
        "image": lake2Img,
    },
    {
        "x": 3150,
        "y": 850,
        "w": 1485,
        "h": 634,
        "image": lake3Img,
    }
],
  flowers : [
    {
        "x": 860,
        "y": 255,
        "w": 82,
        "h": 62,
        "image": lilly1Img,
    },
    {
        "x": 950,
        "y": 225,
        "w": 82,
        "h": 62,
        "image": lilly3Img,
    },
    {
        "x": 925,
        "y": 350,
        "w": 82,
        "h": 62,
        "image": lilly4Img,
    },
    {
        "x": 1130,
        "y": 1645,
        "w": 82,
        "h": 62,
        "image": lilly1Img,
    },
    {
        "x": 1030,
        "y": 1765,
        "w": 82,
        "h": 62,
        "image": lilly3Img,
    },
    {
        "x": 1180,
        "y": 1845,
        "w": 82,
        "h": 62,
        "image": lilly4Img,
    },
    {
        "x": 1565,
        "y": 1680,
        "w": 82,
        "h": 62,
        "image": lilly3Img,
    },
    {
        "x": 1680,
        "y": 1635,
        "w": 82,
        "h": 62,
        "image": lilly1Img,
    },
    {
        "x": 1970,
        "y": 1885,
        "w": 82,
        "h": 62,
        "image": lilly3Img,
    },
    {
        "x": 2085,
        "y": 1820,
        "w": 82,
        "h": 62,
        "image": lilly2Img,
    },
    {
        "x": 3545,
        "y": 1000,
        "w": 82,
        "h": 62,
        "image": lilly3Img,
    },
    {
        "x": 4200,
        "y": 1280,
        "w": 82,
        "h": 62,
        "image": lilly2Img,
    },
    {
        "x": 4270,
        "y": 3290,
        "w": 82,
        "h": 62,
        "image": lilly4Img,
    },
    {
        "x": 4130,
        "y": 3365,
        "w": 82,
        "h": 62,
        "image": lilly3Img,
    },
    {
        "x": 4180,
        "y": 3270,
        "w": 82,
        "h": 62,
        "image": lilly2Img,
    },
    {
        "x": 3205,
        "y": 4310,
        "w": 82,
        "h": 62,
        "image": lilly3Img,
    },
    {
        "x": 3475,
        "y": 3475,
        "w": 82,
        "h": 62,
        "image": lilly2Img,
    },
    {
        "x": 3480,
        "y": 4300,
        "w": 82,
        "h": 62,
        "image": lilly4Img,
    },
    {
        "x": 3920,
        "y": 4180,
        "w": 82,
        "h": 62,
        "image": lilly3Img,
    },
    {
        "x": 4080,
        "y": 4345,
        "w": 82,
        "h": 62,
        "image": lilly2Img,
    },
    {
        "x": 500,
        "y": 3750,
        "w": 82,
        "h": 62,
        "image": lilly3Img,
    },
    {
        "x": 575,
        "y": 3685,
        "w": 82,
        "h": 62,
        "image": lilly2Img,
    },
    {
        "x": 200,
        "y": 100,
        "w": 82,
        "h": 62,
        "image": fiveFlower1Img,
    },
    {
        "x": 550,
        "y": 1350,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 200,
        "y": 3500,
        "w": 98,
        "h": 69,
        "image": pointFlower2Img,
    },
    {
        "x": 2500,
        "y": 3900,
        "w": 82,
        "h": 62,
        "image": fiveFlower2Img,
    },
    {
        "x": 2650,
        "y": 2700,
        "w": 90,
        "h": 62,
        "image": sixFlower4Img,
    },
    {
        "x": 3150,
        "y": 850,
        "w": 90,
        "h": 62,
        "image": sixFlower1Img,
    },
    {
        "x": 910,
        "y": 1090,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 850,
        "y": 850,
        "w": 82,
        "h": 62,
        "image": fiveFlower1Img,
    },
    {
        "x": 730,
        "y": 910,
        "w": 90,
        "h": 62,
        "image": sixFlower2Img,
    },
    {
        "x": 685,
        "y": 1000,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 760,
        "y": 1000,
        "w": 90,
        "h": 62,
        "image": sixFlower3Img,
    },
    {
        "x": 1120,
        "y": 910,
        "w": 90,
        "h": 62,
        "image": sixFlower4Img,
    },
    {
        "x": 1360,
        "y": 910,
        "w": 90,
        "h": 62,
        "image": sixFlower5Img,
    },
    {
        "x": 1270,
        "y": 1105,
        "w": 90,
        "h": 62,
        "image": sixFlower1Img,
    },
    {
        "x": 1555,
        "y": 940,
        "w": 82,
        "h": 62,
        "image": fiveFlower5Img,
    },
    {
        "x": 1735,
        "y": 1045,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 1660,
        "y": 445,
        "w": 82,
        "h": 62,
        "image": fiveFlower1Img,
    },
    {
        "x": 1390,
        "y": 280,
        "w": 98,
        "h": 69,
        "image": pointFlower3Img,
    },
    {
        "x": 1135,
        "y": 70,
        "w": 90,
        "h": 62,
        "image": sixFlower2Img,
    },
    {
        "x": 190,
        "y": 100,
        "w": 98,
        "h": 69,
        "image": pointFlower2Img,
    },
    {
        "x": 25,
        "y": 40,
        "w": 90,
        "h": 62,
        "image": sixFlower3Img,
    },
    {
        "x": 55,
        "y": 235,
        "w": 90,
        "h": 62,
        "image": sixFlower4Img,
    },
    {
        "x": 100,
        "y": 1015,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 115,
        "y": 1105,
        "w": 82,
        "h": 62,
        "image": fiveFlower4Img,
    },
    {
        "x": 415,
        "y": 1690,
        "w": 90,
        "h": 62,
        "image": sixFlower5Img,
    },
    {
        "x": 775,
        "y": 2035,
        "w": 90,
        "h": 62,
        "image": sixFlower1Img,
    },
    {
        "x": 1075,
        "y": 2215,
        "w": 90,
        "h": 62,
        "image": sixFlower2Img,
    },
    {
        "x": 970,
        "y": 2380,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 1285,
        "y": 2680,
        "w": 82,
        "h": 62,
        "image": fiveFlower1Img,
    },
    {
        "x": 1405,
        "y": 2635,
        "w": 82,
        "h": 62,
        "image": fiveFlower3Img,
    },
    {
        "x": 1345,
        "y": 2740,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 1540,
        "y": 2785,
        "w": 98,
        "h": 69,
        "image": pointFlower2Img,
    },
    {
        "x": 1555,
        "y": 2410,
        "w": 90,
        "h": 62,
        "image": sixFlower3Img,
    },
    {
        "x": 1555,
        "y": 2170,
        "w": 82,
        "h": 62,
        "image": fiveFlower2Img,
    },
    {
        "x": 1900,
        "y": 2260,
        "w": 90,
        "h": 62,
        "image": sixFlower4Img,
    },
    {
        "x": 2230,
        "y": 2275,
        "w": 90,
        "h": 62,
        "image": sixFlower5Img,
    },
    {
        "x": 2545,
        "y": 1960,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 2635,
        "y": 1780,
        "w": 90,
        "h": 62,
        "image": sixFlower1Img,
    },
    {
        "x": 2380,
        "y": 1540,
        "w": 82,
        "h": 62,
        "image": fiveFlower1Img,
    },
    {
        "x": 2140,
        "y": 1420,
        "w": 90,
        "h": 62,
        "image": sixFlower2Img,
    },
    {
        "x": 1915,
        "y": 1255,
        "w": 90,
        "h": 62,
        "image": sixFlower3Img,
    },
    {
        "x": 1270,
        "y": 1375,
        "w": 98,
        "h": 69,
        "image": pointFlower2Img,
    },
    {
        "x": 730,
        "y": 1495,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 2125,
        "y": 1150,
        "w": 90,
        "h": 62,
        "image": sixFlower4Img,
    },
    {
        "x": 2635,
        "y": 880,
        "w": 82,
        "h": 62,
        "image": fiveFlower1Img,
    },
    {
        "x": 2815,
        "y": 745,
        "w": 82,
        "h": 62,
        "image": fiveFlower5Img,
    },
    {
        "x": 2665,
        "y": 670,
        "w": 98,
        "h": 69,
        "image": pointFlower2Img,
    },
    {
        "x": 2830,
        "y": 880,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 3100,
        "y": 1120,
        "w": 98,
        "h": 69,
        "image": pointFlower3Img,
    },
    {
        "x": 3190,
        "y": 910,
        "w": 90,
        "h": 62,
        "image": sixFlower5Img,
    },
    {
        "x": 3505,
        "y": 760,
        "w": 90,
        "h": 62,
        "image": sixFlower1Img,
    },
    {
        "x": 4045,
        "y": 850,
        "w": 82,
        "h": 62,
        "image": fiveFlower4Img,
    },
    {
        "x": 4420,
        "y": 1105,
        "w": 90,
        "h": 62,
        "image": sixFlower2Img,
    },
    {
        "x": 4405,
        "y": 1435,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 4330,
        "y": 1510,
        "w": 90,
        "h": 62,
        "image": sixFlower3Img,
    },
    {
        "x": 4465,
        "y": 1510,
        "w": 90,
        "h": 62,
        "image": sixFlower4Img,
    },
    {
        "x": 3955,
        "y": 1420,
        "w": 82,
        "h": 62,
        "image": fiveFlower3Img,
    },
    {
        "x": 3730,
        "y": 1570,
        "w": 90,
        "h": 62,
        "image": sixFlower5Img,
    },
    {
        "x": 3955,
        "y": 1720,
        "w": 98,
        "h": 69,
        "image": pointFlower2Img,
    },
    {
        "x": 3580,
        "y": 1975,
        "w": 90,
        "h": 62,
        "image": sixFlower1Img,
    },
    {
        "x": 3295,
        "y": 1780,
        "w": 90,
        "h": 62,
        "image": sixFlower2Img,
    },
    {
        "x": 3085,
        "y": 1570,
        "w": 90,
        "h": 62,
        "image": sixFlower3Img,
    },
    {
        "x": 3190,
        "y": 2215,
        "w": 90,
        "h": 62,
        "image": sixFlower4Img,
    },
    {
        "x": 3490,
        "y": 2545,
        "w": 82,
        "h": 62,
        "image": fiveFlower2Img,
    },
    {
        "x": 3775,
        "y": 2650,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 3880,
        "y": 2695,
        "w": 90,
        "h": 62,
        "image": sixFlower5Img,
    },
    {
        "x": 4240,
        "y": 2800,
        "w": 90,
        "h": 62,
        "image": sixFlower1Img,
    },
    {
        "x": 4360,
        "y": 2890,
        "w": 90,
        "h": 62,
        "image": sixFlower2Img,
    },
    {
        "x": 4510,
        "y": 2875,
        "w": 82,
        "h": 62,
        "image": fiveFlower1Img,
    },
    {
        "x": 4645,
        "y": 2980,
        "w": 90,
        "h": 62,
        "image": sixFlower3Img,
    },
    {
        "x": 4705,
        "y": 3235,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 4705,
        "y": 2680,
        "w": 98,
        "h": 69,
        "image": pointFlower2Img,
    },
    {
        "x": 4525,
        "y": 2320,
        "w": 90,
        "h": 62,
        "image": sixFlower4Img,
    },
    {
        "x": 4570,
        "y": 3355,
        "w": 90,
        "h": 62,
        "image": sixFlower5Img,
    },
    {
        "x": 4450,
        "y": 3595,
        "w": 90,
        "h": 62,
        "image": sixFlower1Img,
    },
    {
        "x": 4045,
        "y": 3670,
        "w": 90,
        "h": 62,
        "image": sixFlower2Img,
    },
    {
        "x": 3805,
        "y": 3550,
        "w": 82,
        "h": 62,
        "image": fiveFlower5Img,
    },
    {
        "x": 3610,
        "y": 3550,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 3325,
        "y": 3580,
        "w": 90,
        "h": 62,
        "image": sixFlower3Img,
    },
    {
        "x": 3100,
        "y": 3415,
        "w": 90,
        "h": 62,
        "image": sixFlower4Img,
    },
    {
        "x": 2860,
        "y": 3325,
        "w": 90,
        "h": 62,
        "image": sixFlower5Img,
    },
    {
        "x": 2575,
        "y": 3220,
        "w": 82,
        "h": 62,
        "image": fiveFlower4Img,
    },
    {
        "x": 2410,
        "y": 2980,
        "w": 90,
        "h": 62,
        "image": sixFlower1Img,
    },
    {
        "x": 2395,
        "y": 2815,
        "w": 90,
        "h": 62,
        "image": sixFlower2Img,
    },
    {
        "x": 2245,
        "y": 2830,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 2170,
        "y": 3220,
        "w": 98,
        "h": 69,
        "image": pointFlower2Img,
    },
    {
        "x": 1795,
        "y": 3580,
        "w": 90,
        "h": 62,
        "image": sixFlower3Img,
    },
    {
        "x": 2065,
        "y": 3985,
        "w": 90,
        "h": 62,
        "image": sixFlower4Img,
    },
    {
        "x": 2350,
        "y": 3700,
        "w": 82,
        "h": 62,
        "image": fiveFlower3Img,
    },
    {
        "x": 2500,
        "y": 4180,
        "w": 90,
        "h": 62,
        "image": sixFlower5Img,
    },
    {
        "x": 2470,
        "y": 4660,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 2740,
        "y": 4795,
        "w": 90,
        "h": 62,
        "image": sixFlower1Img,
    },
    {
        "x": 2335,
        "y": 4510,
        "w": 90,
        "h": 62,
        "image": sixFlower2Img,
    },
    {
        "x": 2320,
        "y": 4780,
        "w": 90,
        "h": 62,
        "image": sixFlower3Img,
    },
    {
        "x": 3595,
        "y": 4795,
        "w": 90,
        "h": 62,
        "image": sixFlower4Img,
    },
    {
        "x": 3850,
        "y": 4855,
        "w": 90,
        "h": 62,
        "image": sixFlower5Img,
    },
    {
        "x": 4780,
        "y": 4780,
        "w": 98,
        "h": 69,
        "image": pointFlower2Img,
    },
    {
        "x": 4630,
        "y": 4480,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 4300,
        "y": 4435,
        "w": 90,
        "h": 62,
        "image": sixFlower1Img,
    },
    {
        "x": 4375,
        "y": 4360,
        "w": 98,
        "h": 69,
        "image": pointFlower3Img,
    },
    {
        "x": 4615,
        "y": 4180,
        "w": 90,
        "h": 62,
        "image": sixFlower2Img,
    },
    {
        "x": 4750,
        "y": 3940,
        "w": 90,
        "h": 62,
        "image": sixFlower3Img,
    },
    {
        "x": 4465,
        "y": 3910,
        "w": 90,
        "h": 62,
        "image": sixFlower4Img,
    },
    {
        "x": 4075,
        "y": 3865,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 3775,
        "y": 3730,
        "w": 90,
        "h": 62,
        "image": sixFlower5Img,
    },
    {
        "x": 2920,
        "y": 3880,
        "w": 90,
        "h": 62,
        "image": sixFlower1Img,
    },
    {
        "x": 2785,
        "y": 4030,
        "w": 82,
        "h": 62,
        "image": fiveFlower1Img,
    },
    {
        "x": 1720,
        "y": 4150,
        "w": 98,
        "h": 69,
        "image": pointFlower2Img,
    },
    {
        "x": 1435,
        "y": 4285,
        "w": 90,
        "h": 62,
        "image": sixFlower2Img,
    },
    {
        "x": 1270,
        "y": 4135,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 835,
        "y": 4150,
        "w": 90,
        "h": 62,
        "image": sixFlower3Img,
    },
    {
        "x": 610,
        "y": 4075,
        "w": 90,
        "h": 62,
        "image": sixFlower4Img,
    },
    {
        "x": 205,
        "y": 4090,
        "w": 90,
        "h": 62,
        "image": sixFlower5Img,
    },
    {
        "x": 25,
        "y": 3880,
        "w": 90,
        "h": 62,
        "image": sixFlower1Img,
    },
    {
        "x": 190,
        "y": 3445,
        "w": 90,
        "h": 62,
        "image": sixFlower2Img,
    },
    {
        "x": 580,
        "y": 3355,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 925,
        "y": 3310,
        "w": 98,
        "h": 69,
        "image": pointFlower5Img,
    },
    {
        "x": 1195,
        "y": 3505,
        "w": 90,
        "h": 62,
        "image": sixFlower3Img,
    },
    {
        "x": 1450,
        "y": 3655,
        "w": 90,
        "h": 62,
        "image": sixFlower4Img,
    },
    {
        "x": 1300,
        "y": 3400,
        "w": 90,
        "h": 62,
        "image": sixFlower5Img,
    },
    {
        "x": 1390,
        "y": 3385,
        "w": 90,
        "h": 62,
        "image": sixFlower1Img,
    },
    {
        "x": 445,
        "y": 2695,
        "w": 98,
        "h": 69,
        "image": pointFlower2Img,
    },
    {
        "x": 295,
        "y": 2545,
        "w": 90,
        "h": 62,
        "image": sixFlower2Img,
    },
    {
        "x": 295,
        "y": 2335,
        "w": 98,
        "h": 69,
        "image": pointFlower1Img,
    },
    {
        "x": 565,
        "y": 2335,
        "w": 82,
        "h": 62,
        "image": fiveFlower2Img,
    },
    {
        "x": 220,
        "y": 1960,
        "w": 98,
        "h": 69,
        "image": pointFlower5Img,
    }
],
  rocks : [
    {
        "x": 1180,
        "y": 760,
        "w": 283,
        "h": 144,
        "image": rock4Img,
    },
    {
        "x": 550,
        "y": 715,
        "w": 293,
        "h": 150,
        "image": rock2Img,
    },
    {
        "x": 340,
        "y": 1495,
        "w": 237,
        "h": 107,
        "image": rock1Img,
    },
    {
        "x": 805,
        "y": 2065,
        "w": 283,
        "h": 144,
        "image": rock4Img,
    },
    {
        "x": 1480,
        "y": 2155,
        "w": 293,
        "h": 150,
        "image": rock2Img,
    },
    {
        "x": 2155,
        "y": 1480,
        "w": 284,
        "h": 145,
        "image": rock3Img,
    },
    {
        "x": 2710,
        "y": 220,
        "w": 283,
        "h": 144,
        "image": rock4Img,
    },
    {
        "x": 3475,
        "y": 490,
        "w": 237,
        "h": 107,
        "image": rock1Img,
    },
    {
        "x": 4375,
        "y": 2305,
        "w": 293,
        "h": 150,
        "image": rock2Img,
    },
    {
        "x": 3055,
        "y": 3535,
        "w": 284,
        "h": 145,
        "image": rock3Img,
    },
    {
        "x": 3520,
        "y": 3760,
        "w": 293,
        "h": 150,
        "image": rock2Img,
    },
    {
        "x": 4240,
        "y": 4375,
        "w": 283,
        "h": 144,
        "image": rock4Img,
    },
    {
        "x": 3685,
        "y": 4810,
        "w": 283,
        "h": 144,
        "image": rock4Img,
    },
    {
        "x": 1210,
        "y": 4600,
        "w": 237,
        "h": 107,
        "image": rock1Img,
    },
    {
        "x": 235,
        "y": 3070,
        "w": 284,
        "h": 145,
        "image": rock3Img,
    }
],
  grass : [
    {
        "x": 1180,
        "y": 760,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 550,
        "y": 715,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 340,
        "y": 1495,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 805,
        "y": 2065,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 1480,
        "y": 2155,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 2155,
        "y": 1480,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 2710,
        "y": 220,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 3475,
        "y": 490,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 4375,
        "y": 2305,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 3055,
        "y": 3535,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 3520,
        "y": 3760,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 4240,
        "y": 4375,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 3685,
        "y": 4810,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 1210,
        "y": 4600,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 235,
        "y": 3070,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 1360,
        "y": 700,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 1570,
        "y": 400,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 1330,
        "y": 175,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 1210,
        "y": 100,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 1450,
        "y": 190,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 505,
        "y": -50,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 280,
        "y": -20,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 385,
        "y": -65,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 205,
        "y": 145,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 175,
        "y": 535,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 310,
        "y": 595,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 460,
        "y": 640,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 685,
        "y": 535,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 835,
        "y": 625,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 670,
        "y": 1090,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 745,
        "y": 1135,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 640,
        "y": 1195,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 1240,
        "y": 1285,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 1135,
        "y": 1285,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 955,
        "y": 1285,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 835,
        "y": 1345,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 610,
        "y": 1360,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 445,
        "y": 1510,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 445,
        "y": 1645,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 565,
        "y": 1750,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 700,
        "y": 1855,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 625,
        "y": 1855,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 490,
        "y": 1765,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 1090,
        "y": 2050,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 1240,
        "y": 2095,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 1360,
        "y": 2185,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 1765,
        "y": 2140,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 1915,
        "y": 2215,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 2110,
        "y": 2155,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 2020,
        "y": 2260,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 2110,
        "y": 2290,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 2245,
        "y": 2245,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 2365,
        "y": 2155,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 2425,
        "y": 1915,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 2470,
        "y": 1495,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 2320,
        "y": 1495,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 2095,
        "y": 1300,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 1780,
        "y": 1240,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 1540,
        "y": 1165,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 2320,
        "y": 655,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 2425,
        "y": 640,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 2395,
        "y": 760,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 2515,
        "y": 820,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 3085,
        "y": 910,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 3010,
        "y": 1030,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 3100,
        "y": 1180,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 3025,
        "y": 1120,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 2980,
        "y": 1240,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 3070,
        "y": 1360,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 3355,
        "y": 1270,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 3520,
        "y": 1240,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 4075,
        "y": 1345,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 4315,
        "y": 1330,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 4675,
        "y": 1210,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 4345,
        "y": 1030,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 4660,
        "y": 250,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 4525,
        "y": 160,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 4090,
        "y": 880,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 3820,
        "y": 670,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 3925,
        "y": 625,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 3790,
        "y": 550,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 3550,
        "y": 700,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 3895,
        "y": 2575,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 4255,
        "y": 2215,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 4405,
        "y": 2350,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 4630,
        "y": 2185,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 4300,
        "y": 2800,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 4525,
        "y": 2845,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 4660,
        "y": 2980,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 4540,
        "y": 3220,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 4840,
        "y": 3190,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 4435,
        "y": 3475,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 4555,
        "y": 3415,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 4270,
        "y": 3535,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 4075,
        "y": 3535,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 3940,
        "y": 3475,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 3685,
        "y": 3400,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 3790,
        "y": 3535,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 3520,
        "y": 3430,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 3010,
        "y": 3295,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 2680,
        "y": 3175,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 2455,
        "y": 2980,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 2350,
        "y": 3130,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 2455,
        "y": 3115,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 2620,
        "y": 2830,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 2905,
        "y": 2725,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 3235,
        "y": 2650,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 3340,
        "y": 2590,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 3505,
        "y": 2530,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 3670,
        "y": 2515,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 2845,
        "y": 3805,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 2800,
        "y": 4060,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 2650,
        "y": 4105,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 2395,
        "y": 4285,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 2305,
        "y": 4390,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 2380,
        "y": 4405,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 2470,
        "y": 4480,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 2800,
        "y": 4600,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 2995,
        "y": 4765,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 3295,
        "y": 4735,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 3460,
        "y": 4690,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 4030,
        "y": 4720,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 4675,
        "y": 4765,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 4540,
        "y": 4480,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 4450,
        "y": 4090,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 1480,
        "y": 4030,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 1450,
        "y": 3565,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 1165,
        "y": 3490,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 1015,
        "y": 3340,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 805,
        "y": 3295,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 625,
        "y": 3280,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 535,
        "y": 3325,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 385,
        "y": 3355,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 145,
        "y": 3430,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 100,
        "y": 3475,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 175,
        "y": 3505,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 130,
        "y": 3610,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 70,
        "y": 3685,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 40,
        "y": 3745,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 190,
        "y": 3940,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 385,
        "y": 4075,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 475,
        "y": 4150,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 325,
        "y": 4390,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 460,
        "y": 4330,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 670,
        "y": 3970,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 895,
        "y": 4105,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 970,
        "y": 4210,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 1165,
        "y": 4105,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 1270,
        "y": 4300,
        "w": 150,
        "h": 220,
        "image": grass1Img,
    },
    {
        "x": 1135,
        "y": 4585,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 1405,
        "y": 4495,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    },
    {
        "x": 160,
        "y": 3070,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 2740,
        "y": 265,
        "w": 155,
        "h": 220,
        "image": grass2Img,
    },
    {
        "x": 3475,
        "y": 475,
        "w": 148,
        "h": 220,
        "image": grass3Img,
    },
    {
        "x": 3610,
        "y": 445,
        "w": 168,
        "h": 220,
        "image": grass4Img,
    }
],
  trees : [
    {
        "x": 1615,
        "y": -215,
        "w": 720,
        "h": 612,
        "image": tree2Img,
    },
    {
        "x": 1975,
        "y": -35,
        "w": 711,
        "h": 619,
        "image": tree1Img,
    },
    {
        "x": 2995,
        "y": -110,
        "w": 720,
        "h": 612,
        "image": tree2Img,
    },
    {
        "x": 3790,
        "y": -80,
        "w": 711,
        "h": 619,
        "image": tree1Img,
    },
    {
        "x": 4180,
        "y": 370,
        "w": 720,
        "h": 612,
        "image": tree2Img,
    },
    {
        "x": 4315,
        "y": 1480,
        "w": 711,
        "h": 619,
        "image": tree1Img,
    },
    {
        "x": 3565,
        "y": 1825,
        "w": 720,
        "h": 612,
        "image": tree2Img,
    },
    {
        "x": 2665,
        "y": 1735,
        "w": 711,
        "h": 619,
        "image": tree1Img,
    },
    {
        "x": 2215,
        "y": 985,
        "w": 720,
        "h": 612,
        "image": tree2Img,
    },
    {
        "x": 2830,
        "y": 265,
        "w": 711,
        "h": 619,
        "image": tree1Img,
    },
    {
        "x": 1585,
        "y": 2440,
        "w": 720,
        "h": 612,
        "image": tree2Img,
    },
    {
        "x": 1495,
        "y": 2995,
        "w": 711,
        "h": 619,
        "image": tree1Img,
    },
    {
        "x": 1765,
        "y": 3310,
        "w": 720,
        "h": 612,
        "image": tree2Img,
    },
    {
        "x": 1870,
        "y": 3865,
        "w": 711,
        "h": 619,
        "image": tree1Img,
    },
    {
        "x": 1570,
        "y": 4285,
        "w": 720,
        "h": 612,
        "image": tree2Img,
    },
    {
        "x": 475,
        "y": 2485,
        "w": 711,
        "h": 619,
        "image": tree1Img,
    },
    {
        "x": -110,
        "y": 1945,
        "w": 720,
        "h": 612,
        "image": tree2Img,
    },
    {
        "x": 70,
        "y": 790,
        "w": 711,
        "h": 619,
        "image": tree1Img,
    },
    {
        "x": 490,
        "y": 4390,
        "w": 720,
        "h": 612,
        "image": tree2Img,
    },
    {
        "x": 4300,
        "y": 3610,
        "w": 711,
        "h": 619,
        "image": tree1Img,
    }
]
};

const objects = {
  lakes : [],
  flowers : [],
  rocks : [],
  grass : [],
  trees : [],
};

const mobs = {
  birds : []
}



function squareCollision(s1, s2) {
  if (s1.position.x <= s2.position.x + s2.size.w && s1.position.x + s1.size.w >= s2.position.x && s1.position.y <= s2.position.y + s2.size.h && s1.position.y + s1.size.h >= s2.position.y) {
    return true;
  } else {
    return false;
  }
}

function circleCollision(c1, c2) {
  if (Math.abs(c1.position.x - c2.position.x) < c1.size.r + c2.size.r &&
      Math.abs(c1.position.y - c2.position.y) < c1.size.r + c2.size.r) {
    return true;
  } else {
    return false;
  }
}

function trueMouse(canvas, e) {
  let rect = canvas.getBoundingClientRect();
  return {
    x : (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
    y : (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
  };
}

function drawGrid(rows, columns, color, width) {
  ctx.lineWidth = width;
  ctx.strokeStyle = color;

  let xMove = canvas.width / rows;
  let yMove = canvas.height / columns;

  ctx.beginPath();

  for (var i = 0; i <= columns; i++) {
    ctx.moveTo(xMove * i, 0);
    ctx.lineTo(xMove * i, 10000);
  }

  for (var i = 0; i <= rows; i++) {
    ctx.moveTo(0, yMove * i);
    ctx.lineTo(10000, yMove * i);
  }

  ctx.stroke();
}

function scaleViewport() {
  screenToCanvas = {
    width : window.innerWidth * 2,
    height : window.innerHeight * 2
  };
}

class Environment {
  constructor() {
    this.position = {
      offset : {
        x : 0,
        y : 0
      }
    }
    this.input = {
      keys : {
        w : false,
        a : false,
        s : false,
        d : false
      },
      mouse : {
        x : 0,
        y : 0
      }
    };
  }

  moveToPlayer() {
    this.position.offset.x = player.position.x - screenToCanvas.width / 2 + player.size.w / 2;
    this.position.offset.y = player.position.y - screenToCanvas.height / 2 + player.size.h / 2;

    ctx.translate(-(this.position.offset.x), -(this.position.offset.y));
  }

  trackPlayer() {
    ctx.translate((this.position.offset.x), (this.position.offset.y));

    if ((player.position.x < 0 + screenToCanvas.width / 2 && player.position.y < 0 + screenToCanvas.height / 2) || (player.position.x > canvas.width - screenToCanvas.width / 2 && player.position.y > canvas.height - screenToCanvas.height / 2) || (player.position.x < 0 + screenToCanvas.width / 2 && player.position.y > canvas.height - screenToCanvas.height / 2) || (player.position.x > canvas.width - screenToCanvas.width / 2 && player.position.y < 0 + screenToCanvas.height / 2)) {
      this.position.offset.x = this.position.offset.x;
      this.position.offset.y = this.position.offset.y;
   } else if (player.position.x < 0 + screenToCanvas.width / 2 || player.position.x > canvas.width - screenToCanvas.width / 2) {
      this.position.offset.y = player.position.y - screenToCanvas.height / 2 + player.size.h / 2;
    } else if (player.position.y < 0 + screenToCanvas.height / 2 || player.position.y > canvas.height - screenToCanvas.height / 2) {
      this.position.offset.x = player.position.x - screenToCanvas.width / 2 + player.size.w / 2;
    } else if (player.position.x > 0 + screenToCanvas.width / 2 && player.position.x < canvas.width - screenToCanvas.width / 2 && player.position.y > 0 + screenToCanvas.height / 2 && player.position.y < canvas.height - screenToCanvas.height / 2) {
      this.position.offset.x = player.position.x - screenToCanvas.width / 2 + player.size.w / 2;
      this.position.offset.y = player.position.y - screenToCanvas.height / 2 + player.size.h / 2;
    }




    ctx.translate(-(this.position.offset.x), -(this.position.offset.y));
  }

  change() {
    ctx.translate(-1, -1)

    ctx.translate(1, 1)
  }

  init() {
    this.moveToPlayer();
  }

  update() {
    this.trackPlayer();
    this.change();
  }
}

class Ui {
  constructor() {
    this.levelBar = {
      position : {
        x : 0,
        y : 0
      },
      size : {
        w : 0
      },
      image : {
        in : levelBarInImg,
        out : levelBarOutImg
      }
    }
  }

  draw() {
    ctx.drawImage(this.levelBar.image.in, this.levelBar.position.x, this.levelBar.position.y, this.levelBar.size.w, this.levelBar.image.in.naturalHeight);
    ctx.drawImage(this.levelBar.image.out, this.levelBar.position.x, this.levelBar.position.y);
  }

  move() {
    this.levelBar.position.x = 50 + environment.position.offset.x;
    this.levelBar.position.y = 50 + environment.position.offset.y;
  }

  updateLevelBar() {
    this.levelBar.size.w = player.score - (600 * (player.level - 1));
    if (this.levelBar.size.w >= 600) {
      player.level++;
    }
  }

  change() {


  }

  update() {
    this.move();
    this.change();
    this.draw();
  }
}

class Player {
  constructor({ position, size }) {
    this.position = position;
    this.size = size;
    this.health = 100;
    this.level = 1;
    this.speed = 0.25;
    this.score = 0;
    this.pollenateValue = 50;
    this.animation = {
      frame : 0,
      timeWait : 10,
      time : 0,
      rotate : 0
    };
    this.inventory = {
      seed : null
    };
  }

  draw() {
    // ctx.fillStyle = "blue";
    // ctx.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
    //
    // ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.arc(this.position.x + 80, this.position.y + 80, this.size.r, 0, 2 * Math.PI);
    // ctx.fill();
    // ctx.stroke();

    if (this.animation.rotate === 0) {
      ctx.drawImage(playerLeftImg, 162 * this.animation.frame, 0, 162, 162, this.position.x, this.position.y, this.size.w, this.size.h);
    } else if (this.animation.rotate === 1) {
      ctx.drawImage(playerDownImg, 162 * this.animation.frame, 0, 162, 162, this.position.x, this.position.y, this.size.w, this.size.h);
    } else if (this.animation.rotate === 2) {
      ctx.drawImage(playerRightImg, 162 * this.animation.frame, 0, 162, 162, this.position.x, this.position.y, this.size.w, this.size.h);
    } else {
      ctx.drawImage(playerUpImg, 162 * this.animation.frame, 0, 162, 162, this.position.x, this.position.y, this.size.w, this.size.h);
    }

    // ctx.save();
    // ctx.translate(this.position.x + this.size.w / 2, this.position.y + this.size.h / 2);
    //
    // ctx.rotate(Math.atan2(environment.input.mouse.y - (environment.position.offset.y - this.position.y), environment.input.mouse.x - (environment.position.offset.x - this.position.x)));
    //
    // // ctx.fillStyle = "blue";
    // // ctx.fillRect(0, 0, this.size.w, this.size.h);
    // ctx.drawImage(playerLeftImg, 162 * this.animation.frame, 0, 162, 162, 0, 0, this.size.w, this.size.h);
    //
    // ctx.restore();

    // ctx.fillStyle = "rgba(255, 0, 0, 0.2)"
    // ctx.fillRect(player.position.x, player.position.y, 720, 612)
    // ctx.strokeRect(player.position.x, player.position.y, 720, 612)
  }

  move() {
    if (environment.input.keys.a) {
      this.position.x -= this.speed * deltaTime;
      this.animation.timeWait = 5;
      this.animation.rotate = 0;
    }
    if (environment.input.keys.d) {
      this.position.x += this.speed * deltaTime;
      this.animation.timeWait = 5;
      this.animation.rotate = 2;
    }
    if (environment.input.keys.s) {
      this.position.y += this.speed * deltaTime;
      this.animation.timeWait = 5;
      this.animation.rotate = 1;
    }
    if (environment.input.keys.w) {
      this.position.y -= this.speed * deltaTime;
      this.animation.timeWait = 5;
      this.animation.rotate = 3;
    }
    if (!environment.input.keys.w && !environment.input.keys.a && !environment.input.keys.s && !environment.input.keys.d) {
      this.animation.timeWait = 10;
    }
  }

  change() {
    if (this.animation.time >= this.animation.timeWait) {
      this.animation.frame++;
      this.animation.time = 0;
      if (this.animation.frame > 3) {
        this.animation.frame = 0;
      }
    } else {
      this.animation.time++;
    }

  }

  update() {
    this.move();
    this.change();
    this.draw();
  }
}

class OtherPlayer {
  constructor({ position, size, id }) {
    this.position = position;
    this.size = size;
    this.id = id;
    this.health = 100;
    this.level = 1;
    this.speed = 0.25;
    this.score = 0;
    this.pollenateValue = 50;
    this.animation = {
      frame : 0,
      timeWait : 10,
      time : 0,
      rotate : 0
    };
    this.inventory = {
      seed : null
    };
  }

  draw() {
    // ctx.fillStyle = "blue";
    // ctx.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
    //
    // ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.arc(this.position.x + 80, this.position.y + 80, this.size.r, 0, 2 * Math.PI);
    // ctx.fill();
    // ctx.stroke();

    if (this.animation.rotate === 0) {
      ctx.drawImage(playerLeftImg, 162 * this.animation.frame, 0, 162, 162, this.position.x, this.position.y, this.size.w, this.size.h);
    } else if (this.animation.rotate === 1) {
      ctx.drawImage(playerDownImg, 162 * this.animation.frame, 0, 162, 162, this.position.x, this.position.y, this.size.w, this.size.h);
    } else if (this.animation.rotate === 2) {
      ctx.drawImage(playerRightImg, 162 * this.animation.frame, 0, 162, 162, this.position.x, this.position.y, this.size.w, this.size.h);
    } else {
      ctx.drawImage(playerUpImg, 162 * this.animation.frame, 0, 162, 162, this.position.x, this.position.y, this.size.w, this.size.h);
    }

    // ctx.save();
    // ctx.translate(this.position.x + this.size.w / 2, this.position.y + this.size.h / 2);
    //
    // ctx.rotate(Math.atan2(environment.input.mouse.y - (environment.position.offset.y - this.position.y), environment.input.mouse.x - (environment.position.offset.x - this.position.x)));
    //
    // // ctx.fillStyle = "blue";
    // // ctx.fillRect(0, 0, this.size.w, this.size.h);
    // ctx.drawImage(playerLeftImg, 162 * this.animation.frame, 0, 162, 162, 0, 0, this.size.w, this.size.h);
    //
    // ctx.restore();

    // ctx.fillStyle = "rgba(255, 0, 0, 0.2)"
    // ctx.fillRect(player.position.x, player.position.y, 720, 612)
    // ctx.strokeRect(player.position.x, player.position.y, 720, 612)
  }

  move() {

  }

  change() {
    if (this.animation.time >= this.animation.timeWait) {
      this.animation.frame++;
      this.animation.time = 0;
      if (this.animation.frame > 3) {
        this.animation.frame = 0;
      }
    } else {
      this.animation.time++;
    }

  }

  update() {
    this.move();
    this.change();
    this.draw();
  }
}

class Object {
  constructor({ position, size, image }) {
    this.position = position;
    this.size = size;
    this.image = image;
  }

  draw() {
    // ctx.fillStyle = "red";
    // ctx.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);

    // ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.arc(this.position.x + this.size.w / 2, this.position.y + this.size.h / 2, this.size.w / 2, 0, 2 * Math.PI);
    // ctx.fill();
    // ctx.stroke();

    ctx.drawImage(this.image, this.position.x, this.position.y);
  }

  change() {

  }

  update() {
    this.change();
    this.draw();
  }
}

class Mob {
  constructor({ position, size, damage, speed, image }) {
    this.position = position;
    this.velocity = {
      x : 0,
      y : 0
    };
    this.target = {
      x : 0,
      y : 0
    }
    this.size = size;
    this.damage = damage;
    this.speed = speed;
    this.angle = 0;
    this.animation = {
      frame : 0,
      timeWait : 5,
      time : 0,
      rotate : 0
    };
    this.image = image;
  }

  getTargetPoint() {
    setInterval(() => {
      if (Math.abs(this.position.x - player.position.x) < 500 && Math.abs(this.position.y - player.position.y) < 500) {
        this.target.x = player.position.x;
        this.target.y = player.position.y;
      } else {
        this.target.x = Math.floor(Math.random() * canvas.width);
        this.target.y = Math.floor(Math.random() * canvas.height);
      }
    }, 2000);
  }

  draw() {
    // ctx.fillStyle = "blue";
    // ctx.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);

    // ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.arc(this.position.x + 80, this.position.y + 80, this.size.r, 0, 2 * Math.PI);
    // ctx.fill();
    // ctx.stroke();


    ctx.save();
    ctx.translate(this.position.x + this.size.w / 2, this.position.y + this.size.h / 2);

    ctx.rotate(this.angle + Math.PI / 2);

    // ctx.fillStyle = "blue";
    // ctx.fillRect(0, 0, this.size.w, this.size.h);
    ctx.drawImage(this.image, 377 * this.animation.frame, 0, 377, 377, 0 - this.size.w / 2, 0 - this.size.h / 2, this.size.w, this.size.h);

    ctx.restore();

    // ctx.fillStyle = "rgba(255, 0, 0, 0.2)"
    // ctx.fillRect(player.position.x, player.position.y, 720, 612)
    // ctx.strokeRect(player.position.x, player.position.y, 720, 612)
  }

  move() {
    if (!squareCollision({ position : this.position, size : this.size }, player)) {
      this.position.x += this.velocity.x / 8 * deltaTime;
      this.position.y += this.velocity.y / 8 * deltaTime;
    }
  }

  change() {
    if (this.animation.time >= this.animation.timeWait) {
      this.animation.frame++;
      this.animation.time = 0;
      if (this.animation.frame > 3) {
        this.animation.frame = 0;
      }
    } else {
      this.animation.time++;
    }

    this.angle = Math.atan2(this.target.y - this.position.y, this.target.x - this.position.x);
    this.velocity.x = Math.cos(this.angle);
    this.velocity.y = Math.sin(this.angle);
  }

  update() {
    this.move();
    this.change();
    this.draw();
  }
}



function initObjects() {
  blueprint.lakes.forEach((lake, i) => {
    objects.lakes.push(new Object({
      position : {
        x : lake.x,
        y : lake.y
      },
      size : {
        w : lake.w,
        h : lake.h,
        r : lake.w / 2
      },
      image : lake.image,
    }));
  });
  blueprint.flowers.forEach((flower, i) => {
    objects.flowers.push(new Object({
      position : {
        x : flower.x,
        y : flower.y
      },
      size : {
        w : flower.w,
        h : flower.h,
        r : flower.w / 2
      },
      image : flower.image
    }));
  });
  blueprint.rocks.forEach((rock, i) => {
    objects.rocks.push(new Object({
      position : {
        x : rock.x,
        y : rock.y
      },
      size : {
        w : rock.w,
        h : rock.h,
        r : rock.w / 2
      },
      image : rock.image
    }));
  });
  blueprint.grass.forEach((grass, i) => {
    objects.grass.push(new Object({
      position : {
        x : grass.x,
        y : grass.y
      },
      size : {
        w : grass.w,
        h : grass.h,
        r : grass.w / 2
      },
      color : grass.color,
      image : grass.image
    }));
  });
  blueprint.trees.forEach((tree, i) => {
    objects.trees.push(new Object({
      position : {
        x : tree.x,
        y : tree.y
      },
      size : {
        w : 850,
        h : 850,
        r : tree.w / 2
      },
      image : tree.image
    }));
  });
}

function updateObjects() {
  objects.lakes.forEach((lake, i) => {
    if (squareCollision({ position : { x : environment.position.offset.x, y : environment.position.offset.y }, size : { w : screenToCanvas.width, h : screenToCanvas.height } }, lake)) {
      lake.update();
    }
  });
  objects.flowers.forEach((flower, i) => {
    if (squareCollision({ position : { x : environment.position.offset.x, y : environment.position.offset.y }, size : { w : screenToCanvas.width, h : screenToCanvas.height } }, flower)) {
      flower.update();
    }
  });
  objects.rocks.forEach((rock, i) => {
    if (squareCollision({ position : { x : environment.position.offset.x, y : environment.position.offset.y }, size : { w : screenToCanvas.width, h : screenToCanvas.height } }, rock)) {
      rock.update();
    }
  });
  objects.grass.forEach((grass, i) => {
    if (squareCollision({ position : { x : environment.position.offset.x, y : environment.position.offset.y }, size : { w : screenToCanvas.width, h : screenToCanvas.height } }, grass)) {
      grass.update();
    }
  });
}

function updateTrees() {
  objects.trees.forEach((tree, i) => {
    if (squareCollision({ position : { x : environment.position.offset.x, y : environment.position.offset.y }, size : { w : screenToCanvas.width, h : screenToCanvas.height } }, tree)) {
      tree.update();
    }
  });
}


function initMobs() {
  while (mobs.birds.length < 5) {
    mobs.birds.push(new Mob({
      position : {
        x : Math.floor(Math.random() * canvas.width),
        y : Math.floor(Math.random() * canvas.height)
      },
      size : {
        w : 347,
        h : 256
      },
      damge : 10,
      speed : 0.15,
      image : birdImg
    }));
  }

  mobs.birds.forEach((bird, i) => {
    bird.getTargetPoint();
  });
}

function updateMobs() {
  mobs.birds.forEach((bird, i) => {
    if (squareCollision({ position : { x : environment.position.offset.x, y : environment.position.offset.y }, size : { w : screenToCanvas.width, h : screenToCanvas.height } }, bird)) {
      bird.update();
    }
  });
}


function updateOtherPlayers() {
  currentPlayers.forEach((player, i) => {
    player.update();
  });
}



function manageSeedPickup() {
  objects.flowers.forEach((flower, i) => {
    if (squareCollision(flower, player)) {
      if (player.inventory.seed !== flower) {
        player.inventory.seed = flower;
        ui.levelBar.size.w += player.pollenateValue;
        player.score += player.pollenateValue;
        ui.updateLevelBar();
      }
    }
  });
}

function manageSeedPlant() {
  if (player.inventory.seed !== null) {
    objects.flowers.push(new Object({
      position : {
        x : player.position.x + player.size.w / 2 - player.inventory.seed.size.w / 2,
        y : player.position.y + player.size.h / 2 - player.inventory.seed.size.h / 2
      },
      size : {
        w : player.inventory.seed.size.w,
        h : player.inventory.seed.size.h,
        r : player.inventory.seed.size.w / 2
      },
      image : player.inventory.seed.image
    }));
    player.inventory.seed = null;
  }
}



const player = new Player({
  position : {
    x : 2500,
    y : 2500
  },
  size : {
    w : 162,
    h : 162,
    r : 100
  }
});

const environment = new Environment();

const ui = new Ui();

function start() {
  canvas.style.display = "block";

  initObjects();
  environment.init();
  initMobs();

  reciveDataFromServer();

  socket.emit('game-started', true);

  requestAnimationFrame(loop);
}

function loop(timestamp) {
  deltaTime = timestamp - lastRender;

  scaleViewport();

  ctx.fillStyle = "#4D9C67";
  ctx.fillRect(environment.position.offset.x, environment.position.offset.y, screenToCanvas.width, screenToCanvas.height);

  environment.update();

  updateObjects();
  updateOtherPlayers();
  player.update();
  updateTrees();

  updateMobs();

  ui.update();

  lastRender = timestamp;

  sendDataToServer();

  requestAnimationFrame(loop);
}

let lastRender = 0;


window.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "e":
      manageSeedPickup();
      break;
    case "f":
      manageSeedPlant();
      break;
  }
});

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      environment.input.keys.w = true;
      break;
    case "a":
      environment.input.keys.a = true;
      break;
    case "s":
      environment.input.keys.s = true;
      break;
    case "d":
      environment.input.keys.d = true;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      environment.input.keys.w = false;
      break;
    case "a":
      environment.input.keys.a = false;
      break;
    case "s":
      environment.input.keys.s = false;
      break;
    case "d":
      environment.input.keys.d = false;
      break;
  }
});

window.addEventListener("mousedown", (e) => {

});

window.addEventListener("mousemove", (e) => {
  environment.input.mouse.x = trueMouse(canvas, e).x;
  environment.input.mouse.y = trueMouse(canvas, e).y;
});

window.addEventListener("load", () => {

});

document.querySelector("#play-button").addEventListener("click", () => {
  backgroundAudio.play();
  backgroundBirdAudio.play();

  document.querySelector(".title-screen").style.display = "none";

  start();
});


function sendDataToServer() {
  socket.emit("player-data-out", {
    position : {
      x : player.position.x,
      y : player.position.y
    },
    animation : {
      rotate : player.animation.rotate,
      timeWait : player.animation.timeWait
    }
  });
}

function  reciveDataFromServer() {
  socket.on('player-data-in', (arg) => {

    let alreadyPlaying = null;

    currentPlayers.forEach((clientPlayer, i) => {
      if (arg.id == clientPlayer.id) {
        alreadyPlaying = i;
      }
    });

    if (alreadyPlaying) {
      currentPlayers[alreadyPlaying].position.x = arg.data.position.x;
      currentPlayers[alreadyPlaying].position.y = arg.data.position.y;

      currentPlayers[alreadyPlaying].animation.timeWait = arg.data.animation.timeWait;
      currentPlayers[alreadyPlaying].animation.rotate = arg.data.animation.rotate;
    } else {
      currentPlayers.push(new OtherPlayer({
        position : {
          x : 0,
          y : 0
        },
        size : {
          w : 162,
          h : 162,
          r : 100
        },
        id : arg.id
      }));
    }

    if (currentPlayers.length === 0) {
      currentPlayers.push(new OtherPlayer({
        position : {
          x : arg.data.position.x,
          y : arg.data.position.y
        },
        size : {
          w : 162,
          h : 162,
          r : 100
        },
        id : arg.id
      }));
    }
  });
}

socket.on('your-id', (arg) => {
  myId = arg;
});
