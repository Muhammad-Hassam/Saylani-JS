// var fName=prompt("Enter your first name");
// var lName=prompt("Enter your last name");
// var flName=fName+lName;
// document.write("Hello "+flName);

// var userStrg=prompt("Enter any string")
// var lenghtS=userStrg.lastIndexOf();
// document.write(lengthS);

// var word="Pakistani";
// var user=prompt("Enter character for finding its location");
// var res=word.indexOf(user);
// document.write(res);

// var word="Pakistani";
// var res=word.lastIndexOf("i");
// document.write(res);

// var word="Pakistani";
// var res=word.charAt(3);
// document.write(res);

// var word="Islamabad";
// var res=word.replace("Islamabad","Hyderabad");
// document.write("City: "+word + "</br>");
// document.write("Replaced city: "+res);

// var msg="Ali and Sami are best friends They play cricket and football together";
// var rep=msg.replace(/and/g,"&");
// document.write(msg+"</br>");
// document.write(rep);

// var userStrng=prompt("Enter any word");
// var capCase=userStrng.toUpperCase();
// document.write(capCase);

// var userStrng=prompt("Enter any word");
// var capCase=userStrng.slice(0,1);
// var capi=capCase.toUpperCase();
// var smlCase=userStrng.slice(1);
// var sml=smlCase.toLowerCase();
// var word=capi+sml;
// document.write("User Input: "+userStrng+"</br>");
// document.write("Title Case: "+word);

// var num=35.36;
// var strng=num.toString();
// var float=parseFloat(strng);
// document.write("Number" +strng+"</br>");
// document.write("Result: 3536");

// var userwrd=prompt("Enter valid user name");
// var mywrd=false;
// for(var i=0; i<=userwrd.length; i++){
//     if("@"==userwrd[i]||"#"==userwrd[i]||"$"==userwrd[i]||"%"==userwrd[i]||"^"==userwrd[i]||"&"==userwrd[i]){
//         mywrd=true;
//         document.write("Please enter a valid user name");
//        break; 
//     }
// }
// if(mywrd===false){
//     document.write(userwrd);
// }

// var arr=["cake", "apple pie", "cookie", "chips", "patties"];
// var usersrch=prompt("Enter your item");
// usersrch=usersrch.toLowerCase();
// var mywrd=false;
// for(var i=0;i<=arr.length;i++){
//     if(usersrch===arr[i]){
//         mywrd=true;
//         var index=arr.indexOf(usersrch);
//         document.write(usersrch+" is available at index "+index+" in our bakery");
//     }
//     break;
// }
// if(mywrd===false){
//     document.write("We are sorry "+usersrch+" is not present in our bakery")
// }
                // incomplete
// var pass=prompt("Enter your password");
// if(pass.length<6){
//     document.write("Password should contain at least 6 letters");
// }
// else if(charAt(0)===){

// }
// else{
//     document.write(pass);
// }
              // incomplete end


// var arr="University of Karachi";
// for(var i=0;i<arr.length;i++){
//     document.write(arr[i]+"</br>")
// }

// var userinp=prompt("Enter you text");
// var ind=userinp.charAt(userinp.length-1);
// document.write(ind);

var txt="The quick brown fox jumps over the lazy dog";
var mywrd=false;
for(var i=0;i<txt.length;i++){
    if(txt.slice(i,i+3)==="the"){
        mywrd=true;
        document.write(txt+"</br>");
        document.write("There are 2 occurences of word 'the'.");
    }
}
if(mywrd===false){
      document.write("There is not the")
}