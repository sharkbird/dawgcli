const process=require("process");
const Trie = require("dawg-lookup").Trie;
const PTrie = require("dawg-lookup/lib/ptrie").PTrie;
const fs = require("fs");

//const data = require(`${process.cwd()}/word.js`);


function generatePackedDAWG(fileName, moduleName) {
    if (moduleName==="same") {
        moduleName=fileName.replace(/\.[^/.]+$/, "");
    };
    
    let words = fs.readFileSync(fileName).toString(); 
    const trie = new Trie(words);
    const packedTrie=trie.pack();
    
    fs.writeFileSync(`${moduleName}.js`,`data="${packedTrie}";module.exports = data`);
    
    
    //   const pTrie=new PTrie(data);
    //   console.log(pTrie.isWord("cat")); 
    //   console.log(process.cwd());
}

module.exports = generatePackedDAWG