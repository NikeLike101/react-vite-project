import FlexBox from "../../../components/FlexBox.tsx";
import Pagination from "../../../components/pagination";
import {useAppDispatch, useAppSelector} from "../../../redux";
import {Paper, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {PaginationChangeParamsType} from "../../../components/pagination/types.ts";
import {setFilter} from "../../../redux/reducers/postsReducer/reducer.ts";


const PostsList = () => {
    const {posts, filter: {limit}, countOfPosts} = useAppSelector(state=> state.postsReducer)

    const dispatch = useAppDispatch()
    useEffect(() => {
        console.log(posts, 'posts')
    }, [posts]);

    const [activePage, setActivePage] = useState<number>(1);
    const handleChangePagination = (changeParams:PaginationChangeParamsType) => {
        console.log(changeParams, 'pars', limit)
        if (changeParams.pageSize !== limit) {
            //...
        }
        setActivePage(changeParams.activePage)

    }

    useEffect(() => {
        dispatch(setFilter({field: "offset", value: (limit || 0) * (activePage -1)}))
    }, [activePage]);
    return <><FlexBox stretched sx={{overflow: 'auto',margin: '8px' }}>
        <FlexBox stretched column sx={{gap: '8px'}}>
            {posts.map(post => <Paper
            key={post.id}

            elevation={5}
            >
                <img src={post.image} style={{width: 50, height: 50}}/>
                <Typography variant={"h6"}>{post.title}</Typography>
                {post.description.slice(0, 50)}...
            </Paper>)}
        </FlexBox>
    </FlexBox>

        <Pagination activePage={activePage} countOfElements={countOfPosts} pageSize={limit || 50} onChange={handleChangePagination}/>
    </>
}

export default PostsList