import type { GraphQLResolveInfo } from "graphql";
import { CreateOneBillArgs } from "./args/CreateOneBillArgs";
import { Bill } from "../../../models/Bill";
export declare class CreateOneBillResolver {
    createOneBill(ctx: any, info: GraphQLResolveInfo, args: CreateOneBillArgs): Promise<Bill>;
}
