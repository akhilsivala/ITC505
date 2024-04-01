function sortArray() {
    const input = document.getElementById('arrayInput').value;
    let array = input.split(',').map(function(item) {
        return parseInt(item, 10);
    });
    
    // Bubble sort algorithm
    let len = array.length;
    for (let i = 0; i < len ; i++) {
        for(let j = 0 ; j < len - i - 1; j++){
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
        }
    }
    
    document.getElementById('sortedArray').textContent = array.join(', ');
}

var x = document.lastModified;
document.getElementById('lastModified').textContent = x;
