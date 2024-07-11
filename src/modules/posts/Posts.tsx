import {Table, TextField} from "@mui/material";
import FlexBox from "../../components/FlexBox.tsx";
import {getPosts} from "./services.ts";
import {useAppDispatch, useAppSelector} from "../../redux";
import {useEffect} from "react";
import {fetchPosts} from "../../redux/reducers/postsReducer/thunkActions.ts";
import PostsList from "./PostsList/PostsList.tsx";
import PostsSearchField from "./PostsList/PostsSearchField.tsx";
import Pagination from "../../components/pagination";


const Posts:React.FC = () => {
const {search,limit,offset} = useAppSelector(state => state.postsReducer.filter)
    const dispatch = useAppDispatch()



    useEffect(() => {
        console.log('asd')
        dispatch(fetchPosts({}))
    }, [search, limit, offset]);

    return <FlexBox column stretched sx={{gap: '20px', height: 0}}>
<PostsSearchField/>
        <PostsList/>
    </FlexBox>
}

export default Posts