import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { Order, OrderModel } from "../entities/order-entity";
import { CreateOrderInput, EditOrderInput } from "./order-params";

@Resolver()
export class OrderResolver {

    @Query(returns => [Order])
    async orders(): Promise<Order[]> {
        return await OrderModel.find({});
    }

    @Query(returns => Order)
    async order(@Arg("_id") _id: string): Promise<Order[]> {
        return await OrderModel.findById(_id);
    }

    @Mutation(returns => Order)
    async createOrder(@Arg("data") data: CreateOrderInput): Promise<Order> {
        const newOrder = new OrderModel(data);
        await newOrder.save();
        return newOrder;
    }

    @Mutation(returns => Order)
    async deleteOrder(@Arg("_id") _id: string): Promise<Order> {
        const deltedOrder = await OrderModel.findByIdAndRemove(_id);
        return deltedOrder;
    }

    @Mutation(returns => Order)
    async editOrder(@Arg("_id") _id: string, @Arg("data") data: EditOrderInput): Promise<Order> {

        return OrderModel.findByIdAndUpdate(_id, data, { new: true });
    }
}