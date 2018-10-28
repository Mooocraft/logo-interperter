let editor;
let turtle;

function setup() {
	createCanvas(200, 200);
	angleMode(DEGREES);
	background(0);
	turtle = new Turtle(100, 100, 0);
	editor = select('#code');
	editor.input(goTurtle);
	goTurtle();
}

function goTurtle() {
	background(0);
	push();
	turtle.reset();
	let code = editor.value();
	let tokens = code.split(' ');
	let index = 0;
	while (index < tokens.length) {
		let token = tokens[index];
		if (commands[token]) {
			if (token.charAt(0) === 'p' || token.charAt(0) === 'c') {
				commands[token]();
			}else if (token.includes("setxy")) {
				console.log(index);
				commands[token](tokens[++index], tokens[index+1]);
				console.log(index);
			}else {
				commands[token](tokens[++index]);
			}
		}
		index++;
	}
	pop();
}

function change() {
	location.assign("http://logointerp.tk/standalone");
}
