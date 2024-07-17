
declare module 'gi://Budgie?version=1.0' {
    import Budgie10 from '@girs/budgie-1.0';
    export default Budgie10;
}

declare module 'gi://Budgie' {
    import Budgie10 from 'gi://Budgie?version=1.0';
    export default Budgie10;
}


