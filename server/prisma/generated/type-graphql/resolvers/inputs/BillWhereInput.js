"use strict";
var BillWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FloatFilter_1 = require("../inputs/FloatFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let BillWhereInput = exports.BillWhereInput = BillWhereInput_1 = class BillWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BillWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BillWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BillWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BillWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], BillWhereInput.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], BillWhereInput.prototype, "amount", void 0);
exports.BillWhereInput = BillWhereInput = BillWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("BillWhereInput", {})
], BillWhereInput);
