
function calculateGrade(withRetakes)
{

var withRetakes = Boolean(withRetakes);
    
var totalGrade = 0.0;
var grcount = 20;
var coursesCount = 20;
var totalCredits = 0.0;

var allGrades = new Array(20);
var allCredits = new Array(20);

//There must be a better way of doing this...

allGrades[0] = document.GPACalcForm.GR1.value;
allGrades[1] = document.GPACalcForm.GR2.value;
allGrades[2] = document.GPACalcForm.GR3.value;
allGrades[3] = document.GPACalcForm.GR4.value;
allGrades[4] = document.GPACalcForm.GR5.value;
allGrades[5] = document.GPACalcForm.GR6.value;
allGrades[6] = document.GPACalcForm.GR7.value;
allGrades[7] = document.GPACalcForm.GR8.value;
allGrades[8] = document.GPACalcForm.GR9.value;
allGrades[9] = document.GPACalcForm.GR10.value;
allGrades[10] = document.GPACalcForm.GR11.value;
allGrades[11] = document.GPACalcForm.GR12.value;
allGrades[12] = document.GPACalcForm.GR13.value;
allGrades[13] = document.GPACalcForm.GR14.value;
allGrades[14] = document.GPACalcForm.GR15.value;
allGrades[15] = document.GPACalcForm.GR16.value;
allGrades[16] = document.GPACalcForm.GR17.value;
allGrades[17] = document.GPACalcForm.GR18.value;
allGrades[18] = document.GPACalcForm.GR19.value;
allGrades[19] = document.GPACalcForm.GR20.value;

allCredits[0] = document.GPACalcForm.CR1.value;
allCredits[1] = document.GPACalcForm.CR2.value;
allCredits[2] = document.GPACalcForm.CR3.value;
allCredits[3] = document.GPACalcForm.CR4.value;
allCredits[4] = document.GPACalcForm.CR5.value;
allCredits[5] = document.GPACalcForm.CR6.value;
allCredits[6] = document.GPACalcForm.CR7.value;
allCredits[7] = document.GPACalcForm.CR8.value;
allCredits[8] = document.GPACalcForm.CR9.value;
allCredits[9] = document.GPACalcForm.CR10.value;
allCredits[10] = document.GPACalcForm.CR11.value;
allCredits[11] = document.GPACalcForm.CR12.value;
allCredits[12] = document.GPACalcForm.CR13.value;
allCredits[13] = document.GPACalcForm.CR14.value;
allCredits[14] = document.GPACalcForm.CR15.value;
allCredits[15] = document.GPACalcForm.CR16.value;
allCredits[16] = document.GPACalcForm.CR17.value;
allCredits[17] = document.GPACalcForm.CR18.value;
allCredits[18] = document.GPACalcForm.CR19.value;
allCredits[19] = document.GPACalcForm.CR20.value;

for (var x = 0; x < coursesCount; x++)
{
    if (allCredits[x]=="")
    {
        coursesCount = x;
        grCount = x;
        break;
    }
    else
    {
        totalCredits = totalCredits + parseFloat(allCredits[x]);
    }
}

for (var x = 0; x < coursesCount; x++)
{
    var courseGrade = 0;
    if (allGrades[x] < 40 && withRetakes) {
        courseGrade = 40.0;
    }
    else {
        courseGrade = parseFloat(allGrades[x]);
    }
    var courseCredit = parseFloat(allCredits[x]);
    var courseResult = ((courseGrade * courseCredit) / totalCredits);
    totalGrade = totalGrade + courseResult;
    courseGrade = 0.0;
}

document.GPACalcForm.myGrade.value = totalGrade.toFixed(3);

if (totalGrade >= 70) {
    document.GPACalcForm.myDegree.value = "1st";
}
else if (totalGrade >= 60 && totalGrade < 70) {
    document.GPACalcForm.myDegree.value = "2:1";
}
else if (totalGrade >= 50 && totalGrade < 60) {
    document.GPACalcForm.myDegree.value = "2:2";
}
else if (totalGrade >= 40 && totalGrade < 50) {
    document.GPACalcForm.myDegree.value = "3rd";
}
else {
    document.GPACalcForm.myDegree.value = "-";
}

var pWorth = parseInt(document.GPACalcForm.percentageWorth.options[document.GPACalcForm.percentageWorth.selectedIndex].value, 10);
nextPWorth = 100-pWorth;
var markOfYear = parseFloat((totalGrade/100)*pWorth);
var nextMarkOfYear = 0.0;
var totalMark = 0.0;

var DEAFULT_GRADE_VALUE = "-"

var first = DEAFULT_GRADE_VALUE
var twoOne = DEAFULT_GRADE_VALUE
var twoTwo = DEAFULT_GRADE_VALUE
var third = DEAFULT_GRADE_VALUE

//Is there a better way of doing this?

for (var z = 0; z < 100; z = z+0.01)
{
    nextMarkOfYear = ((nextPWorth/100)*z);
    totalMark = markOfYear + nextMarkOfYear;
    if (totalMark >=40 && third === DEAFULT_GRADE_VALUE ) {
        third = z.toFixed(2);
    }
    if (totalMark >=50 && twoTwo === DEAFULT_GRADE_VALUE) {
        twoTwo = z.toFixed(2);
    }
    if (totalMark >=60 && twoOne === DEAFULT_GRADE_VALUE) {
        twoOne = z.toFixed(2);        
    }
    if (totalMark >=70 && first === DEAFULT_GRADE_VALUE) {
        first = z.toFixed(2);
        break;
    }
}

document.GPACalcForm.pass.value = third;
document.GPACalcForm.twoTwo.value = twoTwo;
document.GPACalcForm.twoOne.value = twoOne;
document.GPACalcForm.first.value = first;

return 0;

}

function reset(){
var texts=document.getElementsByTagName('input')
for (var i_tem = 0; i_tem < texts.length; i_tem++)
if (texts[i_tem].type=='text')
texts[i_tem].value=''
}
