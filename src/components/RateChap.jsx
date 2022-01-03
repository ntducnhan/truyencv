import React from 'react';
import Grid from '@material-ui/core/Grid';

import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';


export default function RateChap(){
   
    const [value, setValue] = React.useState(0);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
          setValue(0);
        } else if (value >5 ) {
          setValue(5);
        }
      };
/////////////////////////////////////////////////////////////////
      const [value1, setValue1] = React.useState(0);

      const handleSliderChange1 = (event, newValue) => {
          setValue1(newValue);
      };
  
      const handleInputChange1 = (event) => {
          setValue1(event.target.value === '' ? '' : Number(event.target.value));
      };
  
      const handleBlur1 = () => {
          if (value < 0) {
            setValue1(0);
          } else if (value > 5) {
            setValue1(5);
          }
        };
////////////////////////////////////////////////////////////////////
        const [value2, setValue2] = React.useState(0);

        const handleSliderChange2 = (event, newValue) => {
            setValue2(newValue);
        };

        const handleInputChange2 = (event) => {
            setValue2(event.target.value === '' ? '' : Number(event.target.value));
        };

        const handleBlur2 = () => {
            if (value < 0) {
            setValue2(0);
            } else if (value > 5) {
            setValue2(5);
            }
        };
    return <>

         <div className="div1">
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <h3>Tính cách nhân vật</h3>
                </Grid>
                <Grid item xs>
                <Slider
                    value={typeof value === 'number' ? value : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                />
                </Grid>
                <Grid item>
                <Input
                    
                    value={value}
                    margin="dense"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                    step: 10,
                    min: 0,
                    max: 5,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                    }}
                />
                </Grid>
            </Grid>
        </div>
         {/*******************************************************/}
         <div className="div1">
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <h3>Nội dung cốt truyện</h3>
                </Grid>
                <Grid item xs>
                <Slider
                    value={typeof value1 === 'number' ? value1 : 0}
                    onChange={handleSliderChange1}
                    aria-labelledby="input-slider"
                />
                </Grid>
                <Grid item>
                <Input
                    
                    value={value1}
                    margin="dense"
                    onChange={handleInputChange1}
                    onBlur={handleBlur1}
                    inputProps={{
                    step: 10,
                    min: 0,
                    max: 5,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                    }}
                />
                </Grid>
            </Grid>
        </div>
         {/*******************************************************/}
         <div className="div1">
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <h3>Nội dung cốt truyện</h3>
                </Grid>
                <Grid item xs>
                <Slider
                    value={typeof value2 === 'number' ? value2 : 0}
                    onChange={handleSliderChange2}
                    aria-labelledby="input-slider"
                />
                </Grid>
                <Grid item>
                <Input
                    
                    value={value2}
                    margin="dense"
                    onChange={handleInputChange2}
                    onBlur={handleBlur2}
                    inputProps={{
                    step: 10,
                    min: 0,
                    max: 5,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                    }}
                />
                </Grid>
            </Grid>
        </div>
    </>
}