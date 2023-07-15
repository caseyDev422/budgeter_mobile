"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBillArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillOrderByWithRelationInput_1 = require("../../../inputs/BillOrderByWithRelationInput");
const BillWhereInput_1 = require("../../../inputs/BillWhereInput");
const BillWhereUniqueInput_1 = require("../../../inputs/BillWhereUniqueInput");
let AggregateBillArgs = exports.AggregateBillArgs = class AggregateBillArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillWhereInput_1.BillWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillWhereInput_1.BillWhereInput)
], AggregateBillArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillOrderByWithRelationInput_1.BillOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateBillArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillWhereUniqueInput_1.BillWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillWhereUniqueInput_1.BillWhereUniqueInput)
], AggregateBillArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBillArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBillArgs.prototype, "skip", void 0);
exports.AggregateBillArgs = AggregateBillArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateBillArgs);