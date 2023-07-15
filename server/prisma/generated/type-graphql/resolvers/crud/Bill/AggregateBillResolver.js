"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBillResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBillArgs_1 = require("./args/AggregateBillArgs");
const Bill_1 = require("../../../models/Bill");
const AggregateBill_1 = require("../../outputs/AggregateBill");
const helpers_1 = require("../../../helpers");
let AggregateBillResolver = exports.AggregateBillResolver = class AggregateBillResolver {
    async aggregateBill(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateBill_1.AggregateBill, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateBillArgs_1.AggregateBillArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateBillResolver.prototype, "aggregateBill", null);
exports.AggregateBillResolver = AggregateBillResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bill_1.Bill)
], AggregateBillResolver);
