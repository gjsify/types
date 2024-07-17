
import MalcontentUi from './malcontentui-1.js';

declare global {
    export interface GjsGiImports {
        MalcontentUi: typeof MalcontentUi;
    }
}

export default GjsGiImports;


