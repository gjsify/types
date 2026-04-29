import type Gpiodglib10 from '@girs/gpiodglib-1.0';

declare global {
    export interface GjsGiImports {
        Gpiodglib: typeof Gpiodglib10;
    }
}

export default GjsGiImports;
