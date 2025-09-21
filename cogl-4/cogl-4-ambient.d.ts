declare module 'gi://Cogl?version=4' {
    import Cogl4 from '@girs/cogl-4';
    export default Cogl4;
}

declare module 'gi://Cogl' {
    import Cogl4 from 'gi://Cogl?version=4';
    export default Cogl4;
}
