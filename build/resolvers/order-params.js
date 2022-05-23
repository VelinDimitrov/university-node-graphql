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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditOrderInput = exports.CreateOrderInput = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const address_params_1 = require("./address-params");
let CreateOrderInput = class CreateOrderInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "orderNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "createdBy", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateOrderInput.prototype, "total", void 0);
CreateOrderInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateOrderInput);
exports.CreateOrderInput = CreateOrderInput;
let EditOrderInput = class EditOrderInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(10),
    __metadata("design:type", String)
], EditOrderInput.prototype, "orderNumber", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], EditOrderInput.prototype, "createdBy", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], EditOrderInput.prototype, "total", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [address_params_1.AddressInput]),
    __metadata("design:type", Array)
], EditOrderInput.prototype, "addresses", void 0);
EditOrderInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditOrderInput);
exports.EditOrderInput = EditOrderInput;
