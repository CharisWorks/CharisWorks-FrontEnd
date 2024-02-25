//@ts-ignore
import { expect, test } from "bun:test";
import { FirebaseRequestImpl, ManufacturerRequestImpl, UserRequestImpl } from "../lib/firebase";
import { auth } from "../firebase";

test("email is not verified", async () => {
    await FirebaseRequestImpl.SignInWithEmail(auth, "hoge@example.com", "example")
    const idToken = await auth.currentUser?.getIdToken()
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
test("create user", async () => {
    await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
    const idToken = await auth.currentUser?.getIdToken()
    if (idToken) {
        const user = UserRequestImpl(idToken)
        await user.Get().catch((e) => {
            expect(e.message).toBe("creating user for DB")
        })

    } else {
        throw new Error("idToken is null")
    }
})

test("get user", async () => {
    await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
    const idToken = await auth.currentUser?.getIdToken()
    if (idToken) {
        const user = UserRequestImpl(idToken)
        const user_data = await user.Get().catch((e) => {
            expect(e.message).toBe("creating user for DB")
        })
        if (user_data) {
            expect(user_data.user_id).toBe("WQElviFCW3TEV77prNZB7Q2TwGt2")
        } else {
            throw new Error("user_data is null")
        }
    } else {
        throw new Error("idToken is null")
    }
})
//住所登録あたりの処理がまだなので先送り
test("住所が登録されていないのに口座登録しようとしたらエラー", async () => {
    await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
    const idToken = await auth.currentUser?.getIdToken()
    if (idToken) {
        const manufacturer = ManufacturerRequestImpl(idToken)
        const res = await manufacturer.CreateAccountRequest().catch((e) => {
            expect(e.message).toBe("住所が登録されていません。")
        })
    } else {
        throw new Error("idToken is null")
    }
})