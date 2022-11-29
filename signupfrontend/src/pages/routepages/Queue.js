import React, { useState } from 'react';
// import './App.css';
import Print from './box_print';
import {useRef} from 'react';
import './content.css'
var nums = [];



function Queue(){
    // const [flex,removeflex] = useState(['flex']);
    // const [noflex,flexx] = useState(['none']);
    const inputRef = useRef(null);
    const [print,newprint] = useState(<Print nums={nums}/>)
    var handleClick1 = () => {
        var r = parseInt(inputRef.current.value);
        nums=nums.reverse();
        nums.push(r);
        newprint(<Print nums={nums}/>);
        console.log(nums.reverse());
    }
    function handleClick2(){
        nums = nums.reverse();
        nums.shift();
        newprint(<Print nums={nums}/>);
        // return(
        //     <Print nums={nums}/>
        // )
       console.log(nums.reverse());
    }
    // nums.map((i) => {
    //     <Box value={i}/>
    // })

    return(
        <div className="big">
          <center>
          <div className="buttons">
                <input type="text" ref={inputRef}/>
                <button onClick={handleClick1}>Enqueue</button>
                <button onClick={handleClick2}>Dequeue</button>
           </div>
          </center>
          <center>
          <Print nums={nums}/>
          </center>
        </div>
    );
}


export default Queue;