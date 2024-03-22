import { Metadata } from "@grpc/grpc-js";

function createMetadata(key: string, value: string) {
    const metadata = new Metadata();
    metadata.add(key, value);
    return metadata;
}
export { createMetadata }
