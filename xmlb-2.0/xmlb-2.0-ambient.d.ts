
declare module 'gi://Xmlb?version=2.0' {
    import Xmlb from './xmlb-2.0.d.ts';
    export default Xmlb;
}

declare module 'gi://Xmlb' {
    import Xmlb20 from 'gi://Xmlb?version=2.0';
    export default Xmlb20;
}


