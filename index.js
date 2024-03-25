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


const speed = prompt("Enter speed of the car:");
checkSpeed(parseInt(speed, 10));




// This function calculates the net salary based on basic salary, benefits, and deductions.
function calculateNetSalary(basicSalary, benefits) {
   // Assumed fixed rates and deductions for demonstration
  const nhifDeduction = 1000; 
  const nssfDeduction = 2000;
  
  const grossSalary = basicSalary + benefits;
  
  // Tax calculation based on bands
  let payee;
  if (grossSalary <= 24000) {
      payee = grossSalary * 0.10; // 10% for income up to KES 24,000
  } else {
      // Additional bands would be handled here with else-if statements
      payee = 2400; // This is fixed for the first KES 24,000, and then you'd add on the calculations for the remaining amount as per the bands
  }
  
  const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);
  
  console.log("Gross Salary:", grossSalary);
  console.log("Net Salary:", netSalary);
}

const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));
calculateNetSalary(basicSalary, benefits);

  
 
  
  
   