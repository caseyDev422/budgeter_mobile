"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let BillOrderByWithRelationInput = exports.BillOrderByWithRelationInput = class BillOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillOrderByWithRelationInput.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillOrderByWithRelationInput.prototype, "amount", void 0);
exports.BillOrderByWithRelationInput = BillOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillOrderByWithRelationInput", {})
], BillOrderByWithRelationInput);
