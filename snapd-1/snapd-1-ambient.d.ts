
declare module 'gi://Snapd?version=1' {
    import Snapd from './snapd-1.d.ts';
    export default Snapd;
}

declare module 'gi://Snapd' {
    import Snapd1 from 'gi://Snapd?version=1';
    export default Snapd1;
}


