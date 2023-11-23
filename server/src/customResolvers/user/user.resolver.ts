import { Arg, Query, Resolver } from "type-graphql";
import { UserOutput } from "./user.output";
import { UserWhereInput } from '../../../prisma/generated/type-graphql';

@Resolver()
export class UserResolver {
  @Query(() => UserOutput)
  async findUser(
    @Arg('where') where: UserWhereInput,
  ): Promise<any> {
    // returns a User
    console.log("where", where);
    const user = await

    return "";
  }
}