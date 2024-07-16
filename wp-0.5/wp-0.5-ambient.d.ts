
declare module 'gi://Wp?version=0.5' {
    import Wp from './wp-0.5.d.ts';
    export default Wp;
}

declare module 'gi://Wp' {
    import Wp05 from 'gi://Wp?version=0.5';
    export default Wp05;
}


