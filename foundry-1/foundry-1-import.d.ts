import type Foundry1 from '@girs/foundry-1';

declare global {
    export interface GjsGiImports {
        Foundry: typeof Foundry1;
    }
}

export default GjsGiImports;
