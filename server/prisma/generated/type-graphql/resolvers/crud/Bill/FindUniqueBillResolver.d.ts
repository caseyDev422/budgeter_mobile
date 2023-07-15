import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBillArgs } from "./args/FindUniqueBillArgs";
import { Bill } from "../../../models/Bill";
export declare class FindUniqueBillResolver {
    bill(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBillArgs): Promise<Bill | null>;
}
