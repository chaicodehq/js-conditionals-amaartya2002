/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here

  const monthObj = {
    "Winter": [1, 2, 12],
    "Spring": [3, 4, 5],
    "Summer": [6, 7, 8],
    "Autumn": [9, 10, 11]
  }

  const returnObj = {
    season: null,
    activity: null
  }

  if (month >= 1 && month <= 12) {


    if (monthObj["Winter"].includes(month)) {
      returnObj.season = "Winter"
      if (temperature < 0) {
        returnObj.activity = "skiing"
      } else {
        returnObj.activity = "ice skating"
      }
    } else if (monthObj["Spring"].includes(month)) {
      returnObj.season = "Spring"

      if (temperature > 20) {
        returnObj.activity = "hiking"
      } else {
        returnObj.activity = "museum visit"
      }
    } else if (monthObj["Summer"].includes(month)) {

      returnObj.season = "Summer"

      if (temperature > 35) {
        returnObj.activity = "swimming"
      } else {
        returnObj.activity = "cycling"
      }

    } else {
      returnObj.season = "Autumn"

      if (temperature > 15) {
        returnObj.activity = "nature walk"
      } else {
        returnObj.activity = "reading at a cafe"
      }
    }

  } else {
    return null
  }

  return returnObj
}
