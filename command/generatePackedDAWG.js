function generatePackedDAWG(fileName, moduleName) {
if (moduleName==="same") {
    moduleName=fileName.replace(/\.[^/.]+$/, "");
}
console.log(fileName + moduleName);
}

module.exports = generatePackedDAWG