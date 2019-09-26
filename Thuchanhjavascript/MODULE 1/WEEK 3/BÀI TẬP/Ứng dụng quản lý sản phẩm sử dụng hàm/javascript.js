let nameProduc = ["Sony Xperia","Samsung Galaxy","Nokia 6","Xioami Redmi Note 4","Apple iPhone 6S","Xiaomi Mi 5s Plus","Apple iPhone 8 Plus","Fujitsu F =04E"];
function creatTable() {
	let tb ='';
	for (let i=0; i < nameProduc.length; i++) {
		tb += '<tr class="trt">';
		tb += '<td class="nameProduc">'+ nameProduc[i] + '</td>';
		tb += '<td>'+ "<button class = 'changbt1' onclick = edit(" + i + ") > Edit </button>" + '</td>'; 
		tb += '<td>'+ "<button class = 'changbt' onclick = dele(" + i + ")> Delete </button>" + '</td>';
		tb += '</tr>';
	}
	document.getElementById('tables').innerHTML= tb;

}
function edit(i){
	let edit1 = prompt("thay dôi");
	nameProduc[i] =edit1;
	creatTable();
}
function dele(i){
	nameProduc.splice(i, 1);
	creatTable();
	countproduc();
	
}
function add(){
	let ad =document.getElementById('addd').value;
	nameProduc.push(ad);
	creatTable();
	countproduc();
}
function countproduc(){
	let count =0;
	for (let i =0; i < nameProduc.length; i++) {
		
		count ++;
	}
document.getElementById('shows').innerHTML = count +" Products ";

}
creatTable();