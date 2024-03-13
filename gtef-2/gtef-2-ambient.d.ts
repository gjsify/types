
declare module 'gi://Gtef?version=2' {
    import Gtef2 from '@girs/gtef-2';
    export default Gtef2;
}

declare module 'gi://Gtef' {
    export * from 'gi://Gtef?version=2';
}


