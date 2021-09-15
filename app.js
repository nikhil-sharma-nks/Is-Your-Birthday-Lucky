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
  resultMsg.style.display = "none";
  errorMsg.style.display = "none";

  let dob = dateOfBirth.value;
  let number_lucky = luckyNumber.value;
  if (dob && number_lucky) {
    if (number_lucky > 0) {
      const sum = returnSum(dob);
      console.log("Sum ", sum);

      resultMsg.style.display = "block";
      if (sum % number_lucky === 0) {
        console.log("Lucky Number");
        resultMsg.innerText = `${number_lucky} is your Lucky Number`;
      } else {
        resultMsg.innerText = `${number_lucky} is NOT your Lucky Number`;
      }
    } else {
      errorMsg.style.display = "block";
      errorMsg.innerText = "ERROR: PLEASE ENTER NUMBER GREATER THAN 0";
    }
  } else {
    errorMsg.style.display = "block";
    errorMsg.innerText = "ERROR: PLEASE ENTER BOTH THE VALUES";
  }
});
