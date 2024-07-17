
import TelepathyGLib from './telepathyglib-0.12.js';

declare global {
    export interface GjsGiImports {
        TelepathyGLib: typeof TelepathyGLib;
    }
}

export default GjsGiImports;


