
function getInputFieldValueById(inputFieldId){
  const inputsFieldId = document.getElementById(inputFieldId);
  const inputFieldString = inputsFieldId.value;
  const inputFieldValue = parseInt(inputFieldString);
  return inputFieldValue;
};

function getTextElementValueById(textElementId){
  const textElementsId = document.getElementById(textElementId);
  const textElementString = textElementsId.innerText;
  const textElementValue = parseInt(textElementString);
  return textElementValue;
}

function setTextElementValueById(elementId, value){
  const textElement = document.getElementById(elementId);
  textElement.innerText = value;


}
document.getElementById("btn-calculate").addEventListener("click", function(){
  const foodPrice = getInputFieldValueById("food-field");
  const rentPrice = getInputFieldValueById("rent-field");
  const clothesPrice = getInputFieldValueById("cloths-field");
  
  const totalPrice = foodPrice + rentPrice + clothesPrice;

  const previousTotalExpenses = getTextElementValueById("total-expenses");
  const totalExpenses = previousTotalExpenses + totalPrice;
  setTextElementValueById("total-expenses", totalExpenses);

  const totalIncome = getInputFieldValueById("income-field");
  const newTotalExpenses = totalIncome - totalExpenses;
  const previousTotalBalance = getTextElementValueById("total-balance");
  const newTotalBalance = previousTotalBalance + newTotalExpenses;
  setTextElementValueById("total-balance", newTotalBalance);
});


document.getElementById("btn-save").addEventListener('click', function(){
  const totalIncome = getInputFieldValueById("income-field")
  const percentage = getInputFieldValueById("percentage-field");
  
  const saveAmount = ((percentage * totalIncome) / 100);
  
  console.log(saveAmount, totalIncome, percentage)
  getTextElementValueById("total-saving");
  setTextElementValueById("total-saving", saveAmount);

  const totalBalance = getTextElementValueById("total-balance");
  const totalSavingAmount = getTextElementValueById("total-saving");
  const totalRemainingBalance = totalBalance - totalSavingAmount;
  setTextElementValueById("remaining-balance", totalRemainingBalance);
});