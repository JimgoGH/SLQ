
var SqlFDefault = {
  position : {
   x : 0,
   y : 0,
   z : 0
  },
  alx : 0,
  color : 0,
  value : 0
}



function SqlFaces(fd){
  
  if(fd === undefined){
    console.warn("Illegale parameter");
    this.position = SqlFDefault.position;
    this.alx  = SqlFDefault.alx;
    this.color = SqlFDefault.color;
    this.value = SqlFDefault.value;
  }
  
  this.position = fd.position;
  this.alx = fd.alx;
  this.color = fd.color;
  this.value = fd.value;

}

SqlFaces.prototype.build = function(){
  var canvas = new Cnvs(this.value,SqlDrawFace.selectColor(this.color)).Draw();       

  var texture = new THREE.Texture(canvas);
  var materia = new THREE.MeshBasicMaterial({map:texture});  
  
  var mesh = new THREE.Mesh(  new THREE.PlaneBufferGeometry(128,128), materia );
  
  SqlDrawFace.turnFace(mesh,this.alx);
  SqlDrawFace.roundQ(mesh);
  
  mesh.position.x = this.position.x;
  mesh.position.y = this.position.y;
  mesh.position.z = this.position.z; 
    
  return mesh;
}

var SqlDrawFace = {};

SqlDrawFace.turnFace = function (mesh,alx){

  switch(alx){
    case U : mesh.rotateX(-Math.PI / 2);mesh.rotateZ(-Math.PI / 2);break;
    case D : mesh.rotateX( Math.PI / 2);mesh.rotateZ( Math.PI / 2);break;
    case L : mesh.rotateY(-Math.PI / 2);mesh.rotateZ(-Math.PI / 2);break;
    case R : mesh.rotateY( Math.PI / 2);mesh.rotateZ( Math.PI / 2);break;
    case B : mesh.rotateY( Math.PI    );mesh.rotateZ( Math.PI    );break;
    case F :                            break;
    default: break;                                                           
  }                                    
}

SqlDrawFace.roundQ = function (mesh){
  q = mesh.quaternion.clone();
  mesh.quaternion.x = SqlCal.roundQ(q.x);
  mesh.quaternion.y = SqlCal.roundQ(q.y);
  mesh.quaternion.z = SqlCal.roundQ(q.z);    
  mesh.quaternion.w = SqlCal.roundQ(q.w);
}

SqlDrawFace.selectColor = function (color){
  
  var clr =  CnvsStatic.Wht;
  var cn = parseInt(color);

  switch( cn){
    case H: clr = CnvsStatic.Red;break;
    case Y: clr = CnvsStatic.Ylw;break;
    case G: clr = CnvsStatic.Grn;break;
    default: clr = CnvsStatic.Wht;
  }
  
  return clr;
}
