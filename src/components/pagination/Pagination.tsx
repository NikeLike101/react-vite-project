import FlexBox from "../FlexBox.tsx";
import CountPerPageSelector from "./CountPerPageSelector.tsx";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {ArrowForwardIos} from "@mui/icons-material";
import {useMemo} from "react";
import PaginationItem from "./PaginationItem.tsx";
import {PaginationChangeParamsType} from "./types.ts";

interface Props {
    activePage: number
    countOfElements: number
    pageSizeVariants?: number[]
    pageSize: number
    onChange: (newData: PaginationChangeParamsType) => void
    withCountPerPageSelector?: boolean
    withoutArrows?: boolean
}


const Pagination: React.FC<Props> = props => {
    const {
        withoutArrows,
        activePage,
        countOfElements,
        pageSize,
        pageSizeVariants,
        onChange,
        withCountPerPageSelector
    } = props


    const countOfPages = useMemo(() => Math.trunc(countOfElements / pageSize), [pageSize, countOfElements])

    const handleChangePage = (pageNumber: number) => {
        onChange({
            activePage: pageNumber,
            pageSize
        })
    }

    const pageNumbersAroundActivePage = useMemo(() =>
        [activePage, activePage + 1, activePage + 2, activePage - 1, activePage - 2]
        , [activePage])

    const clickablePageNumbers = useMemo(() => {


        return [1, 2, countOfPages - 1, countOfPages, ...pageNumbersAroundActivePage]
    }, [pageNumbersAroundActivePage, countOfPages])

    const renderPaginationItemFunc = useMemo(() => (pageNumber: number) => {


        const pageNumbersAroundCurrentPage = [pageNumber, pageNumber-1, pageNumber+ 1]


        if (clickablePageNumbers.includes(pageNumber)) {
            return <>{pageNumber === clickablePageNumbers[2] && !pageNumbersAroundCurrentPage.filter(page => pageNumbersAroundActivePage.includes(page)).length  && '...'}<PaginationItem
                pageNumber={pageNumber}
                isPageActive={pageNumber === activePage}
                onClick={handleChangePage}
            />{pageNumber === clickablePageNumbers[1] && !pageNumbersAroundCurrentPage.filter(page => pageNumbersAroundActivePage.includes(page)).length && '...'}</>

        }
        return <></>

    }, [activePage])


    return <FlexBox sx={{justifyContent: 'space-between'}}>
        {withCountPerPageSelector && <CountPerPageSelector/>}
        {!withoutArrows && <ArrowBackIosIcon/>}
        <FlexBox sx={{gap: '2px'}}>
            {Array.from({length: countOfPages})
                .map((_, index) =>
                    renderPaginationItemFunc(index + 1))}
        </FlexBox>
        {!withoutArrows && <ArrowForwardIos/>}
    </FlexBox>
}

export default Pagination