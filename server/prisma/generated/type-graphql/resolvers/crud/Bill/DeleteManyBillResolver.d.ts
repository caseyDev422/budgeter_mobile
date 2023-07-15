import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyBillArgs } from "./args/DeleteManyBillArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBillResolver {
    deleteManyBill(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBillArgs): Promise<AffectedRowsOutput>;
}
