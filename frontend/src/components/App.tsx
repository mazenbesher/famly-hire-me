import React, { useEffect, useState } from 'react';
import Child from './Child';
import * as types from '../types';
import { fetchChildren } from '../utils/api';

const childPerPage: number = 3;

const App = () => {
    const [loading, setLoading] = useState(false);
    const [children, setChildren] = useState<types.Child[]>([]);
    const [pageNum, setPageNum] = useState(0);
    
    const maxPage: number = Math.ceil(children.length / childPerPage) - 1;
    const slicedChildren = children.slice(pageNum * childPerPage, (pageNum + 1) * childPerPage);

    useEffect(() => {
        const getChildren = async () => {
            const group: types.Group = await fetchChildren();
            setChildren(group.children || []);
        }
        getChildren()
    }, [pageNum])

    return <>
        {slicedChildren.map(child => <Child key={child.childId} child={child} loading={loading} setLoading={setLoading} />)}
        <br />
        Page: {pageNum + 1}/{maxPage + 1}
        <button
            disabled={pageNum === 0 || loading}
            onClick={() => setPageNum(pageNum - 1)}>
            Prev page
        </button>
        <button
            disabled={pageNum === maxPage || loading}
            onClick={() => setPageNum(pageNum + 1)}>
            Next page
        </button>
    </>
};

export default App;
