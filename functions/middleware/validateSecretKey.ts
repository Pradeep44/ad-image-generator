import {Request, Response, NextFunction} from "express";
import * as functions from "firebase-functions";

export const validateSecretKey =
    (req: Request, res: Response, next: NextFunction) => {
        const secretKey = req.headers["secret-key"];
        const validSecretKey = functions.config().myconfig.secret_key;

        if (validSecretKey !== secretKey) {
            return res.status(403).json({
                error: "Unauthorized",
                message: "Invalid credentials",
            });
        }

        next();
    };
