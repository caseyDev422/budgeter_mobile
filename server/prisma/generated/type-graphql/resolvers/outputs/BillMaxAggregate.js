"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BillMaxAggregate = exports.BillMaxAggregate = class BillMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillMaxAggregate.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BillMaxAggregate.prototype, "amount", void 0);
exports.BillMaxAggregate = BillMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BillMaxAggregate", {})
], BillMaxAggregate);
