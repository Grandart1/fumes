import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class AchievementService {
  private static instance: AchievementService;
  private constructor() {}

  public static getInstance(): AchievementService {
    if (!this.instance) {
      this.instance = new AchievementService();
    }
    return this.instance;
  }

  public async getAchievements(gameId: number) {
    return prisma.achievement.findMany({ where: { gameId } });
  }
}
