import {Request, Response} from "express";

export const generateOverlay= async (req: Request, res: Response) => {
    const svg =`
        <svg width="1024" height="1024">
        <defs>
            <linearGradient id="gradient">
            <stop offset="0%" stop-color="#000000" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
            </linearGradient>
        </defs>
        <rect x="0" y="0" width="1024" height="1024" fill="url(#gradient)"/>
        <text x="50%" y="20%" font-size="50" text-anchor="middle"
            dominant-baseline="middle" font-weight="bold">
            ${req.query.title}
        </text>
        <rect x="50%" y="80%" width="200" height="50" rx="10" fill="#007bff"/>
        <text x="50%" y="85%" font-size="20" text-anchor="middle"
            dominant-baseline="middle" fill="#ffffff">
            Buy Now!
        </text>
        </svg>
    `;

    res.status(200).json({svg});
};
