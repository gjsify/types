
import ICalGLib30 from '@girs/icalglib-3.0';

declare global {
    export interface GjsGiImports {
        ICalGLib: typeof ICalGLib30;
    }
}

export default GjsGiImports;


