import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BillScalarWhereWithAggregatesInput {
    AND?: BillScalarWhereWithAggregatesInput[] | undefined;
    OR?: BillScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BillScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    billName?: StringWithAggregatesFilter | undefined;
    amount?: FloatWithAggregatesFilter | undefined;
}
