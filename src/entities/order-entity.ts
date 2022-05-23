import { ObjectType, Field } from "type-graphql";
import { prop as Prop, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Address } from "./address-entity";

@ObjectType()
export class Order {


    @Field()
    readonly _id: ObjectId;

    @Prop({ required: true, default: new Date() })
    @Field()
    createdOn: Date;

    @Prop({ required: true })
    @Field()
    createdBy: string;

    @Prop({ required: true })
    @Field()
    orderNumber: string;

    @Prop({ required: true })
    @Field()
    total: number;

    @Field(type => [Address])
    @Prop({ default: [] })
    addresses?: Address[]
}

export const OrderModel = getModelForClass(Order);