
declare module 'gi://Caja?version=2.0' {
    import Caja from './caja-2.0.d.ts';
    export default Caja;
}

declare module 'gi://Caja' {
    import Caja20 from 'gi://Caja?version=2.0';
    export default Caja20;
}


