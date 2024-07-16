
declare module 'gi://OSTree?version=1.0' {
    import OSTree from './ostree-1.0.d.ts';
    export default OSTree;
}

declare module 'gi://OSTree' {
    import OSTree10 from 'gi://OSTree?version=1.0';
    export default OSTree10;
}


