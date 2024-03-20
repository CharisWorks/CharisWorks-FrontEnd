//@ts-ignore
import { expect, test } from "bun:test";
//@ts-ignore
import { describe } from "bun:test";
import { CartRequestImpl, FirebaseRequestImpl, ManufacturerRequestImpl, StripeRequestImpl, UserRequestImpl } from "../lib/firebase";
import { auth } from "../firebase";
import { Address } from "../models/user";
import { Cart, CartRegisterPayload } from "../models/cart";
import { getAllUser } from "../admin/user/api";

describe("invalid user test", () => {
    test("email is not verified", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "hoge@example.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            await fetch(
                "http://localhost:8080/api/user",
                {
                    method: "GET",
                    headers: {
                        Authorization: idToken,
                    }
                }
            ).catch((error) => {
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
            const user_data = await fetch(
                "http://localhost:8080/api/user",
                {
                    method: "GET",
                    headers: {
                        Authorization: idToken,
                    }
                }
            ).then((res) => res.json()).catch((e) => {
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
            fetch(
                "http://localhost:8080/api/cart",
                {
                    method: "GET",
                    headers: {
                        Authorization: idToken,
                    }
                }
            ).then((res) => res.json()).then((res) => {
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


describe("empty user test", () => {
    test("get user", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const user = UserRequestImpl(idToken)
            const user_data = await fetch(
                "http://localhost:8080/api/user",
                {
                    method: "GET",
                    headers: {
                        Authorization: idToken,
                    }
                }
            ).then((res) => res.json()).catch((e) => {
                expect(e.message).toBe("creating user for DB")
            })
            if (user_data) {
                expect(user_data.user_id).toBe("S9Dpcw3x4nPcROe2DOv3MjW3Ry42")
            }
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
                "http://localhost:8080/api/user",
                {
                    method: "GET",
                    headers: {
                        Authorization: idToken,
                    }
                }
            ).then((res) => res.json()
            )
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
                "http://localhost:8080/api/user",
                {
                    method: "GET",
                    headers: {
                        Authorization: idToken,
                    }
                }
            ).then((res) => res.json()
            )

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
            const res = await cartreq.Post(cart).catch((e) => {
                expect(e.message).toBe("invalid user request")
            })
            console.log(res)
            const c = await fetch(
                "http://localhost:8080/api/cart",
                {
                    method: "GET",
                    headers: {
                        Authorization: idToken,
                    }
                }
            ).then((res) => res.json())

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
            const c = await fetch(
                "http://localhost:8080/api/cart",
                {
                    method: "GET",
                    headers: {
                        Authorization: idToken,
                    }
                }
            ).then((res) => res.json()
            )
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
            const res = await cartreq.Post(cart).catch((e) => {
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
            const c = await fetch(
                "http://localhost:8080/api/cart",
                {
                    method: "GET",
                    headers: {
                        Authorization: idToken,
                    }
                }
            ).then((res) => res.json()
            )
            expect(c).toEqual(expected)
        }
    })
    test("カートの商品の削除", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const cartreq = CartRequestImpl(idToken)

            const res = await cartreq.Delete("test1").catch((e) => {
                expect(e.message).toBe("invalid user request")
            })
            console.log(res)
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
            const c = await fetch(
                "http://localhost:8080/api/cart",
                {
                    method: "GET",
                    headers: {
                        Authorization: idToken,
                    }
                }
            ).then((res) => res.json()
            )
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
                expect(e.message).toBe("invalid user request")
            })
        }
    })
    test("現在のカートに存在しない商品の削除", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const cartreq = CartRequestImpl(idToken)

            const res = await cartreq.Delete("test1").catch((e) => {
                expect(e.message).toBe("invalid user request")
            })
            console.log(res)

        }
    })
    test("存在しないの商品の削除", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const cartreq = CartRequestImpl(idToken)

            const res = await cartreq.Delete("test3").catch((e) => {
                expect(e.message).toBe("invalid user request")
            })
            console.log(res)

        }
    })
    test("ユーザー削除", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const user = UserRequestImpl(idToken)
            const user_data = await user.Delete().catch((e) => {
                expect(e.message).toBe("record not found")
            })

        }
    })

})

describe("admin test", async () => {
    test("get all user", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const data = await getAllUser(idToken)
            console.log(data)
        }
    }
    )
    test("invalid user", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "whatacotton@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            await getAllUser(idToken).catch((e) => {
                expect(e.message).toBe("16 UNAUTHENTICATED: Unauthorized")
            })
        }
    }
    )
})
