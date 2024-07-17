
import Tracker from './tracker-3.0.js';

declare global {
    export interface GjsGiImports {
        Tracker: typeof Tracker;
    }
}

export default GjsGiImports;


