var SlqGame = {};

SlqGame.Rounds = 0;

SlqGame.Sqe = [0,1,2,1,2,0];
SlqGame.Trn = ['H','G','Y'];

SlqGame.Players = {
  'H':"",
  'G':"",
  'Y':"" 
};



SlqGame.setPlayer = function (cStr){
  var i = 0;
  for(var k in SlqGame.Players ){
    if(cStr === k){
      SlqGame.Players[k] = "PL";
    } else if(SlqGame.Players[k] === "" && i === 0) {
      SlqGame.Players[k] = "A1";
      i = 1;
    } else if(SlqGame.Players[k] === "" && i === 1) {
      SlqGame.Players[k] = "A2";
    }
  }
};

SlqGame.oneRound = function (){
  SlqAI.think();
  var i,c,p;
  //var cst = [];
    
  for(i = 0; i < 6; i++){
    //cst.push(SlqGame.Trn[(SlqGame.Sqe[i] + SlqGame.Rounds) % 3]);
    c = i > 3 ? 1 : 0;
    p = SlqGame.Trn[(SlqGame.Sqe[i] + SlqGame.Rounds) % 3];
    SlqGame.PlayerStack[SlqGame.Players[p]][c]; 
          
  };
  
  //console.log(cst.join(','));  
  
  SlqGame.Rounds += 1;
  
  if(SlqGame.Rounds == 6){
    SlqGame.endGame();
  };
};

SlqGame.endGame = function (){
  
  console.log('Game is End.');
  
  SlqGame.Rounds = 0;

  for(var k in SlqGame.Players ){
     SlqGame.Players[k] = "";
  }
};

SlqGame.PlayerStack = {
  'PL' : function () { return SlqAI.StackPL },
  'A1' : function () { return SlqAI.StackA1 },
  'A2' : function () { return SlqAI.StackA2 }
};


var SlqAI = {};

SlqAI.StackA1 = [[0,0],[0,0]];
SlqAI.StackA2 = [[0,0],[0,0]];
SlqAI.StackPL = [[4,1],[1,1]];

SlqAI.think = function (){
  
  var i;
  
  for(i = 0; i < 2;i++){
    SlqAI.StackA1[i][0] = SlqAI.getVct();
    SlqAI.StackA1[i][1] = SlqAI.getWis();
  }
  for(i = 0; i < 2;i++){
    SlqAI.StackA2[i][0] = SlqAI.getVct();
    SlqAI.StackA2[i][1] = SlqAI.getWis();
  }  
};


SlqAI.getVct = function (){
   var vct = 0;
   switch (Math.ceil( Math.random() * 6)){
     case 1 : vct =   1;break;
     case 2 : vct =  -1;break;
     case 3 : vct =   4;break;
     case 4 : vct =  -4;break;
     case 5 : vct =  16;break;
     case 6 : vct = -16;break;
     default: break;   
   }
   return vct;   
};


SlqAI.getWis = function (){
   var wis = 0;
   switch (Math.ceil( Math.random() * 2)){
     case 1 : wis =   1;break;
     case 2 : wis =  -1;break;     
     default: break;   
   }
   return wis;   
}; 