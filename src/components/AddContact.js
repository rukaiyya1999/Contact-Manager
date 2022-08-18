import React from 'react'
import { Link } from 'react-router-dom';
import {Box, Button, TextField} from '@mui/material'
class AddContact extends React.Component{
		constructor(){
		super();
		this.state = {
			name:'',
			email:'',
		}
	}
	 Add =(e)=>{
			e.preventDefault();
			if(this.state.name === '' || this.state.email === ''){
				alert('All fields are mandetory...')
				return;
			}
			this.props.contactHandeler(this.state);
			this.setState({name:"", email: ""});
			this.props.history.push('/')

		};

	render(){

		return(
			<Box className=' addpage'>
				<h3  className="labelClass">Add Contact</h3>
				<form className = 'formclass' >

				<label className="labelClass">Name </label><br/>
				   <TextField type="text" id="outlined-basic" label={this.state.name} 
				   variant="outlined" onChange = {(e)=>this.setState({name:e.target.value})}/>
				   <br/><br/>

				   <label className="labelClass">Phone </label><br/>
				   <TextField type="number" id="outlined-basic" label={this.state.email}
				   variant="outlined" onChange = {(e)=>this.setState({email:e.target.value})}/>
				   	<br/><br/>

				   <Button onClick={this.Add} variant="contained" color='primary'>ADD</Button>

				   <Link to = '/' style={{textDecoration:"none"}}>
					<Button variant='contained' color='success' sx={{ml:2}}>Back To Contact List</Button>
					</Link>
				</form>
			</Box>
			)
	}
}
export default AddContact;
