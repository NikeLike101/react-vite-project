import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {UserType} from "../types.ts";
import {getUser} from "../services.ts";
import Button from "../../../components/Button.tsx";
import {useAppSelector} from "../../../redux";

interface Props {

}

const Seller:React.FC<Props> = () => {

    const {products} = useAppSelector(state => state.catalogReducer)
    const {sellerId} = useParams()
    console.log(products, sellerId, 'redux!')

    const navigate = useNavigate()
    const [user, setUser] = useState<UserType | null>(null);
    useEffect(() => {
        if (sellerId === undefined) return

        const getData = async () => {
            const userData  = await getUser(sellerId)
            setUser(userData)


        }
        getData()

    }, []);



    return <>
        <Button title={'go back'} onClick={() => navigate(-1)}/>

        seller! {user?.username}
        <br/>
        products of seller:
        {products.filter(product => product.user.id === user?.id).map(product => <div>{product.name}</div>)}

    </>
}

export default Seller