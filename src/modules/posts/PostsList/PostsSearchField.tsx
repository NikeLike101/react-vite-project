import {TextField} from "@mui/material";
import Button from "../../../components/Button.tsx";
import React, {BaseSyntheticEvent, useEffect, useState} from "react";
import FlexBox from "../../../components/FlexBox.tsx";
import {useAppDispatch, useAppSelector} from "../../../redux";
import useDebounce from "../../../hooks/useDebounce.ts";
import {setFilter} from "../../../redux/reducers/postsReducer/reducer.ts";


const PostsSearchField = () => {
const {search} = useAppSelector(state => state.postsReducer.filter)
const dispatch= useAppDispatch()

    const [searchString, setSearchString] = useState<string>('');
    const debouncedSearchString = useDebounce(searchString, 300)


    useEffect(() => {
        dispatch(setFilter({field: 'search', value: debouncedSearchString}))
    }, [debouncedSearchString]);

    useEffect(() => {
        if (!search?.length) {

            setSearchString(search)
        }
    }, [search]);

    const handleChangeSearchString = (e: BaseSyntheticEvent) => {
    setSearchString(e.target.value)
}

    return <FlexBox>
        <TextField value={searchString} onChange={handleChangeSearchString}/>
    </FlexBox>
}

export default PostsSearchField