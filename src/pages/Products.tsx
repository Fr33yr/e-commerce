import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { RootState } from '../redux/store'
import { Card } from '../components/cards/Card'

 
export function Products() {
    const searchState = useSelector((state: RootState) => state.search)
    const [data, setData] = useState<IData[]>([])
    const {name} = useParams()

    useEffect(()=>{
        fetch(`https://floating-lowlands-72186.herokuapp.com/api/products/?=${name}`)
        .then(res => res.json())
      .then(res => {
        return res && setData(res)
      })
      .catch(err => console.log(err))
    },[])    

    return (
        <>
            <div className="flex flex-wrap p-12 justify-center gap-16">
                {
                    data && data.map((element, index) => (
                        <Card {...element} />
                    ))
                }
            </div>
        </>
    )
}
