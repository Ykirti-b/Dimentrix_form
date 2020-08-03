import React, { Component } from 'react';
import FormC from './FormC';
import FormPython from './FormPython';
import Confirm from './Confirm';
import Success from './Success';

export class Userform extends Component {
    state={
        step:1,
         Cknowledge:'',
         Cexperience:'',
         Coops:'',
         Cinterest:'',
         FutureC:'',
         Pythonknowledge:'',
         Pythonexperience:'',
         Pythonoops:'',
         Pythoninterest:'',
         FuturePython:'',
         Adobptable:'',
         Hardworking:''
        }
    
    //Proceed to next step
    nextStep=()=>{
        const {step}=this.state;
        this.setState({step:step+1});
    }

      //Go back to prev step
    prevStep=()=>{
        const {step}=this.state;
        this.setState({step:step-1});
    }

    //Handle Fields change

    handleChange=input=>e=>{
        this.setState({[input]:e.target.value});
    }

   
   


    render() {
        const{step}=this.state;
        const{Adobptable,Hardworking,FuturePython,FutureC,Cknowledge,Cexperience,Coops,Cinterest,Pythonknowledge,Pythonexperience,Pythonoops,Pythoninterest}=this.state;
        const valuesn={Hardworking,Adobptable,FuturePython,FutureC,Cknowledge,Cexperience,Coops,Cinterest,Pythonknowledge,Pythonexperience,Pythonoops,Pythoninterest}
        
        switch(step)
        {
            case 1:
                return(
                  <FormC 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    valuesn={valuesn}
                 />);
               

            case 2:
                return(
                    <FormPython 
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      valuesn={valuesn}
                   />);
                 
            



            case 3:
                return (
                    <Confirm 
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      valuesn={valuesn}
                   />);

            case 4:
                return(
                    <Success 
                      
                   />); 
        }
    }
        
       
}


  export default Userform;
