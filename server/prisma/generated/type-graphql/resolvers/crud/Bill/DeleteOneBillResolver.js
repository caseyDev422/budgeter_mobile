"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneBillResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneBillArgs_1 = require("./args/DeleteOneBillArgs");
const Bill_1 = require("../../../models/Bill");
const helpers_1 = require("../../../helpers");
let DeleteOneBillResolver = exports.DeleteOneBillResolver = class DeleteOneBillResolver {
    async deleteOneBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Bill_1.Bill, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneBillArgs_1.DeleteOneBillArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneBillResolver.prototype, "deleteOneBill", null);
exports.DeleteOneBillResolver = DeleteOneBillResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bill_1.Bill)
], DeleteOneBillResolver);
