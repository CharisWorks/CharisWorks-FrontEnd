import { getTransaction, getAllUser } from "./api";
import { NextApiRequest, NextApiResponse } from "next";
import { TransactionDetail } from "@/app/api/models/transaction";
import { internalUser } from "../../models/user";

export async function GET(req: NextApiRequest, res: NextApiResponse<internalUser[] | null>) {
    const jwt = req.headers.authorization;
    if (!jwt) {
        throw new Error("JWT is not set");
    }
    let r: string | null = null;
    r = await getAllUser(jwt).catch((e) => {
        throw new Error(e);
    });

    console.log("r: ", r);
    if (!r) {
        res.status(404).json(null);
    } else {
        res.status(200).json(JSON.parse(r));
    }
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse<{ msg: string }>) {
    const jwt = req.headers.authorization;
    if (!jwt) {
        throw new Error("JWT is not set");
    }
    const userId = req.query.id as string;
    if (!userId) {
        throw new Error("userId is not set");
    }
    const r = await getTransaction(jwt, userId).catch((e) => {
        throw new Error(e);
    });
    console.log("r: ", r);
    if (r === null) {
        res.status(404).json({ msg: "error" });
    } else {
        res.status(200).json({ msg: "success" });
    }
}
