declare module 'gi://Farstream?version=0.1' {
    import Farstream01 from '@girs/farstream-0.1';
    export default Farstream01;
}

declare module 'gi://Farstream' {
    import Farstream01 from 'gi://Farstream?version=0.1';
    export default Farstream01;
}
