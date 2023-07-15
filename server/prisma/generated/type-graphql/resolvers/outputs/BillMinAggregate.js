"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BillMinAggregate = exports.BillMinAggregate = class BillMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], BillMinAggregate.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BillMinAggregate.prototype, "amount", void 0);
exports.BillMinAggregate = BillMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BillMinAggregate", {})
], BillMinAggregate);
