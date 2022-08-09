//Up,Down,Left,Right,Fore,Back
var U = +1,D = -1,L = +4,R = -4,F = +16,B = -16;


function getCube(a,b,c){
  
  var evd = 0; 
  
  if(b === undefined && c === undefined){
    console.log('b , c undefined');
    
    if(typeof(a) == 'string'){
      try{
        evd = eval(a.toUpperCase());
      } catch(err) {
        console.error(err);
        evd = 0;
      }      
      
    } else if(typeof(a) == 'number'){
      evd = a;
    } else {
      console.error("Unknow Types Consist");
      evd = 0;
    }
  
  }else if(c === undefined){
    console.log('c undefined');
  
    if(a == b){
      console.warn('Use Same ');
      evd = 0;
    } else if(typeof(a) == 'string' && typeof(b) == 'string'){
      try{
        evd = eval(a.toUpperCase()) + eval(b.toUpperCase());
      } catch(err) {
        console.error(err);
        evd = 0;
      }      
      
    } else if(typeof(a) == 'number' && typeof(b) == 'number'){
      evd = a + b;
    } else {
      console.error("Unknow Types Consist");
      evd = 0;
    }
  
  } else {    
    
    if(a == b || a == c || b == c){
      console.warn('Use Same ');
      evd = 0;
    } else if(typeof(a) == 'string' 
           && typeof(b) == 'string'
           && typeof(c) == 'string'){
      try{
        evd = eval(a.toUpperCase()) 
            + eval(b.toUpperCase())
            + eval(c.toUpperCase());
      }catch(err){
        console.error(err);
        evd = 0;
      }      
    } else if(typeof(a) == 'number'
           && typeof(a) == 'number'
           && typeof(a) == 'number' ){
      evd = a + b + c;
    } else {
      console.error("Unknow Types Consist");
      evd = 0;
    }
    
  }
  
  return evd;  

}
