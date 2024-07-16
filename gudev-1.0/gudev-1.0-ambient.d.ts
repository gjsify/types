
declare module 'gi://GUdev?version=1.0' {
    import GUdev from './gudev-1.0.d.ts';
    export default GUdev;
}

declare module 'gi://GUdev' {
    import GUdev10 from 'gi://GUdev?version=1.0';
    export default GUdev10;
}


