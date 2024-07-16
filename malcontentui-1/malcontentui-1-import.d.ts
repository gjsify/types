
import MalcontentUi from './malcontentui-1.d.ts';

declare global {
    export interface GjsGiImports {
        MalcontentUi: typeof MalcontentUi;
    }
}

export default GjsGiImports;


