
import UMockdev from './umockdev-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        UMockdev: typeof UMockdev;
    }
}

export default GjsGiImports;


