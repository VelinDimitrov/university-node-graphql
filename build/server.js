"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
require("reflect-metadata");
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const schema_1 = require("./schema");
dotenv_1.default.config();
const graphQlPath = process.env.GRAPHQL_PATH;
const port = process.env.PORT;
const dbUrl = process.env.MONGODB_URL;
mongoose_1.default.connect(dbUrl, {
    autoIndex: true,
}).then(() => {
    console.log("connected to mongodb");
}).catch((e) => {
    console.log(e);
});
async function startApolloServer() {
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    app.use(graphQlPath, (0, cors_1.default)({
        origin: '*'
    }), body_parser_1.default.json());
    const schema = await (0, schema_1.getSchema)();
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        plugins: [(0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
        introspection: true,
    });
    await server.start();
    server.applyMiddleware({ app, path: '/' });
    await new Promise(resolve => httpServer.listen({ port }));
    console.log(`Server started at http://localhost:${port}/${graphQlPath}`);
    return { server, app };
}
startApolloServer();
