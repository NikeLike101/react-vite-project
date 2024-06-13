import Modal from "../../components/Modal.tsx";
import {useAppSelector} from "../../redux";
import {setSelectedProductForModal} from "../../redux/reducers/catalogReducer/actions.ts";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";


const ProductModal = () => {
    const {selectedProductForModal} = useAppSelector(state => state.catalogReducer)
    const dispatch = useDispatch()

    const [imageSrc, setImageSrc] = useState<string| null>(null);
    const closeModal = () =>{
        dispatch(setSelectedProductForModal(null))
    }


    useEffect(() => {

    }, []);


    return <Modal open={!!selectedProductForModal} onClose={closeModal}>
        {imageSrc && <img src={imageSrc}/>}

        {selectedProductForModal?.name}
        {selectedProductForModal?.isChecked}
    </Modal>
}

export default ProductModal