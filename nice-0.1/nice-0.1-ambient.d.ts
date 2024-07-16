
declare module 'gi://Nice?version=0.1' {
    import Nice from './nice-0.1.d.ts';
    export default Nice;
}

declare module 'gi://Nice' {
    import Nice01 from 'gi://Nice?version=0.1';
    export default Nice01;
}


