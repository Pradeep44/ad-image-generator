import {Request, Response} from "express";
import * as functions from "firebase-functions";

export const subscribe = async (req: Request, res: Response) => {
    res.status(303).redirect(
        `${functions.config().myconfig.stripeCheckoutURL}`,
    );
};
