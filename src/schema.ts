import { buildSchema } from "type-graphql";
import { OrderResolver } from "./resolvers/order-resolver";
import { TypegooseMiddleware } from "./typegoose-midleware";
import * as path from "path";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "./object-id.scalar";
import { AddressResolver } from "./resolvers/address-resolver";

export const getSchema = async () => {

    const schema = await buildSchema({
        resolvers: [OrderResolver, AddressResolver],
        emitSchemaFile: path.resolve(__dirname, "schema.gql"),
        // use document converting middleware
        globalMiddlewares: [TypegooseMiddleware],
        // use ObjectId scalar mapping
        scalarsMap: [{ type: ObjectId, scalar: ObjectIdScalar }],
    });
    return schema;
}
