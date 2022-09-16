const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumBtn = document.querySelector("#check-number");
const outputmsg = document.querySelector("#output-msg");
var imgtag = document.querySelector("img");

checkNumBtn.addEventListener('click', checkbirthDateIslucky);

function checkbirthDateIslucky() {
    var luckyno = Number(luckyNumber.value);
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (luckyno < 0 || dob.value == "" || luckyno == "") {
      outputmsg.innerText = "Please enter valid details";
      outputmsg.style.color = "blue";}
    else {
      checkLuckyorNot(sum, luckyNumber.value);
    }
  }

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0; i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));
    }
    return sum;
}


function checkLuckyorNot(sum, luckyNumber){
    if(sum%luckyNumber===0) {
        outputmsg.innerText="Your birthday is lucky";
        imgtag.src = "images/lucky.jpg";
    } else {

        outputmsg.innerText="Sorry! Your birthday is not lucky";
        imgtag.src = "images/unlucky.png";
    }
}