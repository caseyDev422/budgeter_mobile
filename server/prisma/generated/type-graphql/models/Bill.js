"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bill = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Bill = exports.Bill = class Bill {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Bill.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Bill.prototype, "billName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Bill.prototype, "amount", void 0);
exports.Bill = Bill = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Bill", {})
], Bill);
