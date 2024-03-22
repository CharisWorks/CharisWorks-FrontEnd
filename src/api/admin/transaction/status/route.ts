import { NextApiRequest, NextApiResponse } from "next";
import { registerStatus } from "@/api/admin/transaction/api";

export async function POST(req: NextApiRequest, res: NextApiResponse<{ msg: string }>) {
    const jwt = req.headers.authorization;
    if (!jwt) {
        throw new Error("JWT is not set");
    }
    const body: { userId: string, status: string } = req.body;
    if (!body.userId) {
        throw new Error("userId is not set");
    }
    if (!body.status) {
        throw new Error("status is not set");
    }
    const r = await registerStatus(jwt, body.userId, body.status).catch((e) => {
        throw new Error(e);
    });
    console.log("r: ", r);

    res.status(200).json({ msg: r });
}
