"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let BillAvgAggregate = exports.BillAvgAggregate = class BillAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], BillAvgAggregate.prototype, "amount", void 0);
exports.BillAvgAggregate = BillAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("BillAvgAggregate", {})
], BillAvgAggregate);
