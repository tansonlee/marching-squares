class Grid {
	constructor(width, height) {
		this.w = 10;
		this.cols = width / this.w + 1;
		this.rows = height / this.w + 1;
		this.grid = [];
		this.toff = 0;
	}

	fillGrid() {
		let xoff = 0;

		for (let i = 0; i < this.cols; i++) {
			let row = [];
			let yoff = 0;
			for (let j = 0; j < this.rows; j++) {
				// row.push(random(1));
				// row.push(floor(random() * 2));
				row.push(noise(xoff, yoff, this.toff));
				yoff += 0.15;
			}
			this.grid[i] = row;
			xoff += 0.15;
		}

		this.toff += 0.01;
	}

	render() {
		for (let i = 0; i < this.cols; i++) {
			for (let j = 0; j < this.rows; j++) {
				strokeWeight(2);

				stroke(this.grid[i][j] * 255);

				// if (this.grid[i][j] > 0.5) {
				// 	// stroke(0);
				// 	stroke(this.grid[i][j] * 255);
				// } else {
				// 	stroke(255);
				// 	// stroke(this.grid[i][j] * 255);
				// }

				point(i * this.w, j * this.w);
			}
		}
	}
}
