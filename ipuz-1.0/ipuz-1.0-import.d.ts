import type Ipuz10 from '@girs/ipuz-1.0';

declare global {
    export interface GjsGiImports {
        Ipuz: typeof Ipuz10;
    }
}

export default GjsGiImports;
