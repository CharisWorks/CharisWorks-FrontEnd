import { NextApiRequest, NextApiResponse } from "next";
import { registerTrackingId } from "../api";

export async function POST(req: NextApiRequest, res: NextApiResponse<{ msg: string }>) {
    const jwt = req.headers.authorization;
    if (!jwt) {
        throw new Error("JWT is not set");
    }
    const body: { userId: string, trackingId: string } = req.body;
    const r = await registerTrackingId(jwt, body.userId, body.trackingId).catch((e) => {
        throw new Error(e);
    });
    console.log("r: ", r);

    res.status(200).json({ msg: r });
}
