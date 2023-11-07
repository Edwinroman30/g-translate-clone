import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { SelectorType } from '../types/enums/enumtypes';

type CustomeProps = {
    onChange : (val : string) => void,
    currentValue : string,
    isloading?: boolean,
    type : SelectorType,
};

const TextArea : React.FC<CustomeProps> = ({onChange, currentValue, type, isloading = false }) => {
  
    function handlerOnChange(e : React.ChangeEvent<HTMLTextAreaElement>) : void{
        onChange(e.target.value);
    };

    function getPlaceHolder () : string {
        if(SelectorType.FromOriginLanguage == type)
            return "Introduce un texto";
        
        if(SelectorType.ToDestinitionLanguage && !isloading)
            return "Traducción";
        else
            return "Traduciendo..."
    }

    const commontStyles = { border:0, height: "300px", resize: "none", fontSize: "1.8rem", fontWeight: 400, whiteSpace: "pre-wrap", wordWrap: "break-word" };
    const style = SelectorType.ToDestinitionLanguage == type ? {...commontStyles, backgroundColor: "#f5f5f5"} : commontStyles;

    return (
    <InputGroup className='p-2'>
        <Form.Control as="textarea"
                      placeholder={getPlaceHolder()}
                      autoFocus={SelectorType.FromOriginLanguage == type} 
                      style={style} 
                      onChange={handlerOnChange}
                      readOnly={SelectorType.ToDestinitionLanguage == type}
                      value={currentValue} />
    </InputGroup>
  )
}

export default TextArea;