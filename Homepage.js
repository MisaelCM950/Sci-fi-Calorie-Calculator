/*$$BMR = (10 \times \text{weight}) + (6.25 \times \text{height}) - (5 \times \text{age}) + \text{GenderOffset}$$*/

function toggleHeightInputs(){
  const unit= document.getElementById("height-unit").value;
  const cmInput = document.getElementById("height-cm");
  const ftInputContainer = document.getElementById("height-ft-in");
  
  if(unit === "ft"){
    cmInput.style.display = "none";
    ftInputContainer.style.display ="flex";

  } else{
    cmInput.style.display = "block";
    ftInputContainer.style.display = "none";
  }

}
function calculateCalories(){
  let weight = parseFloat(document.getElementById("weight").value);
  const age = parseFloat(document.getElementById("age").value);
  const activityMultiplier = parseFloat(document.getElementById("activity").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const unitHeight = document.getElementById("height-unit").value;
  const unit = document.getElementById("unit").value;

  let height = 0;
  if(unitHeight === "cm"){
    height = parseFloat(document.getElementById("height-cm").value);
  } else{
    const feet = parseFloat(document.getElementById("feet").value);
    const inches = parseFloat(document.getElementById("inches").value);

    const safeInches = isNaN(inches) ? 0 : inches;
    height = (feet * 30.48) + (safeInches * 2.54);
  }


  if(isNaN(weight) || isNaN(height) || isNaN(age)){
    document.getElementById("result").innerText = "Enter a valid number"
    return;
  }

  if(unit === "lbs"){
    weight = weight / 2.20462
  }
    let bmr = (10 * weight) + (6.25 * height) - (5 * age)

    const maintenance = Math.round(bmr * activityMultiplier);
    const loss = maintenance - 500;
    const gain = maintenance + 500;
    
    document.getElementById("result-box").style.display = "block";

    document.getElementById("cal-loss").innerText = loss;
    document.getElementById("cal-main").innerText = maintenance;
    document.getElementById("cal-gain").innerText = gain;

  if(gender === "male"){
    bmr = bmr + 5;
  }
  else{
    bmr = bmr - 161; 
  }

  

  const calories = bmr * activityMultiplier
  document.getElementById("result").innerText = Math.round(calories) + " Calories"
  
}