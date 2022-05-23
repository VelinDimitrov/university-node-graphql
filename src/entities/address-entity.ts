import { ObjectType, Field } from "type-graphql";
import { getModelForClass, prop as Prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Address {
    @Field()
    readonly _id: ObjectId;

    @Prop({ required: true })
    @Field()
    firstName: string;

    @Prop({ required: true })
    @Field()
    lastName: string;

    @Prop({ required: true })
    @Field()
    address: string;

    @Prop({ required: true })
    @Field()
    country: string;


    @Prop({ required: true })
    @Field()
    city: string;

    @Prop({ required: true, default: true })
    @Field()
    shippingAddress: boolean;

}

export const AddressModel = getModelForClass(Address, { schemaOptions: { timestamps: true } });