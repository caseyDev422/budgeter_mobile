"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneBillArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillWhereUniqueInput_1 = require("../../../inputs/BillWhereUniqueInput");
let DeleteOneBillArgs = exports.DeleteOneBillArgs = class DeleteOneBillArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillWhereUniqueInput_1.BillWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillWhereUniqueInput_1.BillWhereUniqueInput)
], DeleteOneBillArgs.prototype, "where", void 0);
exports.DeleteOneBillArgs = DeleteOneBillArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneBillArgs);
