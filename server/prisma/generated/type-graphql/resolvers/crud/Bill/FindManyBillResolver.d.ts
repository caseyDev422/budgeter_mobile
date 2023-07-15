import type { GraphQLResolveInfo } from "graphql";
import { FindManyBillArgs } from "./args/FindManyBillArgs";
import { Bill } from "../../../models/Bill";
export declare class FindManyBillResolver {
    bills(ctx: any, info: GraphQLResolveInfo, args: FindManyBillArgs): Promise<Bill[]>;
}
