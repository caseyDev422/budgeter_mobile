import "reflect-metadata";
import { buildSchema } from "type-graphql";
import express = require("express");
import cors = require("cors");
import { resolvers as typegraphResolvers } from "../prisma/generated/type-graphql";
import { ApolloServer } from "apollo-server-express";
import prisma from "./prisma";
import { UserResolver } from "./customResolvers/user/user.resolver";


const main = async () => {
  const schema = await buildSchema({
    resolvers: [...typegraphResolvers, UserResolver],
    validate: false
  });

  const server = new ApolloServer({schema, context: { prisma }});
  const app = express();
  app.use(cors());
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
   console.log('Graphql listening on port 4000');
  })
}

main();