"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BillMaxOrderByAggregateInput = exports.BillMaxOrderByAggregateInput = class BillMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillMaxOrderByAggregateInput.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillMaxOrderByAggregateInput.prototype, "amount", void 0);
exports.BillMaxOrderByAggregateInput = BillMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillMaxOrderByAggregateInput", {})
], BillMaxOrderByAggregateInput);
