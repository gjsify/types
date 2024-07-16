
import ICalGLib from './icalglib-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        ICalGLib: typeof ICalGLib;
    }
}

export default GjsGiImports;


