import {useMatch, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ProductType, UserType} from "../types.ts";
import {getProductsBySellerId, getUser} from "../services.ts";
import Button from "../../../components/Button.tsx";

interface Props {

}

const Seller:React.FC<Props> = props => {

    const {sellerId} = useParams()
    console.log(match)
    const navigate = useNavigate()
    const [user, setUser] = useState<UserType | null>(null);
    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        if (sellerId === undefined) return

        const getData = async () => {
            const userData  = await getUser(sellerId)
            setUser(userData)
            const productsData = await getProductsBySellerId(Number(sellerId))
            console.log(productsData)
            setProducts(productsData)

        }
        getData()

    }, []);



    return <>
        <Button title={'go back'} onClick={() => navigate(-1)}/>

        seller! {user?.username}
        <br/>
        products of seller:
        {products.map(product => <div>{product.name}</div>)}

    </>
}

export default Seller