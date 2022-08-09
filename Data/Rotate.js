
/*
|  B   |  U   |  D   |  F   |  U   |  U   
|L U R |L F R |L B R |L D R |B L F |F R B
|  F   |  D   |  U   |  B   |  D   |  D   

 *      012         
 *      3U5
 *      678         
 *      ---         
 *  012|012|012|012 
 *  3L5|3F5|3R5|3B5       
 *  678|678|678|678  
 *      ---          
 *      012
 *      3D5          
 *      678
 *
 */     

var SqlRt = {};

/*  
 *    <--
 *   |   A
 *   |   |
 *   V   |
 *    -->
 *
 *  |      B     |     F     |     U     |     U     |      U     |     U     |    
 *  |     210    |    678    |    036    |    852    |     678    |    210    |    
 *  |    0   2   |   8   6   |   2   0   |   2   0   |    2   0   |   2   0   |    
 *  |   L1 U 1R  |  L7 D 7R  |  B5 L 3F  |  F5 R 3B  |   L5 F 3R  |  R5 B 3L  |    
 *  |    2   0   |   6   8   |   8   6   |   8   6   |    8   6   |   8   6   |    
 *  |     012    |    876    |    630    |    258    |     012    |    876    |    
 *  |      F     |     B     |     D     |     D     |      D     |     D     |  
 */           

SqlRt.sideArray = {
 U:[
  [L,0,1,2],
  [B,0,1,2],
  [R,0,1,2],
  [F,0,1,2]
 ],
 D:[
  [L,8,7,6],
  [F,8,7,6],
  [R,8,7,6],
  [B,8,7,6]
 ],
 L:[
  [B,2,5,8],
  [U,6,3,0],
  [F,6,3,0],
  [D,6,3,0]
 ],
 R:[
  [F,2,5,8],
  [U,2,5,8],
  [B,6,3,0],
  [D,2,5,8]
 ],
 F:[
  [L,2,5,8],
  [U,8,7,6],
  [R,6,3,0],
  [D,0,1,2]
 ],
 B:[
  [R,2,5,8],
  [U,0,1,2],
  [L,6,3,0],
  [D,8,7,6]
 ]
}




/*
 *  @param vct U D L R F B
 *  @param wis S or N 
 */ 
SqlRt.viewRt = function (vct,wis){   
   var vr = SqlRt.sideArray[SqlVFS(vct)];
   var fn;
   if(wis == S){ 
     fn = SqlRt.rfs;
   } else if(wis == N){
     fn = SqlRt.rfn;
   }  
   
   var i;
   for(i = 0;i < 9;i++){   
      SqlRt.rotateFace(SqlRt.getMesh(vct,i),vct,wis);
   }
   
   fn(
      SqlRt.getMesh(vct,0),
      SqlRt.getMesh(vct,2),
      SqlRt.getMesh(vct,8),
      SqlRt.getMesh(vct,6)
   );
   fn(
      SqlRt.getMesh(vct,1),
      SqlRt.getMesh(vct,5),
      SqlRt.getMesh(vct,7),
      SqlRt.getMesh(vct,3)
   );
   
   fn(
      SqlRt.getMesh(vr[0][0],vr[0][1]),
      SqlRt.getMesh(vr[1][0],vr[1][1]),
      SqlRt.getMesh(vr[2][0],vr[2][1]),
      SqlRt.getMesh(vr[3][0],vr[3][1])
   );                                
   fn(
      SqlRt.getMesh(vr[0][0],vr[0][2]),
      SqlRt.getMesh(vr[1][0],vr[1][2]),
      SqlRt.getMesh(vr[2][0],vr[2][2]),
      SqlRt.getMesh(vr[3][0],vr[3][2])
   );                                     
   fn(
      SqlRt.getMesh(vr[0][0],vr[0][3]),
      SqlRt.getMesh(vr[1][0],vr[1][3]),
      SqlRt.getMesh(vr[2][0],vr[2][3]),
      SqlRt.getMesh(vr[3][0],vr[3][3])
   );               
                    
};                  
                    
