declare module 'gi://Cogl?version=3' {
    import Cogl3 from '@girs/cogl-3';
    export default Cogl3;
}

declare module 'gi://Cogl' {
    import Cogl3 from 'gi://Cogl?version=3';
    export default Cogl3;
}
