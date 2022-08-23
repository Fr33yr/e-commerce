export function chunckArray(arr: [], chunckSize: number) {

    if (chunckSize <= 0 || !Number.isInteger(chunckSize)) {
        return console.log(`Chunk size most be higher than 0
        and an integer`)
    }
    if (arr === []) {
        return console.log("Empty array")
    }

    let slicedArr = []
    for (let i = 0; i < arr.length; i += chunckSize) {
        const chunk = arr.slice(i, i + chunckSize)
        slicedArr.push(chunk)
    }

    return slicedArr
}

// ring types
export const ringType = [
    {
        name: "Damascus Steel",
        imgUrl: "https://res.cloudinary.com/da0mjatsk/image/upload/v1660331655/rings/damascus_kcnlkd.webp"
    },
    {
        name: "Carbon Fiber",
        imgUrl: "https://res.cloudinary.com/da0mjatsk/image/upload/v1660331647/rings/carbon-fiber_ca8sci.webp"
    },
    {
        name: "Titanium",
        imgUrl: "https://res.cloudinary.com/da0mjatsk/image/upload/v1660331718/rings/titanium_icbjcc.webp"
    },
    {
        name: "Wood",
        imgUrl: "https://res.cloudinary.com/da0mjatsk/image/upload/v1660331745/rings/wood_sy69sc.webp"
    }
]

// Calc Total
export function calcTotal(arr: IitemCart[]) {
    let multiply = arr.map((element) => {
        if(element.item.pricing.price > 0){
            return  element.item.pricing.price * element.amount
        }else{
            return  element.item.pricing.offsale * element.amount
        }
    })

    const initValue = 0

    const addAll = multiply.reduce(
        (prevValue, currValue) => prevValue + currValue,
        initValue
    )

    return addAll.toFixed(2)
}