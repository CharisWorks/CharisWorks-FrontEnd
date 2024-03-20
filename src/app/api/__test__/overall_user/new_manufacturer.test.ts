//@ts-ignore
import { expect, test } from "bun:test";
//@ts-ignore
import { describe } from "bun:test";
import { CartRequestImpl, FirebaseRequestImpl, ManufacturerRequestImpl, StripeRequestImpl, UserRequestImpl } from "../../lib/firebase";
import { auth } from "../../firebase";
import { Address, Profile, profileUpdatePayload } from "../../models/user";
import { Cart, CartRegisterPayload } from "../../models/cart";
import { getAllUser, privilegeUser } from "../../admin/user/api";

describe("overall user test for before manufacturer user", () => {
    test("Eメール認証後、サーバーにデータがない状態", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const user_data = await fetch("http://localhost:8080/api/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${idToken}`
                }
            }).then((res) => res.json())
            if (user_data) {
                expect(user_data.user_id).toBe("S9Dpcw3x4nPcROe2DOv3MjW3Ry42")
            }
        } else {
            return
        }
    })
    test("一般ユーザーが商品を出品しようとしたらエラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const manufacturer = ManufacturerRequestImpl(idToken)
            const item = {
                name: "test",
                price: 1000,
                details: {
                    stock: 10,
                    size: 10,
                    description: "test",
                    tags: ["test"]
                }
            }
            await manufacturer.PostProducts(item).catch((e) => {
                expect(e.message).toBe("account is not satisfied")
            })
        }
    })
    test("プロフィール登録", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const user = UserRequestImpl(idToken)
            const profile: profileUpdatePayload = {
                display_name: "test",
                description: "test",
            }
            await user.UpdateProfile(profile)
            await fetch("http://localhost:8080/api/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${idToken}`
                }
            }).then((res) => res.json()
            ).then((user) => {
                expect(user.profile.description).toEqual(profile.description)
                expect(user.profile.display_name).toEqual(profile.display_name)
            })
        }
    })
    test("一般ユーザーが商品を出品しようとしたらたとえプロフィールが登録されていたとしてもエラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const manufacturer = ManufacturerRequestImpl(idToken)
            const item = {
                name: "test",
                price: 1000,
                details: {
                    stock: 10,
                    size: 10,
                    description: "test",
                    tags: ["test"]
                }
            }
            await manufacturer.PostProducts(item).catch((e) => {
                expect(e.message).toBe("account is not satisfied")
            })
        }
    })
    test("権限ないのにstripeのアカウントを作成しようとしてエラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const stripe = ManufacturerRequestImpl(idToken)
            await stripe.CreateAccountRequest().catch((e) => {
                expect(e.message).toBe("unauthorized")
            })
        }
    })

    test("住所登録", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const user = UserRequestImpl(idToken)
            const address: Address = {
                zip_code: "123-4567",
                address_1: "東京都渋谷区",
                address_2: "道玄坂1-2-3",
                address_3: "",
                phone_number: "090-1234-5678",
                first_name: "太郎",
                last_name: "山田",
                first_name_kana: "タロウ",
                last_name_kana: "ヤマダ"
            }
            await user.PostAddress(address).catch((e) => {
                expect(e.message).toBe("invalid user request")
            })
            const user_data = await fetch("http://localhost:8080/api/user", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${idToken}`
                }
            }).then((res) => res.json())
            if (user_data) {
                expect(user_data.address).toEqual(address)
            }
        } else {
            return
        }
    })
    test("権限昇格", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            privilegeUser(idToken, "S9Dpcw3x4nPcROe2DOv3MjW3Ry42")
            getAllUser(idToken).then((users) => {
                console.log(users)
            })
        }

    })

    test("ユーザー削除", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const user = UserRequestImpl(idToken)
            await user.Delete()
        }
    })


})
