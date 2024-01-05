
import inquirer from "inquirer";

interface anstype {
  userid: string;
  userpassword: string;  // Fixing the data type here
  accounttype: string;
  transactiontype: string;
  withdrawmethod: number;
  message: string;
  amount:number
}

let answer: anstype = await inquirer.prompt([
  {
    type: "input",
    name: "userid",
    message: "Enter Your ID",
  },
  {
    type: "password",
    name: "userpassword",  
    message: "Enter Your Password",
    mask:"*"
  },
  {
    type: "list",
    name: "accountType",  
    choices: ["Current", "Saving"],
    message: "Select your account type",
  },
  {
    type: "list",
    name: "transactiontype",
    choices: ["FastCash", "Withdraw"],
    message: "Select your transaction type",
    when(answers) {
      return answers.accountType  
    },

  },
  {
    type: "list",
    name: "withdrawmethod",
    choices: [1000, 2000, 3000, 10000, 20000],
    message: "Select your amount",
    when(answers) {
      return answers.transactiontype === "FastCash"; 
    },
  },
  {
    type:"number",
    name:"amount",
    message:"Enter your amount",
    when(answers) {
      return answers.transactiontype === "Withdraw";  
    },

  }
]);
if(answer.userid &&  answer.userpassword){
const balance=Math.floor(Math.random()*100000000);
console.log(balance);
const enterAmount=answer.amount;
if(balance>=enterAmount){
const remaining=balance-enterAmount
console.log("Your remaining balance is",remaining);

}else{
  console.log("Insufficient Balance");
  
}

}
