
declare module 'gi://UDisks?version=2.0' {
    import UDisks from './udisks-2.0.d.ts';
    export default UDisks;
}

declare module 'gi://UDisks' {
    import UDisks20 from 'gi://UDisks?version=2.0';
    export default UDisks20;
}


