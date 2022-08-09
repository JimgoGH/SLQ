var container, camera, controls, scene, renderer; 
var face1;



function init() {

  
  var width = window.innerWidth || 2;
  var height = window.innerHeight || 2;
  
  container = document.createElement( 'div' );
  document.body.appendChild( container );
  
  camera = new THREE.PerspectiveCamera( 70, width / height, 1, 1000 );
  camera.position.y = 150;
  camera.position.z = 500;
  
  scene = new THREE.Scene();  
  
    //Renderer
  renderer = new THREE.CanvasRenderer();
  renderer.setClearColor( 0xf0f0f0 );
	renderer.setSize( width, height  );

  container.appendChild( renderer.domElement );
  
  drawST(); 
  
}


//Do again and again!!

function animate() {

	requestAnimationFrame( animate );

	render();
//	stats.update();

}
  
  
  
function render() {
	//controls.update();
  renderer.render( scene, camera );

}


//Draw SomeThing
function drawST(){
  face1 = new THREE.Face3(128,128,128);       

  var texture = new THREE.Texture(new Cnvs("3",CnvsStatic.Red).Draw());
  var material = new THREE.MeshBasicMaterial({map:texture});
  texture.needsUpdate = false;
  
  var mesh = new THREE.Mesh( face1,material );
  scene.add( mesh );
}