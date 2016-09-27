$("#btnCalculate").click(function(){

	var totalPrice=$("#Price").val();

	var paid =$("#amountPaid").val();

	totalPrice=Math.floor(totalPrice*100);
	paid=Math.floor(paid*100);

	var change=paid-totalPrice;

	// var denominations={
	// 	oneDollar:100,
	// 	quarter:25,
	// 	dime:10,
	// 	nickel:5,
	// 	penny:1
	// };

	var dollars=Math.floor(change/100);
	change-=dollars*100;

	var quarters=Math.floor(change/25);
	change%=quarters*25;                   // using modulo operator

	var dimes=Math.floor(change/10);
	change-=dimes*10;

	var nickels=Math.floor(change/5);
	change-=nickels*5;

	var pennies=Math.floor(change/1);
	change-=pennies*1;
          
     
	$("#outputDollars").text(dollars);
	$("#outputQuarters").text(quarters);
	$("#outputDimes").text(dimes);
	$("#outputNickles").text(nickels);
	$("#outputPennies").text(pennies);







})