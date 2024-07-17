
import LibvirtSandbox from './libvirtsandbox-1.0.js';

declare global {
    export interface GjsGiImports {
        LibvirtSandbox: typeof LibvirtSandbox;
    }
}

export default GjsGiImports;


