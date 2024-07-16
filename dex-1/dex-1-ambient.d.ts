
declare module 'gi://Dex?version=1' {
    import Dex from './dex-1.d.ts';
    export default Dex;
}

declare module 'gi://Dex' {
    import Dex1 from 'gi://Dex?version=1';
    export default Dex1;
}


