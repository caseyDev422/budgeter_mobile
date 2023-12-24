import { ErrorMessages } from "./user.output";

export interface IUser {
  id: string;
  email: string;
  userId: string;
  password: string;
  enabledMultiFactor: boolean;
  loggedInTime: Date;
  loggedOutTime: Date;
  userAccountCreationDate: Date;
  message: ErrorMessages;
}