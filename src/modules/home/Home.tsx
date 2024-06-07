import Button from "../../components/Button"
import Typo from "../../components/Typo"
import {useState} from "react";
import ClassButton from "../../components/ClassButton.tsx";
import {ThemedButton, ThemedTypo} from "../../components/hocs/themeHoc.tsx";
import {useNavigate} from "react-router-dom";
import Header from "../../components/Header.tsx";

const Home = () => {
   const [counter, setCounter] = useState<number>(0)
    // let counterLet = 0


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

    return <div>
        counter value: {counter}
        <ThemedButton title={'decrease'} onClick={handleDecreaseCounter}/>
        <button onClick={handleIncreaseCounter}>increase</button>


        <Button onClick={() => {}} title='button1'/>
        <ThemedButton title={'hello'} onClick={handleNavigateToCatalog}/>
        <ThemedTypo value={'asdqw'}/>


        <Typo withNotStyles value="hello from home"/>
        {/*<ClassButton/>*/}
    </div>
}

export default Home