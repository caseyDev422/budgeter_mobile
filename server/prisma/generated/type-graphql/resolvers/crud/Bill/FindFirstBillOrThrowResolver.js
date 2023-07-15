"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstBillOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstBillOrThrowArgs_1 = require("./args/FindFirstBillOrThrowArgs");
const Bill_1 = require("../../../models/Bill");
const helpers_1 = require("../../../helpers");
let FindFirstBillOrThrowResolver = exports.FindFirstBillOrThrowResolver = class FindFirstBillOrThrowResolver {
    async findFirstBillOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstBillOrThrowArgs_1.FindFirstBillOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstBillOrThrowResolver.prototype, "findFirstBillOrThrow", null);
exports.FindFirstBillOrThrowResolver = FindFirstBillOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bill_1.Bill)
], FindFirstBillOrThrowResolver);
