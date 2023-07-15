import { BillOrderByWithRelationInput } from "../../../inputs/BillOrderByWithRelationInput";
import { BillWhereInput } from "../../../inputs/BillWhereInput";
import { BillWhereUniqueInput } from "../../../inputs/BillWhereUniqueInput";
export declare class AggregateBillArgs {
    where?: BillWhereInput | undefined;
    orderBy?: BillOrderByWithRelationInput[] | undefined;
    cursor?: BillWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
