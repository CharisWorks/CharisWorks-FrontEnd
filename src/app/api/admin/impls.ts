import {
    credentials,
    Metadata,
    sendUnaryData,
    Server,
    ServerCredentials,
    ServerUnaryCall,
    status,
} from "@grpc/grpc-js";
import { UserServiceClient } from "../../../../server/codegen/administrator_grpc_pb";
import { PrivilegeUserRequest, VoidRequest } from "../../../../server/codegen/administrator_pb";
import { resolve } from "path";
const metadata = new Metadata();
metadata.add('Authorization', 'Bearer YOUR_BEARER_TOKEN');

function createMetadata(key: string, value: string) {
    const metadata = new Metadata();
    metadata.add(key, value);
    return metadata;
}

function getAllUser(jwt: string) {
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
        }

        );
    });

}
function privilegeUser(jwt: string, userId: string) {
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
            resolve(response);
        }

        );
    });

}

export { getAllUser, privilegeUser }