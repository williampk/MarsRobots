import { Grid } from "@/models/grid";
import { Robot } from "@/models/robot";
import { RobotController } from "./robot-controller";

class Simulator {
  run(input: string[]): string[] {
    const [maxX, maxY] = input[0].split(" ").map(Number);
    const grid = new Grid(maxX, maxY);
    const results: string[] = [];

    for (let i = 1; i < input.length; i += 2) {
      const [x, y, orientation] = input[i].split(" ");
      const instructions = input[i + 1];
      const robot = new Robot(parseInt(x), parseInt(y), orientation, grid);
      const controller = new RobotController(robot, instructions);

      controller.executeCommands();
      results.push(controller.getFinalPosition());
    }

    return results;
  }
}

const simulator = new Simulator();

export default simulator;
