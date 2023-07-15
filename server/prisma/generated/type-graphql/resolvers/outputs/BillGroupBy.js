"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillAvgAggregate_1 = require("../outputs/BillAvgAggregate");
const BillCountAggregate_1 = require("../outputs/BillCountAggregate");
const BillMaxAggregate_1 = require("../outputs/BillMaxAggregate");
const BillMinAggregate_1 = require("../outputs/BillMinAggregate");
const BillSumAggregate_1 = require("../outputs/BillSumAggregate");
let BillGroupBy = exports.BillGroupBy = class BillGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BillGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], BillGroupBy.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], BillGroupBy.prototype, "amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillCountAggregate_1.BillCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillCountAggregate_1.BillCountAggregate)
], BillGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillAvgAggregate_1.BillAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillAvgAggregate_1.BillAvgAggregate)
], BillGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillSumAggregate_1.BillSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillSumAggregate_1.BillSumAggregate)
], BillGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillMinAggregate_1.BillMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillMinAggregate_1.BillMinAggregate)
], BillGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillMaxAggregate_1.BillMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillMaxAggregate_1.BillMaxAggregate)
], BillGroupBy.prototype, "_max", void 0);
exports.BillGroupBy = BillGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BillGroupBy", {})
], BillGroupBy);
