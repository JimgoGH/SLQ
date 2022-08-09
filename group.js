
var container, stats; 
var camera, controls, scene, renderer; 
var sphere, plane;  
var start = Date.now();

var targetRotation = 0;
var targetRotationOnMouseDown = 0;

var targetRotationX = 0;
var targetRotationOnMouseDownX = 0;
var targetRotationY = 0;
var targetRotationOnMouseDownY = 0;

var mouseX = 0;
var mouseXOnMouseDown = 0;

var mouseY = 0;
var mouseYOnMouseDown = 0;

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

var cub1,cub2,cub3,cub4;

var qx = new THREE.Quaternion(0.7071, 0 , 0 , 0.7071);
var qy = new THREE.Quaternion(0, 0.7071 , 0 , 0.7071);
var qz = new THREE.Quaternion(0, 0 , 0.7071 , 0.7071);

var p1;

var group = new THREE.Group();

function init() {

  
  var width = window.innerWidth || 2;
  var height = window.innerHeight || 2;
  
  container = document.createElement( 'div' );
  document.body.appendChild( container );
  
  camera = new THREE.PerspectiveCamera( 70, width / height, 1, 1000 );
  camera.position.y = 150;
  camera.position.z = 500;
  
  scene = new THREE.Scene();

  // Cube

/*	var geometry = new THREE.BoxGeometry( 50, 50, 50 );

  geometry.faces[ 0 ].color.setHex( 0xffffff );
  geometry.faces[ 1 ].color.setHex( 0xffffff );
  geometry.faces[ 2 ].color.setHex( 0xff00ff );
  geometry.faces[ 3 ].color.setHex( 0xff00ff );
  geometry.faces[ 4 ].color.setHex( 0x00ff00 );
  geometry.faces[ 5 ].color.setHex( 0x00ff00 );
  geometry.faces[ 6 ].color.setHex( 0xffff00 );
  geometry.faces[ 7 ].color.setHex( 0xffff00 );
  geometry.faces[ 8 ].color.setHex( 0x00ffff );
  geometry.faces[ 9 ].color.setHex( 0x00ffff );
  geometry.faces[ 10].color.setHex( 0xff0000 );
  geometry.faces[ 11].color.setHex( 0xff0000 );
  */





  var material = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );
/*
	cube = new THREE.Mesh( geometry, material );
	cube.position.y = 150;
	scene.add( cube );
*/

  var geo1 = new THREE.BoxGeometry( 50, 50, 50 );

  geo1.faces[ 0 ].color.setHex( 0xff0000 );
  geo1.faces[ 1 ].color.setHex( 0xff0000 );
  geo1.faces[ 2 ].color.setHex( 0xff00ff );
  geo1.faces[ 3 ].color.setHex( 0xff00ff );
  geo1.faces[ 4 ].color.setHex( 0xff0000 );
  geo1.faces[ 5 ].color.setHex( 0xff0000 );
  geo1.faces[ 6 ].color.setHex( 0xff00ff );
  geo1.faces[ 7 ].color.setHex( 0xff00ff );
  geo1.faces[ 8 ].color.setHex( 0xff0000 );
  geo1.faces[ 9 ].color.setHex( 0xff0000 );
  geo1.faces[ 10].color.setHex( 0xff00ff );
  geo1.faces[ 11].color.setHex( 0xff00ff );
  
  cub1 = new THREE.Mesh( geo1, material );
  cub1.position.x = 0;
  cub1.position.y = 0;
  cub1.position.z = 0;
        
  scene.add( cub1 );
  
  var geo2 = new THREE.BoxGeometry( 50, 50, 50 );

  geo2.faces[ 0 ].color.setHex( 0xffff00 );
  geo2.faces[ 1 ].color.setHex( 0xffff00 );
  geo2.faces[ 2 ].color.setHex( 0x0000ff );
  geo2.faces[ 3 ].color.setHex( 0x0000ff );
  geo2.faces[ 4 ].color.setHex( 0xffff00 );
  geo2.faces[ 5 ].color.setHex( 0xffff00 );
  geo2.faces[ 6 ].color.setHex( 0x0000ff );
  geo2.faces[ 7 ].color.setHex( 0x0000ff );
  geo2.faces[ 8 ].color.setHex( 0xffff00 );
  geo2.faces[ 9 ].color.setHex( 0xffff00 );
  geo2.faces[ 10].color.setHex( 0x0000ff );
  geo2.faces[ 11].color.setHex( 0x0000ff );
     
  cub2 = new THREE.Mesh( geo2, material );
  cub2.position.x = 150;
  cub2.position.y = 0;
  cub2.position.z = 0;
        
  scene.add( cub2 );
  
  var geo3 = new THREE.BoxGeometry( 50, 50, 50 );

  geo3.faces[ 0 ].color.setHex( 0xffffff );
  geo3.faces[ 1 ].color.setHex( 0xffffff );
  geo3.faces[ 2 ].color.setHex( 0x000000 );
  geo3.faces[ 3 ].color.setHex( 0x000000 );
  geo3.faces[ 4 ].color.setHex( 0xffffff );
  geo3.faces[ 5 ].color.setHex( 0xffffff );
  geo3.faces[ 6 ].color.setHex( 0x000000 );
  geo3.faces[ 7 ].color.setHex( 0x000000 );
  geo3.faces[ 8 ].color.setHex( 0xffffff );
  geo3.faces[ 9 ].color.setHex( 0xffffff );
  geo3.faces[ 10].color.setHex( 0x000000 );
  geo3.faces[ 11].color.setHex( 0x000000 );
     
  cub3 = new THREE.Mesh( geo3, material );
  cub3.position.x = 0;
  cub3.position.y = 150;
  cub3.position.z = 0;
        
  scene.add( cub3 );

  var geo4 = new THREE.BoxGeometry( 50, 50, 50 );

  geo4.faces[ 0 ].color.setHex( 0x00ffff );
  geo4.faces[ 1 ].color.setHex( 0x00ffff );
  geo4.faces[ 2 ].color.setHex( 0x00ff00 );
  geo4.faces[ 3 ].color.setHex( 0x00ff00 );
  geo4.faces[ 4 ].color.setHex( 0x00ffff );
  geo4.faces[ 5 ].color.setHex( 0x00ffff );
  geo4.faces[ 6 ].color.setHex( 0x00ff00 );
  geo4.faces[ 7 ].color.setHex( 0x00ff00 );
  geo4.faces[ 8 ].color.setHex( 0x00ffff );
  geo4.faces[ 9 ].color.setHex( 0x00ffff );
  geo4.faces[ 10].color.setHex( 0x00ff00 );
  geo4.faces[ 11].color.setHex( 0x00ff00 );
     
  cub4 = new THREE.Mesh( geo4, material );
  cub4.position.x = 0;
  cub4.position.y = 0;
  cub4.position.z = 150;
        
  scene.add( cub4 );
  
  scene.add( group );     
  
  p1 = new THREE.Mesh(  new THREE.PlaneGeometry(64,64), material );
  p1.position.x = 64;
  p1.position.y = 64;
  p1.position.z = 64;
  
  scene.add(p1);
  //Locate Position First!!

  
  //for(var l = 0 ; l < 9 ; l++){
  //  group.add(cubeList[l]);        
  //}

  
  
  //Controler!!  
  controls = new THREE.TrackballControls( camera );
  
  
  
  //Renderer
  renderer = new THREE.CanvasRenderer();
  renderer.setClearColor( 0xf0f0f0 );
	renderer.setSize( width, height  );

  container.appendChild( renderer.domElement );



  
  document.addEventListener( 'keydown', onDocumentKeyDown, false );
  
	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
