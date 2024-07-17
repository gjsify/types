
import gSignon from './gsignon-1.0.js';

declare global {
    export interface GjsGiImports {
        gSignon: typeof gSignon;
    }
}

export default GjsGiImports;


