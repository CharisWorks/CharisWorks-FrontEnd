// package: administrator
// file: administrator.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as administrator_pb from "./administrator_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    all: IUserServiceService_IAll;
    remove: IUserServiceService_IRemove;
    privilege: IUserServiceService_IPrivilege;
    transaction: IUserServiceService_ITransaction;
}

interface IUserServiceService_IAll extends grpc.MethodDefinition<administrator_pb.VoidRequest, administrator_pb.AllUserResponse> {
    path: "/administrator.UserService/All";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<administrator_pb.VoidRequest>;
    requestDeserialize: grpc.deserialize<administrator_pb.VoidRequest>;
    responseSerialize: grpc.serialize<administrator_pb.AllUserResponse>;
    responseDeserialize: grpc.deserialize<administrator_pb.AllUserResponse>;
}
interface IUserServiceService_IRemove extends grpc.MethodDefinition<administrator_pb.RemoveUserRequest, administrator_pb.VoidResponse> {
    path: "/administrator.UserService/Remove";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<administrator_pb.RemoveUserRequest>;
    requestDeserialize: grpc.deserialize<administrator_pb.RemoveUserRequest>;
    responseSerialize: grpc.serialize<administrator_pb.VoidResponse>;
    responseDeserialize: grpc.deserialize<administrator_pb.VoidResponse>;
}
interface IUserServiceService_IPrivilege extends grpc.MethodDefinition<administrator_pb.PrivilegeUserRequest, administrator_pb.VoidResponse> {
    path: "/administrator.UserService/Privilege";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<administrator_pb.PrivilegeUserRequest>;
    requestDeserialize: grpc.deserialize<administrator_pb.PrivilegeUserRequest>;
    responseSerialize: grpc.serialize<administrator_pb.VoidResponse>;
    responseDeserialize: grpc.deserialize<administrator_pb.VoidResponse>;
}
interface IUserServiceService_ITransaction extends grpc.MethodDefinition<administrator_pb.SpecificUserTransactionRequest, administrator_pb.SpecificUserTransactionResponse> {
    path: "/administrator.UserService/Transaction";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<administrator_pb.SpecificUserTransactionRequest>;
    requestDeserialize: grpc.deserialize<administrator_pb.SpecificUserTransactionRequest>;
    responseSerialize: grpc.serialize<administrator_pb.SpecificUserTransactionResponse>;
    responseDeserialize: grpc.deserialize<administrator_pb.SpecificUserTransactionResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    all: grpc.handleUnaryCall<administrator_pb.VoidRequest, administrator_pb.AllUserResponse>;
    remove: grpc.handleUnaryCall<administrator_pb.RemoveUserRequest, administrator_pb.VoidResponse>;
    privilege: grpc.handleUnaryCall<administrator_pb.PrivilegeUserRequest, administrator_pb.VoidResponse>;
    transaction: grpc.handleUnaryCall<administrator_pb.SpecificUserTransactionRequest, administrator_pb.SpecificUserTransactionResponse>;
}

