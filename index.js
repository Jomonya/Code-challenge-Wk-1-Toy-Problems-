// This function takes student marks as input and returns the corresponding grade.
function calculateGrade(score){
  if (score < 0 || score > 100) {
    return "Invalid Marks";
  }//The first conditional check is this one. It determines if the score falls outside of the acceptable range, which is 0 to 100. If so, the string is returned. 
  else if (score >=79){
    return "A";}   //This determines if the result is higher than or equal to 79. A top grade of "A" is returned if the condition is true.
  else if  (score >= 60){
    return "B";}
  else if (score >=50){
    return "c";}
  else if (score >=40){
    return "D";}
  else {
    return "E";}
  
}
const score = prompt("Enter student score (0-100):");
console.log(calculateGrade(parseInt(score, 10)));

 // This function calculates demerit points based on the speed of a car.
function checkSpeed(speed) {
  const speedLimit = 70; //This line declares a constant variable named speedLimit and initializes it with the value 70.
  const kmPerPoint = 5;
  //This line declares another constant variable named kmPerPoint and initializes it with the value.
  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }
  
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points > 12) {
    console.log("License suspended");
  } else {
    console.log("Points:", points);
  }
}

//call function
const speed = prompt("Enter speed of the car:");
checkSpeed(parseInt(speed, 10));




// This function calculates the net salary based on basic salary, benefits, and deductions.
function calculateNetSalary(basicSalary, benefits) {
  // KRA tax rates 
  const taxRates = {
    0: 0.1,
    18151: 0.25,
    47051: 0.3
  };

  // NHIF and NSSF rates
  const nhifRate = 0.05;
  const nssfRate = 0.06;

  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate taxable income
  const taxableIncome = grossSalary - nssfRate * basicSalary;

  // Calculate PAYE (Pay As You Earn) based on tax brackets
  let payee = 0;
  for (const threshold in taxRates) {
    if (taxableIncome > threshold) {
      const taxableInBracket = taxableIncome - threshold;
      payee += taxableInBracket * taxRates[threshold];
      taxableIncome -= taxableInBracket;
    } else {
      payee += taxableIncome * taxRates[threshold];
      break;
    }
  }

  // Calculate NHIF deductions (capped at 1700)
  const nhifDeductions = Math.min(nhifRate * grossSalary, 1700);

  // Calculate NSSF deductions (capped at 2000)
  const nssfDeductions = Math.min(nssfRate * basicSalary, 2000);

  // Calculate net salary
  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

  return {
    grossSalary: grossSalary,
    payee: payee,
    nhifDeductions: nhifDeductions,
    nssfDeductions: nssfDeductions,
    netSalary: netSalary
  };
}

// Example usage
const basicSalary = 100000;
const benefits = 10000;

const salaryBreakdown = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryBreakdown.grossSalary);
console.log("PAYE:", salaryBreakdown.payee);
console.log("NHIF Deductions:", salaryBreakdown.nhifDeductions);
console.log("NSSF Deductions:", salaryBreakdown.nssfDeductions);
console.log("Net Salary:", salaryBreakdown.netSalary);

  
 
  
  
   