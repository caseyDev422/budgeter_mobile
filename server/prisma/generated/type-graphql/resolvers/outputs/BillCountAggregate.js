"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BillCountAggregate = exports.BillCountAggregate = class BillCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BillCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BillCountAggregate.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BillCountAggregate.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BillCountAggregate.prototype, "_all", void 0);
exports.BillCountAggregate = BillCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BillCountAggregate", {})
], BillCountAggregate);
