declare module 'gi://Lasem?version=0.6' {
    import Lasem06 from '@girs/lasem-0.6';
    export default Lasem06;
}

declare module 'gi://Lasem' {
    import Lasem06 from 'gi://Lasem?version=0.6';
    export default Lasem06;
}
