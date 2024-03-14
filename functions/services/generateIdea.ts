
import {Request, Response} from "express";
import Axioslib from "axios";
import {firebaseApp} from "../firebase/config";
import * as functions from "firebase-functions";

const db = firebaseApp.firestore();

export const generateIdea = async (req: Request, res: Response) => {
    const product = req.body.product;
    try {
        const prompt =
            `Generate 1 creative and effective image ad idea for ${product}.`;

        const reqBody = {
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            model: `${functions.config().myconfig.chatGPTModel}`,
        };
        const chatGPTKey = functions.config().myconfig.chatGPTSecretKey;
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${chatGPTKey}`,
        };
        const result = await Axioslib.post(
            `${functions.config().myconfig.chatGPTURL}`,
            reqBody,
            {headers});

        await db.collection("logs").add({
            timestamp: Date.now(),
            product,
            response: result.data,
            endpoint: "/generate-image/idea",
        });

        res.status(200).json({idea: result.data});
    } catch (error: unknown) {
        console.log(error);
        throw new Error("Internal server error");
    }
};
