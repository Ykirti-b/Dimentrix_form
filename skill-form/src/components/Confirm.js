import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import RangeSlider from 'react-bootstrap-range-slider';
import { white, blue100 } from 'material-ui/styles/colors';
import './StyleFormat.css';
import { grey100 } from 'material-ui/styles/colors';




export class Confirm extends Component {
    continue=e=>{
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
                    
                    <AppBar title="Confirm your answers and kindly submit the form"/>
                    <br/> 
                    <br/>
                    <label>How adobtable you are to new technologies ?</label>
                    <br/>
                    
                    <br/>
                    <RangeSlider
                    value={valuesn.Adobptable}
                     max={10}
                     
                     onChange={handleChange('Adobptable')}
                     />
                     <br/>
                
         
                     <br/>
                     <label>How you would rate to your hardworking ?</label>
                     <br/>
                    <br/>
                    <RangeSlider
                    value={valuesn.Hardworking}
                     max={10}
                     onChange={handleChange('Hardworking')}
                     />
                
                     <RaisedButton
                     label="Back"
                     primary={false}
                     style={styles.button}
                     onClick={this.back}
                     />    
                     <br/>
                     <br/>
                     <RaisedButton
                     label="Submit"
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

export default Confirm;
