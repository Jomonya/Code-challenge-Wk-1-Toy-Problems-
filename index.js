// This function takes student marks as input and returns the corresponding grade.
function calculateGrade(marks) {
    if (marks < 0 || marks > 100) {
      return "Invalid marks"; // Ensures marks are between 0 and 100
    } else if (marks > 79) {
      return "A";
    } else if (marks >= 60) {
      return "B";
    } else if (marks >= 50) {
      return "C";
    } else if (marks >= 40) {
      return "D";
    } else {
      return "E"; // Marks less than 40
    }
  }
  
  // Example usage:
  const marks = prompt("Enter student marks (0-100):");
  console.log(calculateGrade(parseInt(marks, 10)));

  
  // This function calculates demerit points based on the speed of a car.
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if (speed < speedLimit + kmPerPoint) {
      console.log("Ok"); // Speed is within the acceptable range
      return;
    }
    
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points > 12) {
      console.log("License suspended"); // More than 12 points
    } else {
      console.log("Points:", points); // Print the total number of demerit points
    }
  }
  
  // Example usage:
  const speed = prompt("Enter speed of the car:");
  checkSpeed(parseInt(speed, 10));

  
  // This function calculates the net salary based on basic salary, benefits, and deductions.
function calculateNetSalary(basicSalary, benefits) {
    // Assumed fixed rates and deductions for demonstration
    const taxRate = 0.30; // Assumed tax rate
    const nhifDeduction = 1000; // Assumed NHIF deduction
    const nssfDeduction = 2000; // Assumed NSSF deduction
    
    const grossSalary = basicSalary + benefits; // Calculating gross salary
    const payee = grossSalary * taxRate; // Calculating PAYE
    const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction); // Calculating net salary
    
    // Outputting detailed breakdown
    console.log("Gross Salary:", grossSalary);
    console.log("Net Salary:", netSalary);
  }
  
  // Example usage:
  const basicSalary = parseFloat(prompt("Enter basic salary:"));
  const benefits = parseFloat(prompt("Enter benefits:"));
  calculateNetSalary(basicSalary, benefits);
  