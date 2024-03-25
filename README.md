# Code challenge Wk :1 Toy Problems

# Description.
This code challenge entails three programs that are created to perform various activities. The first is a student grade generator, a speed detector and a net salary calculator.

# Set Up Instruction:

Create a repository on Github and give it a title. Clone this challengge into your local environment. Navigate into its directory in the terminal, then run code . to open the files in Visual Studio Code. 

 # Challenge 1: Student Grade Generator

Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade:

- A > 79
- B - 60 to 79
- C - 59 to 49
- D - 40 to 49
- E - less than 40.

# let us Get Started

Declare a function and name it `calculateGrade`. The function should have a parameter known as score. Score will take the numerical value that will stand for grades scored by the student. Within the braces, place your if conditional statement.
For example, begin with:

 if (score < 0 || score > 100) {
      return "Invalid Marks";
    }
    
Continue filling the rest with the various if conditional statement.Based on the score given to the function, each condition in the function returns a string that represents the grade. The function checks the score against many criteria using conditional (if/else if/else) statements and returns the appropriate grade. The last statement should look like this:

  else {
      return "E";}

Declare a constant variable and call it score. The variable should have a prompt that allows users to interact with the program such that when they enter a value, it returns the input as a string.
Console.log `calculateGrade` as an argument, remember to add parseInt which is a function that allows a string to be converted to an integer.



# Challenge 2: Speed Detector

Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

# Let Us Get Started.
Declare a function named `checkSpeed`, let the function have a parameter known as speed.

# Identify the Constants and Variables

Determine which numbers are variable (such as the driver's speed) and which are constant (such as the speed limit or km/p).
SpeedLimit = 70 km/point = 5 variables are constants.
speed: The driver will enter the vehicle's speed.

# Put the Logic into the Code

First, perform a safe speed check:
To determine whether the speed is inside the speedLimit + kmPerPoint, use an if statement. If this is the case, record "Ok" and end the process.

# Access Penalty Points now. 

To get entire points, remove the speedLimit from the speed, divide the result by kmPerPoint, and round down.
Round down using Math.floor because penalty points are entire numbers.

Proceed to the Penalty Points Calculation: To obtain entire points, remove the speed limit from the speed, divide the result by kmPerPoint, and round down.
Round down using Math.floor because penalty points are entire numbers.

# Put License Suspension Check Into Practice

To see if the points are more than 12, use an additional if statement. Log "License suspended" if that's the case.
Take Care of the Other Case:
Record the total number of points if the score is 12 or less.

# Verify Your Fix

To make sure that every scenario is handled appropriately, test the function at different speeds:
'Safe' speed range (<= 75 km/h).
speeds that provide less than twelve points.
speeds yielding more than twelve points.




# Challenge 3: Net Salary Calculator

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

**NB:** Use KRA, NHIF, and NSSF values provided in the link below.

- [KRA Tax Rates](https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye)
- [NHIF and NSSF rates](https://www.aren.co.ke/payroll/taxrates.htm)

# Let us Begin!

# Taxes and Other Deductions.

It's critical to comprehend the nature of deductions:

Tax Rate: The tax rate is expressed as a percentage of the gross wage. 
A set health insurance deduction known as the NHIF Deduction. placed in this case at 1000.
A set deduction from the social security fund (NSSF). 2000 is the example value.

# Figuring Out Your Gross and Net Salary

With the aforementioned elements, create the calculations:
Total of base pay plus benefits is the gross salary calculation.
Net Salary Calculation: Total compensation less all allowed deductions (NSSF, NHIF, and taxes).

# Putting the Function into Practice
After outlining the reasoning and computations, put the calculateNetSalary function into practice:

# Benefits and base pay are its inputs.

total salary is determined by adding benefits and base salary.
calculates the payee (tax due) by multiplying the gross salary by the tax rate.
Deducts all deductions from gross salary (payee, NHIF, and NSSF) to arrive at net salary.
records both the gross and net salaries for transparency.

# User-Interactive Data

In order for the feature to be interactive and useful in real-world situations, it Prompts users to provide information for base pay and benefits, enabling customization and engagement.
To ensure accuracy in calculations, particularly when benefits or salaries involve decimal values, parse these inputs as floating-point numbers.

# Submit
git add ., commit and push the work on github and then submit the website url.



