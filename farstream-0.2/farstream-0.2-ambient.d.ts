declare module 'gi://Farstream?version=0.2' {
    import Farstream02 from '@girs/farstream-0.2';
    export default Farstream02;
}

declare module 'gi://Farstream' {
    import Farstream02 from 'gi://Farstream?version=0.2';
    export default Farstream02;
}
