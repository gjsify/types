
declare module 'gi://Vpg?version=1' {
    import Vpg from './vpg-1.d.ts';
    export default Vpg;
}

declare module 'gi://Vpg' {
    import Vpg1 from 'gi://Vpg?version=1';
    export default Vpg1;
}


