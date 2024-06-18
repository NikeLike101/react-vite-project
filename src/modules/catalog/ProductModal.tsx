import Modal from "../../components/Modal.tsx";
import {useAppDispatch, useAppSelector} from "../../redux";
import {setSelectedProductForModal} from "../../redux/reducers/catalogReducer/actions.ts";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {fetchProductPhotos} from "../../redux/reducers/productItemReducer/thunkActions.ts";
import {ProductType} from "./types.ts";


const ProductModal = () => {
    const selectedProductForModal = useAppSelector(state => state.catalogReducer.selectedProductForModal)
    const {photos} = useAppSelector(state => state.productItemSliceReducer)
    const dispatch = useAppDispatch()

    const [imageSrc, setImageSrc] = useState<string| null>(null);
    const closeModal = () =>{
        dispatch(setSelectedProductForModal(null))
    }


    useEffect(() => {
        if (selectedProductForModal === null) return
        console.log('gello')
        dispatch(fetchProductPhotos(selectedProductForModal?.id))
    }, [selectedProductForModal]);


    return <Modal open={!!selectedProductForModal} onClose={closeModal}>
        {imageSrc && <img src={imageSrc}/>}

        {selectedProductForModal?.name}
        {selectedProductForModal?.isChecked}
        <div style={{display: 'flex', flexWrap: 'wrap', height: '300px', overflow: 'auto'}}>
            {photos.map(photo => <img src={photo.thumbnailUrl} key={photo.id}/>)}
        </div>
    </Modal>
}

export default ProductModal