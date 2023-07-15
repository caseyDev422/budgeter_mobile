"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBillResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyBillArgs_1 = require("./args/CreateManyBillArgs");
const Bill_1 = require("../../../models/Bill");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyBillResolver = exports.CreateManyBillResolver = class CreateManyBillResolver {
    async createManyBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyBillArgs_1.CreateManyBillArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyBillResolver.prototype, "createManyBill", null);
exports.CreateManyBillResolver = CreateManyBillResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bill_1.Bill)
], CreateManyBillResolver);
