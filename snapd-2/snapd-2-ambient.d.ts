
declare module 'gi://Snapd?version=2' {
    import Snapd from './snapd-2.d.ts';
    export default Snapd;
}

declare module 'gi://Snapd' {
    import Snapd2 from 'gi://Snapd?version=2';
    export default Snapd2;
}


