
declare module 'gi://Amtk?version=5' {
    import Amtk from './amtk-5.d.ts';
    export default Amtk;
}

declare module 'gi://Amtk' {
    import Amtk5 from 'gi://Amtk?version=5';
    export default Amtk5;
}


