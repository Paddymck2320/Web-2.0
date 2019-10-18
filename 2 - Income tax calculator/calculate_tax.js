"use strict";
var $ = function (id) {
    return document.getElementById(id);
};
	var calculateTax = function(income, tax) {
		var tax_rate = 0;
		var excessincome;
		var excessincomeTax;
	if(income > 0 && income <= 9225 )
	{
			tax_rate = 10;
			return tax = income / tax_rate;
	}
	else if( income > 9225 && income <= 37450)
	{
		tax_rate = .15;
		excessincome = income - 9225;
		excessincomeTax  = excessincome * tax_rate;
		return excessincomeTax + 922.5;
	}
	else if( income > 37450 && income <= 90750)
	{
		tax_rate = .25;
		excessincome = income - 37450;
		excessincomeTax  = excessincome * tax_rate;
		return excessincomeTax + 5156.25;
	}
	else if( income > 90750 && income <= 189300)
	{
		tax_rate = .28;
		excessincome = income - 90750;
		excessincomeTax  = excessincome * tax_rate;
		return excessincomeTax + 18481.25;
	}
	else if( income > 189300 && income <= 411500)
	{
		tax_rate = .33;
		excessincome = income - 189300;
		excessincomeTax  = excessincome * tax_rate;
		return excessincomeTax + 46075.25;
	}
	else if(income > 411500 && income <= 413200)
	{
		tax_rate = .35;
		excessincome = income - 411500;
		excessincomeTax  = excessincome * tax_rate;
		return excessincomeTax + 119401.25;
	}
	else( income > 413200)
	{
		tax_rate = 0.396;
		excessincome = income - 413200;
		excessincomeTax  = excessincome * tax_rate;
		return excessincomeTax + 119996.25;
	}
};
	var processEntry = function()	{
	var income = parseFloat($("income").value);
	if (isNaN(income)){
		alert ("Both entries must be of numeric value");
	}
	else
	{
		$("tax").value =  calculateTax(income);
	}
	};

window.onload = function () {
    $("calculate").onclick = processEntry;
};