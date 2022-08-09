// JavaScript Document


//Up,Down,Fore,Back,Left,Right
var U = 1,D = 2,L = 4,R = 8,F = 16,B = 32;

/* The location for view.
 * The Vct can be U + L + F = 7,
 *  which means a horn;
 * Also can be U + L = 3,
 *  which means a edge;
 */  
function loc(Vct){
   this.vct = Vct;
}

/* one Single Piece Face
 * the Vector just can be UDLRFB
 * point is the value number.
 * color is corlor.
 *
 */   
function Face(Color,Point,Vct){
   this.color = Color;
   this.point = Point;
   this.vct   = Vct;
}

/**
 * a Block can be one Axis, 
 *  one Edge or one Corner 
 */ 
 /*     
function Block(){
   this.roll = function (vct,face){
   
   }
}
*/ 

/*-------------------------------
       ******************
      *                **
     *   f2 is U      * *
    *                *  *
   *                *   *
  ****************** f3 *
  *                * is *
  *                * R  *
  *                *   *
  *  f1 is F       *  *
  *                * *
  *                **
  ******************
    
*--------------------------------  
*/
  
/* A Corner has three color Faces.
 * At the initial,
 *   f1 is F
 *   f2 is U 
 *   f3 is R   
 */  

function Corner(Vct,F1,F2,F3){
   this.vct = Vct;
   this.f1 = F1;
   this.f2 = F2;
   this.f3 = F3;
   /**
    * @param ax is the roll axis
    * @param cw is S or N.   
    */       
   this.roll = function(ax,cw){
     if(cw == S){
       this.f1.vct = GSC(ax,this.f1.vct);
       this.f2.vct = GSC(ax,this.f2.vct);
       this.f3.vct = GSC(ax,this.f3.vct);             
     }else if(cw == N){
       this.f1.vct = GNC(ax,this.f1.vct);
       this.f2.vct = GNC(ax,this.f2.vct);
       this.f3.vct = GNC(ax,this.f3.vct);     
     }
      /**
        * For example:
        *  after  FUR.roll(F,S) ,
        * this.vct should be FDR
        * 
        * the calculate is                
        *  GSC(F,F) = F
        *  GSC(F,U) = R
        *  GSC(F,R) = D                              
        * FDR = DRF = F + D + R
        * 
        * Actually,
        *  this.vct allways equals
        *    (this.f1.vct + this.f2.vct + this.f3.vct)                         
        */
     this.vct = this.f1.vct + this.f2.vct + this.f3.vct;   
   }
     
}

/* A horn has two color Faces.
 * At the initial,
 *   f1 is F
 *   f2 is U  
 */ 
function Edge(Vct,F1,F2){
   this.vct = Vct;
   this.f1 = F1;
   this.f2 = F2;
   
   /**
    * @param ax is the roll axis
    * @param cw is S or N.   
    */       
   this.roll = function(ax,cw){
     if(cw == S){
       this.f1.vct = GSC(ax,this.f1.vct);
       this.f2.vct = GSC(ax,this.f2.vct);             
     }else if(cw == N){
       this.f1.vct = GNC(ax,this.f1.vct);
       this.f2.vct = GNC(ax,this.f2.vct);      
     }
      /**
        * Alnolygy by Corner                       
        */
     this.vct = this.f1.vct + this.f2.vct;   
   }
}

/* A Axis has one color Faces.
 * All Faces roll around with one Axis
 * At the initial,
 *   f1 is F 
 */ 
function Axis(Vct,f1){
   this.vct = Vct;
   this.f1 = F1;
   
   /* No metter what kind of action,
    * Axis's Face can not Change!!
    */   
   
   this.roll = new function(ax,cw){}   
}

/*
Axis.prototype   = new Block();
Corner.prototype = new Block();
Edge.prototype   = new Block();
*/


/**
 * S for Clockwise , N for CounterClockwise
 */ 
