
declare module 'gi://Modulemd?version=2.0' {
    import Modulemd from './modulemd-2.0.d.ts';
    export default Modulemd;
}

declare module 'gi://Modulemd' {
    import Modulemd20 from 'gi://Modulemd?version=2.0';
    export default Modulemd20;
}


