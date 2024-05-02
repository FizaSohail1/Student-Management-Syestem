//Student Management Syestem
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green(`\tWelcome to Student Management Syestem`));
let studentId = Math.floor(10000 + Math.random() * 90000);
let answer = await inquirer.prompt([{
    name:"Newstudent",
    type:"input",
    message:"Enter student name:"
},
{
    name:"Courses",
    type:"list",
    message:"Select a course you want to enroll",
    choices:["Web-Development","Typescipt","Python Programming","Graphic-Designing","Digital-Marketing"]
},
{
    name:"studentbalance",
    type:"number",
    message:"Enter Student balance:"
},
{
    name:"otheroptions",
    type:"list",
    message:"What do you want to do next",
    choices:["view balance" ,"pay tution fees", "show status","Exit"]
}])
const tutionFees: {[key:string]:number} = {
    "Web-Development":5000,
    "Typescript": 3000,
    "Python Programming": 2000,
    "Graphic-Designing" : 2000,
    "Digital-Marketing" : 3000,
}
if(answer.otheroptions === "view balance"){
    console.log(`Your Balance is: ${answer.studentbalance}`)
}

if(answer.otheroptions === "pay tution fees" ){
    console.log(chalk.yellow(`Tution fee of your selected course is: ${tutionFees[answer.Courses]}`))

    let courseAmount = await inquirer.prompt([{
        name:"Payment",
        type:"number",
        message:"Kindly pay the tution fee of your selected course:"
    }])
   if(courseAmount.Payment === tutionFees[answer.Courses]){
    console.log(chalk.green("Tution fee paid"))
   }
   else{
    console.log(chalk.red("Please enter a valid amount"))
   }
}
if(answer.otheroptions === "show status"){
    console.log(`Student Name: ${answer.Newstudent}`);
    console.log(`Student ID: ${studentId}`);
    console.log(`Enrolled In: ${answer.Courses}`);
    console.log(`Student Balance: ${answer.studentbalance}`);
}
if(answer.otheroptions === "Exit"){
    console.log(chalk.green("Thanks for Using Student Management Syestem"))
}
