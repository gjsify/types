
declare module 'gi://Granite?version=7.0' {
    import Granite from './granite-7.0.d.ts';
    export default Granite;
}

declare module 'gi://Granite' {
    import Granite70 from 'gi://Granite?version=7.0';
    export default Granite70;
}


