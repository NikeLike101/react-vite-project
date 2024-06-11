import Button from "../../components/Button"
import Typo from "../../components/Typo"
import {useState} from "react";
import {ThemedButton, ThemedTypo} from "../../components/hocs/themeHoc.tsx";
import {useNavigate} from "react-router-dom";
import {setA, setB, setC} from "../../redux/reducers/charsReducer/actions.ts";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
   const [counter, setCounter] = useState<number>(0)
    // let counterLet = 0
    const {b, a, c} = useSelector(state => state.charsReducer)
const dispatch = useDispatch()

    const navigation = useNavigate()
    const handleIncreaseCounter = () => {
        setCounter(counter + 1)

        // counterLet++
        // console.log(counterLet, 'handler change')
    }


    const handleDecreaseCounter = () => {
       setCounter(counter -1)

    }
    console.log(counter, 'new value set')


    const handleNavigateToCatalog = () => {
        navigation('/catalog')
    }

    const handleAddNumber = () => {

        dispatch(setB([1,2,3,4,5]))
    }
    const handleAddStrings = () => {
       dispatch(setA(['privet', 'hello', 'leg']))
    }

    const handleToggleCheckbox = () => {
       dispatch(setC(!c))
    }

    const handleIncreaseFirst  = () => {
       dispatch(setB(b.map((number, index) => !index ? number+1: number)))
    }

    const handleIncreaseLast = () => {

    }
    return <div>
        counter value: {counter}
        <ThemedButton title={'decrease'} onClick={handleDecreaseCounter}/>
        <button onClick={handleIncreaseCounter}>increase</button>


        <Button onClick={() => {}} title='button1'/>
        <ThemedButton title={'hello'} onClick={handleNavigateToCatalog}/>
        <ThemedTypo value={'asdqw'}/>


        <Typo withNotStyles value="hello from home"/>
        <div style={{display: 'flex', flexDirection: 'column'}}>

            <button onClick={handleAddStrings}>notProjectA</button>
            {a}


            <button onClick={handleAddNumber}>notProjectB</button>
            <div>
                <button onClick={handleIncreaseFirst}>increase first</button>
                <button onClick={handleIncreaseLast}>increase last</button>
            </div>
            {b.map(number => <>{number},</>)}
            <button onClick={handleToggleCheckbox}>notProjectC</button>
            <input type={"checkbox"} checked={c}/>


        </div>
        {/*<ClassButton/>*/}
    </div>
}

export default Home