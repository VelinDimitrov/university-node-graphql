import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Address, AddressModel } from "../entities/address-entity";
import { CreateAddressInput, BaseAddressInput } from "./address-params";

@Resolver()
export class AddressResolver {

    @Query(returns => [Address])
    async addresses(): Promise<Address[]> {
        return await AddressModel.find({});
    }

    @Query(returns => Address)
    async address(@Arg("_id") _id: string): Promise<Address[]> {
        return await AddressModel.findById(_id);
    }

    @Mutation(returns => Address)
    async createAddress(@Arg("data") data: CreateAddressInput): Promise<Address> {
        const newAddress = new AddressModel(data);
        await newAddress.save();
        return newAddress;
    }

    @Mutation(returns => Address)
    async deleteAddress(@Arg("_id") _id: string): Promise<Address> {
        const deltedAddress = await AddressModel.findByIdAndRemove(_id);
        return deltedAddress;
    }

    @Mutation(returns => Address)
    async editAddress(@Arg("_id") _id: string, @Arg("data") data: BaseAddressInput): Promise<Address> {

        return AddressModel.findByIdAndUpdate(_id, data, { new: true });
    }
}