// function signIn(){
//     var email=document.getElementById("email");
//     var password=document.getElementById("password");
//     document.write("Email: "+email.value+"</br>");
//     document.write("Password: "+password.value);
// }

// function readMore(){
// var para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sunt rem eligendi minus quidem fugit ex qui laboriosam. Suscipit atque ad hic, totam corporis eius esse minus velit magni deserunt!"
// var html=document.getElementById("html")
// html.innerHTML=para;
// }
 

function onSubmit(){
    var fName=document.getElementById("formName");
    var fRollNo=document.getElementById("formRollNo");
    var fClasses=document.getElementById("formClass");
    
    var tName=document.getElementById("tableName");
    var tRollNo=document.getElementById("tableRollNo");
    var tClasses=document.getElementById("tableClass");

    tName.innerHTML= fName.value;
    tRollNo.innerHTML= fRollNo.value;
    tClasses.innerHTML= fClasses.value;
}

function dlt(){
    var rem=document.getElementById("remove");
    rem.remove()
}