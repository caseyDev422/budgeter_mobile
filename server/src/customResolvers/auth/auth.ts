import { UserCreateInput } from "prisma/generated/type-graphql";
import { AuthUser } from "src/models/User";
import { Arg, Mutation, Resolver } from "type-graphql";

@Resolver()
export class AuthResolver {
  @Mutation(() => UserCreateInput)
  customCreateNewUser(
    @Arg("data") data: AuthUser
  ) {
    console.log("data", data);
    return {};
  }
}