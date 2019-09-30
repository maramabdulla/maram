function isEmpty(){
    var pass=document.getElementById('pass').value;
    return (pass=="");
    
}

function ispassLeastNum(pass){
    var pass=document.getElementById('pass').value;
    var reg=new RegExp();
    reg=/[0-9]/;
    return (reg.test(pass)==false);
    }
   
   function ispassLeastChar(pass){
    var pass=document.getElementById('pass').value;
    return pass.includes("@") || pass.includes(".") || pass.includes("!")|| pass.includes("#")||pass.includes("$")||pass.includes("&")||pass.includes("*");
 }
   function checkpass(){
    var pass=document.getElementById('pass').value;
    if  (pass == ""){
        document.getElementById("passerror").innerHTML ='password is Empty';
       return false;}
    if (pass.length >= 8){
        document.getElementById('passerror').innerHTML ='pass is correct';

       return true;
     }
     if(pass.length < 8){
            document.getElementById('passerror').innerHTML ="Password must contain at least 8 characters and least one number and  at leas one of the following: [!, @, #, $, %, &, *].";           
            
    return false;
        }
   }
  function checkbutton(){
    var pass=document.getElementById('pass').Value;
    peassmessage=checkpass();
    if (peassmessage==true){
        return document.getElementById("passerror").style.display = 'block'; 

    }else{
   return document.getElementById("passerror").style.display = 'block';

  }
}
var btn = document.getElementById("but");
   btn.addEventListener("click", checkbutton);
  

