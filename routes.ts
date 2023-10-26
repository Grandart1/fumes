import express from "express";
import {GameController} from "./src/controller/game.ts";
import {AchievementController} from "./src/controller/achievement.ts";
const router = express.Router();

const gameController: GameController = GameController.getInstance()
const achievementController: AchievementController = AchievementController.getInstance()

// When we pass getGames to the router.get function we are passing it as a callback function.
// Callback functions are functions that will be called by other functions.
// It's basically this:
// The router needs a function to which it can send the API request
// We tell him that he should use getGames, and inside the routers code it will use it by himself.
router.get("/games", gameController.getGames);

router.get("/games/:id/achievements", achievementController.getAchievements);

module.exports = router;
