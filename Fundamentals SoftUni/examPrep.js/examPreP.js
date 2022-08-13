function treashurHunt(data){
let state = data.shift().split("|")
let index = 0;
let comand = date[index]
index++
let i = 0;
while(comand !== "Yohoho"){
    let tokens = comand.split(" ");
    let operation = tokens.shift();

    switch(operation){
        case "Loot" : 
        for(let el of tokens){
            if(!state.includes(el)){
                state.unshift(el);
            }
        }
        break;
        case "Drop":
            i = Number(tokens[0])
            state.push(state.splice(i,1)[0])
             break;
        case "Steal":
            
            let items = state.splice(i)
             break;
    }
    comand = data[index++];
}

}