//	effect.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseDown( event ) {

	event.preventDefault();

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
	document.addEventListener( 'mouseout', onDocumentMouseOut, false );

	mouseXOnMouseDown = event.clientX - windowHalfX;
	targetRotationOnMouseDown = targetRotation;
  
  mouseYOnMouseDown = event.clientY - windowHalfY;
  targetRotationOnMouseDownX = targetRotationX;
  targetRotationOnMouseDownY = targetRotationY;

}

function onDocumentMouseMove( event ) {

	mouseX = event.clientX - windowHalfX;

	targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
  
  mouseY = event.clientY - windowHalfY;

	targetRotationX = targetRotationOnMouseDownX + ( mouseX - mouseXOnMouseDown ) * 0.02;
  targetRotationY = targetRotationOnMouseDownY + ( mouseY - mouseYOnMouseDown ) * 0.02;

}

function onDocumentMouseUp( event ) {

	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentMouseOut( event ) {

	document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
	document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
	document.removeEventListener( 'mouseout', onDocumentMouseOut, false );

}

function onDocumentTouchStart( event ) {

	if ( event.touches.length === 1 ) {

		event.preventDefault();

		mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
		targetRotationOnMouseDown = targetRotation;

	}

}

function onDocumentTouchMove( event ) {

	if ( event.touches.length === 1 ) {

		event.preventDefault();

		mouseX = event.touches[ 0 ].pageX - windowHalfX;
		targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

	}

}

//Do again and again!!

function animate() {

	requestAnimationFrame( animate );

	render();
//	stats.update();

}
  
  
  
function render() {

	var timer = Date.now() - start;

//	sphere.position.y = Math.abs( Math.sin( timer * 0.002 ) ) * 150;
//	sphere.rotation.x = timer * 0.0003;
//	sphere.rotation.z = timer * 0.0002;

  //group.rotation.x += ( targetRotationX - group.rotation.x ) * 0.05;
	controls.update();
  renderer.render( scene, camera );
//	effect.render( scene, camera );

}


//~~~~~~~~~~~~~~Mine are below~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function onDocumentKeyDown(event){

  if(event.ctrlKey == 1){
   // console.debug(" controls.enbled = false ");
    controls.enabled = false;
    
    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    document.addEventListener( 'touchstart', onDocumentTouchStart, false );
    document.addEventListener( 'touchmove', onDocumentTouchMove, false );
        
  }
  document.addEventListener( 'keyup', onDocumentKeyUp, false );
}

function onDocumentKeyUp(event){
  
  if(event.ctrlKey == 0){
   // console.debug(" controls.enbled = true ");
    controls.enabled = true;
    
    document.removeEventListener( 'mousedown', onDocumentMouseDown, false );
    document.removeEventListener( 'touchstart', onDocumentTouchStart, false );
    document.removeEventListener( 'touchmove', onDocumentTouchMove, false );
    
  }   
  
  
  
  document.removeEventListener( 'keyup', onDocumentKeyUp, false );

}