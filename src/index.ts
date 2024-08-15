import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")
var { ruruHTML } = require("ruru/server")

dotenv.config();

console.log(process.env)

const app: Express = express();
const port = process.env.PORT || 3000;

var schema = buildSchema(`
    type Query {
      hello: String
    }
  `)

var root = {
    hello() {
        return "Hello world!"
    },
}

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.all(
    "/graphql",
    createHandler({
        schema: schema,
        rootValue: root,
    })
)

// tmp: for dev purposes
app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
})