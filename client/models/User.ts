export interface User {
  id: string;
  userId?: string; // if no userId provided, email will be used for the userId
  email: string;
  password?: string;
  enabledMultiFactor: boolean;
  loggedInTime: Date;
  loggedOutTime?: Date;
}