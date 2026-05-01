
declare module 'gi://Modulemd?version=2.0' {
    import Modulemd20 from '@girs/modulemd-2.0';
    export default Modulemd20;
}

declare module 'gi://Modulemd' {
    import Modulemd20 from 'gi://Modulemd?version=2.0';
    export default Modulemd20;
}


