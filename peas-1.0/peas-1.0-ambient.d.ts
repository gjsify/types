declare module 'gi://Peas?version=1.0' {
    import Peas10 from '@girs/peas-1.0';
    export default Peas10;
}

declare module 'gi://Peas' {
    import Peas10 from 'gi://Peas?version=1.0';
    export default Peas10;
}
