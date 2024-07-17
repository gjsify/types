
import ICal from './ical-3.0.js';

declare global {
    export interface GjsGiImports {
        ICal: typeof ICal;
    }
}

export default GjsGiImports;


