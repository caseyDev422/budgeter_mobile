"use strict";
var BillScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillScalarWhereWithAggregatesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FloatWithAggregatesFilter_1 = require("../inputs/FloatWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let BillScalarWhereWithAggregatesInput = exports.BillScalarWhereWithAggregatesInput = BillScalarWhereWithAggregatesInput_1 = class BillScalarWhereWithAggregatesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BillScalarWhereWithAggregatesInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BillScalarWhereWithAggregatesInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BillScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], BillScalarWhereWithAggregatesInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], BillScalarWhereWithAggregatesInput.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatWithAggregatesFilter_1.FloatWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatWithAggregatesFilter_1.FloatWithAggregatesFilter)
], BillScalarWhereWithAggregatesInput.prototype, "amount", void 0);
exports.BillScalarWhereWithAggregatesInput = BillScalarWhereWithAggregatesInput = BillScalarWhereWithAggregatesInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("BillScalarWhereWithAggregatesInput", {})
], BillScalarWhereWithAggregatesInput);
