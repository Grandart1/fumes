import { PrismaClient } from "@prisma/client";
import { GameService } from "../service/game.ts";
const prisma = new PrismaClient();

const gameService: GameService = GameService.getInstance();

export class GameController {
  private static instance: GameController;
  private constructor() {}

  public static getInstance(): GameController {
    if (!this.instance) {
      this.instance = new GameController();
    }
    return this.instance;
  }

  public async getGames(req: any, res: any) {
    const games = await gameService.getGames();
    res.send({ games });
  }
}
