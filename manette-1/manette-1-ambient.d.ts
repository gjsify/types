
declare module 'gi://Manette?version=1' {
    import Manette1 from '@girs/manette-1';
    export default Manette1;
}

declare module 'gi://Manette' {
    import Manette1 from 'gi://Manette?version=1';
    export default Manette1;
}


