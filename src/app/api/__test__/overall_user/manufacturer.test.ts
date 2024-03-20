//@ts-ignore
import { expect, test } from "bun:test";
//@ts-ignore
import { describe } from "bun:test";
import { CartRequestImpl, FirebaseRequestImpl, ManufacturerRequestImpl, StripeRequestImpl, UserRequestImpl, adminItemRequestsImpl } from "../../lib/firebase";
import { auth } from "../../firebase";
import { ProductUpdatePayload } from "../../models/manufacturer";
import { Overview } from "../../models/item";

describe("overall user test for manufacturer user after", () => {
    test("出品エラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const manufacturer = ManufacturerRequestImpl(idToken)
            const item = {
                name: "test",
                price: -1,
                details: {
                    stock: 10,
                    size: 10,
                    description: "test",
                    tags: ["test"]
                }
            }
            await manufacturer.PostProducts(item).catch((e) => {
                expect(e.message).toBe("The request payload is malformed or contains invalid data.")
            })
        }
    })
    test("大きさ0で出品エラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const manufacturer = ManufacturerRequestImpl(idToken)
            const item = {
                name: "test",
                price: 10000,
                details: {
                    stock: 10,
                    size: 0,
                    description: "test",
                    tags: ["test"]
                }
            }
            await manufacturer.PostProducts(item).catch((e) => {
                expect(e.message).toBe("The request payload is malformed or contains invalid data.")
            })
        }
    })
    test("100円以上じゃないと出品エラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const manufacturer = ManufacturerRequestImpl(idToken)
            const item = {
                name: "test",
                price: 10,
                details: {
                    stock: 10,
                    size: 10,
                    description: "test",
                    tags: ["test"]
                }
            }
            await manufacturer.PostProducts(item).catch((e) => {
                expect(e.message).toBe("The request payload is malformed or contains invalid data.")
            })
        }
    })
    test("在庫0で出品エラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const manufacturer = ManufacturerRequestImpl(idToken)
            const item = {
                name: "test",
                price: 1000,
                details: {
                    stock: 0,
                    size: 10,
                    description: "test",
                    tags: ["test"]
                }
            }
            await manufacturer.PostProducts(item).catch((e) => {
                expect(e.message).toBe("The request payload is malformed or contains invalid data.")
            })
        }
    })

    test("説明なし出品エラー", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const manufacturer = ManufacturerRequestImpl(idToken)
            const item = {
                name: "test",
                price: 1000,
                details: {
                    stock: 0,
                    size: 10,
                    description: "",
                    tags: ["test"]
                }
            }
            await manufacturer.PostProducts(item).catch((e) => {
                expect(e.message).toBe("The request payload is malformed or contains invalid data.")
            })
        }
    })

    test("出品処理", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
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
            await manufacturer.PostProducts(item)
            const admin = adminItemRequestsImpl(idToken)
            const items = await admin.allItem()
            for (const item of items?.previewList ?? []) {
                await admin.removeItem(item.item_id)
            }
        }
    })
    test("タグなしも可", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const manufacturer = ManufacturerRequestImpl(idToken)
            const item = {
                name: "test",
                price: 10000,
                details: {
                    stock: 10,
                    size: 10,
                    description: "test",
                    tags: []
                }
            }
            await manufacturer.PostProducts(item)
            const admin = adminItemRequestsImpl(idToken)
            const items = await admin.allItem()
            for (const item of items?.previewList ?? []) {
                await admin.removeItem(item.item_id)
            }
        }
    })
    test("商品の編集", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const manufacturer = ManufacturerRequestImpl(idToken)
            const item = {
                name: "test",
                price: 10000,
                details: {
                    stock: 10,
                    size: 10,
                    description: "test",
                    tags: []
                }
            }
            await manufacturer.PostProducts(item)
            const itemUpdatePayload: ProductUpdatePayload = {
                status: "Expired",
            }
            const admin = adminItemRequestsImpl(idToken)
            const items = await admin.allItem()
            for (const item of items?.previewList ?? []) {
                await admin.removeItem(item.item_id)
            }
            const item_id = items?.previewList[0].item_id ?? ""
            await manufacturer.UpdateProducts(item_id, itemUpdatePayload)
            const data = await fetch(`http://localhost:8080/api/item/${item_id}`)
            const json: Overview = await data.json()
            expect(json.properties.details.status).toBe("Expired")
        }
    })
    test("存在しない商品の編集", async () => {
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const manufacturer = ManufacturerRequestImpl(idToken)
            const item: ProductUpdatePayload = {
                status: "Expired",
            }
            await manufacturer.UpdateProducts("invalid", item).catch((e) => {
                expect(e.message).toBe("record not found")
            })

        }
    })
})