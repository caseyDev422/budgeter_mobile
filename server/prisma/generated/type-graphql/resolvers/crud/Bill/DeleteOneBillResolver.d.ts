import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneBillArgs } from "./args/DeleteOneBillArgs";
import { Bill } from "../../../models/Bill";
export declare class DeleteOneBillResolver {
    deleteOneBill(ctx: any, info: GraphQLResolveInfo, args: DeleteOneBillArgs): Promise<Bill | null>;
}
