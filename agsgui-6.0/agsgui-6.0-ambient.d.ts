
declare module 'gi://AgsGui?version=6.0' {
    import AgsGui60 from '@girs/agsgui-6.0';
    export default AgsGui60;
}

declare module 'gi://AgsGui' {
    import AgsGui60 from 'gi://AgsGui?version=6.0';
    export default AgsGui60;
}


