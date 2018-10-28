const commands = {
	"fd" : function (amt) {
		turtle.forward(amt);
	},
	"bd" : function (amt) {
		turtle.forward(-amt);
	},
	"rt" : function (angle) {
		turtle.right(angle);
	},
	"lt" : function (angle) {
		turtle.right(-angle);
	},
	"pu" : function () {
		turtle.pen = false;
	},
	"pd" : function () {
		turtle.pen = true;
	},
	"cs" : function () {
		background(0);
		turtle.right(90);
	},
	"setxy" : function (setX, setY) {
		turtle.setxy(setX, setY);
	},
	"delay" : function (delay) {
		var time = millis();
		while(millis() - time <= delay);
	}
}

class Turtle {
	constructor(x, y, angle) {
		this.x = x;
		this.y = y;
		this.dir = angle;
	}

	reset() {
		translate(this.x, this.y);
		rotate(this.dir);
		this.pen = true;
	}

	forward(amt) {
		amt = parseInt(amt);
		if (this.pen) {
			stroke(255);
			strokeWeight(2);
			console.log(amt);
			line(0, 0, amt, 0);
		}
		translate(amt, 0);
	}

	right(angle) {
		//console.log(angle);
		rotate(angle);
	}

	setxy(setX, setY) {
		console.log(translate(0, 0));
		translate(setX, setY);
	}
}
