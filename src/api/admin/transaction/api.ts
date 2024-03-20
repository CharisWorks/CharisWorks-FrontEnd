import { credentials } from "@grpc/grpc-js";
import { TransactionServiceClient } from "@/../server/codegen/administrator_grpc_pb";
import { RegisterTrackingIdRequest, SpecificTransactionRequest, UpdateTransactionStatusRequest, VoidRequest } from "@/../server/codegen/administrator_pb";
import { createMetadata } from "../utils";

function getTransaction(jwt: string, id: string): Promise<string> {
    const metadata = createMetadata('Authorization', `Bearer ${jwt}`);
    const request = new SpecificTransactionRequest()
    const client = new TransactionServiceClient(
        'localhost:50051',
        credentials.createInsecure());
    request.setTransaction(id);
    return new Promise((resolve, reject) => {
        client.byId(request, metadata, (err, response) => {
            if (err) {
                reject(err);
                return
            }
            resolve(response.getTransaction());
        });
    });
}

function getAllTransaction(jwt: string): Promise<string> {
    const metadata = createMetadata('Authorization', `Bearer ${jwt}`);
    const request = new VoidRequest();
    const client = new TransactionServiceClient(
        'localhost:50051',
        credentials.createInsecure());
    return new Promise((resolve, reject) => {
        client.all(request, metadata, (err, response) => {
            if (err) {
                reject(err);
                return
            }
            resolve(response.getTransaction());
        });
    });
}


function registerTrackingId(jwt: string, id: string, trackingId: string): Promise<string> {
    const metadata = createMetadata('Authorization', `Bearer ${jwt}`);
    const request = new RegisterTrackingIdRequest()
    const client = new TransactionServiceClient(
        'localhost:50051',
        credentials.createInsecure());
    request.setTransaction(id);
    request.setTrackingId(trackingId);
    return new Promise((resolve, reject) => {
        client.registerTrackingId(request, metadata, (err, response) => {
            if (err) {
                reject(err);
                return
            }
            resolve("success");
        });
    });
}

function registerStatus(jwt: string, id: string, status: string): Promise<string> {
    const metadata = createMetadata('Authorization', `Bearer ${jwt}`);
    const request = new UpdateTransactionStatusRequest()
    const client = new TransactionServiceClient(
        'localhost:50051',
        credentials.createInsecure());
    request.setTransaction(id);
    request.setStatus(status);
    return new Promise((resolve, reject) => {
        client.registerStatus(request, metadata, (err, response) => {
            if (err) {
                reject(err);
                return
            }
            resolve("success");
        });
    });
}


export { getTransaction, getAllTransaction, registerTrackingId, registerStatus }
