import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BillWhereInput {
    AND?: BillWhereInput[] | undefined;
    OR?: BillWhereInput[] | undefined;
    NOT?: BillWhereInput[] | undefined;
    id?: StringFilter | undefined;
    billName?: StringFilter | undefined;
    amount?: FloatFilter | undefined;
}
