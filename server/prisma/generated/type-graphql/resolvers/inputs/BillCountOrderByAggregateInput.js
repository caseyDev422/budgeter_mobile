"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BillCountOrderByAggregateInput = exports.BillCountOrderByAggregateInput = class BillCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillCountOrderByAggregateInput.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillCountOrderByAggregateInput.prototype, "amount", void 0);
exports.BillCountOrderByAggregateInput = BillCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillCountOrderByAggregateInput", {})
], BillCountOrderByAggregateInput);
