declare module 'gi://Unity?version=7.0' {
    import Unity70 from '@girs/unity-7.0';
    export default Unity70;
}

declare module 'gi://Unity' {
    import Unity70 from 'gi://Unity?version=7.0';
    export default Unity70;
}
