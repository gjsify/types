declare module 'gi://BlockDev?version=3.0' {
    import BlockDev30 from '@girs/blockdev-3.0';
    export default BlockDev30;
}

declare module 'gi://BlockDev' {
    import BlockDev30 from 'gi://BlockDev?version=3.0';
    export default BlockDev30;
}
