

import Tracker10 from '@girs/tracker-1.0';

declare global {
    export interface GjsGiImports {
        Tracker: typeof Tracker10;
    }
}

export default GjsGiImports;


