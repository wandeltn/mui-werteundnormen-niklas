import * as React from 'react';
import Paper from '@mui/material/Paper';
import MCQuestion from '../interfaces/questionType';
import Button, { Radio, RadioGroup } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { Form } from 'react-router-dom';


function MultipleCoice(props: MCQuestion) {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState("Überlege weise");

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
        setHelperText(' ');
        setError(false);
      };
    
      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (value == props.answer) {
          setHelperText('You got it!');
          setError(false);
        } else if (value in props.choices) {
          setHelperText('Sorry, wrong answer!');
          setError(true);
        } else {
          setHelperText('Please select an option.');
          setError(true);
        }
    };

    function keyByValue(appObj: {string: string}, value: string) {
        const [key] = Object.entries(appObj).find(([key, val]) => val === value) || [];
        return key || null;
    }

    var choicesList: Array<string> = [];

    for (let choice in props.choices) {
        choicesList.push(choice);
    }

    return(
        <Paper elevation={1}>
            <RadioGroup
                aria-labelledby="demo-error-radios"
                value={value}
                name="quiz"
                onChange={handleRadioChange}
                >
                {choicesList.map((item) => {
                    return(
                        <FormControlLabel value={item} control={<Radio />} label={item} />
                    );
                })} 
            </RadioGroup>
        </Paper>
    )
}

export default MultipleCoice;