
declare module 'gi://ZBar?version=1.0' {
    import ZBar from './zbar-1.0.d.ts';
    export default ZBar;
}

declare module 'gi://ZBar' {
    import ZBar10 from 'gi://ZBar?version=1.0';
    export default ZBar10;
}


