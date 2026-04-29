declare module 'gi://Ministream?version=1' {
    import Ministream1 from '@girs/ministream-1';
    export default Ministream1;
}

declare module 'gi://Ministream' {
    import Ministream1 from 'gi://Ministream?version=1';
    export default Ministream1;
}
