
import UMockdev10 from '@girs/umockdev-1.0';

declare global {
    export interface GjsGiImports {
        UMockdev: typeof UMockdev10;
    }
}

export default GjsGiImports;


