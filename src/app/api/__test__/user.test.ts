//@ts-ignore
import { expect, test } from "bun:test";
//@ts-ignore
import { describe } from "bun:test";
import { CartRequestImpl, FirebaseRequestImpl, ManufacturerRequestImpl, StripeRequestImpl, UserRequestImpl } from "../lib/firebase";
import { auth } from "../firebase";

describe("invalid user test", () => {
    test("email is not verified", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "hoge@example.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const user = UserRequestImpl(idToken)
            await user.Get().catch((error) => {
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

})

describe("fullfilled user test", () => {
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
            return
        }
    })
    test("口座を持っているのにアカウントを作成しようとしたらエラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const manufacturer = ManufacturerRequestImpl(idToken)
            const res = await manufacturer.CreateAccountRequest().catch((e) => {
                expect(e.message).toBe("manufacturer already has bank")
            })
        } else {
            return
        }

    })
    test("空カート取得", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            CartRequestImpl(idToken).Get().then((res) => {
                expect(res.items).toBe(null)
            }
            )
        } else {
            return
        }


    })
    test("空カートで購入エラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const stripeReq = StripeRequestImpl(idToken)
            await stripeReq.Buy().catch((e) => {
                expect(e.message).toBe("cart is empty")
            }
            )
        } else {
            console.log("idToken is null")
        }
    })
})

