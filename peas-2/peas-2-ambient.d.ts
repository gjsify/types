declare module 'gi://Peas?version=2' {
    import Peas2 from '@girs/peas-2';
    export default Peas2;
}

declare module 'gi://Peas' {
    import Peas2 from 'gi://Peas?version=2';
    export default Peas2;
}
