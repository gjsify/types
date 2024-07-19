import PolkitAgent10 from '@girs/polkitagent-1.0';

declare global {
    export interface GjsGiImports {
        PolkitAgent: typeof PolkitAgent10;
    }
}

export default GjsGiImports;
