var employeeArray = [];
var total = 0; 
var values = {};

$(document).ready(function(){
	$("#employeeInfo").submit(function(event){
		event.preventDefault();

		$.each($("#employeeInfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})
		
		$("#employeeInfo").find("input[type=text]").val("");
		employeeArray.push(values);
		appendDom(values);
// adds employee salary to DOM
$('#monthlyTotalSalary').text(add(Number(values.employeeSalary)));
	});
// removes employee from DOM and updates the monthly salary
$('#employeeContainer').on('click', 'button', function(){
	
	var last = $(this).closest('.employee').remove();
	var re = /([a-z\ ]+)([0-9]+)([a-z]+)([0-9]+)(REMOVE)/i;

	$('#monthlyTotalSalary').text(add(Number(last.text().replace(re, '$4'))*-1));

	});
});
// calc employee monthly salary, return rounded grand total
function add (x){
	x/=12;
	return Math.round(total += x);
}
// creates employee table on DOM and REMOVE button
function appendDom(employee){

	$("#employeeContainer").append("<table class='employee'></table>");
	var $el = $("#employeeContainer").children().last();

	$el.append("<td>" + employee.employeename.toUpperCase() + "</td>");
	$el.append("<td>" + employee.employeenumber + "</td>");
	$el.append("<td>" + employee.employeeJobTitle.toUpperCase() + "</td>");
	$el.append("<td class='salaryData'>" + employee.employeeSalary + "</td>");
	$el.append("<td>" + '<button class="removeButton">REMOVE</button>' + "</td>");
}