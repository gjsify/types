
declare module 'gi://Guestfs?version=1.0' {
    const Guestfs10: typeof import('./guestfs-1.0.js').default
    export default Guestfs10;
}

declare module 'gi://Guestfs' {
    const Guestfs10: typeof import('./guestfs-1.0.js').default
    export default Guestfs10;
}


