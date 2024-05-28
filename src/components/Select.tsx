import {BaseSyntheticEvent, useEffect, useState} from "react";


interface Props {
    label: string;
    options: string[]
    onChange: (selectedOption: string) => void
    triggerValue: string | undefined
 }


const shuffleChars = (option: string) => option.split('').sort(() => Math.random() - 0.5).join('')

const getKey = (option: string) => `${option}-${shuffleChars(option)}`;

const Select = (props:Props) => {
    const {label, options, onChange,triggerValue} = props
    const [value, setValue] = useState<string>('not selected');


    useEffect(() => {
        setValue(triggerValue === undefined ? 'not selected' : triggerValue)
    }, [triggerValue]);


    const handleChange = (e:BaseSyntheticEvent) => {

        setValue(e.target.value)
        onChange(e.target.value)
    }


    return <div>

        <div>{label}</div>
        <select value={value} onChange={handleChange}>
            {value === 'not selected' && <option key={'notSelected'}>not selected</option>}
            {options.map(option => <option key={getKey(option)}>{option}</option>)}
        </select>
    </div>
}

 export default Select