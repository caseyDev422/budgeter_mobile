import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { UserOutput } from "./user.output";
import { UserWhereInput } from '../../../prisma/generated/type-graphql';
import { Context } from 'src/context';


@Resolver()
export class UserResolver {
  @Query(() => UserOutput)
  async findUser(
    @Arg('where') where: UserWhereInput,
    @Ctx() ctx: Context,
  ): Promise<UserOutput> {
    // returns a User
    console.log('where', where);
    const { prisma } = ctx;
    try {
      const user = await prisma.user.findFirst({
        where: {
          userId: where.userId?.equals,
        },
      });
      return user as unknown as UserOutput;
    } catch (error) {
      throw new Error(`No user found: ${error}`);
    }
  }
}