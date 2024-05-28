import {BaseSyntheticEvent} from "react";

interface Props {

    label: string;
    value: string;
    onChange: (newString: string) => void;
}

const Input = (props:Props) => {
    const {label, value, onChange} = props;


    const handleChange= (e: BaseSyntheticEvent) => {

        onChange(e.target.value)
    }

    return <div>
        <div>{label}</div>
        <input onChange={handleChange} value={value}/>
    </div>
}

export default Input