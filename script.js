window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

    let height = parseInt(document
        .querySelector("#height").value);

    let weight = parseInt(document
        .querySelector("#weight").value);

    let result = document.querySelector("#result");

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        result.innerHTML = "Provide valid Height and Weight!";
    } else {
        let heightInMeters = height / 100;


        let weightInKg = weight * 0.453592;


        let bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);

        let category;
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 25) {
            category = "Normal weight";
        } else if (bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obese";
        }

     
        result.innerHTML = `BMI: ${bmi} (${category})`;
    }
}
