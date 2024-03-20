"use server"

import { User } from "firebase/auth";

export async function getIdToken(user: User): Promise<string> {
    const idToken = await user.getIdToken()
    return idToken
}