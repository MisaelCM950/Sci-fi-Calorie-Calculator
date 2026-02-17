/*$$BMR = (10 \times \text{weight}) + (6.25 \times \text{height}) - (5 \times \text{age}) + \text{GenderOffset}$$*/

function calculateCalories(){
  let weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const age = parseFloat(document.getElementById("age").value);
  const activityMultiplier = parseFloat(document.getElementById("activity").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;


  const unit = document.getElementById("unit").value;


  if(isNaN(weight) || isNaN(height) || isNaN(age)){
    document.getElementById("result").innerText = "Enter a valid number"
    return;
  }

  if(unit === "lbs"){
    weight = weight / 2.20462
  }
    let bmr = (10 * weight) + (6.25 * height) - (5 * age)

  if(gender === "male"){
    bmr = bmr + 5;
  }
  else{
    bmr = bmr - 161; 
  }

  

  const calories = bmr * activityMultiplier
  document.getElementById("result").innerText = Math.round(calories) + " Calories"
  
}