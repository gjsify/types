import GExiv2010 from '@girs/gexiv2-0.10';

declare global {
    export interface GjsGiImports {
        GExiv2: typeof GExiv2010;
    }
}

export default GjsGiImports;
