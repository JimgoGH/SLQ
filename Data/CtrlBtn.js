
var SqlCrtlCont = [0,0];

var SqlCrtlStack = [[0,0],[0,0]];

var SqlCB = {};

SqlCB.addBtnEvent = function (){
  SqlDrawBtn.S.addEventListener('click',function(){SqlCB.WIS('S')},false);
  SqlDrawBtn.N.addEventListener('click',function(){SqlCB.WIS('N')},false);
  SqlDrawBtn.S.addEventListener('touchstart',function(){SqlCB.WIS('S')},false);  
  SqlDrawBtn.N.addEventListener('touchstart',function(){SqlCB.WIS('N')},false);
  
  SqlDrawBtn.U.addEventListener('click',function(){SqlCB.VCT('U')},false);
  SqlDrawBtn.D.addEventListener('click',function(){SqlCB.VCT('D')},false);
  SqlDrawBtn.L.addEventListener('click',function(){SqlCB.VCT('L')},false);
  SqlDrawBtn.R.addEventListener('click',function(){SqlCB.VCT('R')},false);
  SqlDrawBtn.F.addEventListener('click',function(){SqlCB.VCT('F')},false);
  SqlDrawBtn.B.addEventListener('click',function(){SqlCB.VCT('B')},false);
  
  SqlDrawBtn.U.addEventListener('touchstart',function(){SqlCB.VCT('U')},false);
  SqlDrawBtn.D.addEventListener('touchstart',function(){SqlCB.VCT('D')},false);
  SqlDrawBtn.L.addEventListener('touchstart',function(){SqlCB.VCT('L')},false);
  SqlDrawBtn.R.addEventListener('touchstart',function(){SqlCB.VCT('R')},false);
  SqlDrawBtn.F.addEventListener('touchstart',function(){SqlCB.VCT('F')},false);
  SqlDrawBtn.B.addEventListener('touchstart',function(){SqlCB.VCT('B')},false);
}

SqlCB.WIS = function (wis) {
  if(SqlCrtlCont[1] == 0){
     SqlCrtlStack[0][1] = SqlSFW[wis];
     SqlCrtlCont[1] = 1;
  } else {
     SqlCrtlStack[1][1] = SqlSFW[wis];
     SqlCrtlCont[1] = 0;
  }
  console.log(JSON.stringify(SqlCrtlStack));
}

SqlCB.VCT = function (vct) {
  if(SqlCrtlCont[0] == 0){
     SqlCrtlStack[0][0] = SqlSFV[vct];
     SqlCrtlCont[0] = 1;
  } else {
     SqlCrtlStack[1][0] = SqlSFV[vct];
     SqlCrtlCont[0] = 0;
  }
  console.log(JSON.stringify(SqlCrtlStack));
}
