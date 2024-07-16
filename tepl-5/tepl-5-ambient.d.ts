
declare module 'gi://Tepl?version=5' {
    import Tepl from './tepl-5.d.ts';
    export default Tepl;
}

declare module 'gi://Tepl' {
    import Tepl5 from 'gi://Tepl?version=5';
    export default Tepl5;
}


