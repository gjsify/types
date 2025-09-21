declare module 'gi://Cogl?version=5' {
    import Cogl5 from '@girs/cogl-5';
    export default Cogl5;
}

declare module 'gi://Cogl' {
    import Cogl5 from 'gi://Cogl?version=5';
    export default Cogl5;
}
