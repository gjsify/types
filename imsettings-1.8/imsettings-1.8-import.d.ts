
import IMSettings from './imsettings-1.8.d.ts';

declare global {
    export interface GjsGiImports {
        IMSettings: typeof IMSettings;
    }
}

export default GjsGiImports;


