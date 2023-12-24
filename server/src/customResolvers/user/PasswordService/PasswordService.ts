import { genSalt, hash, compare } from 'bcryptjs';

class PasswordService {
  async hashPassword(password: string | undefined): Promise<string | undefined> {
    if (password) {
      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);
      return hashedPassword;
    }

    return undefined;
    
  }

  async comparePassword(password: string | undefined, hashedPassword: string): Promise<boolean> {
    if (password) {
       return await compare(password, hashedPassword); 
    }
    return false;
  }
}

export default new PasswordService();
