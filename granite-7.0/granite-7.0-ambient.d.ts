
declare module 'gi://Granite?version=7.0' {
    import Granite70 from '@girs/granite-7.0';
    export default Granite70;
}

declare module 'gi://Granite' {
    export * from 'gi://Granite?version=7.0';
}


