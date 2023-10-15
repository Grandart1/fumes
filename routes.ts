import express from "express";
import {GameController} from "./controller/game.ts";
import {AchievementController} from "./controller/achievement.ts";
const router = express.Router();

const gameController: GameController = GameController.getInstance()
const achievementController: AchievementController = AchievementController.getInstance()

router.get("/games", gameController.getGames);

router.get("/games/:id/achievements", achievementController.getAchievements);

module.exports = router;
