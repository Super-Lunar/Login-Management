import { config} from "dotenv";
config();

export let name = process.env.NAME;
export let age = process.env.AGE;
export let hasCar = process.env.HAS_CAR;
export let  secreteKey = process.env.SECRET_KEY ; // Corrected spelling
