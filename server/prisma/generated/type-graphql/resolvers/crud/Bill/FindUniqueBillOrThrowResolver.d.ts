import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBillOrThrowArgs } from "./args/FindUniqueBillOrThrowArgs";
import { Bill } from "../../../models/Bill";
export declare class FindUniqueBillOrThrowResolver {
    getBill(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBillOrThrowArgs): Promise<Bill | null>;
}
