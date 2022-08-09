var SqlMonitor = {};

SqlMonitor.mList = ["U","D","L","R","F","B"];

SqlMonitor.mMtr = function (){
   var i,j,k,tb;
   for(i = 0 ; i < 6;i++){
    tb = document.getElementById("tb"+SqlMonitor.mList[i]);
   
    tb.rows[0].cells[0].innerHTML = SqlCLMatrix[i][0];
    tb.rows[0].cells[1].innerHTML = SqlCLMatrix[i][1];
    tb.rows[0].cells[2].innerHTML = SqlCLMatrix[i][2];
    
    tb.rows[1].cells[0].innerHTML = SqlCLMatrix[i][3];
    tb.rows[1].cells[1].innerHTML = SqlCLMatrix[i][4];
    tb.rows[1].cells[2].innerHTML = SqlCLMatrix[i][5];
    
    tb.rows[2].cells[0].innerHTML = SqlCLMatrix[i][6];
    tb.rows[2].cells[1].innerHTML = SqlCLMatrix[i][7];
    tb.rows[2].cells[2].innerHTML = SqlCLMatrix[i][8];
   
   }
}
