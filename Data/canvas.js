var CnvsStatic = new Object;;

CnvsStatic.Ylw = '#F4D821';
CnvsStatic.Grn = '#4CB848';
CnvsStatic.Red = '#E7463D';
CnvsStatic.Blu = '#3780C2';
CnvsStatic.Wht = '#E9F2EE';
CnvsStatic.Blk = '#676767';

CnvsStatic.Len = 128;
CnvsStatic.Font = 'bold 80px Arial';
CnvsStatic.SingleXOffset = 40;
CnvsStatic.DoubleXOffset = 18;
CnvsStatic.YOffset = 96;

 



function Cnvs(txt,bclr,len){
    
  this.len = len === undefined ? CnvsStatic.Len : len;    
  this.bclr = bclr;
  this.txt = txt;
}

Cnvs.prototype.Draw = function(){
  var dw = document.createElement("canvas");
  dw.height = this.len;
  dw.width = this.len;
  var cns = null;
  if(dw.getContext === undefined){
    console.error("no getContext");
  } else {
    cns = dw.getContext('2d');
    
    cns.fillStyle = this.bclr;
    cns.fillRect(0,0,this.len,this.len);    
    cns.fillStyle = CnvsStatic.Wht;
    cns.font = CnvsStatic.Font;
    
    var offsetX = 0;
    
    switch (this.txt.toString().length){
      case 0:
      case 3: break;
      case 1: offsetX = CnvsStatic.SingleXOffset;break;
      case 2: offsetX = CnvsStatic.DoubleXOffset;break;
      default : break;      
    }
        
    cns.fillText(this.txt, offsetX, CnvsStatic.YOffset);        
  }
  
  return dw;
} 



 