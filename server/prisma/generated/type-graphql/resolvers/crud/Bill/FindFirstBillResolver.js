"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBillResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstBillArgs_1 = require("./args/FindFirstBillArgs");
const Bill_1 = require("../../../models/Bill");
const helpers_1 = require("../../../helpers");
let FindFirstBillResolver = exports.FindFirstBillResolver = class FindFirstBillResolver {
    async findFirstBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Bill_1.Bill, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBillArgs_1.FindFirstBillArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstBillResolver.prototype, "findFirstBill", null);
exports.FindFirstBillResolver = FindFirstBillResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bill_1.Bill)
], FindFirstBillResolver);
