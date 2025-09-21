declare module 'gi://Cogl?version=7' {
    import Cogl7 from '@girs/cogl-7';
    export default Cogl7;
}

declare module 'gi://Cogl' {
    import Cogl7 from 'gi://Cogl?version=7';
    export default Cogl7;
}
