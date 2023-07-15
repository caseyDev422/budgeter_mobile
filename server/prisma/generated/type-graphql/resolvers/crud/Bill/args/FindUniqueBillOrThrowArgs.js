"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBillOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillWhereUniqueInput_1 = require("../../../inputs/BillWhereUniqueInput");
let FindUniqueBillOrThrowArgs = exports.FindUniqueBillOrThrowArgs = class FindUniqueBillOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillWhereUniqueInput_1.BillWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillWhereUniqueInput_1.BillWhereUniqueInput)
], FindUniqueBillOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueBillOrThrowArgs = FindUniqueBillOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBillOrThrowArgs);
