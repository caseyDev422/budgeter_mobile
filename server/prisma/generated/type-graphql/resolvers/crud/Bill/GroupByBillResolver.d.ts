import type { GraphQLResolveInfo } from "graphql";
import { GroupByBillArgs } from "./args/GroupByBillArgs";
import { BillGroupBy } from "../../outputs/BillGroupBy";
export declare class GroupByBillResolver {
    groupByBill(ctx: any, info: GraphQLResolveInfo, args: GroupByBillArgs): Promise<BillGroupBy[]>;
}
