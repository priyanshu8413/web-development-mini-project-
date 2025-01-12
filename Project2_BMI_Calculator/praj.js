const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');
  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result

    if (BMI < 18.6) {
      result.textContent = `Your BMI is ${BMI}. it is underweight`;
    }
    if (BMI > 18.6 && BMI < 24.9) {
      result.textContent = `Your BMI is ${BMI}. it is Normal Range`;
    } else {
      result.textContent =
        result.textContent = `Your BMI is ${BMI}. it is Overweight`;
    }
  }
});
