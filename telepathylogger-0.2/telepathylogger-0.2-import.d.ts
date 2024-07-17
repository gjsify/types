
import TelepathyLogger from './telepathylogger-0.2.js';

declare global {
    export interface GjsGiImports {
        TelepathyLogger: typeof TelepathyLogger;
    }
}

export default GjsGiImports;


