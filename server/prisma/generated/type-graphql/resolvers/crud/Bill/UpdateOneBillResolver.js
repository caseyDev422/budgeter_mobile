"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneBillResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneBillArgs_1 = require("./args/UpdateOneBillArgs");
const Bill_1 = require("../../../models/Bill");
const helpers_1 = require("../../../helpers");
let UpdateOneBillResolver = exports.UpdateOneBillResolver = class UpdateOneBillResolver {
    async updateOneBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneBillArgs_1.UpdateOneBillArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneBillResolver.prototype, "updateOneBill", null);
exports.UpdateOneBillResolver = UpdateOneBillResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bill_1.Bill)
], UpdateOneBillResolver);
