let grid;

function setup() {
	createCanvas(400, 400);
	grid = new Grid(width, height);
	grid.fillGrid();
}

function draw() {
	background(0);
	grid.fillGrid();

	grid.render();

	for (let i = 0; i < grid.cols - 1; i++) {
		for (let j = 0; j < grid.rows - 1; j++) {
			let w = grid.w;
			let x = i * grid.w;
			let y = j * grid.w;
			let a = createVector(x + w / 2, y);
			let b = createVector(x + w, y + w / 2);
			let c = createVector(x + w / 2, y + w);
			let d = createVector(x, y + w / 2);

			let state = toBaseTen(
				floor(grid.grid[i][j + 1] * 2),
				floor(grid.grid[i + 1][j + 1] * 2),
				floor(grid.grid[i + 1][j] * 2),
				floor(grid.grid[i][j] * 2)
			);

			switch (state) {
				case 0:
					break;
				case 1:
					ln(a, d);
					break;
				case 2:
					ln(a, b);
					break;
				case 3:
					ln(d, b);
					break;
				case 4:
					ln(b, c);
					break;
				case 5:
					ln(a, b);
					ln(d, c);
					break;
				case 6:
					ln(a, c);
					break;
				case 7:
					ln(c, d);
					break;
				case 8:
					ln(c, d);
					break;
				case 9:
					ln(a, c);
					break;
				case 10:
					ln(a, d);
					ln(b, c);
					break;
				case 11:
					ln(b, c);
					break;
				case 12:
					ln(b, d);
					break;
				case 13:
					ln(a, b);
					break;
				case 14:
					ln(a, d);
					break;
				case 15:
					break;
			}
		}
	}
}

const ln = (v1, v2) => {
	// stroke(255);
	// strokeWeight(1);
	// line(v1.x, v1.y, v2.x, v2.y);
	console.log("");
};

const toBaseTen = (a, b, c, d) => {
	return a * 8 + b * 4 + c * 2 + d * 1;
};
