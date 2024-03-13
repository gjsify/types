
declare module 'gi://Snapd?version=1' {
    import Snapd1 from '@girs/snapd-1';
    export default Snapd1;
}

declare module 'gi://Snapd' {
    export * from 'gi://Snapd?version=1';
}


