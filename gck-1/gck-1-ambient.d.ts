
declare module 'gi://Gck?version=1' {
    import Gck from './gck-1.d.ts';
    export default Gck;
}

declare module 'gi://Gck' {
    import Gck1 from 'gi://Gck?version=1';
    export default Gck1;
}


