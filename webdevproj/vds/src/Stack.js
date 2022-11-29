import React, { useState } from 'react';
import './App.css';
import Print_stack from './box_print_stack';
import {useRef} from 'react';

const nums = [];


function Stack(){
    // const [flex,removeflex] = useState(['flex']);
    // const [noflex,flexx] = useState(['none']);
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const [print,newprint] = useState(<Print_stack nums={nums}/>)
    var handleClick1 = () => {
        var r = parseInt(inputRef.current.value);
        nums.push(r);
        newprint(<Print_stack nums={nums}/>);
        console.log(nums);
    }
    function handleClick2(){
        nums.pop();
        newprint(<Print_stack nums={nums}/>);
        // return(
        //     <Print nums={nums}/>
        // )
        console.log(nums);
    }
    console.log(nums);
    // nums.map((i) => {
    //     <Box value={i}/>
    // })

    return(
        <div className="big">
          <center>
          <div className="buttons">
                <input type="text" ref={inputRef}/>
                <button onClick={handleClick1}>PUSH</button>
                <button onClick={handleClick2}>POP</button>
           </div>
          </center>
          <center>
          <Print_stack nums={nums}/>
          </center>
        </div>
    );
}


export default Stack;