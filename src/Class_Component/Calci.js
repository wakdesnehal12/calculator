import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import ChangeCircleSharpIcon from '@mui/icons-material/ChangeCircleSharp';
import PercentIcon from '@mui/icons-material/Percent';



export default class Calci extends Component {
    constructor(){
        super();
        this.state = {
            number_one: "",
            number_two: "",
            total: ""
        };
        
        this.newstate = {
            number_one: "",
            number_two: "",
            total: ""
        }
    }; 
    
    changeHandler = (event) => {


        this.setState({[event.target.name] : event.target.value})
        // console.log([event.target.name])
    };

    handleClick = (op) => {
        // console.log('Clicked me')

        let total = "";
        const { number_one, number_two } = this.state;
        
        // console.log(total);


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

        this.setState({
            ...this.state,
            total
        });

        // console.log(this.setState)
        
        if(number_one == ""){
            return alert('Please enter number one')
        }

        if(number_two == ""){
            return alert('Please enter number two')
        }

    };

    handleClear = () => {
        // console.log(this.state)
        this.setState(this.newstate);
    };

    render(){
    return (
        <>
        <h3>Calculator</h3>
        <Grid mt={2}>
            <TextField
                label="Number One"
                type="number"
                size="small"
                
                name="number_one"
                value={this.state.number_one}
                onChange={this.changeHandler}
            />
        </Grid>
        <Grid mt={2}>
            <TextField
                label="Number Two"
                type="number"
                size="small"
                name="number_two"
                value={this.state.number_two}
                onChange={this.changeHandler}
                />
        </Grid>
        <Grid mt={2}>
            <AddBoxIcon 
                color="primary"
                onClick={() => this.handleClick('add')}
            />
            <IndeterminateCheckBoxIcon 
                color="primary"
                onClick={() => this.handleClick('sub')}
            />
            <DisabledByDefaultIcon  
                color="warning"
                onClick={() => this.handleClick('mul')}
            />
            <PercentIcon 
                color="success"
                onClick={() => this.handleClick('div')}
            />
            <ChangeCircleSharpIcon 
                color="danger"
                onClick={this.handleClear}
            />
        </Grid>
        <Grid mt={2}>
            <TextField
            label="Total"
            type="number"
            size="small"
            value={this.state.total}
            />
        </Grid>
        </>
    );
  }
}
