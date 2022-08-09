//Up,Down,Left,Right,Fore,Back
var U = +1,D = -1,L = +4,R = -4,F = +16,B = -16;

var SqlSFV = {
  U:  1,
  D: -1,
  L:  4,
  R: -4,
  F: 16,
  B:-16
};

function SqlVFS(vct){
   var s = '';
   switch(vct){
     case +1 :s = 'U';break;
     case -1 :s = 'D';break;
     case +4 :s = 'L';break;
     case -4 :s = 'R';break;
     case +16:s = 'F';break;
     case -16:s = 'B';break;
     default : break;   
   }
   return s;
}; 

//  Red ,Green,Yellow. R has used forward.
var H = 0,Y = 1,G = 2;
var SqlSFC = {
  H: 0,
  Y: 1,
  G: 2
};

function SqlCFS(clr){
   var s = '';
   switch(clr){
     case 0:s = 'H';break;
     case 1:s = 'Y';break;
     case 2:s = 'G';break;     
     default : break;   
   }
   return s;
}; 


// S for Clockwise , N for CounterClockwise
var S = 1,N = -1;
var SqlSFW = {
  S:  1,
  N: -1  
};

function SqlWFS(wis){
   var s = '';
   switch(wis){
     case +1 :s = 'S';break;
     case -1 :s = 'N';break;     
     default : break;   
   }
   return s;
}; 


var hPi = Math.PI / 2;

