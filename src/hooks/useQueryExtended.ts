
import { useState } from 'react';
const useQueryExtended = (queryFunction) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getData =async () => {
        setIsLoading(true);
        try {
            const result = await queryFunction();
            console.log(result)
            setData(result);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }
    return { data,  getData,isLoading, };
};
export default useQueryExtended;