SqlRt.addGroup = function (vct){
  for(var f in SqlFacesData){
   
   if( SqlFacesData[f].alx == vct){ 
     console.log(SqlFacesData[f].index);
     console.log(SqlFacesData[f].r1);
     console.log(SqlFacesData[f].r2);
     group.add(SqlFacesList[SqlFacesData[f].index]);
     group.add(SqlFacesList[SqlFacesData[f].r1   ]);
     group.add(SqlFacesList[SqlFacesData[f].r2   ]);
   }
    
  }   
}

SqlRt.rtg = {
 U:{
   S:{    v:'Y',    c: -1    },
   N:{    v:'Y',    c:  1    }
 },
 D:{
   S:{    v:'Y',    c:  1    },
   N:{    v:'Y',    c: -1    }
 },
 L:{
   S:{    v:'X',    c:  1    },
   N:{    v:'X',    c: -1    }
 },
 R:{
   S:{    v:'X',    c: -1    },
   N:{    v:'X',    c:  1    }
 },
 F:{
   S:{    v:'Z',    c: -1    },
   N:{    v:'Z',    c:  1    }
 },
 B:{
   S:{    v:'Z',    c: -1    },
   N:{    v:'Z',    c:  1    }
 }      
}
SqlRt.getMesh = function (vct,idx){
 return SqlFacesList[SqlCLMatrix[SqlCal.getMtx(vct)][idx]];
} 


SqlRt.rotateGroup = function (vct,wis){
  var vc = SqlRt.rtg[SqlVFS(vct)][SqlWFS(wis)];
  //console.log(vc);
  switch(vc.v){
    case 'X' : group.rotateX( vc.c * hPi);break;
    case 'Y' : group.rotateY( vc.c * hPi);break;
    case 'Z' : group.rotateZ( vc.c * hPi);break;
    default : break;  
  }
    
}

SqlRt.rfn = function (a,b,c,d){
  var p = d.position.clone();
  var q = d.quaternion.clone();
  
  d.position.copy(c.position.clone());
  c.position.copy(b.position.clone());
  b.position.copy(a.position.clone());
  a.position.copy(p);
   
  d.quaternion.copy(c.quaternion.clone());
  c.quaternion.copy(b.quaternion.clone());
  b.quaternion.copy(a.quaternion.clone());
  a.quaternion.copy(q);

}

SqlRt.rfs = function (a,b,c,d){
  var p = a.position.clone();
  var q = a.quaternion.clone();
  
  a.position.copy(b.position.clone());
  b.position.copy(c.position.clone());
  c.position.copy(d.position.clone());
  d.position.copy(p);
   
  a.quaternion.copy(b.quaternion.clone());
  b.quaternion.copy(c.quaternion.clone());
  c.quaternion.copy(d.quaternion.clone());
  d.quaternion.copy(q);
}

SqlRt.rotateFace = function (mesh,vct,wis){
  /*
  var vc = SqlRt.rtg[SqlVFS(vct)][SqlWFS(wis)];
  console.log(vc);  
  switch(vc.v){
    case 'X' : mesh.rotateX( vc.c * hPi);break;
    case 'Y' : mesh.rotateY( vc.c * hPi);break;
    case 'Z' : mesh.rotateZ( vc.c * hPi);break;
    default : break;  
  }  
  */
  
  mesh.rotateZ( -1 * wis * hPi);
    
  var q = mesh.quaternion.clone();

  mesh.quaternion.x = SqlCal.roundQ(q.x);
  mesh.quaternion.y = SqlCal.roundQ(q.y);
  mesh.quaternion.z = SqlCal.roundQ(q.z);
  mesh.quaternion.w = SqlCal.roundQ(q.w);
}


SqlRt.setFacesPQ = function (){
  var p,q,i;  
  
  for(i = 0 ; i < 21 ; i ++){
   p = group.children[i].getWorldPosition().clone();
   q = group.children[i].getWorldQuaternion().clone();
   
   if(Math.abs(group.children[i].position.x - p.x) > 0.00001){
     console.log(i,group.children[i].position.x,p.x);
   }
      
   group.children[i].position.x = SqlCal.roundP(p.x);
   group.children[i].position.y = SqlCal.roundP(p.y);
   group.children[i].position.z = SqlCal.roundP(p.z);
   
   group.children[i].quaternion.x = SqlCal.roundQ(q.x);
   group.children[i].quaternion.y = SqlCal.roundQ(q.y);
   group.children[i].quaternion.z = SqlCal.roundQ(q.z);
   group.children[i].quaternion.w = SqlCal.roundQ(q.w);
          
  }
  
}

