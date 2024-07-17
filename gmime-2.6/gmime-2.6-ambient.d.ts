
declare module 'gi://GMime?version=2.6' {
    import GMime26 from '@girs/gmime-2.6';
    export default GMime26;
}

declare module 'gi://GMime' {
    import GMime26 from 'gi://GMime?version=2.6';
    export default GMime26;
}


