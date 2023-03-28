const process=require("process");
const Trie = require("dawg-lookup").Trie;
const PTrie = require("dawg-lookup/lib/ptrie").PTrie;
const fs = require("fs");

//const data = require(`${process.cwd()}/word.js`);


function generatePackedDAWG(fileName, moduleName) {
    if (moduleName==='default') {
        moduleName=fileName.replace(/\.[^/.]+$/, "");
    } else {
        moduleName=`${moduleName}`;
    }
    
    let words = fs.readFileSync(fileName).toString(); 
    const trie = new Trie(words);
    const packedTrie=trie.pack();
    fs.writeFileSync(`${process.cwd()}/${moduleName}.js`,`data="${packedTrie}";module.exports = data`);
    
    
    
}

module.exports = generatePackedDAWG;