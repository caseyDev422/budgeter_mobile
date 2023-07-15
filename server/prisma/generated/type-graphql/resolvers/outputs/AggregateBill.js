"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBill = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BillAvgAggregate_1 = require("../outputs/BillAvgAggregate");
const BillCountAggregate_1 = require("../outputs/BillCountAggregate");
const BillMaxAggregate_1 = require("../outputs/BillMaxAggregate");
const BillMinAggregate_1 = require("../outputs/BillMinAggregate");
const BillSumAggregate_1 = require("../outputs/BillSumAggregate");
let AggregateBill = exports.AggregateBill = class AggregateBill {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillCountAggregate_1.BillCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillCountAggregate_1.BillCountAggregate)
], AggregateBill.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillAvgAggregate_1.BillAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillAvgAggregate_1.BillAvgAggregate)
], AggregateBill.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillSumAggregate_1.BillSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillSumAggregate_1.BillSumAggregate)
], AggregateBill.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillMinAggregate_1.BillMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillMinAggregate_1.BillMinAggregate)
], AggregateBill.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BillMaxAggregate_1.BillMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BillMaxAggregate_1.BillMaxAggregate)
], AggregateBill.prototype, "_max", void 0);
exports.AggregateBill = AggregateBill = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateBill", {})
], AggregateBill);
