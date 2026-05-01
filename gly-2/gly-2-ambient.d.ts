
declare module 'gi://Gly?version=2' {
    import Gly2 from '@girs/gly-2';
    export default Gly2;
}

declare module 'gi://Gly' {
    import Gly2 from 'gi://Gly?version=2';
    export default Gly2;
}


