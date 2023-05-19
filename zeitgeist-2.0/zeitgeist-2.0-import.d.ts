

import Zeitgeist20 from '@girs/zeitgeist-2.0';

declare global {
    export interface GjsGiImports {
        Zeitgeist: typeof Zeitgeist20;
    }
}

export default GjsGiImports;


