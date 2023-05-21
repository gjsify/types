
import PackageKitPlugin10 from '@girs/node-packagekitplugin-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'PackageKitPlugin', ver?: '1.0'): typeof PackageKitPlugin10;
    }
}

export default NodeGtkGi;

