
import Panel from './panel-1.js';

declare global {
    export interface GjsGiImports {
        Panel: typeof Panel;
    }
}

export default GjsGiImports;


