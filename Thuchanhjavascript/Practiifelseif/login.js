function logIn() {
	let username=prompt("Hãy nhập tên");
	if (document.getElementById('username')='Admin') {
		let pass=prompt("hay nhập mật khẩu");
		if (document.getElementById('username')==TheMaster)
		   {
			alert('Welcome');
		    }

		    else if (document.getElementById('pass')==null) {
		    	alert('Cancle');
		    }else 
		    	alert('Wrong PassWord');
	else if (document.getElementById('username')==null) 
		       {
			 	alert('Cancle');
		    } 
		    else
		   //alert(' “I don’t know you"');
		   document.getElementById("butto").innerHTML="I don’t know you";
	} 
}