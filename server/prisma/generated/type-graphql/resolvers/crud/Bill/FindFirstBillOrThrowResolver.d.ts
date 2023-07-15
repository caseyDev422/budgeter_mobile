import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBillOrThrowArgs } from "./args/FindFirstBillOrThrowArgs";
import { Bill } from "../../../models/Bill";
export declare class FindFirstBillOrThrowResolver {
    findFirstBillOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstBillOrThrowArgs): Promise<Bill | null>;
}
