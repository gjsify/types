
declare module 'gi://Cheese?version=3.0' {
    import Cheese30 from '@girs/cheese-3.0';
    export default Cheese30;
}

declare module 'gi://Cheese' {
    export default 'gi://Cheese?version=3.0';
}


