import { AuthFetchRequests, FetchRequests } from "../fetch";
import { CartRequests } from "../cart";
import { UserRequests } from "../user";
import { FirebaseRequests } from "../firebase";
import { StripeRequests } from "../stripe";
import { ManufacturerRequests } from "../manufacturer";
import { ICartRequests } from "../models/cart";
import { IManufacturerRequests } from "../models/manufacturer";
import { IUserRequests } from "../models/user";
import { IStripeRequests } from "../models/stripe";
import { IAuthAppRequests } from "../models/firebase";
import { IAdminItemRequests, IAdminTransactionRequests, IAdminUserRequests } from "../models/admin";
import { adminItemRequests, adminTransactionRequests, adminUserRequests } from "../admin";


export const FirebaseRequestImpl: IAuthAppRequests = new FirebaseRequests(new FetchRequests())
export const CartRequestImpl = (jwt: string): ICartRequests => new CartRequests(new AuthFetchRequests(jwt))
export const UserRequestImpl = (jwt: string): IUserRequests => new UserRequests(new AuthFetchRequests(jwt))
export const ManufacturerRequestImpl = (jwt: string): IManufacturerRequests => new ManufacturerRequests(new AuthFetchRequests(jwt))
export const StripeRequestImpl = (jwt: string): IStripeRequests => new StripeRequests(new AuthFetchRequests(jwt))
export const adminItemRequestsImpl = (jwt: string): IAdminItemRequests => new adminItemRequests(new AuthFetchRequests(jwt))
export const adminUserRequestsImpl = (jwt: string): IAdminUserRequests => new adminUserRequests(new AuthFetchRequests(jwt))
export const adminTransactionRequestsImpl = (jwt: string): IAdminTransactionRequests => new adminTransactionRequests(new AuthFetchRequests(jwt))