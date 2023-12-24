// import { UserWhereInput } from 'prisma/generated/type-graphql';
import { Field, ID, ObjectType } from "type-graphql";

export enum ErrorMessages {
  NO_USER = 'No user found',
}

// export class CustomUserWhereInput extends UserWhereInput {
//   message: ErrorMessages;
// }

@ObjectType({ description: "Person"})
export class UserOutput {
  @Field(() => ID, { nullable: true})
  id: string;

  @Field(() => String, { nullable: true})
  email: string;

  @Field(() => String, { nullable: true})
  password: string;

  @Field(() => String, { nullable: true})
  userId?: string;

  @Field(() => Boolean, { nullable: true})
  enabledMultiFactor: boolean;

  @Field(() => Date, { nullable: true})
  loggedInTime?: Date;

  @Field(() => Date, { nullable: true})
  loggedOutTime?: Date;

  @Field(() => Date, { nullable: true})
  userAccountCreationDate?: Date;

  @Field(() => String, { nullable: true})
  message: ErrorMessages;
}
