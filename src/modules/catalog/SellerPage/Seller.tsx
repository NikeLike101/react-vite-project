import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {UserType} from "../types.ts";
import {getUser} from "../services.ts";
import Button from "../../../components/Button.tsx";
import {useAppSelector} from "../../../redux";
import { getReviewsSaga} from "../../../redux/saga/reviewsSaga.ts";
import {useDispatch} from "react-redux";

interface Props {

}

const Seller:React.FC<Props> = () => {

    const dispatch= useDispatch()
    const {products, reviews} = useAppSelector(state => state.catalogReducer)
    const {sellerId} = useParams()
    console.log(products, sellerId, 'redux!')

    const navigate = useNavigate()
    const [user, setUser] = useState<UserType | null>(null);
    useEffect(() => {
        if (sellerId === undefined) return

        dispatch(getReviewsSaga())
        dispatch(getReviewsSaga(Number(sellerId)))

        const getData = async () => {
            const userData  = await getUser(Number(sellerId))
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
        <div>reviews:
            {reviews.map(review => <div>{review.name}</div>)}
        </div>
    </>
}

export default Seller