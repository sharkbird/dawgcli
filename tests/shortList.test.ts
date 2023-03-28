import {expect, test} from 'vitest';
const PTrie = require("dawg-lookup/lib/ptrie").PTrie;
const generatePackedDAWG = require('../command/generatePackedDAWG');
test('generatePackedDAWG()', ()=> {
    
    generatePackedDAWG('tests/word.txt','default');
    //now check that the generated module is valid
    const dataDefaultName=require(`${process.cwd()}/tests/word.js`);
    const pTrieDefaultName=new PTrie(dataDefaultName);
    expect(pTrieDefaultName.isWord("cat")).toBeTruthy();
    expect(pTrieDefaultName.isWord("catacatacat")).toBeFalsy();
    
    //check that the explicitly named module works
    generatePackedDAWG('tests/word.txt', 'tests/wordlist');
    const data=require(`${process.cwd()}/tests/wordlist.js`);
    const pTrie=new PTrie(data);
    expect(pTrie.isWord("cat")).toBeTruthy();
    expect(pTrie.isWord("catacatacat")).toBeFalsy();
    
});


