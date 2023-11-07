/* Reducer */

export interface ITranslateObjectType{
    fromLanguage : string;
    toLanguage: string;
    isLoading: boolean;
    textToTranslate: string;
    translationResult: string;
}

//FIXED types for the reducer action:
export type ActionTranslateType = 
| {  type : "SWAP_LANGUAGE" }
| {  type : "CLEAR_TEXT_TO_TRANSLATE" }
| {  type : "SET_FROM_LANGUAGE",  payload: string }
| {  type : "SET_TO_LANGUAGE",  payload: string }
| {  type : "SET_TEXT_TO_TRANSLATE",  payload: string };