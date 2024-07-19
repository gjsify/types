declare module 'gi://Gcr?version=4' {
    import Gcr4 from '@girs/gcr-4';
    export default Gcr4;
}

declare module 'gi://Gcr' {
    import Gcr4 from 'gi://Gcr?version=4';
    export default Gcr4;
}
