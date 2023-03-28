import {expect, test} from 'vitest';
const PTrie = require("dawg-lookup/lib/ptrie").PTrie;
const generatePackedDAWG = require('../command/generatePackedDAWG');
test('generatePackedDAWG()', ()=> {
    generatePackedDAWG('tests/sowpods.txt','default');
    //now check that the generated module is valid
    const dataDefaultName=require(`${process.cwd()}/tests/word.js`);
    const pTrieDefaultName=new PTrie(dataDefaultName);
    expect(pTrieDefaultName.isWord("cat")).toBeTruthy();
    expect(pTrieDefaultName.isWord("catacatacat")).toBeFalsy();
});


