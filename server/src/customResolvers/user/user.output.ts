import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({ description: "Person"})
export class UserOutput {
  @Field(() => ID)
  id: string;

  @Field(() => String)
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
}