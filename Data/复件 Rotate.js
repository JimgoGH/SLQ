
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
 *  @param vct U D L R F B
 *  @param wis S or N 
 */ 
SqlRt.viewRt = function (vct,wis){

  SqlRt.freeGroup();

  for(var f in SqlFacesData){
   
   if( SqlFacesData[f].alx == vct){ 
     console.log(SqlFacesData[f].index);
     group.add(SqlFacesList[SqlFacesData[f].index]);
     group.add(SqlFacesList[SqlFacesData[f].r1   ]);
     group.add(SqlFacesList[SqlFacesData[f].r2   ]);
   }
    
  }
  
  if( vct == U ){
    if ( wis == S ){
      group.rotateY(-hPi);
    } else if ( wis == N){
      group.rotateY( hPi);  
    }  
  } else if( vct == D ){
    if ( wis == S ){
      group.rotateY( hPi);
    } else if ( wis == N){
      group.rotateY(-hPi);  
    }  
  } else if( vct == L ){
    if ( wis == S ){
      group.rotateX( hPi);
    } else if ( wis == N){
      group.rotateX(-hPi);  
    }  
  } else if( vct == R ){
    if ( wis == S ){
      group.rotateX(-hPi);
    } else if ( wis == N){
      group.rotateX( hPi);  
    }  
  } else if( vct == F ){
    if ( wis == S ){
      group.rotateZ(-hPi);
    } else if ( wis == N){
      group.rotateZ( hPi);  
    }  
  } else if( vct == B ){
    if ( wis == S ){
      group.rotateZ( hPi);
    } else if ( wis == N){
      group.rotateZ(-hPi);  
    }  
  } 

  
  
  return;  
}; 

SqlRt.freeGroup = function (){
  if(group.children.length > 0){
    for(var i = 0 ; i < 21 ; i ++){
     scene.add( group.children.pop() );  
    }
  }    
}


SqlRt.abcd = function (a,b,c,d){

 var e = a; 
 
 a = d;
 b = a;
 c = b;
 d = e;
};


