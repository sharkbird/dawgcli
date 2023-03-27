#! /usr/bin/env node

const { program } = require('commander');
const generatePackedDAWG=require('./command/generatePackedDAWG');
program
.command('generate')
.description('Generates a module containing a packed version of a DAWG for use with Ptrie to build a lookup tool.')
.action(generatePackedDAWG);


program.parse();