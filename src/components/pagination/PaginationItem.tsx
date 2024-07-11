import FlexBox from "../FlexBox.tsx";


interface Props {
    pageNumber: number;
    isPageActive: boolean;
    onClick: (pageNumber: number) => void
}

const PaginationItem:React.FC<Props> = props => {
    const {isPageActive,pageNumber, onClick} = props
    return <FlexBox onClick={() => onClick(pageNumber)} sx={{
        background: isPageActive ? '#ddd':'#3c3c3c',
        color: isPageActive ? '#3c3c3c' :'#fff',
        border: `1px solid #3c3c3c`,
        minWidth: '30px',
        height: '30px',
        borderRadius: '4px',
        justifyContent: 'center',
        alignItems: 'center'
    }}>{pageNumber}</FlexBox>
}

export default PaginationItem