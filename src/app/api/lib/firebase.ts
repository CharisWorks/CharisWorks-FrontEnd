import { FetchRequests } from "../fetch";
import { FirebaseRequests } from "../firebase";

export const FirebaseRequest = new FirebaseRequests(new FetchRequests)
