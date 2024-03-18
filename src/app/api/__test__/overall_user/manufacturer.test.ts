//@ts-ignore
import { expect, test } from "bun:test";
//@ts-ignore
import { describe } from "bun:test";
import { CartRequestImpl, FirebaseRequestImpl, ItemRequestImpl, ManufacturerRequestImpl, StripeRequestImpl, UserRequestImpl } from "../../lib/firebase";
import { auth } from "../../firebase";
import { Address, Profile, profileUpdatePayload } from "../../models/user";
import { Cart, CartRegisterPayload } from "../../models/cart";
import { getAllUser, privilegeUser } from "../../admin/impls";
import { ItemPreview } from "../../models/item";
import { ProductUpdatePayload } from "../../models/manufacturer";

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
            const items = await ItemRequestImpl.Get()
            const item_id = items?.previewList[0].item_id ?? ""
            await manufacturer.DeleteProducts(item_id)
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
            const items = await ItemRequestImpl.Get()
            const item_id = items?.previewList[0].item_id ?? ""
            await manufacturer.DeleteProducts(item_id)
        }
    })
    test("商品の編集", async () => {
        const items = await ItemRequestImpl.Get()
        await FirebaseRequestImpl.SignInWithEmail(auth, "cowatanabe26@gmail.com", "example")
        const idToken = await auth.currentUser?.getIdToken()
        if (idToken) {
            const manufacturer = ManufacturerRequestImpl(idToken)
            const item: ProductUpdatePayload = {
                status: "Expired",
            }
            const item_id = items?.previewList[0].item_id ?? ""
            await manufacturer.UpdateProducts(item_id, item)
            const details = await ItemRequestImpl.GetDetail(item_id)
            expect(details?.properties.details.status).toBe("Expired")
        }
    })
    test("存在しない商品の編集", async () => {
        const items = await ItemRequestImpl.Get()
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