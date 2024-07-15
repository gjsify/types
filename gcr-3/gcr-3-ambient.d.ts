
declare module 'gi://Gcr?version=3' {
    import Gcr from '@girs/gcr-3';
    export default Gcr;
}

declare module 'gi://Gcr' {
    import Gcr3 from 'gi://Gcr?version=3';
    export default Gcr3;
}


