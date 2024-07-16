
declare module 'gi://Cally?version=10' {
    import Cally from './cally-10.d.ts';
    export default Cally;
}

declare module 'gi://Cally' {
    import Cally10 from 'gi://Cally?version=10';
    export default Cally10;
}


