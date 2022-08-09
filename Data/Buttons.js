var SqlBtnData = {
 'S' : { v : '\u21BB', c : 'B' },
 'N' : { v : '\u21BA', c : 'B' },
 'U' : { v :      'U', c : 'G' },
 'D' : { v :      'D', c : 'Y' },
 'L' : { v :      'L', c : 'G' },
 'R' : { v :      'R', c : 'H' },
 'F' : { v :      'F', c : 'H' },
 'B' : { v :      'B', c : 'Y' }
};

var SqlBtnStc = {};

SqlBtnStc.BL   = 64;
SqlBtnStc.BF   = 'bold 60px Arial';
SqlBtnStc.BOX  = 10;
SqlBtnStc.BOX2 = 4;
SqlBtnStc.BOY  = 56;

var SqlBtnList = {};

var SqlDrawBtn = {
 'S' : {}, 
 'N' : {}, 
 'U' : {}, 
 'D' : {}, 
 'L' : {}, 
 'R' : {}, 
 'F' : {}, 
 'B' : {}  
};

var SqlBtnColor = {  
  'B':CnvsStatic.Blu,  
  'Y':CnvsStatic.Ylw,     
  'G':CnvsStatic.Grn,
  'H':CnvsStatic.Red,
  'W':CnvsStatic.Wht,
  'X':CnvsStatic.Blk  
};

function SqlBtnCnvs(txt,bclr,len){
  Cnvs.call(this, txt,bclr,len);

}; 

SqlBtnCnvs.prototype = new Cnvs();

SqlBtnCnvs.prototype.Draw = function(){
  var dw = document.createElement("canvas");
  dw.height = SqlBtnStc.BL;
  dw.width  = SqlBtnStc.BL;
  var cns = null;
  if(dw.getContext === undefined){
    console.error("no getContext");
  } else {
    cns = dw.getContext('2d');
    
    cns.fillStyle = this.bclr;
    cns.fillRect(0,0,SqlBtnStc.BL,SqlBtnStc.BL);    
    cns.fillStyle = CnvsStatic.Wht;
    cns.font = SqlBtnStc.BF;
    
    var ox = SqlBtnStc.BOX;
    if(this.txt === '\u21BA' || this.txt === '\u21BB'){
      ox = SqlBtnStc.BOX2;
    }
            
    cns.fillText(this.txt,ox,SqlBtnStc.BOY);        
  }
  
  return dw;
}

SqlBtnStc.drawAllBtns = function (){
  for( var key in SqlBtnData ){
      SqlDrawBtn[key] = new SqlBtnCnvs(SqlBtnData[key].v,
        SqlBtnColor[SqlBtnData[key].c]).Draw();             
  } 
};
 