import { credentials } from "@grpc/grpc-js";
import { ItemServiceClient } from "../../../../server/codegen/administrator_grpc_pb";
import { RemoveItemRequest, VoidRequest } from "../../../../server/codegen/administrator_pb";
import { createMetadata } from "../utils";

function getAllItem(jwt: string): Promise<string> {
    const metadata = createMetadata('Authorization', `Bearer ${jwt}`);
    const request = new VoidRequest();
    const client = new ItemServiceClient(
        'localhost:50051',
        credentials.createInsecure());
    return new Promise((resolve, reject) => {
        client.all(request, metadata, (err, response) => {
            if (err) {
                reject(err);
            }
            resolve(response.getItem());
        });
    });
}

function removeItem(jwt: string, itemId: string) {
    const metadata = createMetadata('Authorization', `Bearer ${jwt}`);
    const request = new RemoveItemRequest()
    const client = new ItemServiceClient(
        'localhost:50051',
        credentials.createInsecure());
    request.setItem(itemId);
    return new Promise((resolve, reject) => {
        client.remove(request, metadata, (err, response) => {
            if (err) {
                reject(err);
                return
            }
            resolve(response);
        });
    });
}

export { getAllItem, removeItem }
