declare module 'gi://Translit?version=1.0' {
    import Translit10 from '@girs/translit-1.0';
    export default Translit10;
}

declare module 'gi://Translit' {
    import Translit10 from 'gi://Translit?version=1.0';
    export default Translit10;
}
