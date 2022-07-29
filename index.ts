#!/usr/bin/node
"use strict"

const parser = require('./src/parcer.ts');

const app = () => {
    const args = process.argv.slice(2);
    // const parser = new Parser(args);

    const a = parser.parse();

}

app();
