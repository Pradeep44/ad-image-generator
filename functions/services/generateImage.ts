import {Request, Response} from "express";
import * as functions from "firebase-functions";
import AxiosLib from "axios";

export const generateImage = async (req: Request, res: Response) => {
    try {
        const productAdIdea = req.body.productAdIdea;

        const requestBody = {
            text_prompts: [
                {
                    text: productAdIdea,
                    weight: 1,
                },
            ],
            height: 1024,
            width: 1024,
            steps: 20,
            cfg_scale: 4,
        };
        const stabilityKey = functions.config().myconfig.stabilityAISecretKey;
        const headers = {
            "Accept": "application/json",
            "Authorization": `Bearer ${stabilityKey}`,
        };

        const result = await AxiosLib.post(
            `${functions.config().myconfig.stabilityAIURL}`,
            requestBody,
            {headers});

        res.status(200).json({image: result.data.artifacts[0].base64});
    } catch (error: unknown) {
        console.log(error);
        throw new Error("Internal server error");
    }
};
