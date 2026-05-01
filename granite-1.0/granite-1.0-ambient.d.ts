
declare module 'gi://Granite?version=1.0' {
    import Granite10 from '@girs/granite-1.0';
    export default Granite10;
}

declare module 'gi://Granite' {
    import Granite10 from 'gi://Granite?version=1.0';
    export default Granite10;
}


