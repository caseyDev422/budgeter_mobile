import type { GraphQLResolveInfo } from "graphql";
import { CreateManyBillArgs } from "./args/CreateManyBillArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBillResolver {
    createManyBill(ctx: any, info: GraphQLResolveInfo, args: CreateManyBillArgs): Promise<AffectedRowsOutput>;
}
