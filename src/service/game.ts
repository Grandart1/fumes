import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class GameService {
  private static instance: GameService;
  private constructor() {}

  public static getInstance(): GameService {
    if (!this.instance) {
      this.instance = new GameService();
    }
    return this.instance;
  }

  public async getGames() {
    return prisma.game.findMany();
  }
}
