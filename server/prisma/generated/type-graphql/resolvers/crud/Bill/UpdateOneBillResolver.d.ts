import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneBillArgs } from "./args/UpdateOneBillArgs";
import { Bill } from "../../../models/Bill";
export declare class UpdateOneBillResolver {
    updateOneBill(ctx: any, info: GraphQLResolveInfo, args: UpdateOneBillArgs): Promise<Bill | null>;
}
