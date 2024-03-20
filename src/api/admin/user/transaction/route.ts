import { NextApiRequest, NextApiResponse } from "next";
import { getTransaction } from "../api";
import { Transaction } from "@/api/models/transaction";

export async function GET(req: NextApiRequest, res: NextApiResponse<Transaction[]>) {
    const jwt = req.headers.authorization;
    if (!jwt) {
        throw new Error("JWT is not set");
    }
    const body: { userId: string } = req.body;
    if (!body.userId) {
        throw new Error("userId is not set");
    }
    const r = await getTransaction(jwt, body.userId).catch((e) => {
        throw new Error(e);
    });
    console.log("r: ", r);
    res.status(200).json(JSON.parse(r));
}
