var container, camera, controls, scene, renderer; 

var btnContainer;

var group ;


function init() {

  
  var width = window.innerWidth || 2;
  var height = window.innerHeight || 2;
  
  container = document.createElement( 'div' );
  document.body.appendChild( container );
  
  camera = new THREE.PerspectiveCamera( 70, width / height, 1, 1000 );
  camera.position.y = 150;
  camera.position.z = 1000;
  
  controls = new THREE.TrackballControls( camera );
  
  scene = new THREE.Scene();  
  
    //Renderer
  renderer = new THREE.CanvasRenderer();
  renderer.setClearColor( 0xfcfcfc );
	renderer.setSize( width, height  );

  container.appendChild( renderer.domElement );
  
  drawST();
  
  drawBtn(); 
  
}


//Do again and again!!

function animate() {

	requestAnimationFrame( animate );

	render();
//	stats.update();

}
  
  
  
function render() {
  controls.update();
  renderer.clear();
  renderer.render( scene, camera );

}


//Draw SomeThing
function drawST(){
   
   for(var i = 0 ; i < SqlFacesData.length;i++){
      SqlFacesList[i] = new SqlFaces(SqlFacesData[i]).build();
      scene.add(SqlFacesList[i]);      
   }                             
   group = new THREE.Group();
   scene.add(group);
}

//Draw Buttons
function  drawBtn(){
  SqlBtnStc.drawAllBtns();
  SqlCB.addBtnEvent();
  btnContainer = document.createElement( 'div' );
  document.body.appendChild( btnContainer );
  
  for(var k in SqlDrawBtn){
     btnContainer.appendChild(SqlDrawBtn[k]);     
  }
};