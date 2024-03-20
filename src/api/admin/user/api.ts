import { credentials, } from "@grpc/grpc-js";
import { UserServiceClient } from "../../../../server/codegen/administrator_grpc_pb";
import { PrivilegeUserRequest, VoidRequest } from "../../../../server/codegen/administrator_pb";
import { createMetadata } from "../utils";

function getAllUser(jwt: string): Promise<string> {
    const metadata = createMetadata('Authorization', `Bearer ${jwt}`);
    const request = new VoidRequest();
    const client = new UserServiceClient(
        'localhost:50051',
        credentials.createInsecure());
    return new Promise((resolve, reject) => {
        client.all(request, metadata, (err, response) => {
            if (err) {
                reject(err);
                return
            }
            resolve(response.getUser());
        });
    });
}

function privilegeUser(jwt: string, userId: string): Promise<string> {
    const metadata = createMetadata('Authorization', `Bearer ${jwt}`);
    const request = new PrivilegeUserRequest()
    const client = new UserServiceClient(
        'localhost:50051',
        credentials.createInsecure());
    request.setUser(userId);

    return new Promise((resolve, reject) => {
        client.privilege(request, metadata, (err, response) => {
            if (err) {
                reject(err);
                return
            }
            resolve("success");
        });
    });
}


function removeUser(jwt: string, userId: string): Promise<string> {
    const metadata = createMetadata('Authorization', `Bearer ${jwt}`);
    const request = new PrivilegeUserRequest()
    const client = new UserServiceClient(
        'localhost:50051',
        credentials.createInsecure());
    request.setUser(userId);

    return new Promise((resolve, reject) => {
        client.remove(request, metadata, (err, response) => {
            if (err) {
                reject(err);
                return
            }
            resolve("success");
        });
    });
}

function getTransaction(jwt: string, userId: string): Promise<string> {
    const metadata = createMetadata('Authorization', `Bearer ${jwt}`);
    const request = new PrivilegeUserRequest()
    const client = new UserServiceClient(
        'localhost:50051',
        credentials.createInsecure());
    request.setUser(userId);

    return new Promise((resolve, reject) => {
        client.transaction(request, metadata, (err, response) => {
            if (err) {
                reject(err);
                return
            }
            resolve("success");
        });
    });
}

export { getAllUser, privilegeUser, removeUser, getTransaction }
