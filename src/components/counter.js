import { useState } from "react";



export default function Counter() {

    const [count, setCount] = useState(1);
    const [initValue, setInitValue] = useState(1)
    const [maxValue, setMaxValue] = useState(1000)
    
const changeInitValue =(e) =>{
    const val = parseInt(e.target.value) || 0
    if (val>maxValue){
        return false;
    }
    else {
        setInitValue(val);
        setCount(val);
    }
}

const changeMaxValue =(e) =>{
    const val = parseInt(e.target.value) || 1000
    if (val<initValue){
        setMaxValue(initValue)
        return false
    }
    else{
        setMaxValue(val);
    }
    if (count>maxValue) {
        setCount(maxValue);
    }

}
const decrement= () => {
    if (count<1){
        return false;
    }
    else 
        {
            setCount(count-1);
        }
}

const increment= () => {
    if (count===maxValue)
    return false
    else if (count>maxValue){
        setInitValue(initValue)
        setCount(maxValue)
        return false;
    }
    else
        setCount(count+1);
}

const onChangeVal=(e) =>{
    const val = parseInt(e.target.value) || 0
    if (val>maxValue)
        return false
    else
        setCount(val)

}

return (
<div>
    <div className="initialiser">
            <p className="paraText"> Initial Value</p><input type="number" value={initValue} onChange={(e)=>changeInitValue(e)} className="inpt"/>
            <p className="paraText"> Max Value </p><input type="number" value={maxValue} onChange={(e)=>changeMaxValue(e)} className="inpt"/>
        </div>
    <div className="container">
        <button className="decrement same" onClick={()=>decrement()}>-</button>
        <div>
            <input className="input same" type="number" value={count} onChange={(e)=>onChangeVal(e)}/>
        </div>
        <button className="increment same" onClick={()=>increment()}>+</button>
    </div>
</div>
    );
}