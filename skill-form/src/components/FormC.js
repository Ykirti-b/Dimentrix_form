import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RangeSlider from 'react-bootstrap-range-slider';
import { white, blue100 } from 'material-ui/styles/colors';
import './StyleFormat.css';
import { grey100 } from 'material-ui/styles/colors';




export class FormC extends Component {
    continue=e=>{
        e.preventDefault();
        this.props.nextStep();
    };
    render() {
        const { valuesn,handleChange }=this.props;
       
        return (
            <MuiThemeProvider>  
                <React.Fragment>
                    
                    <AppBar title=" C Language Proficiency"/>
                    <br/> 
                    <br/>
                    <label>Enter your knowledge level</label>
                    <br/>
                    
                    <br/>
                    <RangeSlider
                    value={valuesn.Cknowledge}
                     max={10}
                     size={'ig'}
                     onChange={handleChange('Cknowledge')}
                     />
                     <br/>
                
         
                     <br/>
                     <label>How much experience you have for C ?</label>
                     <br/>
                     
                    <br/>
                    <RangeSlider
                    value={valuesn.Cexperience}
                     max={10}
                     onChange={handleChange('Cexperience')}
                     />
                

                     <br/>
                     <br/>
                    <label>How well you are with C OOPS concepts ?</label>
                    <br/>
                    
                    <br/>
                    <RangeSlider
                    value={valuesn.Coops}
                     max={10}
                     onChange={handleChange('Coops')}
                     />


                    <br/>
                    <br/>
                    <label>Your intrest level in C ?</label>
                    <br/>
                    
                    <br/>
                    <RangeSlider
                    value={valuesn.Cinterest}
                     max={10}
                     onChange={handleChange('Cinterest')}
                     />

                    <br/>
                    <br/>
                    <label>How willing you are to work on a c Poject in future?</label>
                    <br/>
                    
                    <br/>
                    <RangeSlider
                    value={valuesn.FutureC}
                     max={10}
                     onChange={handleChange('FutureC')}
                     />
                     <br/>
                     <br/>
                     <RaisedButton
                     label="continue"
                     primary={true}
                     style={styles.button}
                     onClick={this.continue}
                     />
                    </React.Fragment>
                </MuiThemeProvider>
            
        );
    }
}

const styles={
    button:{
        margin:15,
        },
     

        
}

export default FormC;
