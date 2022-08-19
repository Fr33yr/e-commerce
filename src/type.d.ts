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
    item: {
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
    },
    amount: number
}

interface ICart {
    []
}
