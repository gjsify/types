
import ICalGLib from './icalglib-3.0.js';

declare global {
    export interface GjsGiImports {
        ICalGLib: typeof ICalGLib;
    }
}

export default GjsGiImports;


