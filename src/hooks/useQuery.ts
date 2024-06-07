
import { useState, useEffect } from 'react';
const useQuery = (queryFunction) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const result = await queryFunction();
                setData(result);
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [queryFunction]);
    return { data, isLoading };
};
export default useQuery;