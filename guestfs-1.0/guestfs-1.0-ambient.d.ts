declare module 'gi://Guestfs?version=1.0' {
    import Guestfs10 from '@girs/guestfs-1.0';
    export default Guestfs10;
}

declare module 'gi://Guestfs' {
    import Guestfs10 from 'gi://Guestfs?version=1.0';
    export default Guestfs10;
}
