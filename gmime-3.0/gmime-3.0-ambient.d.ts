
declare module 'gi://GMime?version=3.0' {
    import GMime from './gmime-3.0.d.ts';
    export default GMime;
}

declare module 'gi://GMime' {
    import GMime30 from 'gi://GMime?version=3.0';
    export default GMime30;
}


