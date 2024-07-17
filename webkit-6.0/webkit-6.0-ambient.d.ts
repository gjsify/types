
declare module 'gi://WebKit?version=6.0' {
    const WebKit60: typeof import('./webkit-6.0.js').default
    export default WebKit60;
}

declare module 'gi://WebKit' {
    const WebKit60: typeof import('./webkit-6.0.js').default
    export default WebKit60;
}


