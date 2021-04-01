var arr=[[]];
var array=[["0 1 2 3"],["1 0 1 2"],["2 1 0 1"]];
for(var i=0;i<=array.length-1;i++){
document.write(array[i]+"<br>");}

var examp=["1","2","3","4","5","6","7","8","9","10"]; 
for(var i=0; i<=examp.length-1; i++){
    document.write(examp[i]+"<br>");
}
var table=prompt("Enter no. for tale",2);
var tab=prompt("Enter lenght of the table",10);
for(var i=1; i<=tab; i++){
    document.write(table+"X"+i+"="+tab*i+"<br>");
}

var fruits=["apple","banana","mango","orange","strawberry"];
for(var i=0; i<=fruits.length-1;i++){
    document.write(fruits[i]+"<br>");
}
for(var i=0; i<=fruits.length-1;i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}

var counting=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];
document.write("<h3>Counting</h3>"+counting);
var reverse=counting.reverse();
document.write("<h3>Reverse</h3>"+reverse+",");

var counting=["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
document.write("<h3>Even no</h3>");
for(var i=0; i<=counting.length-1; i++){
if(counting[i]%2==0){
  document.write(counting[i]+",");
}
}

document.write("<h3>Odd no</h3>");
for(var i=0; i<=counting.length-1; i++){
    if(counting[i]%2==1){
      document.write(counting[i]+",");
    }
}

document.write("<h3>Series</h3>");
for(var i=1; i<=counting.length-1; i++){
     if(counting[i]%2==0){
       document.write(counting[i]+"k,");
    }
}

var arrLar=[24,53,78,91,12];
var no=Math.max.apply(null, arrLar);
document.write(no+" is the largest number"+"<br>");

var arrLar=[24,53,78,91,12];
var no=Math.min.apply(null, arrLar);
document.write(no+" is the smallest number");

var arrNo;
for(var i=0; i<=100; i++){
    if(i%5==0){
        document.write(i+"<br>")
    }
}