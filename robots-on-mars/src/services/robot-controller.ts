import { Robot } from "@/models/robot";
import commandFactory from "./command-factory";
import { Command } from "@/interfaces/command";

export class RobotController {
  private robot: Robot;
  private commands: Command[] = [];

  constructor(robot: Robot, instructions: string) {
    this.robot = robot;
    this.commands = instructions.split("").map(commandFactory.createCommand);
  }

  executeCommands(): void {
    for (const command of this.commands) {
      if (!this.robot.isLost()) {
        command.execute(this.robot);
      }
    }
  }

  getFinalPosition(): string {
    return this.robot.getPosition();
  }
}
