
declare module 'gi://Budgie?version=1.0' {
    import Budgie from './budgie-1.0.d.ts';
    export default Budgie;
}

declare module 'gi://Budgie' {
    import Budgie10 from 'gi://Budgie?version=1.0';
    export default Budgie10;
}


