
import Tracker20 from '@girs/tracker-2.0';

declare global {
    export interface GjsGiImports {
        Tracker: typeof Tracker20;
    }
}

export default GjsGiImports;


