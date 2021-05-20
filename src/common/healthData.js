import { healthData } from "../data/json/healthData"

export const rating = "Crypto Rating (FCAS)";

export const cryptoRatings = healthData[rating];

export const ratingFields = Object.keys(cryptoRatings)

export const ratingScores = Object.values(cryptoRatings)