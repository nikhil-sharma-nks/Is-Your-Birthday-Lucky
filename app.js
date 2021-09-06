const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check-number");
const resultMsg = document.querySelector(".result");
const errorMsg = document.querySelector(".error");

function returnSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (i = 0; i < dob.length; i++) {
    sum += parseInt(dob[i]);
  }
  console.log("Sum from function ", sum);
  return sum;
}

checkNumberBtn.addEventListener("click", function checkNumberClickHandler() {
  let dob = dateOfBirth.value;
  let number_lucky = luckyNumber.value;
  if (dob && number_lucky) {
    const sum = returnSum(dob);
    console.log("Sum ", sum);
    if (sum % number_lucky === 0) {
      console.log("Lucky Number");
      resultMsg.innerText = "Lucky Number";
    } else {
      resultMsg.innerText = "NOT A Lucky Number";
    }
  } else {
    errorMsg.innerText = "PLEASE ENTER BOTH THE VALUES";
  }
});
