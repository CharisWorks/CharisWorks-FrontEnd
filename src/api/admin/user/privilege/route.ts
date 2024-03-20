import { NextApiRequest, NextApiResponse } from "next";
import { privilegeUser } from "@/api/admin/user/api";

export async function POST(req: NextApiRequest, res: NextApiResponse<{ msg: string }>) {
    const jwt = req.headers.authorization;
    if (!jwt) {
        throw new Error("JWT is not set");
    }
    const body: { userId: string } = req.body;
    if (!body.userId) {
        throw new Error("userId is not set");
    }
    const r = await privilegeUser(jwt, body.userId).catch((e) => {
        throw new Error(e);
    });
    console.log("r: ", r);

    res.status(200).json({ msg: r });
}
