import { Robot } from "@/models/robot";

export interface Command {
  execute(robot: Robot): void;
}
