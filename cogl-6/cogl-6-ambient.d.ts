declare module 'gi://Cogl?version=6' {
    import Cogl6 from '@girs/cogl-6';
    export default Cogl6;
}

declare module 'gi://Cogl' {
    import Cogl6 from 'gi://Cogl?version=6';
    export default Cogl6;
}
