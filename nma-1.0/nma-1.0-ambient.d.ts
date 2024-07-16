
declare module 'gi://NMA?version=1.0' {
    import NMA from './nma-1.0.d.ts';
    export default NMA;
}

declare module 'gi://NMA' {
    import NMA10 from 'gi://NMA?version=1.0';
    export default NMA10;
}


