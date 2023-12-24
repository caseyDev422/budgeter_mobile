import { UserCreateInput, UserWhereInput } from '../../../prisma/generated/type-graphql';
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { ErrorMessages, UserOutput } from "./user.output";
import { Context } from 'src/context';
import PasswordService from "./PasswordService/PasswordService";

/**
 * {"operationName":"createOneUser","variables":{"data":{"userId":"scasey","email":"test@email.com","password":"test123","enabledMultiFactor":false,"userAccountCreationDate":"2023-12-24T17:53:56.089Z"}},"query":"mutation createOneUser($data: UserCreateInput!) {\n  createOneUser(data: $data) {\n    id\n    email\n    userId\n    password\n    loggedInTime\n    loggedOutTime\n    userAccountCreationDate\n    enabledMultiFactor\n    __typename\n  }\n}"}
 */

@Resolver()
export class UserResolver {
  @Mutation(() => String)
  async createUser(
    @Arg('data') data: UserCreateInput,
    @Ctx() ctx: Context,
  ): Promise<string | void> {
    console.log('where create user', data);
    const { prisma } = ctx;
    try {
      const hashedPassword = await PasswordService.hashPassword(data.password);
      const dataToSave = data;
      dataToSave.password = hashedPassword;
      const user = await prisma.user.create({
      data: dataToSave
    });
    if (user) {
      return "User created!";
    }
    } catch (error) {
      throw new Error(error);
    }
  }

  @Query(() => UserOutput)
  async findUser(
    @Arg('where') where: UserWhereInput,
    @Ctx() ctx: Context,
  ): Promise<UserOutput | any> {
    // returns a User
    console.log('where', where);
    const { prisma } = ctx;
    try {
      const user = await prisma.user.findFirst({
        where: {
          userId: where.userId?.equals,
        },
      });
      if (where.password && user?.password) {
         const isPasswordCorrect = await PasswordService.comparePassword(where.password.equals, user?.password);
         if (isPasswordCorrect) {
            return user as unknown as UserOutput;
         }
      }
      return { message: ErrorMessages.NO_USER };
      
    } catch (error) {
      throw new Error(`No user found: ${error}`);
    }
  }
}