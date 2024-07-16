
declare module 'gi://GMime?version=2.6' {
    import GMime from './gmime-2.6.d.ts';
    export default GMime;
}

declare module 'gi://GMime' {
    import GMime26 from 'gi://GMime?version=2.6';
    export default GMime26;
}


