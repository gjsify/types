
declare module 'gi://SpeechProvider?version=1.0' {
    import SpeechProvider10 from '@girs/speechprovider-1.0';
    export default SpeechProvider10;
}

declare module 'gi://SpeechProvider' {
    import SpeechProvider10 from 'gi://SpeechProvider?version=1.0';
    export default SpeechProvider10;
}


