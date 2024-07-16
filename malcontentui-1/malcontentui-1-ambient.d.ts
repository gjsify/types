
declare module 'gi://MalcontentUi?version=1' {
    import MalcontentUi from './malcontentui-1.d.ts';
    export default MalcontentUi;
}

declare module 'gi://MalcontentUi' {
    import MalcontentUi1 from 'gi://MalcontentUi?version=1';
    export default MalcontentUi1;
}


