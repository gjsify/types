declare module 'gi://TelepathyLogger?version=0.2' {
    import TelepathyLogger02 from '@girs/telepathylogger-0.2';
    export default TelepathyLogger02;
}

declare module 'gi://TelepathyLogger' {
    import TelepathyLogger02 from 'gi://TelepathyLogger?version=0.2';
    export default TelepathyLogger02;
}
