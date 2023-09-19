
import GDesktopEnums30 from '@girs/node-gdesktopenums-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GDesktopEnums', ver?: '3.0'): typeof GDesktopEnums30;
    }
}

export default NodeGtkGi;

