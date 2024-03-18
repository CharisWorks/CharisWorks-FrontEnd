// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// protoのバージョンの宣言
'use strict';
var grpc = require('@grpc/grpc-js');
var administrator_pb = require('./administrator_pb.js');

function serialize_administrator_AllItemResponse(arg) {
  if (!(arg instanceof administrator_pb.AllItemResponse)) {
    throw new Error('Expected argument of type administrator.AllItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_administrator_AllItemResponse(buffer_arg) {
  return administrator_pb.AllItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_administrator_AllTransactionResponse(arg) {
  if (!(arg instanceof administrator_pb.AllTransactionResponse)) {
    throw new Error('Expected argument of type administrator.AllTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_administrator_AllTransactionResponse(buffer_arg) {
  return administrator_pb.AllTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_administrator_AllUserResponse(arg) {
  if (!(arg instanceof administrator_pb.AllUserResponse)) {
    throw new Error('Expected argument of type administrator.AllUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_administrator_AllUserResponse(buffer_arg) {
  return administrator_pb.AllUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_administrator_PrivilegeUserRequest(arg) {
  if (!(arg instanceof administrator_pb.PrivilegeUserRequest)) {
    throw new Error('Expected argument of type administrator.PrivilegeUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_administrator_PrivilegeUserRequest(buffer_arg) {
  return administrator_pb.PrivilegeUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_administrator_RegisterTrackingIdRequest(arg) {
  if (!(arg instanceof administrator_pb.RegisterTrackingIdRequest)) {
    throw new Error('Expected argument of type administrator.RegisterTrackingIdRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_administrator_RegisterTrackingIdRequest(buffer_arg) {
  return administrator_pb.RegisterTrackingIdRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_administrator_RemoveItemRequest(arg) {
  if (!(arg instanceof administrator_pb.RemoveItemRequest)) {
    throw new Error('Expected argument of type administrator.RemoveItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_administrator_RemoveItemRequest(buffer_arg) {
  return administrator_pb.RemoveItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_administrator_RemoveUserRequest(arg) {
  if (!(arg instanceof administrator_pb.RemoveUserRequest)) {
    throw new Error('Expected argument of type administrator.RemoveUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_administrator_RemoveUserRequest(buffer_arg) {
  return administrator_pb.RemoveUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_administrator_SpecificTransactionRequest(arg) {
  if (!(arg instanceof administrator_pb.SpecificTransactionRequest)) {
    throw new Error('Expected argument of type administrator.SpecificTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_administrator_SpecificTransactionRequest(buffer_arg) {
  return administrator_pb.SpecificTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_administrator_SpecificTransactionResponse(arg) {
  if (!(arg instanceof administrator_pb.SpecificTransactionResponse)) {
    throw new Error('Expected argument of type administrator.SpecificTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_administrator_SpecificTransactionResponse(buffer_arg) {
  return administrator_pb.SpecificTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_administrator_SpecificUserTransactionRequest(arg) {
  if (!(arg instanceof administrator_pb.SpecificUserTransactionRequest)) {
    throw new Error('Expected argument of type administrator.SpecificUserTransactionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_administrator_SpecificUserTransactionRequest(buffer_arg) {
  return administrator_pb.SpecificUserTransactionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_administrator_SpecificUserTransactionResponse(arg) {
  if (!(arg instanceof administrator_pb.SpecificUserTransactionResponse)) {
    throw new Error('Expected argument of type administrator.SpecificUserTransactionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_administrator_SpecificUserTransactionResponse(buffer_arg) {
  return administrator_pb.SpecificUserTransactionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_administrator_UpdateTransactionStatusRequest(arg) {
  if (!(arg instanceof administrator_pb.UpdateTransactionStatusRequest)) {
    throw new Error('Expected argument of type administrator.UpdateTransactionStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_administrator_UpdateTransactionStatusRequest(buffer_arg) {
  return administrator_pb.UpdateTransactionStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_administrator_VoidRequest(arg) {
  if (!(arg instanceof administrator_pb.VoidRequest)) {
    throw new Error('Expected argument of type administrator.VoidRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_administrator_VoidRequest(buffer_arg) {
  return administrator_pb.VoidRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_administrator_VoidResponse(arg) {
  if (!(arg instanceof administrator_pb.VoidResponse)) {
    throw new Error('Expected argument of type administrator.VoidResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_administrator_VoidResponse(buffer_arg) {
  return administrator_pb.VoidResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// サービスの定義
var UserServiceService = exports.UserServiceService = {
  // サービスが持つメソッドの定義
all: {
    path: '/administrator.UserService/All',
    requestStream: false,
    responseStream: false,
    requestType: administrator_pb.VoidRequest,
    responseType: administrator_pb.AllUserResponse,
    requestSerialize: serialize_administrator_VoidRequest,
    requestDeserialize: deserialize_administrator_VoidRequest,
    responseSerialize: serialize_administrator_AllUserResponse,
    responseDeserialize: deserialize_administrator_AllUserResponse,
  },
  remove: {
    path: '/administrator.UserService/Remove',
    requestStream: false,
    responseStream: false,
    requestType: administrator_pb.RemoveUserRequest,
    responseType: administrator_pb.VoidResponse,
    requestSerialize: serialize_administrator_RemoveUserRequest,
    requestDeserialize: deserialize_administrator_RemoveUserRequest,
    responseSerialize: serialize_administrator_VoidResponse,
    responseDeserialize: deserialize_administrator_VoidResponse,
  },
  privilege: {
    path: '/administrator.UserService/Privilege',
    requestStream: false,
    responseStream: false,
    requestType: administrator_pb.PrivilegeUserRequest,
    responseType: administrator_pb.VoidResponse,
    requestSerialize: serialize_administrator_PrivilegeUserRequest,
    requestDeserialize: deserialize_administrator_PrivilegeUserRequest,
    responseSerialize: serialize_administrator_VoidResponse,
    responseDeserialize: deserialize_administrator_VoidResponse,
  },
  transaction: {
    path: '/administrator.UserService/Transaction',
    requestStream: false,
    responseStream: false,
    requestType: administrator_pb.SpecificUserTransactionRequest,
    responseType: administrator_pb.SpecificUserTransactionResponse,
    requestSerialize: serialize_administrator_SpecificUserTransactionRequest,
    requestDeserialize: deserialize_administrator_SpecificUserTransactionRequest,
    responseSerialize: serialize_administrator_SpecificUserTransactionResponse,
    responseDeserialize: deserialize_administrator_SpecificUserTransactionResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
var ItemServiceService = exports.ItemServiceService = {
  remove: {
    path: '/administrator.ItemService/Remove',
    requestStream: false,
    responseStream: false,
    requestType: administrator_pb.RemoveItemRequest,
    responseType: administrator_pb.VoidResponse,
    requestSerialize: serialize_administrator_RemoveItemRequest,
    requestDeserialize: deserialize_administrator_RemoveItemRequest,
    responseSerialize: serialize_administrator_VoidResponse,
    responseDeserialize: deserialize_administrator_VoidResponse,
  },
  all: {
    path: '/administrator.ItemService/All',
    requestStream: false,
    responseStream: false,
    requestType: administrator_pb.VoidRequest,
    responseType: administrator_pb.AllItemResponse,
    requestSerialize: serialize_administrator_VoidRequest,
    requestDeserialize: deserialize_administrator_VoidRequest,
    responseSerialize: serialize_administrator_AllItemResponse,
    responseDeserialize: deserialize_administrator_AllItemResponse,
  },
};

exports.ItemServiceClient = grpc.makeGenericClientConstructor(ItemServiceService);
var TransactionServiceService = exports.TransactionServiceService = {
  all: {
    path: '/administrator.TransactionService/All',
    requestStream: false,
    responseStream: false,
    requestType: administrator_pb.VoidRequest,
    responseType: administrator_pb.AllTransactionResponse,
    requestSerialize: serialize_administrator_VoidRequest,
    requestDeserialize: deserialize_administrator_VoidRequest,
    responseSerialize: serialize_administrator_AllTransactionResponse,
    responseDeserialize: deserialize_administrator_AllTransactionResponse,
  },
  byId: {
    path: '/administrator.TransactionService/ById',
    requestStream: false,
    responseStream: false,
    requestType: administrator_pb.SpecificTransactionRequest,
    responseType: administrator_pb.SpecificTransactionResponse,
    requestSerialize: serialize_administrator_SpecificTransactionRequest,
    requestDeserialize: deserialize_administrator_SpecificTransactionRequest,
    responseSerialize: serialize_administrator_SpecificTransactionResponse,
    responseDeserialize: deserialize_administrator_SpecificTransactionResponse,
  },
  registerTrackingId: {
    path: '/administrator.TransactionService/RegisterTrackingId',
    requestStream: false,
    responseStream: false,
    requestType: administrator_pb.RegisterTrackingIdRequest,
    responseType: administrator_pb.VoidResponse,
    requestSerialize: serialize_administrator_RegisterTrackingIdRequest,
    requestDeserialize: deserialize_administrator_RegisterTrackingIdRequest,
    responseSerialize: serialize_administrator_VoidResponse,
    responseDeserialize: deserialize_administrator_VoidResponse,
  },
  registerStatus: {
    path: '/administrator.TransactionService/RegisterStatus',
    requestStream: false,
    responseStream: false,
    requestType: administrator_pb.UpdateTransactionStatusRequest,
    responseType: administrator_pb.VoidResponse,
    requestSerialize: serialize_administrator_UpdateTransactionStatusRequest,
    requestDeserialize: deserialize_administrator_UpdateTransactionStatusRequest,
    responseSerialize: serialize_administrator_VoidResponse,
    responseDeserialize: deserialize_administrator_VoidResponse,
  },
};

exports.TransactionServiceClient = grpc.makeGenericClientConstructor(TransactionServiceService);
