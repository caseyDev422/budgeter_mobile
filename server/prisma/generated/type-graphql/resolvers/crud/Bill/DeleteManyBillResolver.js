"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBillResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyBillArgs_1 = require("./args/DeleteManyBillArgs");
const Bill_1 = require("../../../models/Bill");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyBillResolver = exports.DeleteManyBillResolver = class DeleteManyBillResolver {
    async deleteManyBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyBillArgs_1.DeleteManyBillArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyBillResolver.prototype, "deleteManyBill", null);
exports.DeleteManyBillResolver = DeleteManyBillResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bill_1.Bill)
], DeleteManyBillResolver);
