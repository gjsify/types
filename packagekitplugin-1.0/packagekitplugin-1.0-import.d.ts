
import PackageKitPlugin from './packagekitplugin-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        PackageKitPlugin: typeof PackageKitPlugin;
    }
}

export default GjsGiImports;


