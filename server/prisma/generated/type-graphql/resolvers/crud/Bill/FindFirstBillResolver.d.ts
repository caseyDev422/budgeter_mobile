import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBillArgs } from "./args/FindFirstBillArgs";
import { Bill } from "../../../models/Bill";
export declare class FindFirstBillResolver {
    findFirstBill(ctx: any, info: GraphQLResolveInfo, args: FindFirstBillArgs): Promise<Bill | null>;
}
