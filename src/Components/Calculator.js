import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import ChangeCircleSharpIcon from '@mui/icons-material/ChangeCircleSharp';
import PercentIcon from '@mui/icons-material/Percent';

export default function Calculator() {
    const obj = {
        number_one: "",
        number_two: "",
        total: ""
    }
    const [curValue, setValue] = useState (obj);

    const changeHandler = (e) =>{
        const {name, value} = e.target;

        setValue({
            ...curValue,
            [name]: value
        })

        
    }
    // console.log(changeHandler);
    const handleClick = (op) => {
        let total = "";
        const { number_one, number_two } = curValue;


        switch (op) {
            case 'add':
                total = parseInt(number_one) + parseInt(number_two);
                break;
            case 'sub':
                total = parseInt(number_one) - parseInt(number_two);
                break;
            case 'mul':
                total = parseInt(number_one) * parseInt(number_two);
                break;
            case 'div':
                total = parseInt(number_one) / parseInt(number_two);
                break;
            default:
                break;
        }

        
        if(number_one == ""){
            return alert('Please enter number one')
        }

        if(number_two == ""){
            return alert('Please enter number two')
        }


        setValue({
            ...curValue,
            total
        });

        

    }

    const handleClear = () => {
        setValue(obj);
    }
  return (
    <>
        <h3>Calculator</h3>
        <Grid mt={2}>
            <TextField
                label="Number One"
                type="number"
                size="small"
                onChange={changeHandler}
                name="number_one"
                value={curValue.number_one}
            />
        </Grid>
        <Grid mt={2}>
            <TextField
                label="Number Two"
                type="number"
                size="small"
                onChange={changeHandler}
                name="number_two"
                value={curValue.number_two}
                />
        </Grid>
        <Grid mt={2}>
            <AddBoxIcon 
                color="primary"
                onClick={() => handleClick('add')}
                
            />
            <IndeterminateCheckBoxIcon 
                color="primary"
                onClick={() => handleClick('sub')}
            />
            <DisabledByDefaultIcon  
                color="warning"
                onClick={() => handleClick('mul')}
            />
            <PercentIcon 
                color="success"
                onClick={() => handleClick('div')}
            />
            <ChangeCircleSharpIcon 
                color="danger"
                onClick={handleClear}
            />
        </Grid>
        <Grid mt={2}>
            <TextField
            label="Total"
            type="number"
            size="small"
            value={curValue.total}
            />
        </Grid>
    </>
  )
}
