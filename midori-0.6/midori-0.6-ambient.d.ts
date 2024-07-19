declare module 'gi://Midori?version=0.6' {
    import Midori06 from '@girs/midori-0.6';
    export default Midori06;
}

declare module 'gi://Midori' {
    import Midori06 from 'gi://Midori?version=0.6';
    export default Midori06;
}
