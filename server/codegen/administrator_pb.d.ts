// package: administrator
// file: administrator.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class AllUserResponse extends jspb.Message { 
    getUser(): string;
    setUser(value: string): AllUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AllUserResponse): AllUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllUserResponse;
    static deserializeBinaryFromReader(message: AllUserResponse, reader: jspb.BinaryReader): AllUserResponse;
}

export namespace AllUserResponse {
    export type AsObject = {
        user: string,
    }
}

export class RemoveUserRequest extends jspb.Message { 
    getUser(): string;
    setUser(value: string): RemoveUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveUserRequest): RemoveUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveUserRequest;
    static deserializeBinaryFromReader(message: RemoveUserRequest, reader: jspb.BinaryReader): RemoveUserRequest;
}

export namespace RemoveUserRequest {
    export type AsObject = {
        user: string,
    }
}

export class PrivilegeUserRequest extends jspb.Message { 
    getUser(): string;
    setUser(value: string): PrivilegeUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrivilegeUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PrivilegeUserRequest): PrivilegeUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrivilegeUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrivilegeUserRequest;
    static deserializeBinaryFromReader(message: PrivilegeUserRequest, reader: jspb.BinaryReader): PrivilegeUserRequest;
}

export namespace PrivilegeUserRequest {
    export type AsObject = {
        user: string,
    }
}

export class SpecificUserTransactionRequest extends jspb.Message { 
    getUser(): string;
    setUser(value: string): SpecificUserTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpecificUserTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SpecificUserTransactionRequest): SpecificUserTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpecificUserTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpecificUserTransactionRequest;
    static deserializeBinaryFromReader(message: SpecificUserTransactionRequest, reader: jspb.BinaryReader): SpecificUserTransactionRequest;
}

export namespace SpecificUserTransactionRequest {
    export type AsObject = {
        user: string,
    }
}

export class SpecificUserTransactionResponse extends jspb.Message { 
    getTransaction(): string;
    setTransaction(value: string): SpecificUserTransactionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpecificUserTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SpecificUserTransactionResponse): SpecificUserTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpecificUserTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpecificUserTransactionResponse;
    static deserializeBinaryFromReader(message: SpecificUserTransactionResponse, reader: jspb.BinaryReader): SpecificUserTransactionResponse;
}

export namespace SpecificUserTransactionResponse {
    export type AsObject = {
        transaction: string,
    }
}

export class RemoveItemRequest extends jspb.Message { 
    getItem(): string;
    setItem(value: string): RemoveItemRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveItemRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveItemRequest): RemoveItemRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveItemRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveItemRequest;
    static deserializeBinaryFromReader(message: RemoveItemRequest, reader: jspb.BinaryReader): RemoveItemRequest;
}

export namespace RemoveItemRequest {
    export type AsObject = {
        item: string,
    }
}

export class AllItemResponse extends jspb.Message { 
    getItem(): string;
    setItem(value: string): AllItemResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllItemResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AllItemResponse): AllItemResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllItemResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllItemResponse;
    static deserializeBinaryFromReader(message: AllItemResponse, reader: jspb.BinaryReader): AllItemResponse;
}

export namespace AllItemResponse {
    export type AsObject = {
        item: string,
    }
}

export class AllTransactionResponse extends jspb.Message { 
    getTransaction(): string;
    setTransaction(value: string): AllTransactionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AllTransactionResponse): AllTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllTransactionResponse;
    static deserializeBinaryFromReader(message: AllTransactionResponse, reader: jspb.BinaryReader): AllTransactionResponse;
}

export namespace AllTransactionResponse {
    export type AsObject = {
        transaction: string,
    }
}

export class SpecificTransactionRequest extends jspb.Message { 
    getTransaction(): string;
    setTransaction(value: string): SpecificTransactionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpecificTransactionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SpecificTransactionRequest): SpecificTransactionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpecificTransactionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpecificTransactionRequest;
    static deserializeBinaryFromReader(message: SpecificTransactionRequest, reader: jspb.BinaryReader): SpecificTransactionRequest;
}

export namespace SpecificTransactionRequest {
    export type AsObject = {
        transaction: string,
    }
}

export class SpecificTransactionResponse extends jspb.Message { 
    getTransaction(): string;
    setTransaction(value: string): SpecificTransactionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpecificTransactionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SpecificTransactionResponse): SpecificTransactionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpecificTransactionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpecificTransactionResponse;
    static deserializeBinaryFromReader(message: SpecificTransactionResponse, reader: jspb.BinaryReader): SpecificTransactionResponse;
}

export namespace SpecificTransactionResponse {
    export type AsObject = {
        transaction: string,
    }
}

export class RegisterTrackingIdRequest extends jspb.Message { 
    getTransaction(): string;
    setTransaction(value: string): RegisterTrackingIdRequest;
    getTrackingId(): string;
    setTrackingId(value: string): RegisterTrackingIdRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterTrackingIdRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterTrackingIdRequest): RegisterTrackingIdRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterTrackingIdRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterTrackingIdRequest;
    static deserializeBinaryFromReader(message: RegisterTrackingIdRequest, reader: jspb.BinaryReader): RegisterTrackingIdRequest;
}

export namespace RegisterTrackingIdRequest {
    export type AsObject = {
        transaction: string,
        trackingId: string,
    }
}

export class UpdateTransactionStatusRequest extends jspb.Message { 
    getTransaction(): string;
    setTransaction(value: string): UpdateTransactionStatusRequest;
    getStatus(): string;
    setStatus(value: string): UpdateTransactionStatusRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTransactionStatusRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTransactionStatusRequest): UpdateTransactionStatusRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTransactionStatusRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTransactionStatusRequest;
    static deserializeBinaryFromReader(message: UpdateTransactionStatusRequest, reader: jspb.BinaryReader): UpdateTransactionStatusRequest;
}

export namespace UpdateTransactionStatusRequest {
    export type AsObject = {
        transaction: string,
        status: string,
    }
}

export class VoidRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoidRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VoidRequest): VoidRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoidRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoidRequest;
    static deserializeBinaryFromReader(message: VoidRequest, reader: jspb.BinaryReader): VoidRequest;
}

export namespace VoidRequest {
    export type AsObject = {
    }
}

export class VoidResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VoidResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VoidResponse): VoidResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VoidResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VoidResponse;
    static deserializeBinaryFromReader(message: VoidResponse, reader: jspb.BinaryReader): VoidResponse;
}

export namespace VoidResponse {
    export type AsObject = {
    }
}
