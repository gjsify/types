

import Manette02 from '@girs/manette-0.2';

declare global {
    export interface GjsGiImports {
        Manette: typeof Manette02;
    }
}

export default GjsGiImports;


