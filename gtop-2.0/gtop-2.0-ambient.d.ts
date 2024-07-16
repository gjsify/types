
declare module 'gi://GTop?version=2.0' {
    import GTop from './gtop-2.0.d.ts';
    export default GTop;
}

declare module 'gi://GTop' {
    import GTop20 from 'gi://GTop?version=2.0';
    export default GTop20;
}


