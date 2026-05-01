
declare module 'gi://Snapd?version=2' {
    import Snapd2 from '@girs/snapd-2';
    export default Snapd2;
}

declare module 'gi://Snapd' {
    import Snapd2 from 'gi://Snapd?version=2';
    export default Snapd2;
}


