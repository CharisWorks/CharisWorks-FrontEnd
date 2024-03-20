//@ts-ignore
import { expect, test } from "bun:test";
//@ts-ignore
import { describe } from "bun:test";
import { CartRequestImpl, FirebaseRequestImpl, ManufacturerRequestImpl, StripeRequestImpl, UserRequestImpl } from "../../lib/firebase";
import { auth } from "../../firebase";
import { Address, Profile, profileUpdatePayload } from "../../models/user";
import { Cart, CartRegisterPayload } from "../../models/cart";
import { getAllUser } from "../../admin/user/api";


describe("overall user test for general user", () => {
    test("Eメール認証後、サーバーにデータがない状態", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const user_data = await fetch(
                new URL("http://localhost:8080/api/user").toString(),
                {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json', 'Authorization': `Bearer ${idToken}`
                    }),
                }).then((res) => res.json())
                .catch((e) => {
                    expect(e.message).toBe("record not found")
                })
            if (user_data) {
                expect(user_data.user_id).toBe("S9Dpcw3x4nPcROe2DOv3MjW3Ry42")
            }
        } else {
            return
        }
    })
    test("カートに商品追加(住所未登録)", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const cartreq = CartRequestImpl(idToken)
            const cart: CartRegisterPayload = {
                item_id: "test2",
                quantity: 1
            }
            await cartreq.Post(cart)
            const res = await fetch(new URL("http://localhost:8080/api/cart").toString(),
                {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json', 'Authorization': `Bearer ${idToken}`
                    }),
                }).then((res) => res.json())
            const expected: Cart = {
                items: [
                    {
                        item_id: "test2",
                        quantity: 1,
                        properties: {
                            name: "test2",
                            price: 3000,
                            details: {
                                status: "Available"
                            }
                        }
                    }]
            }
            expect(res).toEqual(expected)
        }
    })
    test("住所未登録で購入エラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const stripeReq = StripeRequestImpl(idToken)
            await stripeReq.Buy().catch((e) => {

                expect(e.message).toBe("address is not registered")
            }
            )
        } else {
            console.log("idToken is null")
        }
    })
    test("住所登録エラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const user = UserRequestImpl(idToken)
            const address: Address = {
                zip_code: "",
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
                expect(e.message).toBe("The request payload is malformed or contains invalid data.")
            })
        } else {
            return
        }
    })
    test("住所登録エラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const user = UserRequestImpl(idToken)
            const address: Address = {
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
                expect(e.message).toBe("The request payload is malformed or contains invalid data.")
            })
        } else {
            return
        }
    })
    test("住所登録エラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const user = UserRequestImpl(idToken)
            const address: Address = {
                zip_code: "1234567890",
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
                expect(e.message).toBe("The request payload is malformed or contains invalid data.")
            })
        } else {
            return
        }
    })
    test("住所登録エラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const user = UserRequestImpl(idToken)
            const address: Address = {
                zip_code: "000-0000",
                address_1: "東京都渋谷区",
                address_2: "道玄坂1-2-3",
                address_3: "",
                phone_number: "090-1234-5678",
                first_name: "太郎",
                last_name: "山田",
                first_name_kana: "たろう",
                last_name_kana: "ヤマダ"
            }
            await user.PostAddress(address).catch((e) => {
                expect(e.message).toBe("The request payload is malformed or contains invalid data.")
            })
        } else {
            return
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
            const user_data = await fetch(
                new URL("http://localhost:8080/api/user").toString(),
                {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json', 'Authorization': `Bearer ${idToken}`
                    })
                }).then((res) => res.json())
            if (user_data) {
                expect(user_data.address).toEqual(address)
            }
        } else {
            return
        }
    })
    test("住所更新", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const user = UserRequestImpl(idToken)
            const address: Address = {
                zip_code: "000-0000",
                address_1: "東京都渋谷区",
                address_2: "道玄坂1-2-3",
                address_3: "",
                phone_number: "",
                first_name: "",
                last_name: "",
                first_name_kana: "",
                last_name_kana: ""
            }
            const res = await user.UpdateAddress(address).catch((e) => {
                expect(e.message).toBe("invalid user request")
            })
            const addressToBe: Address = {
                zip_code: "000-0000",
                address_1: "東京都渋谷区",
                address_2: "道玄坂1-2-3",
                address_3: "",
                phone_number: "090-1234-5678",
                first_name: "太郎",
                last_name: "山田",
                first_name_kana: "タロウ",
                last_name_kana: "ヤマダ"
            }
            const user_data = await fetch(
                new URL("http://localhost:8080/api/user").toString(),
                {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json', 'Authorization': `Bearer ${idToken}`
                    })
                }).then((res) => res.json())
            if (user_data) {
                expect(user_data.address).toEqual(addressToBe)
            }
        } else {
            return
        }

    })
    test("住所更新エラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const user = UserRequestImpl(idToken)
            const address: Address = {
                zip_code: "000-00000",
                address_1: "東京都渋谷区",
                address_2: "道玄坂1-2-3",
                address_3: "",
                phone_number: "",
                first_name: "",
                last_name: "",
                first_name_kana: "",
                last_name_kana: ""
            }
            const res = await user.UpdateAddress(address).catch((e) => {
                expect(e.message).toBe("The request payload is malformed or contains invalid data.")

            })
            const addressToBe: Address = {
                zip_code: "000-0000",
                address_1: "東京都渋谷区",
                address_2: "道玄坂1-2-3",
                address_3: "",
                phone_number: "090-1234-5678",
                first_name: "太郎",
                last_name: "山田",
                first_name_kana: "タロウ",
                last_name_kana: "ヤマダ"
            }
            const user_data = await fetch(
                new URL("http://localhost:8080/api/user").toString(),
                {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json', 'Authorization': `Bearer ${idToken}`
                    })
                }).then((res) => res.json())
            if (user_data) {
                expect(user_data.address).toEqual(addressToBe)
            }
        } else {
            return
        }

    })
    test("カートに商品追加", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const cartreq = CartRequestImpl(idToken)
            const cart: CartRegisterPayload = {
                item_id: "test2",
                quantity: 1
            }
            await cartreq.Post(cart).catch((e) => {
                expect(e.message).toBe("invalid user request")
            })
        }
    })
    test("カートに商品追加", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const cartreq = CartRequestImpl(idToken)
            const cart: CartRegisterPayload = {
                item_id: "test2",
                quantity: 2
            }
            await cartreq.Post(cart).catch((e) => {
                expect(e.message).toBe("invalid user request")
            })
            const c = await fetch(new URL("http://localhost:8080/api/cart").toString(),
                {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json', 'Authorization': `Bearer ${idToken}`
                    }),
                }).then((res) => res.json())
            const expected: Cart = {
                items: [
                    {
                        item_id: "test2",
                        quantity: 2,
                        properties: {
                            name: "test2",
                            price: 3000,
                            details: {
                                status: "Available"
                            }
                        }
                    }]
            }
            expect(c).toEqual(expected)
        }
    })
    test("カートの商品の更新", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const cartreq = CartRequestImpl(idToken)
            const cart: CartRegisterPayload = {
                item_id: "test2",
                quantity: 1
            }
            await cartreq.Post(cart).catch((e) => {
                expect(e.message).toBe("invalid user request")
            })
            const expected: Cart = {
                items: [{
                    item_id: "test2",
                    quantity: 1,
                    properties: {
                        name: "test2",
                        price: 3000,
                        details: {
                            status: "Available"
                        }
                    }
                }]
            }
            const c = await fetch(new URL("http://localhost:8080/api/cart").toString(),
                {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json', 'Authorization': `Bearer ${idToken}`
                    }),
                }).then((res) => res.json())
            expect(c).toEqual(expected)

        }
    })
    test("カートに別の商品追加", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const cartreq = CartRequestImpl(idToken)
            const cart: CartRegisterPayload = {
                item_id: "test1",
                quantity: 1
            }
            await cartreq.Post(cart).catch((e) => {
                expect(e.message).toBe("invalid user request")
            })
            const expected: Cart = {
                items: [{
                    item_id: "test2",
                    quantity: 1,
                    properties: {
                        name: "test2",
                        price: 3000,
                        details: {
                            status: "Available"
                        }
                    }
                }, {
                    item_id: "test1",
                    quantity: 1,
                    properties: {
                        name: "test1",
                        price: 2000,
                        details: {
                            status: "Available"
                        }
                    }
                }
                ]
            }
            const c = await fetch(new URL("http://localhost:8080/api/cart").toString(),
                {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json', 'Authorization': `Bearer ${idToken}`
                    }),
                }).then((res) => res.json())
            expect(c).toEqual(expected)
        }
    })
    test("カートの商品の削除", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const cartreq = CartRequestImpl(idToken)
            await cartreq.Delete("test1").catch((e) => {
                expect(e.message).toBe("invalid user request")
            })
            const expected: Cart = {
                items: [{
                    item_id: "test2",
                    quantity: 1,
                    properties: {
                        name: "test2",
                        price: 3000,
                        details: {
                            status: "Available"
                        }
                    }
                }]
            }
            const c = await fetch(new URL("http://localhost:8080/api/cart").toString(),
                {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json', 'Authorization': `Bearer ${idToken}`
                    }),
                }).then((res) => res.json())
            expect(c).toEqual(expected)
        }
    })
    test("カートに存在しない商品追加", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const cartreq = CartRequestImpl(idToken)
            const cart: CartRegisterPayload = {
                item_id: "test3",
                quantity: 1
            }
            await cartreq.Post(cart).catch((e) => {
                expect(e.message).toBe("record not found")
            })
        }
    })
    test("現在のカートに存在しない商品の削除", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const cartreq = CartRequestImpl(idToken)
            await cartreq.Delete("test1").catch((e) => {
                expect(e.message).toBe("invalid user request")
            })

        }
    })
    test("存在しない商品の削除", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const cartreq = CartRequestImpl(idToken)

            await cartreq.Delete("test3").catch((e) => {
                expect(e.message).toBe("invalid user request")
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

