
declare module 'gi://GMime?version=3.0' {
    import GMime30 from '@girs/gmime-3.0';
    export default GMime30;
}

declare module 'gi://GMime' {
    export * from 'gi://GMime?version=3.0';
}


