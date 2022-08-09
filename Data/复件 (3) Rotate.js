
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
/*  
 *  |      B     |     F     |     U     |     U     |      U     |     U     |    
 *  |     210    |    678    |    036    |    852    |     678    |    210    |    
 *  |    0   2   |   8   6   |   2   0   |   2   0   |    2   0   |   2   0   |    
 *  |   L1 U 1R  |  L7 D 7R  |  B5 L 3F  |  F5 R 3B  |   L5 F 3R  |  R5 B 3L  |    
 *  |    2   0   |   6   8   |   8   6   |   8   6   |    8   6   |   8   6   |    
 *  |     012    |    876    |    630    |    258    |     012    |    876    |    
 *  |      F     |     B     |     D     |     D     |      D     |     D     |  
 */           

var SqlRt = {};


/*
 *  @param vct U D L R F B
 *  @param wis S or N 
 */ 
SqlRt.viewRt = function (vct,wis){
  
  SqlRt.addGroup(vct);

  SqlRt.rotateGroup(vct,wis);
  
  SqlRt.setFacesPQ();
  
  SqlRt.freeGroup();
      
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
   S:{
    v:'Y',
    c: -1
   },
   N:{
    v:'Y',
    c:  1 
   }
 },
 D:{
   S:{
    v:'Y',
    c:  1 
   },
   N:{
    v:'Y',
    c: -1 
   }
 },
 L:{
   S:{
    v:'X',
    c:  1 
   },
   N:{
    v:'X',
    c: -1 
   }
 },
 R:{
   S:{
    v:'X',
    c: -1 
   },
   N:{
    v:'X',
    c:  1 
   }
 },
 F:{
   S:{
    v:'Z',
    c: -1 
   },
   N:{
    v:'Z',
    c:  1 
   }
 },
 B:{
   S:{
    v:'Z',
    c: -1 
   },
   N:{
    v:'Z',
    c:  1 
   }
 }      
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
  
  renderer.clear();
  renderer.render( scene, camera );
}

