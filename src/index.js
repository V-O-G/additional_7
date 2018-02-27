module.exports = function solveSudoku(matrix) {
  var solution;

function solveSudokuMore (matrix){
if(solution){return 0}
//alert(count+JSON.stringify(matrix));
var emptyCells = [];
    cell1 = [];
    cell2 = [];
var missingInRows = [];
var missingInColumns = [];
var missingInBoxes = [];
var inCommonForEmptySpace;
var columns = [];
var columnArr = [];
var boxes = [];
var EmptyCellsCandidates = [];
function missing(arr){
    var arrMiss = [];
    for(let k=1;k<10;k++){
        if(arr.includes(k)){continue}
        else{arrMiss.push(k)}
    }
    if(arrMiss.length===0){arrMiss.push[0]}     //добавила
    return arrMiss;
}
/*******************************Find missing in rows*****************************/
for(let i=0;i<9;i++){
    missingInRows.push(missing(matrix[i]));
}
/******************************Find columns*************************************/
for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        columnArr.push(matrix[j][i]);
    }
    columns.push(columnArr);
    columnArr = [];
}
/*******************************Find missing in columns************************/
for(let i=0;i<9;i++){
    missingInColumns.push(missing(columns[i]));
}
/******************************Find boxes*************************************/
var boxesArr = [];/*************** box 0 */
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        boxesArr.push(matrix[i][j]);
    }
}
boxes.push(boxesArr);
boxesArr = [];/*************** box 1 */
for(let i=0;i<3;i++){
    for(let j=3;j<6;j++){
        boxesArr.push(matrix[i][j]);
    }
}
boxes.push(boxesArr);
boxesArr = [];/*************** box 2 */
for(let i=0;i<3;i++){
    for(let j=6;j<9;j++){
        boxesArr.push(matrix[i][j]);
    }
}
boxes.push(boxesArr);
boxesArr = [];/*************** box 3 */
for(let i=3;i<6;i++){
    for(let j=0;j<3;j++){
        boxesArr.push(matrix[i][j]);
    }
}
boxes.push(boxesArr);
boxesArr = [];/*************** box 4 */
for(let i=3;i<6;i++){
    for(let j=3;j<6;j++){
        boxesArr.push(matrix[i][j]);
    }
}
boxes.push(boxesArr);
boxesArr = [];/*************** box 5 */
for(let i=3;i<6;i++){
    for(let j=6;j<9;j++){
        boxesArr.push(matrix[i][j]);
    }
}
boxes.push(boxesArr);
boxesArr = [];/*************** box 6 */
for(let i=6;i<9;i++){
    for(let j=0;j<3;j++){
        boxesArr.push(matrix[i][j]);
    }
}
boxes.push(boxesArr);
boxesArr = [];/*************** box 7 */
for(let i=6;i<9;i++){
    for(let j=3;j<6;j++){
        boxesArr.push(matrix[i][j]);
    }
}
boxes.push(boxesArr);
boxesArr = [];/*************** box 8*/
for(let i=6;i<9;i++){
    for(let j=6;j<9;j++){
        boxesArr.push(matrix[i][j]);
    }
}
boxes.push(boxesArr);
for(let i=0;i<9;i++){
    missingInBoxes.push(missing(boxes[i]));
}
/**************************find empty cells **************/
function findEmptyCells(){
for(let i=0;i<9;i++){
    for(let j=0;j<9;j++){
        if(matrix[i][j]===0){
            cell1.push(i);
            cell2.push(j);
            emptyCells.push([cell1,cell2]);
        }
        cell1 = [];
        cell2 = [];
    }
}
}
findEmptyCells();
if(emptyCells.length===0){
    if(!solution){
        solution = JSON.stringify(matrix);
    }
}
//alert(count+emptyCells.length);

/******************************************************/
function getBoxFromPosition(position){
if (position[0]<=2){
  if(position[1]<=2){
      return 0;
  }
  if(position[1]>=3&&position[1]<=5){
      return 1;
  }
  if(position[1]>=6&&position[1]<=8){
      return 2;
  }
}
if (position[0]>=3&&position[0]<=5){
  if(position[1]<=2){
      return 3;
  }
  if(position[1]>=3&&position[1]<=5){
      return 4;
  }
  if(position[1]>=6&&position[1]<=8){
      return 5;
  }
}
if (position[0]>=6&&position[0]<=8){
  if(position[1]<=2){
      return 6;
  }
  if(position[1]>=3&&position[1]<=5){
      return 7;
  }
    if(position[1]>=6&&position[1]<=8){
        return 8;
    }
    }
}
function checkList(arr1){
    var checkListArr = [];
    checkListArr.push(missingInRows[arr1[0]]); // push from rows
    checkListArr.push(missingInColumns[arr1[1]]); // push from columns
    checkListArr.push(missingInBoxes[getBoxFromPosition(arr1)]); // push from boxes
    function inCommon(arr2){
        var commonValues = [];
        for(i=1;i<10;i++){
            if(arr2[0].includes(i)&&arr2[1].includes(i)&&arr2[2].includes(i)){
                commonValues.push(i);
            }
        }
        inCommonForEmptySpace = commonValues;
    }
    inCommon(checkListArr);
}
function getEmptyCellsCandidates(){
    EmptyCellsCandidates = [];
    for(let n=0;n<emptyCells.length;n++){
        let a = emptyCells[n][0];
        let b = emptyCells[n][1];
        checkList([a,b]);
        EmptyCellsCandidates.push(inCommonForEmptySpace);
        inCommonForEmptySpace=[];
    }
}
getEmptyCellsCandidates();
function checkEmptyCellsCandidates(){
    //findEmptyCells();
    //if(emptyCells.length===1){return matrix}
    for(let i=0;i<EmptyCellsCandidates.length;i++){
        if (EmptyCellsCandidates[i].length===0){
            return false;
        }
    }
    return true;
}
//findEmptyCells();
//alert(emptyCells.length);
loop:
for(let i=0;i<emptyCells.length;i++){
    for(let k=0;k<EmptyCellsCandidates[i].length;){
        //alert(count+JSON.stringify(matrix));
        let a = emptyCells[i][0];
        let b = emptyCells[i][1];
        findEmptyCells();
        getEmptyCellsCandidates();
        if(checkEmptyCellsCandidates()){
            matrix[a][b]=EmptyCellsCandidates[i][k];
            solveSudokuMore(matrix);
        }
        matrix[a][b]=0;
        k++;
    }
    break;
}
//return matrix;
//alert(JSON.stringify(emptyCells));
//alert(JSON.stringify(EmptyCellsCandidates));
//checkList([0,3])

//alert(JSON.stringify(emptyCells[0][0]));
//alert(JSON.stringify(matrix));
}
solveSudokuMore(matrix);

return JSON.parse(solution);
}
