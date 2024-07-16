
declare module 'gi://Libproxy?version=1.0' {
    import Libproxy from './libproxy-1.0.d.ts';
    export default Libproxy;
}

declare module 'gi://Libproxy' {
    import Libproxy10 from 'gi://Libproxy?version=1.0';
    export default Libproxy10;
}


