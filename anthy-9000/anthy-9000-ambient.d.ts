
declare module 'gi://Anthy?version=9000' {
    import Anthy from './anthy-9000.d.ts';
    export default Anthy;
}

declare module 'gi://Anthy' {
    import Anthy9000 from 'gi://Anthy?version=9000';
    export default Anthy9000;
}


