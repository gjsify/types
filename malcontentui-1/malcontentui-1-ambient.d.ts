declare module 'gi://MalcontentUi?version=1' {
    import MalcontentUi1 from '@girs/malcontentui-1';
    export default MalcontentUi1;
}

declare module 'gi://MalcontentUi' {
    import MalcontentUi1 from 'gi://MalcontentUi?version=1';
    export default MalcontentUi1;
}
