
declare module 'gi://Cheese?version=3.0' {
    import Cheese from './cheese-3.0.d.ts';
    export default Cheese;
}

declare module 'gi://Cheese' {
    import Cheese30 from 'gi://Cheese?version=3.0';
    export default Cheese30;
}


