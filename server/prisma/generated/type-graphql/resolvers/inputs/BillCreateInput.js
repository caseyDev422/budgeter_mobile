"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BillCreateInput = exports.BillCreateInput = class BillCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BillCreateInput.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BillCreateInput.prototype, "amount", void 0);
exports.BillCreateInput = BillCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillCreateInput", {})
], BillCreateInput);
