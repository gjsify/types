
declare module 'gi://Xed?version=1.0' {
    import Xed from './xed-1.0.d.ts';
    export default Xed;
}

declare module 'gi://Xed' {
    import Xed10 from 'gi://Xed?version=1.0';
    export default Xed10;
}


