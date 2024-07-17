
import ECalendar from './ecalendar-1.2.js';

declare global {
    export interface GjsGiImports {
        ECalendar: typeof ECalendar;
    }
}

export default GjsGiImports;


