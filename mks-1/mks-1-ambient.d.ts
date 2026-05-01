
declare module 'gi://Mks?version=1' {
    import Mks1 from '@girs/mks-1';
    export default Mks1;
}

declare module 'gi://Mks' {
    import Mks1 from 'gi://Mks?version=1';
    export default Mks1;
}


