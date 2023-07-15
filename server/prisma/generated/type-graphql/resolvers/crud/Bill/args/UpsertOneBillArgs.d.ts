import { BillCreateInput } from "../../../inputs/BillCreateInput";
import { BillUpdateInput } from "../../../inputs/BillUpdateInput";
import { BillWhereUniqueInput } from "../../../inputs/BillWhereUniqueInput";
export declare class UpsertOneBillArgs {
    where: BillWhereUniqueInput;
    create: BillCreateInput;
    update: BillUpdateInput;
}
