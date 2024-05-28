import Button from "../../components/Button"
import Typo from "../../components/Typo"
import {useState} from "react";
import ClassButton from "../../components/ClassButton.tsx";
import {ThemedButton, ThemedTypo} from "../../components/hocs/themeHoc.tsx";

const Home = () => {
   const [counter, setCounter] = useState<number>(0)
    // let counterLet = 0

    const handleIncreaseCounter = () => {
        setCounter(counter + 1)
        // counterLet++
        // console.log(counterLet, 'handler change')
    }


    const handleDecreaseCounter = () => {
       setCounter(counter -1)
    }
    console.log(counter, 'new value set')


    return <div>

        counter value: {counter}
        <ThemedButton title={'decrease'} onClick={handleDecreaseCounter}/>
        <button onClick={handleIncreaseCounter}>increase</button>


        <Button onClick={() => {}} title='button1'/>
        <ThemedButton title={'hello'}/>
        <ThemedTypo value={'asdqw'}/>


        <Typo withNotStyles value="hello from home"/>
        {/*<ClassButton/>*/}
    </div>
}

export default Home