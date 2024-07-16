
declare module 'gi://Tepl?version=6' {
    import Tepl from './tepl-6.d.ts';
    export default Tepl;
}

declare module 'gi://Tepl' {
    import Tepl6 from 'gi://Tepl?version=6';
    export default Tepl6;
}


