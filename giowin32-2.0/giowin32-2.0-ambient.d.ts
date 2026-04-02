declare module 'gi://GioWin32?version=2.0' {
    import GioWin3220 from '@girs/giowin32-2.0';
    export default GioWin3220;
}

declare module 'gi://GioWin32' {
    import GioWin3220 from 'gi://GioWin32?version=2.0';
    export default GioWin3220;
}
