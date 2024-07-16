
declare module 'gi://Gck?version=2' {
    import Gck from './gck-2.d.ts';
    export default Gck;
}

declare module 'gi://Gck' {
    import Gck2 from 'gi://Gck?version=2';
    export default Gck2;
}


