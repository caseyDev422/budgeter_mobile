import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneBillArgs } from "./args/UpsertOneBillArgs";
import { Bill } from "../../../models/Bill";
export declare class UpsertOneBillResolver {
    upsertOneBill(ctx: any, info: GraphQLResolveInfo, args: UpsertOneBillArgs): Promise<Bill>;
}
