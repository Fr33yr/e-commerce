export function chunckArray(arr: [], chunckSize: number){

    if(chunckSize <= 0 || !Number.isInteger(chunckSize)){
        return console.log(`Chunk size most be higher than 0
        and an integer`)
    }
    if(arr === []){
        return console.log("Empty array")
    }

    let slicedArr = []
    for (let i = 0; i < arr.length; i += chunckSize){
        const chunk = arr.slice(i, i + chunckSize)
        slicedArr.push(chunk)
    }

    return slicedArr
}
