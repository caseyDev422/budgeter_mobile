import type { GraphQLResolveInfo } from "graphql";
import { AggregateBillArgs } from "./args/AggregateBillArgs";
import { AggregateBill } from "../../outputs/AggregateBill";
export declare class AggregateBillResolver {
    aggregateBill(ctx: any, info: GraphQLResolveInfo, args: AggregateBillArgs): Promise<AggregateBill>;
}
