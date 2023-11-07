import {FC} from 'react';
import Form from 'react-bootstrap/Form';
import { SelectorType } from '../types/enums/enumtypes';
import { AUTO_LANGUAGE_DETECTION_TYPE, SUPPORTED_LANGUAGE_TYPE } from '../types/enums/constances';

type CustomeSelectorProp = {
    onChange : (val : string) => void,
    selectedValue : string,
    type : SelectorType,
};

const LanguageSelector : FC<CustomeSelectorProp> = ({ onChange, type, selectedValue }) => {

  function handlerOnChange(e : React.ChangeEvent<HTMLSelectElement>) {
    onChange(e.target.value);
  };
  
    
  return (
    <Form.Select onChange={handlerOnChange} value={selectedValue}>
      {SelectorType.FromOriginLanguage === type && (<option value={AUTO_LANGUAGE_DETECTION_TYPE.auto} key={AUTO_LANGUAGE_DETECTION_TYPE.auto}>Autodetectar</option>)}

      { 
        Object.entries(SUPPORTED_LANGUAGE_TYPE).map(([key, literal]) => 
        (
          <option value={key} key={key}>{literal}</option>
        ))
      }
    </Form.Select>
  );

}

export default LanguageSelector;