
import Champlain from './champlain-0.12.js';

declare global {
    export interface GjsGiImports {
        Champlain: typeof Champlain;
    }
}

export default GjsGiImports;


