
declare module 'gi://Jsonrpc?version=1.0' {
    const Jsonrpc10: typeof import('./jsonrpc-1.0.js').default
    export default Jsonrpc10;
}

declare module 'gi://Jsonrpc' {
    const Jsonrpc10: typeof import('./jsonrpc-1.0.js').default
    export default Jsonrpc10;
}


