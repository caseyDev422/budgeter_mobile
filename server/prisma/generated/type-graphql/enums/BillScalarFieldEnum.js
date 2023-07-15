"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var BillScalarFieldEnum;
(function (BillScalarFieldEnum) {
    BillScalarFieldEnum["id"] = "id";
    BillScalarFieldEnum["billName"] = "billName";
    BillScalarFieldEnum["amount"] = "amount";
})(BillScalarFieldEnum || (exports.BillScalarFieldEnum = BillScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(BillScalarFieldEnum, {
    name: "BillScalarFieldEnum",
    description: undefined,
});
