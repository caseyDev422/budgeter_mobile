export interface User {
  id?: string;
  userId?: string; // if no userId provided, email will be used for the userId
  email: string;
  password?: string;
  enabledMultiFactor: boolean;
  loggedInTime?: Date; // marked optional since when creating account, won't be necessary
  loggedOutTime?: Date;
  userAccountCreationDate?: Date; // when user created account on sign up
}