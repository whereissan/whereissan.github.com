
// farenheit to celcius
function temperatureConvert1(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsiusResult").innerHTML = (valNum-32) / 1.8;
}

// celcius to farenheit
function temperatureConverter1(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheitResult").innerHTML=(valNum*1.8)+32;
}

// feet to meters
function LengthConvert1(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputMetersResult").innerHTML=valNum/3.2808;
}

//meters to feet
function LengthConverter1(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFeetResult").innerHTML=valNum*3.2808;
}

//Income Tax Calculator

function IncomeTax(valNum){
  valNum = parseFloat(valNum);
  document.getElementById("InputIncome");

  if (InputIncome < 250000){
    system.out.println (0) };

  else if (InputIncome >= 250000	&& InputIncome <= 400000) {
    system.out.println  ((InputIncome-250000)*0.2) ;}

  else if (InputIncome >= 400000	&& InputIncome <= 800000){
   system.out.println (((InputIncome-400000)*0.25) + 30000) ;}

  else if (InputIncome >= 800000	&& InputIncome <= 2000000){
   system.out.println (((InputIncome-800000)*0.3) + 130000 );}

  else if (InputIncome >= 2000000	&& InputIncome <= 8000000){
    system.out.println (((InputIncome-2000000)*0.32) + 490000) ;}

  else (InputIncome >= 8000000){
   system.out.println ((InputIncome-8000000)*0.35) + 2410000) ;}

}

// nth factorial
function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
factorialize(5);


function findSum(n)
{
   let sum = 0;
   for (let x = 1; x <= n; x++)
     sum = sum + x;
   return sum;
}
