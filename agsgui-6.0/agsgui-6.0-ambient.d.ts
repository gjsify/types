
declare module 'gi://AgsGui?version=6.0' {
    import AgsGui from './agsgui-6.0.d.ts';
    export default AgsGui;
}

declare module 'gi://AgsGui' {
    import AgsGui60 from 'gi://AgsGui?version=6.0';
    export default AgsGui60;
}


