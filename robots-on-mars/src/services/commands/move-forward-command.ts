import { Command } from "@/interfaces/command";
import { Robot } from "@/models/robot";

export class MoveForwardCommand implements Command {
  execute(robot: Robot): void {
    robot.moveForward();
  }
}
