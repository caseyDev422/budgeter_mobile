"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BillCreateManyInput = exports.BillCreateManyInput = class BillCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BillCreateManyInput.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BillCreateManyInput.prototype, "amount", void 0);
exports.BillCreateManyInput = BillCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BillCreateManyInput", {})
], BillCreateManyInput);
