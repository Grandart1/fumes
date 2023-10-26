import { PrismaClient } from "@prisma/client";
import { AchievementService } from "../service/achievement.ts";
const prisma = new PrismaClient();

const achievementService: AchievementService = AchievementService.getInstance();

export class AchievementController {
  private static instance: AchievementController;
  private constructor() {}

  // This is a design pattern
  // Design patterns are great ideas that end up being used everywhere.
  // This design pattern is called Singleton
  // The idea behind Singleton is that instead of everyone creating their own AchievementController,
  // Which would generate more code in different places as well as use more memory
  // Instead, the Singleton pattern creates just one instance and shares with everyone
  // Other design patters: https://refactoring.guru/design-patterns
  public static getInstance(): AchievementController {
    if (!this.instance) {
      this.instance = new AchievementController();
    }
    return this.instance;
  }

  // Controllers are responsible for getting the API call,
  // preparing it to be processed and sending it to the Service for processing
  public async getAchievements(req: any, res: any) {
    // This is called object deconstructing:
    // The syntax for this is:
    // const { <attribute name>: <variable name> } = object
    // What it does is that you can get the properties in a more simplified way.
    // It is equivalent to:
    // const gameId = req.params.id;
    const { id: gameId } = req.params;

    // +gameId is utilized to convert gameId from a String to a Number.
    // Everything that we get from req is going to be a string, object or list.
    // +gameId means 0 + gameId, which forces the string to behave like a number
    const achievements = await achievementService.getAchievements(+gameId);
    res.send({ achievements });
  }
}
