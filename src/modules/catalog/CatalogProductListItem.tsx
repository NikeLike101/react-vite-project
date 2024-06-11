import {ProductWithUserType} from "./types.ts";
import Checkbox from "../../components/Checkbox.tsx";
import {memo, useMemo} from "react";
import {ReactComponent as IconInfo} from '../../assets/ic_success.svg'
import {useNavigate} from "react-router-dom";
import {useThemeContext} from "../../globalContexts/ThemedContext.tsx";
import {ThemeEnum} from "../../utils/globalTypes.ts";

interface  Props {
    product: ProductWithUserType
    onProductCheck: (checked: boolean, productId: number) => void
}


const CatalogProductListItem:React.FC<Props> = props => {

    const {onProductCheck,product} = props

    const navigate = useNavigate()
    const handleChangeCheckbox = (checked: boolean) => {
        onProductCheck(checked, product.id)
    }


    const handleGoToSeller = () => {
        navigate(`/catalog/${product.user.id}`)
    }


    const randomValue = useMemo(() => Math.random(), [])
    const renderIconWithRandomColor = () => {

        if (randomValue < 0.3) return <IconInfo onClick={() =>
            // theme === ThemeEnum.dark &&
            navigate('/secret_page1')} style={{fill: 'blue'}}/>
        if (randomValue > 0.8) return <IconInfo onClick={() =>
            // theme === ThemeEnum.dark &&
            navigate('/secret_page2')} style={{fill: 'green'}}/>
        return <IconInfo
            onClick={() =>
                // theme === ThemeEnum.dark &&
                navigate('/secret_page3')}
            style={{fill: 'red'}}/>
    }

    return <div key={product.id}>
        {renderIconWithRandomColor()}
        {product.id + 1}: {product.name}
        <Checkbox
            checked={product.isChecked}
            onClick={handleChangeCheckbox}/>
        by <span onClick={handleGoToSeller}>{product.user?.username}</span> seller
    </div>
}

export default memo(CatalogProductListItem)