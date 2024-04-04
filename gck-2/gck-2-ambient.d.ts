
declare module 'gi://Gck?version=2' {
    import Gck from '@girs/gck-2';
    export default Gck;
}

declare module 'gi://Gck' {
    import Gck2 from 'gi://Gck?version=2';
    export default Gck2;
}


