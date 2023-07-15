"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneBillArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillUpdateInput_1 = require("../../../inputs/BillUpdateInput");
const BillWhereUniqueInput_1 = require("../../../inputs/BillWhereUniqueInput");
let UpdateOneBillArgs = exports.UpdateOneBillArgs = class UpdateOneBillArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillUpdateInput_1.BillUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillUpdateInput_1.BillUpdateInput)
], UpdateOneBillArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillWhereUniqueInput_1.BillWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillWhereUniqueInput_1.BillWhereUniqueInput)
], UpdateOneBillArgs.prototype, "where", void 0);
exports.UpdateOneBillArgs = UpdateOneBillArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneBillArgs);
