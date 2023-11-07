export const SUPPORTED_LANGUAGE_TYPE = {
    es : "Español",
    en : "English",
    dt : "Dustch"
};

export const  AUTO_LANGUAGE_DETECTION_TYPE = {
    auto : "Autodetectar",
};

export const FROM_AVAILABLE_LANGUAGE_TYPE = {
    ...SUPPORTED_LANGUAGE_TYPE,
    ...AUTO_LANGUAGE_DETECTION_TYPE
}

export const SPEECH_VOICES_RESPECT_LANGUAGE = {
    es : "es-ES",
    en : "en-GB",
    dt : "nl"
};
