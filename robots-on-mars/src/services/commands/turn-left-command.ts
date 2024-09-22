import { Command } from "@/interfaces/command";
import { Robot } from "@/models/robot";

export class TurnLeftCommand implements Command {
  execute(robot: Robot): void {
    robot.turnLeft();
  }
}
