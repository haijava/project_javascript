function testScoreSt() {
	let scoPhysi =parseInt(prompt("nhập điểm môn vật lý"));
	 while ((scoPhysi<0)||(scoPhysi>10)) {
	 	alert('bạn vừa mới nhập  sai điểm môn vật lý');
	 	scoPhysi =parseInt(prompt("nhập điểm môn vật lý"));
	 }
   let scoChemi =parseInt(prompt("nhập điểm môn hóa học"));
	 while ((scoChemi<0)||(scoChemi>10)) {
	 	alert('bạn vừa mới nhập  sai điểm môn hóa học');
	 	scoChemi =parseInt(prompt("nhập điểm môn hóa học"));
	 }
	 let scoBio =parseInt(prompt("nhập điểm môn sinh học"));
	 while ((scoBio<0)||(scoBio>10)) {
	 	alert('bạn vừa mới nhập  sai điểm môn sinh học');
	 	scoBio =parseInt(prompt("nhập điểm môn sinh học"));
	 }
	let total=scoPhysi + scoChemi + scoBio;
	let average;
	average=(scoPhysi + scoChemi + scoBio)/3;
	average=(scoPhysi + scoChemi + scoBio)/3;
	document.write("tổng điểm  các môn học:"+total);
	document.write("<br/>");
	document.write("tổng điểm trung bình các môn học:"+average);
	
}