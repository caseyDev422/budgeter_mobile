"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillAvgOrderByAggregateInput_1 = require("../inputs/BillAvgOrderByAggregateInput");
const BillCountOrderByAggregateInput_1 = require("../inputs/BillCountOrderByAggregateInput");
const BillMaxOrderByAggregateInput_1 = require("../inputs/BillMaxOrderByAggregateInput");
const BillMinOrderByAggregateInput_1 = require("../inputs/BillMinOrderByAggregateInput");
const BillSumOrderByAggregateInput_1 = require("../inputs/BillSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let BillOrderByWithAggregationInput = exports.BillOrderByWithAggregationInput = class BillOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillOrderByWithAggregationInput.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillOrderByWithAggregationInput.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillCountOrderByAggregateInput_1.BillCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillCountOrderByAggregateInput_1.BillCountOrderByAggregateInput)
], BillOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillAvgOrderByAggregateInput_1.BillAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillAvgOrderByAggregateInput_1.BillAvgOrderByAggregateInput)
], BillOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillMaxOrderByAggregateInput_1.BillMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillMaxOrderByAggregateInput_1.BillMaxOrderByAggregateInput)
], BillOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillMinOrderByAggregateInput_1.BillMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillMinOrderByAggregateInput_1.BillMinOrderByAggregateInput)
], BillOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillSumOrderByAggregateInput_1.BillSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillSumOrderByAggregateInput_1.BillSumOrderByAggregateInput)
], BillOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.BillOrderByWithAggregationInput = BillOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillOrderByWithAggregationInput", {})
], BillOrderByWithAggregationInput);
