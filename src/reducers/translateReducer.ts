import { AUTO_LANGUAGE_DETECTION_TYPE } from '../types/enums/constances';
import { ActionTranslateType, ITranslateObjectType } from '../types/interfaces/types';

export const initialState : ITranslateObjectType = {
     fromLanguage : AUTO_LANGUAGE_DETECTION_TYPE.auto,
     toLanguage: "es",
     isLoading: false,
     textToTranslate : '',
     translationResult: ''
};

export const translateReducer = (state : ITranslateObjectType, action : ActionTranslateType) : ITranslateObjectType => {

    const { type } = action;

    switch(type){

        case "SWAP_LANGUAGE":
            // Bussiness rule, avoiding interchange of auto into the result.

            if(state.fromLanguage === AUTO_LANGUAGE_DETECTION_TYPE.auto)
                return state; // Do nothing, return the same.

            return { // Else, do the swap. 
             ...state,
             fromLanguage: state.toLanguage,
             toLanguage: state.fromLanguage 
            }
        break;

        case "SET_FROM_LANGUAGE":
            if(state.fromLanguage == action.payload) return state;

            return {
             ...state,
             isLoading: state.textToTranslate !== '',
             fromLanguage : action.payload
            } 
        break;
        
        case "SET_TO_LANGUAGE":
            if(state.toLanguage == action.payload) return state;

            const isLoading = state.textToTranslate !== '';

            return {
             ...state,
             isLoading,
             toLanguage : action.payload
            } 
        break;

        case "SET_TEXT_TO_TRANSLATE":
            if(state.textToTranslate === '' || !state.textToTranslate || state.textToTranslate == " ")
                return {
                    ...state,
                    isLoading: false,
                    textToTranslate : action.payload
                }

            return {
              ...state,
              isLoading: true,
              textToTranslate : action.payload,
              translationResult: ""
            }
            break;
        
        case "CLEAR_TEXT_TO_TRANSLATE":
            return {
                ...state,
                textToTranslate: "",
                isLoading: false
            }
            break;
    }
}