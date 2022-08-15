interface Data {
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

type ProductState = {
    product: Data
}

type ProductsState = {
    products: Data[]
}

type CartState = {
    cart: Data[]
}