SqlRt.dataRt = function (vct,wis){
   var ars = SqlCLMatrix[SqlCal.getMtx(vct)];
   if(wis == S){
     SqlRt.abcd(ars[0],ars[2],ars[8],ars[6]);
     SqlRt.abcd(ars[1],ars[5],ars[3],ars[7]);     
   }else if(wis == N){
     SqlRt.abcd(ars[6],ars[8],ars[0],ars[2]);
     SqlRt.abcd(ars[7],ars[3],ars[5],ars[1]);   
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
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(L)][0],
                  SqlCLMatrix[SqlCal.getMtx(B)][0],
                  SqlCLMatrix[SqlCal.getMtx(R)][0],
                  SqlCLMatrix[SqlCal.getMtx(F)][0]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(L)][1],
                  SqlCLMatrix[SqlCal.getMtx(B)][1],
                  SqlCLMatrix[SqlCal.getMtx(R)][1],
                  SqlCLMatrix[SqlCal.getMtx(F)][1]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(L)][2],
                  SqlCLMatrix[SqlCal.getMtx(B)][2],
                  SqlCLMatrix[SqlCal.getMtx(R)][2],
                  SqlCLMatrix[SqlCal.getMtx(F)][2]);
     }else if(wis == N){
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(F)][0],
                  SqlCLMatrix[SqlCal.getMtx(R)][0],
                  SqlCLMatrix[SqlCal.getMtx(B)][0],
                  SqlCLMatrix[SqlCal.getMtx(L)][0]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(F)][1],
                  SqlCLMatrix[SqlCal.getMtx(R)][1],
                  SqlCLMatrix[SqlCal.getMtx(B)][1],
                  SqlCLMatrix[SqlCal.getMtx(L)][1]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(F)][2],
                  SqlCLMatrix[SqlCal.getMtx(R)][2],
                  SqlCLMatrix[SqlCal.getMtx(B)][2],
                  SqlCLMatrix[SqlCal.getMtx(L)][2]);
     }
     SqlCLMatrix[SqlCal.getMtx(B)][0].alx = B;
     SqlCLMatrix[SqlCal.getMtx(B)][1].alx = B;
     SqlCLMatrix[SqlCal.getMtx(B)][2].alx = B;
     SqlCLMatrix[SqlCal.getMtx(L)][0].alx = L;
     SqlCLMatrix[SqlCal.getMtx(L)][1].alx = L;
     SqlCLMatrix[SqlCal.getMtx(L)][2].alx = L;
     SqlCLMatrix[SqlCal.getMtx(F)][0].alx = F;
     SqlCLMatrix[SqlCal.getMtx(F)][1].alx = F;
     SqlCLMatrix[SqlCal.getMtx(F)][2].alx = F;
     SqlCLMatrix[SqlCal.getMtx(R)][0].alx = R;
     SqlCLMatrix[SqlCal.getMtx(R)][1].alx = R;
     SqlCLMatrix[SqlCal.getMtx(R)][2].alx = R;
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
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(L)][8],
                  SqlCLMatrix[SqlCal.getMtx(F)][8],
                  SqlCLMatrix[SqlCal.getMtx(R)][8],
                  SqlCLMatrix[SqlCal.getMtx(B)][8]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(L)][7],
                  SqlCLMatrix[SqlCal.getMtx(F)][7],
                  SqlCLMatrix[SqlCal.getMtx(R)][7],
                  SqlCLMatrix[SqlCal.getMtx(B)][7]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(L)][6],
                  SqlCLMatrix[SqlCal.getMtx(F)][6],
                  SqlCLMatrix[SqlCal.getMtx(R)][6],
                  SqlCLMatrix[SqlCal.getMtx(B)][6]);
     }else if(wis == N){
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(B)][8],
                  SqlCLMatrix[SqlCal.getMtx(R)][8],
                  SqlCLMatrix[SqlCal.getMtx(F)][8],
                  SqlCLMatrix[SqlCal.getMtx(L)][8]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(B)][7],
                  SqlCLMatrix[SqlCal.getMtx(R)][7],
                  SqlCLMatrix[SqlCal.getMtx(F)][7],
                  SqlCLMatrix[SqlCal.getMtx(L)][7]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(B)][6],
                  SqlCLMatrix[SqlCal.getMtx(R)][6],
                  SqlCLMatrix[SqlCal.getMtx(F)][6],
                  SqlCLMatrix[SqlCal.getMtx(L)][6]);
     }
     SqlCLMatrix[SqlCal.getMtx(B)][6].alx = B;
     SqlCLMatrix[SqlCal.getMtx(B)][7].alx = B;
     SqlCLMatrix[SqlCal.getMtx(B)][8].alx = B;
     SqlCLMatrix[SqlCal.getMtx(L)][6].alx = L;
     SqlCLMatrix[SqlCal.getMtx(L)][7].alx = L;
     SqlCLMatrix[SqlCal.getMtx(L)][8].alx = L;
     SqlCLMatrix[SqlCal.getMtx(F)][6].alx = F;
     SqlCLMatrix[SqlCal.getMtx(F)][7].alx = F;
     SqlCLMatrix[SqlCal.getMtx(F)][8].alx = F;
     SqlCLMatrix[SqlCal.getMtx(R)][6].alx = R;
     SqlCLMatrix[SqlCal.getMtx(R)][7].alx = R;
     SqlCLMatrix[SqlCal.getMtx(R)][8].alx = R;
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
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(B)][2],
                  SqlCLMatrix[SqlCal.getMtx(U)][6],
                  SqlCLMatrix[SqlCal.getMtx(F)][6],
                  SqlCLMatrix[SqlCal.getMtx(D)][6]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(B)][5],
                  SqlCLMatrix[SqlCal.getMtx(U)][3],
                  SqlCLMatrix[SqlCal.getMtx(F)][3],
                  SqlCLMatrix[SqlCal.getMtx(D)][3]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(B)][8],
                  SqlCLMatrix[SqlCal.getMtx(U)][0],
                  SqlCLMatrix[SqlCal.getMtx(F)][0],
                  SqlCLMatrix[SqlCal.getMtx(D)][0]);
     }else if(wis == N){
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(D)][6],
                  SqlCLMatrix[SqlCal.getMtx(F)][6],
                  SqlCLMatrix[SqlCal.getMtx(U)][6],
                  SqlCLMatrix[SqlCal.getMtx(B)][2]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(D)][3],
                  SqlCLMatrix[SqlCal.getMtx(F)][3],
                  SqlCLMatrix[SqlCal.getMtx(U)][3],
                  SqlCLMatrix[SqlCal.getMtx(B)][5]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(D)][0],
                  SqlCLMatrix[SqlCal.getMtx(F)][0],
                  SqlCLMatrix[SqlCal.getMtx(U)][0],
                  SqlCLMatrix[SqlCal.getMtx(B)][8]);     
     }
     SqlCLMatrix[SqlCal.getMtx(B)][2].alx = B;
     SqlCLMatrix[SqlCal.getMtx(B)][5].alx = B;
     SqlCLMatrix[SqlCal.getMtx(B)][8].alx = B;
     SqlCLMatrix[SqlCal.getMtx(U)][0].alx = U;
     SqlCLMatrix[SqlCal.getMtx(U)][3].alx = U;
     SqlCLMatrix[SqlCal.getMtx(U)][6].alx = U;
     SqlCLMatrix[SqlCal.getMtx(F)][0].alx = F;
     SqlCLMatrix[SqlCal.getMtx(F)][3].alx = F;
     SqlCLMatrix[SqlCal.getMtx(F)][6].alx = F;
     SqlCLMatrix[SqlCal.getMtx(D)][0].alx = D;
     SqlCLMatrix[SqlCal.getMtx(D)][3].alx = D;
     SqlCLMatrix[SqlCal.getMtx(D)][6].alx = D;
     
     
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
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(F)][2],
                  SqlCLMatrix[SqlCal.getMtx(U)][2],
                  SqlCLMatrix[SqlCal.getMtx(B)][6],
                  SqlCLMatrix[SqlCal.getMtx(D)][2]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(F)][5],
                  SqlCLMatrix[SqlCal.getMtx(U)][5],
                  SqlCLMatrix[SqlCal.getMtx(B)][3],
                  SqlCLMatrix[SqlCal.getMtx(D)][5]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(F)][8],
                  SqlCLMatrix[SqlCal.getMtx(U)][8],
                  SqlCLMatrix[SqlCal.getMtx(B)][0],
                  SqlCLMatrix[SqlCal.getMtx(D)][8]);
     }else if(wis == N){
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(D)][2],
                  SqlCLMatrix[SqlCal.getMtx(B)][6],
                  SqlCLMatrix[SqlCal.getMtx(U)][2],
                  SqlCLMatrix[SqlCal.getMtx(F)][2]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(D)][5],
                  SqlCLMatrix[SqlCal.getMtx(B)][3],
                  SqlCLMatrix[SqlCal.getMtx(U)][5],
                  SqlCLMatrix[SqlCal.getMtx(F)][5]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(D)][8],
                  SqlCLMatrix[SqlCal.getMtx(B)][0],
                  SqlCLMatrix[SqlCal.getMtx(U)][8],
                  SqlCLMatrix[SqlCal.getMtx(F)][8]);     
     }
     SqlCLMatrix[SqlCal.getMtx(B)][0].alx = B;
     SqlCLMatrix[SqlCal.getMtx(B)][3].alx = B;
     SqlCLMatrix[SqlCal.getMtx(B)][6].alx = B;
     SqlCLMatrix[SqlCal.getMtx(U)][2].alx = U;
     SqlCLMatrix[SqlCal.getMtx(U)][5].alx = U;
     SqlCLMatrix[SqlCal.getMtx(U)][8].alx = U;
     SqlCLMatrix[SqlCal.getMtx(F)][2].alx = F;
     SqlCLMatrix[SqlCal.getMtx(F)][5].alx = F;
     SqlCLMatrix[SqlCal.getMtx(F)][8].alx = F;
     SqlCLMatrix[SqlCal.getMtx(D)][2].alx = D;
     SqlCLMatrix[SqlCal.getMtx(D)][5].alx = D;
     SqlCLMatrix[SqlCal.getMtx(D)][8].alx = D;
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
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(L)][2],
                  SqlCLMatrix[SqlCal.getMtx(U)][8],
                  SqlCLMatrix[SqlCal.getMtx(R)][6],
                  SqlCLMatrix[SqlCal.getMtx(D)][0]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(L)][5],
                  SqlCLMatrix[SqlCal.getMtx(U)][7],
                  SqlCLMatrix[SqlCal.getMtx(R)][3],
                  SqlCLMatrix[SqlCal.getMtx(D)][1]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(L)][8],
                  SqlCLMatrix[SqlCal.getMtx(U)][6],
                  SqlCLMatrix[SqlCal.getMtx(R)][0],
                  SqlCLMatrix[SqlCal.getMtx(D)][2]);
     }else if(wis == N){
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(D)][0],
                  SqlCLMatrix[SqlCal.getMtx(R)][6],
                  SqlCLMatrix[SqlCal.getMtx(U)][2],
                  SqlCLMatrix[SqlCal.getMtx(L)][8]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(D)][1],
                  SqlCLMatrix[SqlCal.getMtx(R)][3],
                  SqlCLMatrix[SqlCal.getMtx(U)][7],
                  SqlCLMatrix[SqlCal.getMtx(L)][5]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(D)][2],
                  SqlCLMatrix[SqlCal.getMtx(R)][0],
                  SqlCLMatrix[SqlCal.getMtx(U)][6],
                  SqlCLMatrix[SqlCal.getMtx(L)][8]);     
     }
     SqlCLMatrix[SqlCal.getMtx(L)][2].alx = L;
     SqlCLMatrix[SqlCal.getMtx(L)][5].alx = L;
     SqlCLMatrix[SqlCal.getMtx(L)][8].alx = L;
     SqlCLMatrix[SqlCal.getMtx(U)][6].alx = U;
     SqlCLMatrix[SqlCal.getMtx(U)][7].alx = U;
     SqlCLMatrix[SqlCal.getMtx(U)][8].alx = U;
     SqlCLMatrix[SqlCal.getMtx(R)][0].alx = R;
     SqlCLMatrix[SqlCal.getMtx(R)][3].alx = R;
     SqlCLMatrix[SqlCal.getMtx(R)][6].alx = R;
     SqlCLMatrix[SqlCal.getMtx(D)][0].alx = D;
     SqlCLMatrix[SqlCal.getMtx(D)][1].alx = D;
     SqlCLMatrix[SqlCal.getMtx(D)][2].alx = D;
