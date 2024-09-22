import { Grid } from "./grid";

export class Robot {
  private x: number;
  private y: number;
  private orientation: string;
  private grid: Grid;
  private lost: boolean = false;

  constructor(x: number, y: number, orientation: string, grid: Grid) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
    this.grid = grid;
  }

  turnLeft(): void {
    this.orientation = this.grid.turnLeft(this.orientation);
  }

  turnRight(): void {
    this.orientation = this.grid.turnRight(this.orientation);
  }

  moveForward(): void {
    const [newX, newY] = this.grid.move(this.x, this.y, this.orientation);

    if (this.grid.isOutOfBounds(newX, newY)) {
      if (!this.grid.isScented(this.x, this.y)) {
        this.lost = true;
        this.grid.leaveScent(this.x, this.y);
      }
    } else {
      this.x = newX;
      this.y = newY;
    }
  }

  getPosition(): string {
    return `${this.x} ${this.y} ${this.orientation} ${
      this.lost ? "LOST" : ""
    }`.trim();
  }

  isLost(): boolean {
    return this.lost;
  }
}
