
declare module 'gi://Handy?version=1' {
    import Handy1 from '@girs/handy-1';
    export default Handy1;
}

declare module 'gi://Handy' {
    export * from 'gi://Handy?version=1';
}


