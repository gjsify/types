import type Ide50 from '@girs/ide-50';

declare global {
    export interface GjsGiImports {
        Ide: typeof Ide50;
    }
}

export default GjsGiImports;
