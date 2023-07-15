"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BillSumAggregate = exports.BillSumAggregate = class BillSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BillSumAggregate.prototype, "amount", void 0);
exports.BillSumAggregate = BillSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BillSumAggregate", {})
], BillSumAggregate);
