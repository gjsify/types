
declare module 'gi://Unity?version=6.0' {
    import Unity60 from '@girs/unity-6.0';
    export default Unity60;
}

declare module 'gi://Unity' {
    import Unity60 from 'gi://Unity?version=6.0';
    export default Unity60;
}


