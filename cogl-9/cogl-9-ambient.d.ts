declare module 'gi://Cogl?version=9' {
    import Cogl9 from '@girs/cogl-9';
    export default Cogl9;
}

declare module 'gi://Cogl' {
    import Cogl9 from 'gi://Cogl?version=9';
    export default Cogl9;
}
