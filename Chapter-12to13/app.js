var val=prompt("Enter the value");
document.write(typeof val);

var num1=prompt("Entr 1st no");
var num2=prompt("Enter 2nd no");
if(num1>num2){
    document.write(num1+" is larger than "+num2)
}
else if(num2>num1){
    document.write(num2+" is larger than "+num1)
}
else{
    document.write(num1+"and"+num2+" Both are equal")
}

var no=prompt("Enter the number")
if(no>0){
    document.write("Positive no")
}
else if(no<0){
    document.write("Negative no")
}
else if(no=0){
    document.write("It is zero")
}

var vow=prompt("Enter the alphabet");
vow=vow.toLowerCase();
if(vow=="a"||vow=="e"||vow=="i"||vow=="o"||vow=="u"){
    document.write("It is vowel");
}

var paswd="hassam123";
var user=prompt("Enter password");
if(user===paswd){
    document.write("Correct! The password you entered matches the original password”.");
}
else if(user===""){
    document.write("Please enter your password");
}
else if(user!==paswd){
    document.write("Incorrect password");
}

var greeting; 
var hour = 13;
 if (hour < 18){ 
     greeting = "Good day";
    document.write(greeting)
    }

else{
    greeting = "Good evening";
    document.write(greeting)
}

var time=prompt("Enter time in 24hours time zone");
if(time>=0000 && time<1200){
    document.write("Good morning")
}
else if(time>=0000 && time<1200){
    document.write("Good morning")
}
else if(time>=1200 && time<1200){
    document.write("Good morning")
}
else if(time>=0000 && time<1700){
    document.write("Good afternoon")
}
else if(time>=1700 && time<2100){
    document.write("Good evening")
}
else if(time>=2100 && time<2359){
    document.write("Good morning")
}