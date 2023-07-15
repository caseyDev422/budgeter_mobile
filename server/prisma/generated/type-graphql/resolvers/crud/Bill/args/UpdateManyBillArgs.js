"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBillArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillUpdateManyMutationInput_1 = require("../../../inputs/BillUpdateManyMutationInput");
const BillWhereInput_1 = require("../../../inputs/BillWhereInput");
let UpdateManyBillArgs = exports.UpdateManyBillArgs = class UpdateManyBillArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillUpdateManyMutationInput_1.BillUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillUpdateManyMutationInput_1.BillUpdateManyMutationInput)
], UpdateManyBillArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillWhereInput_1.BillWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillWhereInput_1.BillWhereInput)
], UpdateManyBillArgs.prototype, "where", void 0);
exports.UpdateManyBillArgs = UpdateManyBillArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyBillArgs);
