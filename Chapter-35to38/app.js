// function date(){
//     var dates=new Date();
//     document.write(dates);
// }
// date();

// function name(){
//     var fName=prompt("Enter fisrst name");
//     var lName=prompt("Enter last name");
//     var flName=fName+lName;
//     document.write(flName);
// }
// name();

// var num1=+prompt("Enter 1st no");
// var num2=+prompt("Enter 2nd no");
// function sum(num1,num2){
//  sum=num1+num2;
//  document.write(+sum);
//  return sum;

// }
// sum(num1,num2);

// var arg=prompt("Enter value");
// function sqr(arg){
//     var asquare=arg*arg;
//     document.write(asquare)
//     return asquare;
// }
// sqr(arg);

// var num=prompt("Enter any no");
// var fact=1;
// function fCount(num){
//     for(var i=1; i<=num; i++){
//         fact=fact*i;
//         document.write(fact);
//     }
// }
// fCount(num); //incomplete

// var strt=prompt("Enter starting no");
// var end=prompt("Enter ending no");
// function count(strt,end){
// for(var i=strt;i<=end;i++){
//     document.write(i+"</br>")
// }
  
// }
// count(strt,end);
 
// function Chypotenuse(base,prependicular){
//  var hypot=cSquare(base,prependicular);
//    document.write(hypot);
//    return hypot;
//     function cSquare(base,prependicular){
//         var bsquare=base*base;
//         var psquare=prependicular*prependicular;
//         return bsquare*psquare;
//     }
// }

// var prependicular=prompt("Enter value for prependicular");
// var base=prompt("Enter value for base");
// Chypotenuse(base,prependicular);


// function cArea(width,height){
//     var area=width*height;
//     document.write(area);
//     return area;
// }
// var width=prompt("Enter value for width");
// var height=prompt("Enter value for height");
// cArea(width,height);

// var word=prompt("Enter any word");
// function palindrome(word){
// var str=word.split("").reverse().join("");
// if(word===str){
//     document.write(word+" is palindrome word")
// }
// else{
//     document.write(word+" is not palindrome word")

// }
// }
// palindrome(word);

// function wordCap(word){
//   var words=word.toLowerCase().split(' ');
//   for(var i=0;i<words.length;i++){
//     words[i]=words[i].charAt(0).toUpperCase() +words[i].substring(1);
//   }
//   return words.join(' ');
// }
// document.write(wordCap("the quick brown fox"));

// function wordLenght(para){
//   var wordsLeng=para.split(' ');
//   var longWrd=0;
//   var word;
//   for(var i=0;i<wordsLeng.length;i++){
//     if(wordsLeng[i].length>longWrd){
//       longWrd=wordsLeng[i].length; 
//       word=wordsLeng[i];
//   }  

// }
// document.write(word)
// return word;
// }
// wordLenght("web development course has been started");

// function wordcount(x, y) 
// {
//  var letter_Count = 0;
//  for (var i = 0; i < x.length; i++) 
//  {
//     if (x[i] == y) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(wordcount('w3resource.com', 'o'));

 var pi=prompt("Enter value of pi");
 var r=prompt("Enter value of radius")
   function circumference(pi,r){
        var Circum=2*pi*r;
        document.write("Circumference = "+Circum+"</br>");
        return Circum;
    }
    function calcArea(pi,r){
        var area=pi*(r*r);
        document.write("Area = "+area);
        return Circum;
    }
circumference(pi,r);
calcArea(pi,r);

    



