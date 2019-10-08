let canvas = document.getElementById('myCanvas');
let ctx	   = canvas.getContext("2d");
let ballx = canvas.width/2;
let bally = canvas.height -16;
let dx = 3;
let dy = 3;
let ballRadius = 8;
let paddleHeight = 8;
let paddleWidth = 100;
let paddleX = (canvas.width-paddleWidth)/2;
let paddleY = canvas.height - paddleHeight;
let leftPress = false;
let rightPress = false ;
//tạo mục tiêu
let colHeart =8;
let roHeart = 3;
let widHeart =50;
let heiHeart = 37;
let ofsetTopHeart =15;
let ofsetLefHeart =40;
let heartPad = 25;
let score =0;
let objImage = document.getElementById('imgg');
let live =5;
let level =1;
document.getElementById("lli").innerHTML = live;
document.getElementById("lle").innerHTML = level;

let heart = [];
for(let c=0; c < colHeart; c++) {
	heart[c] = [];
	for(let r=0; r<roHeart; r++) {
		heart[c][r] = { ballx: 0, bally: 0, status: 1 };
	}
}
function checkHeart(){
	
	for(let c=0; c < colHeart; c++) {

		for(let r=0; r<roHeart; r++) {
			if (heart[c][r].status == 1) {
				return false;
			}
		}

	}
	return true;
}
document.addEventListener("keydown", keyDownPress, false);
document.addEventListener("keyup", keyUpPress, false);
function keyDownPress(e) {
	if(e.keyCode === 39) {
		rightPress = true;
	}
	else if(e.keyCode === 37) {
		leftPress = true;
	}
}
function keyUpPress(e) {
	if(e.keyCode === 39) {
		rightPress = false;
	}
	else if( e.keyCode === 37) {
		leftPress = false;
	}
}
function collisionHeart() {
	for (let c = 0; c < colHeart; c++) {
		for (let r = 0; r < roHeart; r++) {
			let b = heart[c][r];
			if (b.status == 1) {
				if (ballx > b.ballx && ballx < (b.ballx + widHeart) && bally > b.bally && bally < (b.bally + heiHeart)) {
					dy = -dy;
					heart[c][r].status = 0;
					score++;
					document.getElementById('sco').innerHTML= score;
					if (checkHeart()) {
						levelCon();
					}

				}

			}
		}
	}
}
function drawBall() {
	ctx.beginPath();
	ctx.arc(ballx, bally, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "blue";
	ctx.fill();
	ctx.closePath();
}
function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
	ctx.fillStyle = "green";
	ctx.fill();
	ctx.closePath();
}
function drawHeart() {
	for (let c = 0; c < colHeart; c++) {
		for (let r = 0; r < roHeart; r++) {
			if (heart[c][r].status == 1) {
				let heartX = (c * (widHeart + heartPad)) + ofsetLefHeart;
				let heartY = (r * (heiHeart + heartPad)) + ofsetTopHeart;
				heart[c][r].ballx = heartX;
				heart[c][r].bally = heartY;
				ctx.drawImage(objImage,heartX,heartY,widHeart,heiHeart);
			}
		}
	}

}
function colinCanvas(){

	if(ballx  > canvas.width-ballRadius || ballx  < ballRadius) 
		dx = -dx;
	if (bally  > canvas.height - ballRadius || bally  < ballRadius) {
		dy = -dy;
	}
	ballx+=dx;
	bally+=dy;
}
function colinPaddel(){
	if (bally + ballRadius > paddleY) {
		if(ballx > paddleX  && ballx < paddleX + paddleWidth){
			dy =-dy;
		} else 

		if (bally + ballRadius>canvas.height) {
			live --;
			document.getElementById("lli").innerHTML = live;
			if (!live) {

				alert("BẠN THUA RỒI !!!");
				document.location.reload();
			}
			else{
				ballx = canvas.width/2;
				bally = canvas.height - 16;
				dx = 3;
				dy = -3;
				paddleX = (canvas.width-paddleWidth)/2;
			}

		}

	}
}
function levelCon(){
	alert("CHÚC MỪNG BẠN!!!");
	ballx = canvas.width/2;
	bally = canvas.height - 16;
	paddleX = (canvas.width-paddleWidth)/2;
	level++;
	document.getElementById("lle").innerHTML = level;
	dx < 0 ? dx-- : dx++;
	dy < 0 ? dy-- : dy++;
	for(let c=0; c < colHeart; c++) {
		heart[c] = [];
		for(let r=0; r<roHeart; r++) {
			heart[c][r] = { ballx: 0, bally: 0, status: 1 };
		}
	}
	
}
function draw(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	drawHeart();
	drawBall();
	drawPaddle();
	collisionHeart();
	colinPaddel();
	colinCanvas();
	if(rightPress&& paddleX < canvas.width-paddleWidth) {
		paddleX += 7;
	}
	else if(leftPress && paddleX >0) {
		paddleX -= 7;

	}

	requestAnimationFrame(draw);
}
draw();

