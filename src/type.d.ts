interface IData {
    _id: string,
    name: string,
    imgUrl: string,
    description: {
        specs: [],
        text: string
    },
    pricing: {
        price: number,
        offsale: number
    }
}

interface IitemCart {
    item: IData, amount: number
}

interface ICart {
   []
}

interface ISearch {
    []
}