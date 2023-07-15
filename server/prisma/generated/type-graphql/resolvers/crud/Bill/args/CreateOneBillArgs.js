"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneBillArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillCreateInput_1 = require("../../../inputs/BillCreateInput");
let CreateOneBillArgs = exports.CreateOneBillArgs = class CreateOneBillArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillCreateInput_1.BillCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BillCreateInput_1.BillCreateInput)
], CreateOneBillArgs.prototype, "data", void 0);
exports.CreateOneBillArgs = CreateOneBillArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneBillArgs);
