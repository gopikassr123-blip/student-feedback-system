function submitFeedback(){

let name=document.getElementById("name").value;
let roll=document.getElementById("roll").value;
let dept=document.getElementById("dept").value;
let phone=document.getElementById("phone").value;
let msg=document.getElementById("msg").value;

if(name=="" || roll=="" || dept=="" || phone=="" || msg==""){
alert("Please fill all fields");
return;
}

let feedback={
name,
roll,
dept,
phone,
msg
};

let oldData=JSON.parse(localStorage.getItem("feedbacks")) || [];

oldData.push(feedback);

localStorage.setItem("feedbacks",JSON.stringify(oldData));

document.getElementById("success").style.display="block";

document.getElementById("name").value="";
document.getElementById("roll").value="";
document.getElementById("dept").value="";
document.getElementById("phone").value="";
document.getElementById("msg").value="";

}