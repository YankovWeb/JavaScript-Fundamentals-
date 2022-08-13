function main(input) {
    for (const el of input) {
        let currentElement = String(el)
        let reversElement = String(el).split('').reverse().join('');
        if (currentElement === reversElement) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
} main([123, 323, 421, 121])