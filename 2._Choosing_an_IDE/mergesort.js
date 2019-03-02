const getDataInput = require('./getDataInput');

function merge(data, left, middle, right) {
    
    const leftArray = data.slice(left, middle);
    const rightArray = data.slice(middle+1, right);

}

function sort(data, left, right) {
    if (right > left) {
        const middle = 
    }
}

const dataset = getDataInput();
merge(dataset, 0, Math.floor(data.length/2), dataset.length-1);