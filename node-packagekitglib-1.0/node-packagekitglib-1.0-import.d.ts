
import PackageKitGlib10 from '@girs/packagekitglib-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'PackageKitGlib', ver?: '1.0'): typeof PackageKitGlib10;
    }
}

export default NodeGtkGi;

