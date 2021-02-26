import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from '../../node_modules/reactstrap';
import { isEmail } from 'validator';
import './Register.css';
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Footer1 from "./Footer";
import Navbar from "./Navbar";



class Register extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    getInitialState = () => ({
        data: {
            firstName: '',
            lastName: '',
            email: '',
            message:'',
            
        },
        errors: {},

    });

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = () => {
        const { data } = this.state;
        let errors = {};

        if (data.firstName === '') errors.firstName = 'First Name can not be blank.';
        if (data.lastName === '') errors.lastName = 'Last Name can not be blank.';
        if (data.message === '') errors.message = 'Message can not be blank.';
        if (!isEmail(data.email)) errors.email = 'Email must be valid.';
        if (data.email === '') errors.email = 'Email can not be blank.';
        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            this.showMsg=true;

            

            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
        
    }
    showMsg=false;

    render() {

        const { data, errors } = this.state;
        return (

            <div>
            <Navbar/>

    <Hero>
        <Banner
          title="Contact Us"
          subtitle="Share Your Feedback"
        >
          <Link to="/home" className="btn-primary">
            Home
          </Link>
        </Banner>
      </Hero>

            <Form onSubmit={this.handleSubmit} className='form'>
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input id="firstName" value={data.firstName} invalid={errors.firstName ? true : false} name="firstName" onChange={this.handleChange} />
                    <FormFeedback>{errors.firstName}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input id="lastName" value={data.lastName} invalid={errors.lastName ? true : false} name="lastName" onChange={this.handleChange} />
                    <FormFeedback>{errors.lastName}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input id="email" value={data.email} invalid={errors.email ? true : false} name="email" onChange={this.handleChange} />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message</Label>
                    <Input id="message" value={data.message} invalid={errors.message ? true : false} name="message" onChange={this.handleChange} />
                    <FormFeedback>{errors.message}</FormFeedback>
                </FormGroup>

               

                <Button  className='btn btn-success'>Submit</Button>
                
            {this.showMsg ? (<p className='text-success text-large'>Your Data is Submitted Successfully!</p> ):''}
            </Form>
            
            <br></br>

            <Footer1/>

            </div>
        );
    }
}

export default Register;