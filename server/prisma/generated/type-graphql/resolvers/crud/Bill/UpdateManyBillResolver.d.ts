import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyBillArgs } from "./args/UpdateManyBillArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBillResolver {
    updateManyBill(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBillArgs): Promise<AffectedRowsOutput>;
}
