"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Bill: crudResolvers.BillCrudResolver
};
const actionResolversMap = {
    Bill: {
        aggregateBill: actionResolvers.AggregateBillResolver,
        createManyBill: actionResolvers.CreateManyBillResolver,
        createOneBill: actionResolvers.CreateOneBillResolver,
        deleteManyBill: actionResolvers.DeleteManyBillResolver,
        deleteOneBill: actionResolvers.DeleteOneBillResolver,
        findFirstBill: actionResolvers.FindFirstBillResolver,
        findFirstBillOrThrow: actionResolvers.FindFirstBillOrThrowResolver,
        bills: actionResolvers.FindManyBillResolver,
        bill: actionResolvers.FindUniqueBillResolver,
        getBill: actionResolvers.FindUniqueBillOrThrowResolver,
        groupByBill: actionResolvers.GroupByBillResolver,
        updateManyBill: actionResolvers.UpdateManyBillResolver,
        updateOneBill: actionResolvers.UpdateOneBillResolver,
        upsertOneBill: actionResolvers.UpsertOneBillResolver
    }
};
const crudResolversInfo = {
    Bill: ["aggregateBill", "createManyBill", "createOneBill", "deleteManyBill", "deleteOneBill", "findFirstBill", "findFirstBillOrThrow", "bills", "bill", "getBill", "groupByBill", "updateManyBill", "updateOneBill", "upsertOneBill"]
};
const argsInfo = {
    AggregateBillArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyBillArgs: ["data"],
    CreateOneBillArgs: ["data"],
    DeleteManyBillArgs: ["where"],
    DeleteOneBillArgs: ["where"],
    FindFirstBillArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstBillOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyBillArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueBillArgs: ["where"],
    FindUniqueBillOrThrowArgs: ["where"],
    GroupByBillArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyBillArgs: ["data", "where"],
    UpdateOneBillArgs: ["data", "where"],
    UpsertOneBillArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators !== null && allActionsDecorators !== void 0 ? allActionsDecorators : [],
                ...operationKindDecorators !== null && operationKindDecorators !== void 0 ? operationKindDecorators : [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Bill: ["id", "billName", "amount"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateBill: ["_count", "_avg", "_sum", "_min", "_max"],
    BillGroupBy: ["id", "billName", "amount", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    BillCountAggregate: ["id", "billName", "amount", "_all"],
    BillAvgAggregate: ["amount"],
    BillSumAggregate: ["amount"],
    BillMinAggregate: ["id", "billName", "amount"],
    BillMaxAggregate: ["id", "billName", "amount"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    BillWhereInput: ["AND", "OR", "NOT", "id", "billName", "amount"],
    BillOrderByWithRelationInput: ["id", "billName", "amount"],
    BillWhereUniqueInput: ["id"],
    BillOrderByWithAggregationInput: ["id", "billName", "amount", "_count", "_avg", "_max", "_min", "_sum"],
    BillScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "billName", "amount"],
    BillCreateInput: ["id", "billName", "amount"],
    BillUpdateInput: ["billName", "amount"],
    BillCreateManyInput: ["id", "billName", "amount"],
    BillUpdateManyMutationInput: ["billName", "amount"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BillCountOrderByAggregateInput: ["id", "billName", "amount"],
    BillAvgOrderByAggregateInput: ["amount"],
    BillMaxOrderByAggregateInput: ["id", "billName", "amount"],
    BillMinOrderByAggregateInput: ["id", "billName", "amount"],
    BillSumOrderByAggregateInput: ["amount"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringFieldUpdateOperationsInput: ["set"],
    FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
