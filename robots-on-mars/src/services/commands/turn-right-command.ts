import { Command } from "@/interfaces/command";
import { Robot } from "@/models/robot";

export class TurnRightCommand implements Command {
  execute(robot: Robot): void {
    robot.turnLeft();
  }
}
