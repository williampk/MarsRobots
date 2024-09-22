import { Command } from "@/interfaces/command";
import { TurnLeftCommand } from "./commands/turn-left-command";
import { TurnRightCommand } from "./commands/turn-right-command";
import { MoveForwardCommand } from "./commands/move-forward-command";

class CommandFactory {
  createCommand(instruction: string): Command {
    switch (instruction) {
      case "L":
        return new TurnLeftCommand();
      case "R":
        return new TurnRightCommand();
      case "F":
        return new MoveForwardCommand();
      default:
        throw new Error(`Unknown command: ${instruction}`);
    }
  }
}

const commandFactory = new CommandFactory();
export default commandFactory;
