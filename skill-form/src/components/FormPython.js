import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RangeSlider from 'react-bootstrap-range-slider';


export class FormPython extends Component {
  
  
    continue=e=>
    {
        e.preventDefault();
        this.props.nextStep();
    };

    back=e=>
    {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { valuesn,handleChange }=this.props;
       
        return (
            <MuiThemeProvider>  
                <React.Fragment>
                    
                    <AppBar title=" Python Language Proficiency"/>
                     
                    <br/> 
                    <br/>
                    <label>Enter your knowledge level</label>
                    <br/>
                    
                    <br/>
                    <RangeSlider
                    value={valuesn.Pythonknowledge}
                     max={10}
                     onChange={handleChange('Pythonknowledge')}
                     />
                     <br/>
                
         
                     <br/>
                     <label>How much experience you have for Python ?</label>
                     <br/>
                    <br/>
                    <RangeSlider
                    value={valuesn.Pythonexperience}
                     max={10}
                     onChange={handleChange('Pythonexperience')}
                     />
                

                     <br/>
                     <br/>
                    <label>How well you are with Python and OOPS concepts ?</label>
                    <br/>
                    <br/>
                    <RangeSlider
                    value={valuesn.Pythonoops}
                     max={10}
                     onChange={handleChange('Pythonoops')}
                     />


                    <br/>
                    <br/>
                    <label>Your intrest level in Python ?</label>
                    <br/>
                    
                    <br/>
                    <RangeSlider
                    value={valuesn.Pythoninterest}
                     max={10}
                     onChange={handleChange('Pythoninterest')}
                     />

                    <br/>
                    <br/>
                    <label>How willing you are to work on a Python Poject in future?</label>
                    <br/>
                    
                    <br/>
                    <RangeSlider
                    value={valuesn.FuturePython}
                     max={10}
                     onChange={handleChange('FuturePython')}
                     />


                     <br/>
                     <br/>
                     <RaisedButton
                     label="Continue"
                     primary={true}
                     style={styles.button}
                     onClick={this.continue}
                     />
                     
                     <RaisedButton
                     label="Back"
                     primary={false}
                     style={styles.button}
                     onClick={this.back}
                     />


                    </React.Fragment>
                </MuiThemeProvider>
            
        );
    }
}

const styles={
    button:{
        margin:15
    }
}

export default FormPython;
