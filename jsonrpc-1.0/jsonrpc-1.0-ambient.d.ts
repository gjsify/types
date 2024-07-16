
declare module 'gi://Jsonrpc?version=1.0' {
    import Jsonrpc from './jsonrpc-1.0.d.ts';
    export default Jsonrpc;
}

declare module 'gi://Jsonrpc' {
    import Jsonrpc10 from 'gi://Jsonrpc?version=1.0';
    export default Jsonrpc10;
}


