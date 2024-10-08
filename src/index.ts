import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import sqlite3 from 'sqlite3';
import { initDatabase } from "./persistence/database/init";
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")
var { ruruHTML } = require("ruru/server")

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const db = new sqlite3.Database(process.env.DATABASE as string);
initDatabase(db).then(() => console.log("Database initialized."))

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

// graphql tests
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
});