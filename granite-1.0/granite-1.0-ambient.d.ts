
declare module 'gi://Granite?version=1.0' {
    import Granite from './granite-1.0.d.ts';
    export default Granite;
}

declare module 'gi://Granite' {
    import Granite10 from 'gi://Granite?version=1.0';
    export default Granite10;
}


