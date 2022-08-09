//the scorce of Three color 
// Hp : Red; Gp : Green; Yp : Yellow;
var Hp = 0,Gp = 0,Yp = 0;

/*
 * Use for save Data
 * Looks like below
 *
 *      012         
 *      3U5
 *      678         
 *      ---         
 *  012|012|012|012 
 *  3B5|3F5|3R5|3B5       
 *  678|678|678|678  
 *      ---          
 *      012
 *      3D5          
 *      678
 *
 * 0~8 is the Order of Face; 
 */     
var SqlCLMatrix = [
  //U
  [24,25,26,
   21,22,23,
   18,19,20],
  //D       
  [38,37,36,
   41,40,39, 
   44,43,42],
  //L        
  [29,28,27, 
   32,31,30, 
   35,34,33],
  //R         
  [11,10, 9,  
   14,13,12,  
   17,16,15], 
  //F        
  [ 0, 1, 2, 
    3, 4, 5, 
    6, 7, 8],
  //B        
  [45,46,47, 
   48,49,50, 
   51,52,53]
     
];

  

var SqlCal = {};

//0.7071067811865475 = Math.sin(Math.PI / 4);
SqlCal.rq = [0.5,-0.5,0,1,
   0.7071067811865475,-1,-0.7071067811865475];
   
SqlCal.rp = [0,-128,128,-192,192];  
 


SqlCal.getMtx = function (alx){
  var odr = 0;
  switch (alx){
    case U : odr = 0;break;
    case D : odr = 1;break;
    case L : odr = 2;break;
    case R : odr = 3;break;
    case F : odr = 4;break;
    case B : odr = 5;break;
    default: break;  
  }
  return odr;
};
 


 
 /*  H = 0; G = 1; Y = 2;
 *  0 + 0 + 0 = 0;
 *  1 + 1 + 1 = 3;
 *  2 + 2 + 2 = 6;
 *  0 + 1 + 2 = 3;   
 *
 *  0 + 0 + 1 = 1;
 *  0 + 0 + 2 = 2;
 *  1 + 1 + 0 = 2;
 *  1 + 1 + 2 = 4;
 *  2 + 2 + 0 = 4;  
 * 
 *
 */
 SqlCal.calLine = function ( a, b, c){
    var sum = 0;
    if((a.color + b.color + c.color) % 3 === 0){
        sum = a.value + b.value + c.value;
      switch(b.color){
        case H : Hp += sum;break;
        case G : Gp += sum;break;
        case Y : Yp += sum;break;
        default : break;
      }           
    } 
 }
 
 SqlCal.calDia = function ( a, b, c){
    var sum = 1;
    if((a.color + b.color + c.color) % 3 === 0){
        sum = a.value * b.value * c.value;
      switch(b.color){
        case H : Hp += sum;break;
        case G : Gp += sum;break;
        case Y : Yp += sum;break;
        default : break;
      }           
    } 
 }
 
 
 SqlCal.calAll = function (){
    
    var ars;    
    for (var i = 0; i < 6; i++){
      
      ars = SqlCLMatrix[i];
      SqlCal.calLine(SqlFacesData[ars[0]],SqlFacesData[ars[1]],SqlFacesData[ars[2]]);
      SqlCal.calLine(SqlFacesData[ars[3]],SqlFacesData[ars[4]],SqlFacesData[ars[5]]);
      SqlCal.calLine(SqlFacesData[ars[6]],SqlFacesData[ars[7]],SqlFacesData[ars[8]]);
      SqlCal.calLine(SqlFacesData[ars[0]],SqlFacesData[ars[3]],SqlFacesData[ars[6]]);
      SqlCal.calLine(SqlFacesData[ars[1]],SqlFacesData[ars[4]],SqlFacesData[ars[7]]);
      SqlCal.calLine(SqlFacesData[ars[2]],SqlFacesData[ars[5]],SqlFacesData[ars[8]]);
      
      SqlCal.calDia(SqlFacesData[ars[0]],SqlFacesData[ars[4]],SqlFacesData[ars[8]]);
      SqlCal.calDia(SqlFacesData[ars[6]],SqlFacesData[ars[4]],SqlFacesData[ars[2]]);
          
    }     
 }
 
 SqlCal.roundQ = function (x){
      
   var i;
   for(i = 0; i < SqlCal.rq.length; i++){
     if(Math.abs(x - SqlCal.rq[i]) < 0.00001){
       return SqlCal.rq[i];
     }
    
   }
   return x;
 }
 
  SqlCal.roundP = function (x){
      
   var i;
   for(i = 0; i < SqlCal.rp.length; i++){
     if(Math.abs(x - SqlCal.rp[i]) < 0.00001){
       return SqlCal.rp[i];
     }
    
   }
   return x;
 }