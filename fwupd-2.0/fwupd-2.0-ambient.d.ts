
declare module 'gi://Fwupd?version=2.0' {
    import Fwupd from './fwupd-2.0.d.ts';
    export default Fwupd;
}

declare module 'gi://Fwupd' {
    import Fwupd20 from 'gi://Fwupd?version=2.0';
    export default Fwupd20;
}


