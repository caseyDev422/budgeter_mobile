"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let BillUpdateManyMutationInput = exports.BillUpdateManyMutationInput = class BillUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], BillUpdateManyMutationInput.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], BillUpdateManyMutationInput.prototype, "amount", void 0);
exports.BillUpdateManyMutationInput = BillUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillUpdateManyMutationInput", {})
], BillUpdateManyMutationInput);
