function main(firstChar, secondChar) {
    let array = [];
    let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    for (let i = startChar + 1; i < endChar; i++) {
        let newChar = String.fromCharCode(i)
        array.push(newChar)






    } console.log(array.join(' '))


}