
declare module 'gi://Hex?version=4' {
    import Hex from './hex-4.d.ts';
    export default Hex;
}

declare module 'gi://Hex' {
    import Hex4 from 'gi://Hex?version=4';
    export default Hex4;
}


