"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateBillArgs_1 = require("./args/AggregateBillArgs");
const CreateManyBillArgs_1 = require("./args/CreateManyBillArgs");
const CreateOneBillArgs_1 = require("./args/CreateOneBillArgs");
const DeleteManyBillArgs_1 = require("./args/DeleteManyBillArgs");
const DeleteOneBillArgs_1 = require("./args/DeleteOneBillArgs");
const FindFirstBillArgs_1 = require("./args/FindFirstBillArgs");
const FindFirstBillOrThrowArgs_1 = require("./args/FindFirstBillOrThrowArgs");
const FindManyBillArgs_1 = require("./args/FindManyBillArgs");
const FindUniqueBillArgs_1 = require("./args/FindUniqueBillArgs");
const FindUniqueBillOrThrowArgs_1 = require("./args/FindUniqueBillOrThrowArgs");
const GroupByBillArgs_1 = require("./args/GroupByBillArgs");
const UpdateManyBillArgs_1 = require("./args/UpdateManyBillArgs");
const UpdateOneBillArgs_1 = require("./args/UpdateOneBillArgs");
const UpsertOneBillArgs_1 = require("./args/UpsertOneBillArgs");
const helpers_1 = require("../../../helpers");
const Bill_1 = require("../../../models/Bill");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateBill_1 = require("../../outputs/AggregateBill");
const BillGroupBy_1 = require("../../outputs/BillGroupBy");
let BillCrudResolver = exports.BillCrudResolver = class BillCrudResolver {
    async aggregateBill(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstBillOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async bills(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async bill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByBill(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneBill(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).bill.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], BillCrudResolver.prototype, "aggregateBill", null);
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
], BillCrudResolver.prototype, "createManyBill", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Bill_1.Bill, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneBillArgs_1.CreateOneBillArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillCrudResolver.prototype, "createOneBill", null);
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
], BillCrudResolver.prototype, "deleteManyBill", null);
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
], BillCrudResolver.prototype, "deleteOneBill", null);
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
], BillCrudResolver.prototype, "findFirstBill", null);
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
], BillCrudResolver.prototype, "findFirstBillOrThrow", null);
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
], BillCrudResolver.prototype, "bills", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Bill_1.Bill, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBillArgs_1.FindUniqueBillArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillCrudResolver.prototype, "bill", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Bill_1.Bill, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueBillOrThrowArgs_1.FindUniqueBillOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillCrudResolver.prototype, "getBill", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [BillGroupBy_1.BillGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByBillArgs_1.GroupByBillArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillCrudResolver.prototype, "groupByBill", null);
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
], BillCrudResolver.prototype, "updateManyBill", null);
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
], BillCrudResolver.prototype, "updateOneBill", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Bill_1.Bill, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneBillArgs_1.UpsertOneBillArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], BillCrudResolver.prototype, "upsertOneBill", null);
exports.BillCrudResolver = BillCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Bill_1.Bill)
], BillCrudResolver);
