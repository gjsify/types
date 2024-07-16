
declare module 'gi://WebKit?version=6.0' {
    import WebKit from './webkit-6.0.d.ts';
    export default WebKit;
}

declare module 'gi://WebKit' {
    import WebKit60 from 'gi://WebKit?version=6.0';
    export default WebKit60;
}


