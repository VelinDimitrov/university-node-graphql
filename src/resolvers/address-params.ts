import { MaxLength } from "class-validator";
import { ObjectId } from "mongodb";
import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAddressInput {


    @MaxLength(30)
    @Field()
    firstName: string;

    @MaxLength(30)
    @Field()
    lastName: string;

    @MaxLength(255)
    @Field()
    address: string;

    @MaxLength(20)
    @Field()
    country: string;

    @Field()
    shippingAddress: boolean;

    @MaxLength(20)
    @Field()
    city: string;
}


@InputType()
export class BaseAddressInput {

    @MaxLength(30)
    @Field({ nullable: true })
    firstName?: string;

    @MaxLength(30)
    @Field({ nullable: true })
    lastName?: string;

    @MaxLength(255)
    @Field({ nullable: true })
    address?: string;

    @MaxLength(20)
    @Field({ nullable: true })
    country?: string;


    @MaxLength(20)
    @Field({ nullable: true })
    city?: string;

    @Field({ nullable: true })
    shippingAddress?: boolean;
}

@InputType()
export class AddressInput extends BaseAddressInput {
    @Field()
    _id: ObjectId;
}