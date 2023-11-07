import { useReducer } from 'react';
import { initialState, translateReducer } from '../reducers/translateReducer';

export default function useStore() {

    const [state, dispatch] =  useReducer(translateReducer, initialState, ()=> initialState);

    function handlerSwapLanguages() : void{
        dispatch({ type: "SWAP_LANGUAGE" });
    };

    function setLanguageToTranslate(targetLanguage : string) : void{
        dispatch({type: "SET_TO_LANGUAGE", payload: targetLanguage});
    };

    function setFromLanguage(destinationLanguage: string){
        dispatch({type : "SET_FROM_LANGUAGE", payload: destinationLanguage});
    };

    function handlerTextToTranslate(text : string){
        dispatch({type : "SET_TEXT_TO_TRANSLATE", payload: text});
    }

    function handlerClaerBox(){
        dispatch({type : 'CLEAR_TEXT_TO_TRANSLATE'});
    }

    return {
      state,
      handlerSwapLanguages,
      setLanguageToTranslate,
      setFromLanguage,
      handlerTextToTranslate,
      handlerClaerBox
    }
}
