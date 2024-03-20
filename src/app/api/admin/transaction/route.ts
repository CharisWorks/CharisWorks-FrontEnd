import { getTransaction, getAllTransaction } from "./api";
import { NextApiRequest, NextApiResponse } from "next";
import { TransactionDetail } from "@/app/api/models/transaction";

export async function GET(req: NextApiRequest, res: NextApiResponse<TransactionDetail[] | null>) {
    const jwt = req.headers.authorization;
    if (!jwt) {
        throw new Error("JWT is not set");
    }
    const userId: string = req.query.id as string;
    let r: string | null = null;
    if (userId) {
        r = await getTransaction(jwt, userId).catch((e) => {
            throw new Error(e);
        })
    } else {
        r = await getAllTransaction(jwt).catch((e) => {
            throw new Error(e);
        });
    }

    console.log("r: ", r);
    if (!r) {
        res.status(404).json(null);
    } else {
        res.status(200).json(JSON.parse(r));
    }
}
