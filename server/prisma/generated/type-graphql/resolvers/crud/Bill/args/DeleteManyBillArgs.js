"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBillArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillWhereInput_1 = require("../../../inputs/BillWhereInput");
let DeleteManyBillArgs = exports.DeleteManyBillArgs = class DeleteManyBillArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillWhereInput_1.BillWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillWhereInput_1.BillWhereInput)
], DeleteManyBillArgs.prototype, "where", void 0);
exports.DeleteManyBillArgs = DeleteManyBillArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyBillArgs);
