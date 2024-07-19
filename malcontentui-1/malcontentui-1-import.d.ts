import MalcontentUi1 from '@girs/malcontentui-1';

declare global {
    export interface GjsGiImports {
        MalcontentUi: typeof MalcontentUi1;
    }
}

export default GjsGiImports;
