
declare module 'gi://Gly?version=1' {
    import Gly1 from '@girs/gly-1';
    export default Gly1;
}

declare module 'gi://Gly' {
    import Gly1 from 'gi://Gly?version=1';
    export default Gly1;
}


