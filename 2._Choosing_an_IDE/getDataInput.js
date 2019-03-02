function getDataInput(elementAmount) {
    let dataset = [];

    for (let i = 0; i <= 10; i++) {
        dataset.push(Math.floor(Math.random() * Math.floor(100)));
    }
    return dataset;
}

module.exports = getDataInput;