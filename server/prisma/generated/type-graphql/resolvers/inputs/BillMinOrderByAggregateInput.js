"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BillMinOrderByAggregateInput = exports.BillMinOrderByAggregateInput = class BillMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillMinOrderByAggregateInput.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillMinOrderByAggregateInput.prototype, "amount", void 0);
exports.BillMinOrderByAggregateInput = BillMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillMinOrderByAggregateInput", {})
], BillMinOrderByAggregateInput);
