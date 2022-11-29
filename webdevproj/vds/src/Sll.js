import React, { useState } from 'react';
import './navbar.css';
import Print from './box_print';
import {useRef} from 'react';

const nums = [];


function Sll(){
    // const [flex,removeflex] = useState(['flex']);
    // const [noflex,flexx] = useState(['none']);
    const inputRef = useRef(null);
    const inputRef1 = useRef(null);
    const [print,newprint] = useState(<Print nums={nums}/>)
    var handleClick1 = () => {
        var r = parseInt(inputRef.current.value);
        nums.push(r);
        newprint(<Print nums={nums}/>);
        console.log(nums);
    }
    function handleClick2(){
        var t = parseInt(inputRef1.current.value);
        const index = nums.indexOf(t);
        const x = nums.splice(index,1);
        newprint(<Print nums={nums}/>);
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
                <button onClick={handleClick1}>Insert</button>
                <button onClick={handleClick2}>Delete</button>
                <input type="text" ref={inputRef1}/>
           </div>
          </center>
          <center>
          <Print nums={nums}/>
          </center>
        </div>
    );
}


export default Sll;