
declare module 'gi://Amtk?version=4' {
    import Amtk from './amtk-4.d.ts';
    export default Amtk;
}

declare module 'gi://Amtk' {
    import Amtk4 from 'gi://Amtk?version=4';
    export default Amtk4;
}


