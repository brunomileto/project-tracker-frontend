import { useState } from 'react';
import InputMask from 'react-input-mask';

function DateInput(props) {
  let mask = 'dD/mM/YYYY';
  let formatChars = {
    'Y': '[0-9]',
    'd': '[0-3]',
    'D': '[0-9]',
    'm': '[0-1]',
    'M': '[1-9]'
  };

  let beforeMaskedValueChange = (newState, oldState, userInput) => {
    var { value } = newState;
    if (value != null){
      let dateParts = value.split('/');
      let dayPart = dateParts[0];
      let monthPart = dateParts[1];
      if(dateParts != ""){
        // Conditional mask for the 2nd digit of day based on the first digit
        if(dayPart.startsWith('3'))
        formatChars['D'] = '[0-1]'; // To block 39, 32, etc.
        else if(dayPart.startsWith('0'))
        formatChars['D'] = '[1-9]'; // To block 00.
        else
        formatChars['D'] = '[0-9]'; // To allow 05, 15, 25  etc.

        // Conditional mask for the 2nd digit of month based on the first digit
        if(monthPart.startsWith('1'))
        formatChars['M'] = '[0-2]'; // To block 15, 16, etc.
        else
        formatChars['M'] = '[1-9]'; // To allow 05, 06  etc - but blocking 00.

      }
    }
    return {value, selection: newState.selection};
  }
  return (
   <InputMask
      mask={mask}
      value={props.value}
      onChange={props.onChange}
      formatChars={formatChars}
      id='deliverDate' 
      placeholder="Data de entrega do projeto dd/mm/aaaa"
      beforeMaskedValueChange={beforeMaskedValueChange}
      style={{'width': '100%',
        'height': '35px',
        'background': '#232D3D',
        'border-radius': '2px',
        'border-color': 'transparent',
        'color': '#FDFFFE',
        'padding-left': '5px'}}
      >
    </InputMask>
  );
}

export default DateInput;