SqlRt.freeGroup = function (){  
  var i;
  for(i = 0 ; i < 21 ; i ++){
   scene.add( group.children[0] );  
  }      
}


SqlRt.abcd = function (arry){
  
 var e = SqlCLMatrix[SqlCal.getMtx(arry[3][0])][arry[3][1]]; 
 
    SqlCLMatrix[SqlCal.getMtx(arry[3][0])][arry[3][1]]
  = SqlCLMatrix[SqlCal.getMtx(arry[2][0])][arry[2][1]];
  
    SqlCLMatrix[SqlCal.getMtx(arry[2][0])][arry[2][1]]
  = SqlCLMatrix[SqlCal.getMtx(arry[1][0])][arry[1][1]];
  
    SqlCLMatrix[SqlCal.getMtx(arry[1][0])][arry[1][1]]
  = SqlCLMatrix[SqlCal.getMtx(arry[0][0])][arry[0][1]];
  
    SqlCLMatrix[SqlCal.getMtx(arry[0][0])][arry[0][1]]
  = e;

};


SqlRt.dcba = function (arry){
  
 var e = SqlCLMatrix[SqlCal.getMtx(arry[0][0])][arry[0][1]]; 
 

    SqlCLMatrix[SqlCal.getMtx(arry[0][0])][arry[0][1]]
  = SqlCLMatrix[SqlCal.getMtx(arry[1][0])][arry[1][1]];
  
    SqlCLMatrix[SqlCal.getMtx(arry[1][0])][arry[1][1]]
  = SqlCLMatrix[SqlCal.getMtx(arry[2][0])][arry[2][1]];
  
    SqlCLMatrix[SqlCal.getMtx(arry[2][0])][arry[2][1]]
  = SqlCLMatrix[SqlCal.getMtx(arry[3][0])][arry[3][1]];
  
    SqlCLMatrix[SqlCal.getMtx(arry[3][0])][arry[3][1]]
  = e;
  
};

SqlRt.setAlx = function (alx,a,b,c){
  SqlFacesData[SqlCLMatrix[SqlCal.getMtx(alx)][a]].alx = alx;
  SqlFacesData[SqlCLMatrix[SqlCal.getMtx(alx)][b]].alx = alx;
  SqlFacesData[SqlCLMatrix[SqlCal.getMtx(alx)][c]].alx = alx;
}


SqlRt.dataRt = function (vct,wis){
   var vr = SqlRt.sideArray[SqlVFS(vct)];
   var fn;
   if(wis == S){ 
     fn = SqlRt.abcd;
   } else if(wis == N){
     fn = SqlRt.dcba;
   }  
   fn([[vct,0],[vct,2],[vct,8],[vct,6]]);
   fn([[vct,1],[vct,5],[vct,7],[vct,3]]);
   
   fn([
        [vr[0][0],vr[0][1]],
        [vr[1][0],vr[1][1]],
        [vr[2][0],vr[2][1]],
        [vr[3][0],vr[3][1]]
      ]);
   fn([
        [vr[0][0],vr[0][2]],
        [vr[1][0],vr[1][2]],
        [vr[2][0],vr[2][2]],
        [vr[3][0],vr[3][2]]
      ]);
   fn([
        [vr[0][0],vr[0][3]],
        [vr[1][0],vr[1][3]],
        [vr[2][0],vr[2][3]],
        [vr[3][0],vr[3][3]]
      ]);
   
   SqlRt.setAlx(vr[0][0],vr[0][1],vr[0][2],vr[0][3]);
   SqlRt.setAlx(vr[1][0],vr[1][1],vr[1][2],vr[1][3]);
   SqlRt.setAlx(vr[2][0],vr[2][1],vr[2][2],vr[2][3]);
   SqlRt.setAlx(vr[3][0],vr[3][1],vr[3][2],vr[3][3]);
      
};  


SqlRt.Rt = function (vct,wis){ 
  SqlRt.viewRt(vct,wis); 
  SqlRt.dataRt(vct,wis);
  SqlMonitor.mMtr();
}; 