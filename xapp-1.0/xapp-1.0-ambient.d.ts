
declare module 'gi://XApp?version=1.0' {
    const XApp10: typeof import('./xapp-1.0.js').default
    export default XApp10;
}

declare module 'gi://XApp' {
    const XApp10: typeof import('./xapp-1.0.js').default
    export default XApp10;
}


