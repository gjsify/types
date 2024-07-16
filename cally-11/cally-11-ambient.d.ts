
declare module 'gi://Cally?version=11' {
    import Cally from './cally-11.d.ts';
    export default Cally;
}

declare module 'gi://Cally' {
    import Cally11 from 'gi://Cally?version=11';
    export default Cally11;
}


