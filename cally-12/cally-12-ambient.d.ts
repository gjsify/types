
declare module 'gi://Cally?version=12' {
    import Cally from './cally-12.d.ts';
    export default Cally;
}

declare module 'gi://Cally' {
    import Cally12 from 'gi://Cally?version=12';
    export default Cally12;
}


