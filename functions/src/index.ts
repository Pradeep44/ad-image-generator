import * as functions from "firebase-functions";
import * as express from "express";
import * as dotenv from "dotenv";

import {validateSecretKey} from "../middleware/validateSecretKey";
import {generateIdea} from "../services/generateIdea";
import {generateImage} from "../services/generateImage";
import {generateOverlay} from "../services/generateOverlay";
import {subscribe} from "../services/subscribe";

dotenv.config();

const app = express();

functions.config().myconfig = {
    secret_key: process.env.SECRET_KEY,
    chatGPTURL: "https://api.openai.com/v1/chat/completions",
    chatGPTModel: "gpt-3.5-turbo-0125",
    chatGPTSecretKey: process.env.CHATGPT_SECRET_KEY,
    stabilityAIURL: "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image",
    stabilityAISecretKey: process.env.STABILITYAI_SECRET_KEY,
    stripeCheckoutURL: process.env.STRIPE_CHECKOUT_URL,
};


app.all("*", validateSecretKey);

app.post("/image/genIdea", generateIdea);
app.post("/image/gen", generateImage);
app.get("/image/genOverlay", generateOverlay);
app.get("/subscribe", subscribe);

exports.app = functions.runWith({timeoutSeconds: 300}).https.onRequest(app);