export interface IUserServiceClient {
    all(request: administrator_pb.VoidRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllUserResponse) => void): grpc.ClientUnaryCall;
    all(request: administrator_pb.VoidRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllUserResponse) => void): grpc.ClientUnaryCall;
    all(request: administrator_pb.VoidRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllUserResponse) => void): grpc.ClientUnaryCall;
    remove(request: administrator_pb.RemoveUserRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    remove(request: administrator_pb.RemoveUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    remove(request: administrator_pb.RemoveUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    privilege(request: administrator_pb.PrivilegeUserRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    privilege(request: administrator_pb.PrivilegeUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    privilege(request: administrator_pb.PrivilegeUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    transaction(request: administrator_pb.SpecificUserTransactionRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.SpecificUserTransactionResponse) => void): grpc.ClientUnaryCall;
    transaction(request: administrator_pb.SpecificUserTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.SpecificUserTransactionResponse) => void): grpc.ClientUnaryCall;
    transaction(request: administrator_pb.SpecificUserTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.SpecificUserTransactionResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public all(request: administrator_pb.VoidRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllUserResponse) => void): grpc.ClientUnaryCall;
    public all(request: administrator_pb.VoidRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllUserResponse) => void): grpc.ClientUnaryCall;
    public all(request: administrator_pb.VoidRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllUserResponse) => void): grpc.ClientUnaryCall;
    public remove(request: administrator_pb.RemoveUserRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public remove(request: administrator_pb.RemoveUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public remove(request: administrator_pb.RemoveUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public privilege(request: administrator_pb.PrivilegeUserRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public privilege(request: administrator_pb.PrivilegeUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public privilege(request: administrator_pb.PrivilegeUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public transaction(request: administrator_pb.SpecificUserTransactionRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.SpecificUserTransactionResponse) => void): grpc.ClientUnaryCall;
    public transaction(request: administrator_pb.SpecificUserTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.SpecificUserTransactionResponse) => void): grpc.ClientUnaryCall;
    public transaction(request: administrator_pb.SpecificUserTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.SpecificUserTransactionResponse) => void): grpc.ClientUnaryCall;
}

interface IItemServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    remove: IItemServiceService_IRemove;
    all: IItemServiceService_IAll;
}

interface IItemServiceService_IRemove extends grpc.MethodDefinition<administrator_pb.RemoveItemRequest, administrator_pb.VoidResponse> {
    path: "/administrator.ItemService/Remove";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<administrator_pb.RemoveItemRequest>;
    requestDeserialize: grpc.deserialize<administrator_pb.RemoveItemRequest>;
    responseSerialize: grpc.serialize<administrator_pb.VoidResponse>;
    responseDeserialize: grpc.deserialize<administrator_pb.VoidResponse>;
}
interface IItemServiceService_IAll extends grpc.MethodDefinition<administrator_pb.VoidRequest, administrator_pb.AllItemResponse> {
    path: "/administrator.ItemService/All";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<administrator_pb.VoidRequest>;
    requestDeserialize: grpc.deserialize<administrator_pb.VoidRequest>;
    responseSerialize: grpc.serialize<administrator_pb.AllItemResponse>;
    responseDeserialize: grpc.deserialize<administrator_pb.AllItemResponse>;
}

export const ItemServiceService: IItemServiceService;

export interface IItemServiceServer extends grpc.UntypedServiceImplementation {
    remove: grpc.handleUnaryCall<administrator_pb.RemoveItemRequest, administrator_pb.VoidResponse>;
    all: grpc.handleUnaryCall<administrator_pb.VoidRequest, administrator_pb.AllItemResponse>;
}

export interface IItemServiceClient {
    remove(request: administrator_pb.RemoveItemRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    remove(request: administrator_pb.RemoveItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    remove(request: administrator_pb.RemoveItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    all(request: administrator_pb.VoidRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllItemResponse) => void): grpc.ClientUnaryCall;
    all(request: administrator_pb.VoidRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllItemResponse) => void): grpc.ClientUnaryCall;
    all(request: administrator_pb.VoidRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllItemResponse) => void): grpc.ClientUnaryCall;
}

export class ItemServiceClient extends grpc.Client implements IItemServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public remove(request: administrator_pb.RemoveItemRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public remove(request: administrator_pb.RemoveItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public remove(request: administrator_pb.RemoveItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public all(request: administrator_pb.VoidRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllItemResponse) => void): grpc.ClientUnaryCall;
    public all(request: administrator_pb.VoidRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllItemResponse) => void): grpc.ClientUnaryCall;
    public all(request: administrator_pb.VoidRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllItemResponse) => void): grpc.ClientUnaryCall;
}

interface ITransactionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    all: ITransactionServiceService_IAll;
    byId: ITransactionServiceService_IById;
    registerTrackingId: ITransactionServiceService_IRegisterTrackingId;
    registerStatus: ITransactionServiceService_IRegisterStatus;
}

interface ITransactionServiceService_IAll extends grpc.MethodDefinition<administrator_pb.VoidRequest, administrator_pb.AllTransactionResponse> {
    path: "/administrator.TransactionService/All";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<administrator_pb.VoidRequest>;
    requestDeserialize: grpc.deserialize<administrator_pb.VoidRequest>;
    responseSerialize: grpc.serialize<administrator_pb.AllTransactionResponse>;
    responseDeserialize: grpc.deserialize<administrator_pb.AllTransactionResponse>;
}
interface ITransactionServiceService_IById extends grpc.MethodDefinition<administrator_pb.SpecificTransactionRequest, administrator_pb.SpecificTransactionResponse> {
    path: "/administrator.TransactionService/ById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<administrator_pb.SpecificTransactionRequest>;
    requestDeserialize: grpc.deserialize<administrator_pb.SpecificTransactionRequest>;
    responseSerialize: grpc.serialize<administrator_pb.SpecificTransactionResponse>;
    responseDeserialize: grpc.deserialize<administrator_pb.SpecificTransactionResponse>;
}
interface ITransactionServiceService_IRegisterTrackingId extends grpc.MethodDefinition<administrator_pb.RegisterTrackingIdRequest, administrator_pb.VoidResponse> {
    path: "/administrator.TransactionService/RegisterTrackingId";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<administrator_pb.RegisterTrackingIdRequest>;
    requestDeserialize: grpc.deserialize<administrator_pb.RegisterTrackingIdRequest>;
    responseSerialize: grpc.serialize<administrator_pb.VoidResponse>;
    responseDeserialize: grpc.deserialize<administrator_pb.VoidResponse>;
}
interface ITransactionServiceService_IRegisterStatus extends grpc.MethodDefinition<administrator_pb.UpdateTransactionStatusRequest, administrator_pb.VoidResponse> {
    path: "/administrator.TransactionService/RegisterStatus";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<administrator_pb.UpdateTransactionStatusRequest>;
    requestDeserialize: grpc.deserialize<administrator_pb.UpdateTransactionStatusRequest>;
    responseSerialize: grpc.serialize<administrator_pb.VoidResponse>;
    responseDeserialize: grpc.deserialize<administrator_pb.VoidResponse>;
}

export const TransactionServiceService: ITransactionServiceService;

export interface ITransactionServiceServer extends grpc.UntypedServiceImplementation {
    all: grpc.handleUnaryCall<administrator_pb.VoidRequest, administrator_pb.AllTransactionResponse>;
    byId: grpc.handleUnaryCall<administrator_pb.SpecificTransactionRequest, administrator_pb.SpecificTransactionResponse>;
    registerTrackingId: grpc.handleUnaryCall<administrator_pb.RegisterTrackingIdRequest, administrator_pb.VoidResponse>;
    registerStatus: grpc.handleUnaryCall<administrator_pb.UpdateTransactionStatusRequest, administrator_pb.VoidResponse>;
}

export interface ITransactionServiceClient {
    all(request: administrator_pb.VoidRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllTransactionResponse) => void): grpc.ClientUnaryCall;
    all(request: administrator_pb.VoidRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllTransactionResponse) => void): grpc.ClientUnaryCall;
    all(request: administrator_pb.VoidRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllTransactionResponse) => void): grpc.ClientUnaryCall;
    byId(request: administrator_pb.SpecificTransactionRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.SpecificTransactionResponse) => void): grpc.ClientUnaryCall;
    byId(request: administrator_pb.SpecificTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.SpecificTransactionResponse) => void): grpc.ClientUnaryCall;
    byId(request: administrator_pb.SpecificTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.SpecificTransactionResponse) => void): grpc.ClientUnaryCall;
    registerTrackingId(request: administrator_pb.RegisterTrackingIdRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    registerTrackingId(request: administrator_pb.RegisterTrackingIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    registerTrackingId(request: administrator_pb.RegisterTrackingIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    registerStatus(request: administrator_pb.UpdateTransactionStatusRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    registerStatus(request: administrator_pb.UpdateTransactionStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    registerStatus(request: administrator_pb.UpdateTransactionStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
}

export class TransactionServiceClient extends grpc.Client implements ITransactionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public all(request: administrator_pb.VoidRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllTransactionResponse) => void): grpc.ClientUnaryCall;
    public all(request: administrator_pb.VoidRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllTransactionResponse) => void): grpc.ClientUnaryCall;
    public all(request: administrator_pb.VoidRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.AllTransactionResponse) => void): grpc.ClientUnaryCall;
    public byId(request: administrator_pb.SpecificTransactionRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.SpecificTransactionResponse) => void): grpc.ClientUnaryCall;
    public byId(request: administrator_pb.SpecificTransactionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.SpecificTransactionResponse) => void): grpc.ClientUnaryCall;
    public byId(request: administrator_pb.SpecificTransactionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.SpecificTransactionResponse) => void): grpc.ClientUnaryCall;
    public registerTrackingId(request: administrator_pb.RegisterTrackingIdRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public registerTrackingId(request: administrator_pb.RegisterTrackingIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public registerTrackingId(request: administrator_pb.RegisterTrackingIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public registerStatus(request: administrator_pb.UpdateTransactionStatusRequest, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public registerStatus(request: administrator_pb.UpdateTransactionStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
    public registerStatus(request: administrator_pb.UpdateTransactionStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: administrator_pb.VoidResponse) => void): grpc.ClientUnaryCall;
}
