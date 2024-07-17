
import GstController from './gstcontroller-1.0.js';

declare global {
    export interface GjsGiImports {
        GstController: typeof GstController;
    }
}

export default GjsGiImports;


