"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressResolver = void 0;
const type_graphql_1 = require("type-graphql");
const address_entity_1 = require("../entities/address-entity");
const address_params_1 = require("./address-params");
let AddressResolver = class AddressResolver {
    async addresses() {
        return await address_entity_1.AddressModel.find({});
    }
    async address(_id) {
        return await address_entity_1.AddressModel.findById(_id);
    }
    async createAddress(data) {
        const newAddress = new address_entity_1.AddressModel(data);
        await newAddress.save();
        return newAddress;
    }
    async deleteAddress(_id) {
        const deltedAddress = await address_entity_1.AddressModel.findByIdAndRemove(_id);
        return deltedAddress;
    }
    async editAddress(_id, data) {
        return address_entity_1.AddressModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [address_entity_1.Address]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "addresses", null);
__decorate([
    (0, type_graphql_1.Query)(returns => address_entity_1.Address),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "address", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => address_entity_1.Address),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [address_params_1.CreateAddressInput]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "createAddress", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => address_entity_1.Address),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "deleteAddress", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => address_entity_1.Address),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, address_params_1.BaseAddressInput]),
    __metadata("design:returntype", Promise)
], AddressResolver.prototype, "editAddress", null);
AddressResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AddressResolver);
exports.AddressResolver = AddressResolver;
