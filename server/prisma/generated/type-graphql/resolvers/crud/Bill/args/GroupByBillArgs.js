"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBillArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillOrderByWithAggregationInput_1 = require("../../../inputs/BillOrderByWithAggregationInput");
const BillScalarWhereWithAggregatesInput_1 = require("../../../inputs/BillScalarWhereWithAggregatesInput");
const BillWhereInput_1 = require("../../../inputs/BillWhereInput");
const BillScalarFieldEnum_1 = require("../../../../enums/BillScalarFieldEnum");
let GroupByBillArgs = exports.GroupByBillArgs = class GroupByBillArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillWhereInput_1.BillWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillWhereInput_1.BillWhereInput)
], GroupByBillArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillOrderByWithAggregationInput_1.BillOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBillArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillScalarFieldEnum_1.BillScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBillArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillScalarWhereWithAggregatesInput_1.BillScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillScalarWhereWithAggregatesInput_1.BillScalarWhereWithAggregatesInput)
], GroupByBillArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBillArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBillArgs.prototype, "skip", void 0);
exports.GroupByBillArgs = GroupByBillArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByBillArgs);
