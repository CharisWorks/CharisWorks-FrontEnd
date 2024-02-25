//@ts-ignore
import { expect, test } from "bun:test";

import { FirebaseApp, initializeApp } from "firebase/app";
import { connectAuthEmulator, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseRequestImpl, ItemRequestImpl, UserRequestImpl } from "../lib/firebase";
import { UserRequests } from "../user";
import { AuthFetchRequests, FetchRequests } from "../fetch";
import { ItemRequests } from "../item";
import { auth } from "../firebase";

test("email is not verified", async () => {
    await FirebaseRequestImpl.SignInWithEmail(auth, "hoge@example.com", "example")
    const idToken = await auth.currentUser?.getIdToken()
    console.log("idToken: ", idToken)
    if (idToken) {
        const user = UserRequestImpl(idToken)
        await user.Get().catch((error) => {
            console.log(error)
            expect(error.message).toBe("email is not verified")
        })
    } else {
        throw new Error("idToken is null")
    }
});

test("SignIn fail", async () => {
    await FirebaseRequestImpl.SignInWithEmail(auth, "owatanabe26@gmail.com", "example").catch((error) => {
        expect(error.code).toBe("auth/invalid-credential")
    })
});
