
declare module 'gi://Mks?version=1' {
    import Mks from './mks-1.d.ts';
    export default Mks;
}

declare module 'gi://Mks' {
    import Mks1 from 'gi://Mks?version=1';
    export default Mks1;
}


