import type Meta9 from '@girs/meta-9';

declare global {
    export interface GjsGiImports {
        Meta: typeof Meta9;
    }
}

export default GjsGiImports;
