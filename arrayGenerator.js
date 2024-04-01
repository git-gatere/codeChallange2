function arrayGen(x, y) { 
    // The function accepts two parameters: x and y
    if (x < y) { 
        // Determines which number is greater
        for (let i = x; i <= y; i++) { 
            // Performs iteration on x if x is less than y till it gets to y
            console.log(i); 
            // prints x and every subsequent number till y
        }
    } else {
        for (let i = y; i <= x; i++) { 
            // Performs iteration on y if y is less than x
            console.log(i);
        }
    }
    return ''; 
    // stops running the function
}

console.log ( arrayGen(4,17));