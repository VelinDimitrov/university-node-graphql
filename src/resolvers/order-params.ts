import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { AddressInput } from "./address-params";

@InputType()
export class CreateOrderInput {
    @Field()
    @MaxLength(10)
    orderNumber: string;

    @Field()
    createdBy: string;

    @Field()
    total: number;
}


@InputType()
export class EditOrderInput {
    @Field({ nullable: true })
    @MaxLength(10)
    orderNumber?: string;

    @Field({ nullable: true })
    createdBy?: string;

    @Field({ nullable: true })
    total?: number;

    @Field(type => [AddressInput])
    addresses?: AddressInput[]
}