
declare module 'gi://Eog?version=3.0' {
    import Eog30 from '@girs/eog-3.0';
    export default Eog30;
}

declare module 'gi://Eog' {
    export * from 'gi://Eog?version=3.0';
}


