var city=prompt("Enter city name");
if(city==="karachi"){
   alert("Welcome to the city of light");
}

var gender=prompt("Enter your gender");
if(gender==="male"){
   alert("Good morning sir");
}
else if(gender==="female"){
    alert("Good morning Ma'am");
}
else{
    alert("Incorrect input")
}

var color=prompt("Enter color");
if(color==="red"){
    alert("Must stop")
}
else if(color==="yellow"){
    alert("ready to move");
}
else if(color==="green"){
    alert("Move now");
}

var fuel=prompt("Enter your fuel")
if(fuel<0.25){
    alert("Please refill the fuel in your car")
}
else(
    alert("You can drive your car in this fuel");
)
var a = 4;
 if (++a === 5){ 
     alert("given condition for variable a is true");
 }
var b = 82;
 if (b++ === 83){ 
     alert("given condition for variable b is true"); 
 }
 var c = 12;
  if (c++ === 13){ 
      alert("condition 1 is true"); 
 }
 if (c === 13){
      alert("condition 2 is true"); 
 }
 if (++c < 14){
      alert("condition 3 is true"); 
 }
 if(c === 14){ 
     alert("condition 4 is true"); 
 }
 var materialCost = 20000;
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
 if (totalCost === laborCost + materialCost){
      alert("The cost equals"); 
 }
 if (true){
      alert("True");  
 }
 if (false){ 
     alert("False"); 
 }
if("car" < "cat"){ 
    alert("car is smaller than cat");
 }

var obtMark1=+prompt("Enter Obtained marks of sub 1");
var obtMark2=+prompt("Enter Obtained marks of  sub 2");
var obtMark3=+prompt("Enter Obtained marks of sub 3");
var totObtMark=obtMark1+obtMark2+obtMark3;
var totMark=100;
var totMarks=100*3;
var perc1=(obtMark1/totMark)*100;
var perc2=(obtMark2/totMark)*100;
var perc3=(obtMark3/totMark)*100;
var totPerc=(perc1+perc2+perc3)/3;
var grade;
var remarks;
 if(totPerc<=100 && totPerc>=80){
  grade="A-one"; 
  remarks="Excellent"; 
 }
 else if(totPerc<80 && totPerc>=70){
    grade="A"; 
    remarks="Good"; 
 }
 else if(totPerc<70 && totPerc>=60){
    grade="B"; 
    remarks="You need to improve"; 
 }
 else if(totPerc<60){
    grade="Fail"; 
    remarks="Sorry"; 
 }
 document.write("Total Marks:"+totMarks +"<br>");
 document.write("Obtained Marks:"+totObtMark +"<br>");
 document.write("Percentage:"+totPerc+"%" +"<br>");
 document.write(grade +"<br>");
 document.write(remarks +"<br>");

var secrtNo=2;
var userNo=prompt("Enter the no");
if(userNo==secrtNo){
    document.write("Bingo! Correct answer" +"<br>");
}
else if(userNo===1){
   document.write("Close enough to the correct answer" +"<br>");
}
else{
    document.write("You lost the game" +"<br>");
}

var no=prompt("Enter your no",3);
if(no%3==0){
    document.write(no+" is divisible by 3" +"<br>");
}
else{
    document.write("Not divisible by 3");
}

var no= prompt("Enter your no")
if(no%2==0){
    document.write("Even no");
}
else{
    document.write("Odd no");
}

var temp=prompt("Enter the temprature")
if(temp>40){
    document.write("It is too hot outside");
}
else if(temp>30){
    document.write("The weather today is normal");
}
else if(temp>20){
    document.write("Today’s Weather is cool");
}

else if(temp>30){
    document.write("Today’s weather is so Cool")
}

var num1=+prompt("Enter 1st no");
var opert=prompt("Enter arithmetic operator");
var num2=prompt("Enter 2nd no");
if(opert==="+"){
document.write(num1+num2)
}
else if(opert==="-"){
    document.write(num1-num2)
}
else if(opert==="*"){
    document.write(num1*num2)
}
else if(opert==="/"){
    document.write(num1/num2)
}
else if(opert==="%"){
    document.write(num1%num2)
}
