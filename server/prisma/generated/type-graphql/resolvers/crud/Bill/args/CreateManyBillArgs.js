"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBillArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillCreateManyInput_1 = require("../../../inputs/BillCreateManyInput");
let CreateManyBillArgs = exports.CreateManyBillArgs = class CreateManyBillArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BillCreateManyInput_1.BillCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyBillArgs.prototype, "data", void 0);
exports.CreateManyBillArgs = CreateManyBillArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyBillArgs);
