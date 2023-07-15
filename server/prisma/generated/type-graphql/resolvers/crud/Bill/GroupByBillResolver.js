"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBillResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByBillArgs_1 = require("./args/GroupByBillArgs");
const Bill_1 = require("../../../models/Bill");
const BillGroupBy_1 = require("../../outputs/BillGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByBillResolver = exports.GroupByBillResolver = class GroupByBillResolver {
    async groupByBill(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BillGroupBy_1.BillGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBillArgs_1.GroupByBillArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByBillResolver.prototype, "groupByBill", null);
exports.GroupByBillResolver = GroupByBillResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bill_1.Bill)
], GroupByBillResolver);
