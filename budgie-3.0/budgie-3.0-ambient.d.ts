declare module 'gi://Budgie?version=3.0' {
    import Budgie30 from '@girs/budgie-3.0';
    export default Budgie30;
}

declare module 'gi://Budgie' {
    import Budgie30 from 'gi://Budgie?version=3.0';
    export default Budgie30;
}
