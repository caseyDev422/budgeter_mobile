"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBillOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillOrderByWithRelationInput_1 = require("../../../inputs/BillOrderByWithRelationInput");
const BillWhereInput_1 = require("../../../inputs/BillWhereInput");
const BillWhereUniqueInput_1 = require("../../../inputs/BillWhereUniqueInput");
const BillScalarFieldEnum_1 = require("../../../../enums/BillScalarFieldEnum");
let FindFirstBillOrThrowArgs = exports.FindFirstBillOrThrowArgs = class FindFirstBillOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillWhereInput_1.BillWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillWhereInput_1.BillWhereInput)
], FindFirstBillOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillOrderByWithRelationInput_1.BillOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstBillOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillWhereUniqueInput_1.BillWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillWhereUniqueInput_1.BillWhereUniqueInput)
], FindFirstBillOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstBillOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstBillOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillScalarFieldEnum_1.BillScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstBillOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstBillOrThrowArgs = FindFirstBillOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstBillOrThrowArgs);
