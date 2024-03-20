import { NextApiRequest, NextApiResponse } from "next";
import { getAllItem, removeItem } from "./api";
import { itemPreviewList } from "../../models/item";


export async function GET(req: NextApiRequest, res: NextApiResponse<itemPreviewList | null>) {
    const jwt = req.headers.authorization;
    if (!jwt) {
        throw new Error("JWT is not set");
    }
    const r = await getAllItem(jwt).catch((e) => {
        throw new Error(e);
    });
    console.log("r: ", r);
    if (r === null) {
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
    const itemId = req.query.id as string;
    if (!itemId) {
        throw new Error("itemId is not set");
    }
    const r = await removeItem(jwt, itemId).catch((e) => {
        throw new Error(e);
    });
    console.log("r: ", r);
    if (r === null) {
        res.status(404).json({ msg: "error" });
    } else {
        res.status(200).json({ msg: "success" });
    }
}
