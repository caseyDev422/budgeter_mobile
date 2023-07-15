import { BillOrderByWithAggregationInput } from "../../../inputs/BillOrderByWithAggregationInput";
import { BillScalarWhereWithAggregatesInput } from "../../../inputs/BillScalarWhereWithAggregatesInput";
import { BillWhereInput } from "../../../inputs/BillWhereInput";
export declare class GroupByBillArgs {
    where?: BillWhereInput | undefined;
    orderBy?: BillOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "billName" | "amount">;
    having?: BillScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
