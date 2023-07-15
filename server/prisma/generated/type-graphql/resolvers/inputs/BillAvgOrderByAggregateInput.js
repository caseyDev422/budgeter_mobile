"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BillAvgOrderByAggregateInput = exports.BillAvgOrderByAggregateInput = class BillAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillAvgOrderByAggregateInput.prototype, "amount", void 0);
exports.BillAvgOrderByAggregateInput = BillAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillAvgOrderByAggregateInput", {})
], BillAvgOrderByAggregateInput);