var S = 1,N = -1;
/*
|  B   |  U   |  D   |  F   |  U   |  U   
|L U R |L F R |L B R |L D R |B L F |F R B
|  F   |  D   |  U   |  B   |  D   |  D   
*/

/* get next clockWise
 * vct is base Vector
 */ 
function GSC(vct,face){
  var nxt;
  
  switch(vct){
    case U:
      switch(face){
        case L:nxt = B;break;
        case B:nxt = R;break;
        case R:nxt = F;break;
        case F:nxt = L;break;
        case U:nxt = U;break;
        case D:nxt = D;break; 
      }
      break;
    case F:
      switch(face){
        case U:nxt = R;break;
        case R:nxt = D;break;
        case D:nxt = L;break;
        case L:nxt = U;break;
        case F:nxt = F;break;
        case B:nxt = B;break; 
      }
      break;
    case B:
      switch(face){
        case D:nxt = R;break;
        case R:nxt = U;break;
        case U:nxt = L;break;
        case L:nxt = D;break;
        case F:nxt = F;break;
        case B:nxt = B;break; 
      }
      break;
    case D:
      switch(face){
        case F:nxt = L;break;
        case R:nxt = F;break;
        case B:nxt = R;break;
        case L:nxt = B;break;
        case U:nxt = U;break;
        case D:nxt = D;break; 
      }
      break;
    case L:
      switch(face){
        case U:nxt = F;break;
        case F:nxt = D;break;
        case D:nxt = B;break;
        case B:nxt = U;break;
        case L:nxt = L;break;
        case R:nxt = R;break; 
      }
      break;
    case R:
      switch(face){
        case U:nxt = B;break;
        case B:nxt = D;break;
        case D:nxt = F;break;
        case F:nxt = U;break;
        case L:nxt = L;break;
        case R:nxt = R;break; 
      }
      break;
  
  }

 return nxt;
}

/* get next counterClockWise
 * vct is base Vector
 */ 

function GNC(vct,face){
  var nxt;
  
  switch(vct){
    case U:
      switch(face){
        case B:nxt = L;break;
        case R:nxt = B;break;
        case F:nxt = R;break;
        case L:nxt = F;break;
        case U:nxt = U;break;
        case D:nxt = D;break; 
      }
      break;
    case F:
      switch(face){
        case R:nxt = U;break;
        case D:nxt = R;break;
        case L:nxt = D;break;
        case U:nxt = L;break;
        case F:nxt = F;break;
        case B:nxt = B;break; 
      }
      break;
    case B:
      switch(face){
        case R:nxt = D;break;
        case U:nxt = R;break;
        case L:nxt = U;break;
        case D:nxt = L;break;
        case F:nxt = F;break;
        case B:nxt = B;break; 
      }
      break;
    case D:
      switch(face){
        case L:nxt = F;break;
        case F:nxt = R;break;
        case R:nxt = B;break;
        case B:nxt = L;break;
        case U:nxt = U;break;
        case D:nxt = D;break; 
      }
      break;
    case L:
      switch(face){
        case F:nxt = U;break;
        case D:nxt = F;break;
        case B:nxt = D;break;
        case U:nxt = B;break;
        case L:nxt = L;break;
        case R:nxt = R;break; 
      }
      break;
    case R:
      switch(face){
        case B:nxt = U;break;
        case D:nxt = B;break;
        case F:nxt = D;break;
        case U:nxt = F;break;
        case L:nxt = L;break;
        case R:nxt = R;break; 
      }
      break;
  
  }

 return nxt;
}

/**
 * a qub has Six Side.
 * one Side has 
 *  one  Axis,
 *  four Edges and
 *  four Corner.  
 *
 *  @param vct 
 *  @param wis S or N 
 */  
function rollSide(vct,wis){

}


/*
 * For the middle row or column roll;
 * This action equls the orher two row or columnn
 *   roll to the counter wise.  
 */
function midRoll(base,toward){





}  