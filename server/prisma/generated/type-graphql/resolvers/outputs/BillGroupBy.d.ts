import { BillAvgAggregate } from "../outputs/BillAvgAggregate";
import { BillCountAggregate } from "../outputs/BillCountAggregate";
import { BillMaxAggregate } from "../outputs/BillMaxAggregate";
import { BillMinAggregate } from "../outputs/BillMinAggregate";
import { BillSumAggregate } from "../outputs/BillSumAggregate";
export declare class BillGroupBy {
    id: string;
    billName: string;
    amount: number;
    _count: BillCountAggregate | null;
    _avg: BillAvgAggregate | null;
    _sum: BillSumAggregate | null;
    _min: BillMinAggregate | null;
    _max: BillMaxAggregate | null;
}
