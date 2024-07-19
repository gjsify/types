declare module 'gi://Gck?version=2' {
    import Gck2 from '@girs/gck-2';
    export default Gck2;
}

declare module 'gi://Gck' {
    import Gck2 from 'gi://Gck?version=2';
    export default Gck2;
}