/*  
 *   |     U     | 
 *   |    210    | 
 *   |   2   0   | 
 *   |  R5 B 3L  | 
 *   |   8   6   | 
 *   |    876    | 
 *   |     D     |
 */  
   }else if(vct == B){
     if(wis == S){
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(R)][2],
                  SqlCLMatrix[SqlCal.getMtx(U)][0],
                  SqlCLMatrix[SqlCal.getMtx(L)][6],
                  SqlCLMatrix[SqlCal.getMtx(D)][8]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(R)][5],
                  SqlCLMatrix[SqlCal.getMtx(U)][1],
                  SqlCLMatrix[SqlCal.getMtx(L)][3],
                  SqlCLMatrix[SqlCal.getMtx(D)][7]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(R)][8],
                  SqlCLMatrix[SqlCal.getMtx(U)][2],
                  SqlCLMatrix[SqlCal.getMtx(L)][0],
                  SqlCLMatrix[SqlCal.getMtx(D)][6]);
     }else if(wis == N){
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(D)][8],
                  SqlCLMatrix[SqlCal.getMtx(L)][6],
                  SqlCLMatrix[SqlCal.getMtx(U)][0],
                  SqlCLMatrix[SqlCal.getMtx(R)][2]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(D)][7],
                  SqlCLMatrix[SqlCal.getMtx(L)][3],
                  SqlCLMatrix[SqlCal.getMtx(U)][1],
                  SqlCLMatrix[SqlCal.getMtx(R)][5]);
       SqlRt.abcd(SqlCLMatrix[SqlCal.getMtx(D)][6],
                  SqlCLMatrix[SqlCal.getMtx(L)][0],
                  SqlCLMatrix[SqlCal.getMtx(U)][2],
                  SqlCLMatrix[SqlCal.getMtx(R)][8]);     
     }
     SqlCLMatrix[SqlCal.getMtx(L)][0].alx = L;
     SqlCLMatrix[SqlCal.getMtx(L)][3].alx = L;
     SqlCLMatrix[SqlCal.getMtx(L)][6].alx = L;
     SqlCLMatrix[SqlCal.getMtx(U)][0].alx = U;
     SqlCLMatrix[SqlCal.getMtx(U)][1].alx = U;
     SqlCLMatrix[SqlCal.getMtx(U)][2].alx = U;
     SqlCLMatrix[SqlCal.getMtx(R)][2].alx = R;
     SqlCLMatrix[SqlCal.getMtx(R)][5].alx = R;
     SqlCLMatrix[SqlCal.getMtx(R)][8].alx = R;
     SqlCLMatrix[SqlCal.getMtx(D)][6].alx = D;
     SqlCLMatrix[SqlCal.getMtx(D)][7].alx = D;
     SqlCLMatrix[SqlCal.getMtx(D)][8].alx = D;
   }
   
};  


SqlRt.Rt = function (vct,wis){ 
  SqlRt.viewRt(vct,wis); 
  //SqlRt.dataRt(vct,wis);
}; 