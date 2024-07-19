import GnomeBG40 from '@girs/gnomebg-4.0';

declare global {
    export interface GjsGiImports {
        GnomeBG: typeof GnomeBG40;
    }
}

export default GjsGiImports;
