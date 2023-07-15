"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneBillArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillCreateInput_1 = require("../../../inputs/BillCreateInput");
const BillUpdateInput_1 = require("../../../inputs/BillUpdateInput");
const BillWhereUniqueInput_1 = require("../../../inputs/BillWhereUniqueInput");
let UpsertOneBillArgs = exports.UpsertOneBillArgs = class UpsertOneBillArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillWhereUniqueInput_1.BillWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillWhereUniqueInput_1.BillWhereUniqueInput)
], UpsertOneBillArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillCreateInput_1.BillCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillCreateInput_1.BillCreateInput)
], UpsertOneBillArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillUpdateInput_1.BillUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillUpdateInput_1.BillUpdateInput)
], UpsertOneBillArgs.prototype, "update", void 0);
exports.UpsertOneBillArgs = UpsertOneBillArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneBillArgs);
