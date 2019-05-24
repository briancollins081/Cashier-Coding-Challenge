//Cashier Codding Challenge
/*
	Help cashier return the right change
	Inputs to program
		*Amount Due - spent amount
		*Amount Paid - money paid by client
	Outputs
		*Amount Due
		*Amount Paid
		*Total Change
		*Change Breakdown
	Kenya Breakdown Example
		*Ksh.1000.00 notes
		*Ksh.500.00  notes
		*Ksh.200.00  notes
		*Ksh.100.00  notes
		*Ksh.50.00   notes
		*Ksh.20.00   coins
		*Ksh.10.00   coins
		*Ksh.5.00    coins
		*Ksh.1.00    coins
		*Ksh.1    cents -> 100cents= Ksh 1.00
*/
var amountDue=parseFloat(prompt("Enter Amount Due:"));
var amountPaid=parseFloat(prompt("Enter Amount Paid:"));
while(amountDue>amountPaid){
	alert("Amount Paid can not be less than Amount Due");
	amountPaid=parseFloat(prompt("Enter Amount Paid:"));
}
var change = amountPaid - amountDue;
console.log("Amount Paid: "+amountPaid);
console.log("Amount Due: "+amountDue);
console.log("Total Balance: "+change);
var msg = "===========================\n"+"Balance Breakdown";
var count=0;

if(change >= 1000){
	count=Math.floor(change/1000);
    msg+="\nKsh.1000.00 Notes: "+ count;	
}

if(change >= 500){
	change=change-count*1000;
	count=Math.floor(change/500);
	msg+="\nKsh.500.00 Notes: "+ count;
}

if(change >= 200){
	change=change-count*500;
	count=Math.floor(change/200);
	msg+="\nKsh.200.00 Notes: "+ count;
}

if(change >= 100){
	change=change-count*200;
	count=Math.floor(change/100);
	msg+="\nKsh.100.00 Notes: "+ count;
}

if(change >= 50){
	change=change-count*100;
	count=Math.floor(change/50);
	msg+="\nKsh.50.00 Notes: "+ count;
}
if(change >= 20){
	change=change-count*50;
	count=Math.floor(change/20);
	msg+="\nKsh.20.00 Coins: "+ count;
}

if(change >= 10){
	change=change-count*20;
	count=Math.floor(change/10);
	msg+="\nKsh.10.00 Coins: "+ count;
}

if(change >= 5){
	change=change-count*10;
	count=Math.floor(change/5);
	msg+="\nKsh.5.00 Coins: "+ count;
}

if(change >= 1){
	change=change-count*5;
	count=Math.floor(change/1);
	msg+="\nKsh.1.00 Coins: "+ count;
}

if(change > 0.1 && change<1){
	change=change-count*1;
	msg+="\n Cents: "+ change*100;
}

console.log(msg);