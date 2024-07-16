
declare module 'gi://cairo?version=1.0' {
    import cairo from './cairo-1.0.d.ts';
    export default cairo;
}

declare module 'gi://cairo' {
    import Cairo10 from 'gi://cairo?version=1.0';
    export default Cairo10;
}