var SqlFacesData = [
//0
{position : {x : -128, y :  128, z : 192  }, alx : F, color : G,  value :   7, index :  0,r1: 18,r2: 27 },
{position : {x :    0, y :  128, z : 192  }, alx : F, color : H,  value :   2, index :  1,r1: 19,r2:  1 },
{position : {x :  128, y :  128, z : 192  }, alx : F, color : G,  value :   6, index :  2,r1: 11,r2: 20 },
{position : {x : -128, y :    0, z : 192  }, alx : F, color : H,  value :   3, index :  3,r1: 30,r2:  3 },
{position : {x :    0, y :    0, z : 192  }, alx : F, color : H,  value :   1, index :  4,r1:  4,r2:  4 },
{position : {x :  128, y :    0, z : 192  }, alx : F, color : H,  value :   8, index :  5,r1: 14,r2:  5 },
{position : {x : -128, y : -128, z : 192  }, alx : F, color : H,  value :   5, index :  6,r1: 33,r2: 38 },
{position : {x :    0, y : -128, z : 192  }, alx : F, color : H,  value :   9, index :  7,r1: 37,r2:  7 },
{position : {x :  128, y : -128, z : 192  }, alx : F, color : Y,  value :   4, index :  8,r1: 17,r2: 36 },
//9                                                                                        
{position : {x :  192, y :  128, z : -128 }, alx : R, color : H,  value :   5, index :  9,r1: 26,r2: 45 },
{position : {x :  192, y :  128, z :    0 }, alx : R, color : H,  value :   3, index : 10,r1: 23,r2: 10 },
{position : {x :  192, y :  128, z :  128 }, alx : R, color : Y,  value :   7, index : 11,r1:  2,r2: 20 },
{position : {x :  192, y :    0, z : -128 }, alx : R, color : H,  value :   9, index : 12,r1: 48,r2: 12 },
{position : {x :  192, y :    0, z :    0 }, alx : R, color : H,  value :   1, index : 13,r1: 13,r2: 13 },
{position : {x :  192, y :    0, z :  128 }, alx : R, color : H,  value :   2, index : 14,r1:  5,r2: 14 },
{position : {x :  192, y : -128, z : -128 }, alx : R, color : H,  value :   4, index : 15,r1: 42,r2: 51 },
{position : {x :  192, y : -128, z :    0 }, alx : R, color : H,  value :   8, index : 16,r1: 39,r2: 16 },
{position : {x :  192, y : -128, z :  128 }, alx : R, color : G,  value :   6, index : 17,r1:  8,r2: 36 },
//18                                                                                       
{position : {x : -128, y :  192, z :  128 }, alx : U, color : H,  value :   6, index : 18,r1:  0,r2: 27 },
{position : {x :    0, y :  192, z :  128 }, alx : U, color : G,  value :   8, index : 19,r1:  1,r2: 19 },
{position : {x :  128, y :  192, z :  128 }, alx : U, color : H,  value :   4, index : 20,r1: 11,r2:  2 },
{position : {x : -128, y :  192, z :    0 }, alx : U, color : G,  value :   2, index : 21,r1: 28,r2: 21 },
{position : {x :    0, y :  192, z :    0 }, alx : U, color : G,  value :   1, index : 22,r1: 22,r2: 22 },
{position : {x :  128, y :  192, z :    0 }, alx : U, color : G,  value :   9, index : 23,r1: 10,r2: 23 },
{position : {x : -128, y :  192, z : -128 }, alx : U, color : Y,  value :   7, index : 24,r1: 29,r2: 47 },
{position : {x :    0, y :  192, z : -128 }, alx : U, color : G,  value :   3, index : 25,r1: 46,r2: 25 },
{position : {x :  128, y :  192, z : -128 }, alx : U, color : G,  value :   5, index : 26,r1:  9,r2: 45 },
//27                                                                                       
{position : {x : -192, y :  128, z :  128 }, alx : L, color : Y,  value :   4, index : 27,r1:  0,r2: 18 },
{position : {x : -192, y :  128, z :    0 }, alx : L, color : G,  value :   8, index : 28,r1: 21,r2: 28 },
{position : {x : -192, y :  128, z : -128 }, alx : L, color : H,  value :   6, index : 29,r1: 24,r2: 47 },
{position : {x : -192, y :    0, z :  128 }, alx : L, color : G,  value :   9, index : 30,r1:  3,r2: 30 },
{position : {x : -192, y :    0, z :    0 }, alx : L, color : G,  value :   1, index : 31,r1: 31,r2: 31 },
{position : {x : -192, y :    0, z : -128 }, alx : L, color : G,  value :   2, index : 32,r1: 50,r2: 32 },
{position : {x : -192, y : -128, z :  128 }, alx : L, color : G,  value :   5, index : 33,r1:  6,r2: 38 },
{position : {x : -192, y : -128, z :    0 }, alx : L, color : G,  value :   3, index : 34,r1: 41,r2: 34 },
{position : {x : -192, y : -128, z : -128 }, alx : L, color : H,  value :   7, index : 35,r1: 44,r2: 53 },
//36                                                                                       
{position : {x :  128, y : -192, z :  128 }, alx : D, color : H,  value :   7, index : 36,r1:  8,r2: 17 },
{position : {x :    0, y : -192, z :  128 }, alx : D, color : Y,  value :   3, index : 37,r1:  7,r2: 37 },
{position : {x : -128, y : -192, z :  128 }, alx : D, color : Y,  value :   5, index : 38,r1:  6,r2: 33 },
{position : {x :  128, y : -192, z :    0 }, alx : D, color : Y,  value :   2, index : 39,r1: 16,r2: 39 },
{position : {x :    0, y : -192, z :    0 }, alx : D, color : Y,  value :   1, index : 40,r1: 40,r2: 40 },
{position : {x : -128, y : -192, z :    0 }, alx : D, color : Y,  value :   9, index : 41,r1: 34,r2: 41 },
{position : {x :  128, y : -192, z : -128 }, alx : D, color : Y,  value :   6, index : 42,r1: 15,r2: 51 },
{position : {x :    0, y : -192, z : -128 }, alx : D, color : Y,  value :   8, index : 43,r1: 52,r2: 43 },
{position : {x : -128, y : -192, z : -128 }, alx : D, color : G,  value :   4, index : 44,r1: 35,r2: 53 },
//45                                                                                       
{position : {x :  128, y :  128, z : -192 }, alx : B, color : Y,  value :   5, index : 45,r1:  9,r2: 26 },
{position : {x :    0, y :  128, z : -192 }, alx : B, color : Y,  value :   9, index : 46,r1: 25,r2: 46 },
{position : {x : -128, y :  128, z : -192 }, alx : B, color : G,  value :   4, index : 47,r1: 24,r2: 29 },
{position : {x :  128, y :    0, z : -192 }, alx : B, color : Y,  value :   3, index : 48,r1: 12,r2: 48 },
{position : {x :    0, y :    0, z : -192 }, alx : B, color : Y,  value :   1, index : 49,r1: 49,r2: 49 },
{position : {x : -128, y :    0, z : -192 }, alx : B, color : Y,  value :   8, index : 50,r1: 32,r2: 50 },
{position : {x :  128, y : -128, z : -192 }, alx : B, color : G,  value :   7, index : 51,r1: 15,r2: 42 },
{position : {x :    0, y : -128, z : -192 }, alx : B, color : Y,  value :   2, index : 52,r1: 43,r2: 52 },
{position : {x : -128, y : -128, z : -192 }, alx : B, color : Y,  value :   6, index : 53,r1: 35,r2: 44 }

];

var SqlCorner = [
  [0 ,18,27],
  [2 ,11,20],
  [6 ,33,38],
  [9 ,26,45],
  [24,29,47],
  [8 ,17,36],
  [15,42,51],
  [35,44,53]
]

var SqlEdge = [
  [1 ,19],
  [3 ,30],
  [5 ,14],
  [7 ,37],
  [10,23],
  [12,48],
  [16,39],
  [21,28],
  [25,46],
  [32,50],
  [34,41],
  [43,52]
];


var SqlAxis = [4,13,22,31,40,49];

var SqlFacesList = [];





