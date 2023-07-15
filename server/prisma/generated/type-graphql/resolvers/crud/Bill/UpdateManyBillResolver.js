"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBillResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyBillArgs_1 = require("./args/UpdateManyBillArgs");
const Bill_1 = require("../../../models/Bill");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyBillResolver = exports.UpdateManyBillResolver = class UpdateManyBillResolver {
    async updateManyBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyBillArgs_1.UpdateManyBillArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyBillResolver.prototype, "updateManyBill", null);
exports.UpdateManyBillResolver = UpdateManyBillResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bill_1.Bill)
], UpdateManyBillResolver);
