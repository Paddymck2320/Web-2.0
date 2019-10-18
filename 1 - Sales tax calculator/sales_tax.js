var $ = function (id) {
    return document.getElementById(id); 
	
};	
	var calculateTax = function(subtotal, tax_rate) {
		var tax = (subtotal / tax_rate);
		return tax;
	};
	
	var calculateTotal = function(tax, subtotal) {
		var total = (subtotal + tax).toFixed(2);
		return total;
	};
	
	var clear = function(){
		($("subtotal").value = " ");
		($("tax_rate").value = " ");
		($("sales_tax").value = " ");
		($("total").value = " ");
	}
	var processEntries = function()	{
	var subtotal = parseFloat($("subtotal").value);
	var tax_rate =  parseFloat($("tax_rate").value);
	if (isNaN(tax_rate) || isNaN(subtotal)){
		alert ("Both entries must be numeric");
	}
	else if(subtotal > 10000 || subtotal < 0){
		alert("Please enter a figure between 0 and 10000");
	}
	else if(tax_rate > 12 || tax_rate < 0){
		alert("Please enter a value between 0 and 12");
	}
			$("sales_tax").value = calculateTax(subtotal, tax_rate);
			$("total").value = calculateTotal(calculateTax(subtotal, tax_rate), subtotal);
	};
	
	window.onload = function(){
		$("calculate").onclick = processEntries;
		$("clear").onclick = clear;
		$("subtotal").focus();
	};
		

