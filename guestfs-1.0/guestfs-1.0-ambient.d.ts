
declare module 'gi://Guestfs?version=1.0' {
    import Guestfs from '@girs/guestfs-1.0';
    export default Guestfs;
}

declare module 'gi://Guestfs' {
    import Guestfs10 from 'gi://Guestfs?version=1.0';
    export default Guestfs10;
}


