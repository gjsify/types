
declare module 'gi://Vpg?version=1' {
    import Vpg1 from '@girs/vpg-1';
    export default Vpg1;
}

declare module 'gi://Vpg' {
    export * from 'gi://Vpg?version=1';
}