SqlRt.freeGroup = function (){  
  var i;
  for(i = 0 ; i < 21 ; i ++){
   scene.add( group.children.pop() );  
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
   
   if(wis == S){
     SqlRt.abcd([[vct,0],[vct,2],[vct,8],[vct,6]]);
     SqlRt.abcd([[vct,1],[vct,5],[vct,7],[vct,3]]);     
   }else if(wis == N){
     SqlRt.abcd([[vct,6],[vct,8],[vct,2],[vct,0]]);
     SqlRt.abcd([[vct,3],[vct,7],[vct,5],[vct,1]]);   
   }
/*  
 *  |      B     |   
 *  |     210    |   
 *  |    0   2   |   
 *  |   L1 U 1R  |   
 *  |    2   0   |   
 *  |     012    |   
 *  |      F     | 
 */           
   if(vct == U){
     if(wis == S){
       SqlRt.abcd([[L,0],[B,0],[R,0],[F,0]]);
       SqlRt.abcd([[L,1],[B,1],[R,1],[F,1]]);
       SqlRt.abcd([[L,2],[B,2],[R,2],[F,2]]);
     }else if(wis == N){
       SqlRt.abcd([[F,0],[R,0],[B,0],[L,0]]);
       SqlRt.abcd([[F,1],[R,1],[B,1],[L,1]]);
       SqlRt.abcd([[F,2],[R,2],[B,2],[L,2]]);
     }
     SqlRt.setAlx(B,0,1,2);
     SqlRt.setAlx(L,0,1,2);
     SqlRt.setAlx(F,0,1,2);
     SqlRt.setAlx(R,0,1,2);
     
/*  
 *  |     F     |
 *  |    678    |
 *  |   8   6   |
 *  |  L7 D 7R  |
 *  |   6   8   |
 *  |    876    |
 *  |     B     |
 */  
   }else if(vct == D){
     if(wis == S){
       SqlRt.abcd([[L,8],[F,8],[R,8],[B,8]]);
       SqlRt.abcd([[L,7],[F,7],[R,7],[B,7]]);
       SqlRt.abcd([[L,6],[F,6],[R,6],[B,6]]);
     }else if(wis == N){
       SqlRt.abcd([[B,8],[R,8],[F,8],[L,8]]);
       SqlRt.abcd([[B,7],[R,7],[F,7],[L,7]]);
       SqlRt.abcd([[B,6],[R,6],[F,6],[L,6]]);
     }
     SqlRt.setAlx(B,6,7,8);
     SqlRt.setAlx(L,6,7,8);
     SqlRt.setAlx(F,6,7,8);
     SqlRt.setAlx(R,6,7,8);
     
/*  
 *   |     U     | 
 *   |    036    | 
 *   |   2   0   | 
 *   |  B5 L 3F  | 
 *   |   8   6   | 
 *   |    630    | 
 *   |     D     |
 */  
   }else if(vct == L){
     if(wis == S){
       SqlRt.abcd([[B,2],[U,6],[F,6],[D,6]]);
       SqlRt.abcd([[B,5],[U,3],[F,3],[D,3]]);
       SqlRt.abcd([[B,8],[U,0],[F,0],[D,0]]);
     }else if(wis == N){
       SqlRt.abcd([[D,6],[F,6],[U,6],[B,2]]);
       SqlRt.abcd([[D,3],[F,3],[U,3],[B,5]]);
       SqlRt.abcd([[D,0],[F,0],[U,0],[B,8]]);     
     }
     SqlRt.setAlx(B,2,5,8);
     SqlRt.setAlx(U,0,3,6);
     SqlRt.setAlx(F,0,3,6);
     SqlRt.setAlx(D,0,3,6);
          
/*  
 *  |     U     |
 *  |    852    |
 *  |   2   0   |
 *  |  F5 R 3B  |
 *  |   8   6   |
 *  |    258    |
 *  |     D     |
 */      
   }else if(vct == R){
     if(wis == S){
       SqlRt.abcd([[F,2],[U,2],[B,6],[D,2]]);
       SqlRt.abcd([[F,5],[U,5],[B,3],[D,5]]);
       SqlRt.abcd([[F,8],[U,8],[B,0],[D,8]]);
     }else if(wis == N){
       SqlRt.abcd([[D,2],[B,6],[U,2],[F,2]]);
       SqlRt.abcd([[D,5],[B,3],[U,5],[F,5]]);
       SqlRt.abcd([[D,8],[B,0],[U,8],[F,8]]);     
     }
     SqlRt.setAlx(B,0,3,6);
     SqlRt.setAlx(U,2,5,8);
     SqlRt.setAlx(F,2,5,8);
     SqlRt.setAlx(D,2,5,8);
     
/*  
 *  |     U     | 
 *  |    678    | 
 *  |   2   0   | 
 *  |  L5 F 3R  | 
 *  |   8   6   | 
 *  |    012    | 
 *  |     D     | 
 */  
   }else if(vct == F){
    if(wis == S){
       SqlRt.abcd([[L,2],[U,8],[R,6],[D,0]]);
       SqlRt.abcd([[L,5],[U,7],[R,3],[D,1]]);
       SqlRt.abcd([[L,8],[U,6],[R,0],[D,2]]);
     }else if(wis == N){
       SqlRt.abcd([[D,0],[R,6],[U,8],[L,2]]);
       SqlRt.abcd([[D,1],[R,3],[U,7],[L,5]]);
       SqlRt.abcd([[D,2],[R,0],[U,6],[L,8]]);     
     }
     SqlRt.setAlx(L,2,5,8);
     SqlRt.setAlx(U,6,7,8);
     SqlRt.setAlx(R,0,3,6);
     SqlRt.setAlx(D,0,1,2);
     
/*  
 *   |     U     | 
 *   |    210    | 
 *   |   2   0   | 
 *   |  R5 B 3L  | 
 *   |   8   6   | 
 *   |    876    | 
 *   |     D     |\n               
 */  
   }else if(vct == B){
     if(wis == S){
       SqlRt.abcd([[R,2],[U,0],[L,6],[D,8]]);
       SqlRt.abcd([[R,5],[U,1],[L,3],[D,7]]);
       SqlRt.abcd([[R,8],[U,2],[L,0],[D,6]]);
     }else if(wis == N){
       SqlRt.abcd([[D,8],[L,6],[U,0],[R,2]]);
       SqlRt.abcd([[D,7],[L,3],[U,1],[R,5]]);
       SqlRt.abcd([[D,6],[L,0],[U,2],[R,8]]);     
     }
     SqlRt.setAlx(L,0,3,6);
     SqlRt.setAlx(U,0,1,2);
     SqlRt.setAlx(R,2,5,8);
     SqlRt.setAlx(D,6,7,8);
     
   }
   
};  


SqlRt.Rt = function (vct,wis){ 
  SqlRt.viewRt(vct,wis); 
  SqlRt.dataRt(vct,wis);
  SqlMonitor.mMtr();
}; 