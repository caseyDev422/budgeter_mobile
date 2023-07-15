"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyBillResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyBillArgs_1 = require("./args/FindManyBillArgs");
const Bill_1 = require("../../../models/Bill");
const helpers_1 = require("../../../helpers");
let FindManyBillResolver = exports.FindManyBillResolver = class FindManyBillResolver {
    async bills(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Bill_1.Bill], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyBillArgs_1.FindManyBillArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyBillResolver.prototype, "bills", null);
exports.FindManyBillResolver = FindManyBillResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bill_1.Bill)
], FindManyBillResolver);
