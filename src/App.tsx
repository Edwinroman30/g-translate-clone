import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {SwicthIcon, ClickBoardIcon, HearVoiceIcon, CrossIcon} from './components/Icons';
import LanguageSelector from './components/LanguageSelector';
import { Button } from 'react-bootstrap';
import { SelectorType } from './types/enums/enumtypes';
import useStore from './hooks/useStore';
import TextArea from './components/TextArea';
import { SPEECH_VOICES_RESPECT_LANGUAGE } from './types/enums/constances';


function App() {

  const {state, setFromLanguage, setLanguageToTranslate, handlerSwapLanguages,
         handlerTextToTranslate, handlerClaerBox } = useStore();

  function handlerClipBoard(){
    navigator.clipboard.writeText(state.textToTranslate);
  };

  function handlerSpeechVoice(){
     const utteranceObj = new SpeechSynthesisUtterance(state.textToTranslate);
     utteranceObj.lang = SPEECH_VOICES_RESPECT_LANGUAGE[state.fromLanguage];
     
     window.speechSynthesis.speak(utteranceObj);
  }

  function handlerClearTextBox(){
    handlerClaerBox();
  }

  return (
    <Container fluid>

      <Container className='p-3'>
        <Header></Header>

        <Row>

          <Col md='5'>
            <LanguageSelector
              type={SelectorType.FromOriginLanguage}
              onChange={setFromLanguage}
              selectedValue={state.fromLanguage}
            />
            <div className="relative" style={{position: "relative"}}>
              <TextArea
                type={SelectorType.FromOriginLanguage}
                currentValue={state.textToTranslate}
                onChange={handlerTextToTranslate}
              ></TextArea>

              <Button variant='transparent' onClick={handlerClearTextBox} style={{position: "absolute", top:10, right:10,  zIndex: 1000}}>
                <CrossIcon/>
              </Button>
              
              <Button variant='light' onClick={handlerClipBoard}>
                <ClickBoardIcon/>
              </Button>

              <Button variant='light' onClick={handlerSpeechVoice}>
                <HearVoiceIcon/>
              </Button>
            </div>
          </Col>

          <Col className='d-flex justify-content-center align-items-center'>
            <Button size='sm' variant='ligth' onClick={handlerSwapLanguages}>
              <SwicthIcon/>
            </Button>
          </Col>

          <Col md='5'>
            <LanguageSelector
                type={SelectorType.ToDestinitionLanguage}
                onChange={setLanguageToTranslate}
                selectedValue={state.toLanguage}
              />
            <TextArea
              type={SelectorType.ToDestinitionLanguage}
              isloading={state.isLoading}
              currentValue={state.translationResult}
              onChange={handlerTextToTranslate}
            ></TextArea>
          </Col>
          
        </Row>
      </Container>

    </Container>
  )
}

export default App;
