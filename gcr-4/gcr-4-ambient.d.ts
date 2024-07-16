
declare module 'gi://Gcr?version=4' {
    import Gcr from './gcr-4.d.ts';
    export default Gcr;
}

declare module 'gi://Gcr' {
    import Gcr4 from 'gi://Gcr?version=4';
    export default Gcr4;
}


