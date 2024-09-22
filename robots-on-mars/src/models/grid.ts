export class Grid {
  private maxX: number;
  private maxY: number;
  private scents: Set<string> = new Set();

  constructor(maxX: number, maxY: number) {
    this.maxX = maxX;
    this.maxY = maxY;
  }

  turnLeft(orientation: string): string {
    const DIRECTIONS = ["N", "W", "S", "E"];
    return this.rotate(orientation, DIRECTIONS);
  }

  turnRight(orientation: string): string {
    const DIRECTIONS = ["N", "E", "S", "W"];
    return this.rotate(orientation, DIRECTIONS);
  }

  move(x: number, y: number, orientation: string): [number, number] {
    const MOVES: { [key: string]: [number, number] } = {
      N: [0, 1],
      E: [1, 0],
      S: [0, -1],
      W: [-1, 0],
    };
    const [dx, dy] = MOVES[orientation];
    return [x + dx, y + dy];
  }

  isOutOfBounds(x: number, y: number): boolean {
    return x < 0 || y < 0 || x > this.maxX || y > this.maxY;
  }

  isScented(x: number, y: number): boolean {
    return this.scents.has(`${x},${y}`);
  }

  leaveScent(x: number, y: number): void {
    this.scents.add(`${x},${y}`);
  }

  private rotate(orientation: string, directions: string[]): string {
    const index = directions.indexOf(orientation);
    return directions[(index + 1) % 4];
  }
}
