import { BillAvgOrderByAggregateInput } from "../inputs/BillAvgOrderByAggregateInput";
import { BillCountOrderByAggregateInput } from "../inputs/BillCountOrderByAggregateInput";
import { BillMaxOrderByAggregateInput } from "../inputs/BillMaxOrderByAggregateInput";
import { BillMinOrderByAggregateInput } from "../inputs/BillMinOrderByAggregateInput";
import { BillSumOrderByAggregateInput } from "../inputs/BillSumOrderByAggregateInput";
export declare class BillOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    billName?: "asc" | "desc" | undefined;
    amount?: "asc" | "desc" | undefined;
    _count?: BillCountOrderByAggregateInput | undefined;
    _avg?: BillAvgOrderByAggregateInput | undefined;
    _max?: BillMaxOrderByAggregateInput | undefined;
    _min?: BillMinOrderByAggregateInput | undefined;
    _sum?: BillSumOrderByAggregateInput | undefined;
}
