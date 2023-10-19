import { PrismaClient } from "@prisma/client";
import { AchievementService } from "../service/achievement.ts";
const prisma = new PrismaClient();

const achievementService: AchievementService = AchievementService.getInstance();

export class AchievementController {
  private static instance: AchievementController;
  private constructor() {}

  public static getInstance(): AchievementController {
    if (!this.instance) {
      this.instance = new AchievementController();
    }
    return this.instance;
  }

  public async getAchievements(req: any, res: any) {
    const { id: gameId } = req.params;
    const achievements = await achievementService.getAchievements(+gameId);
    res.send({ achievements });
  }
}
