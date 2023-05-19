
import LibvirtGConfig10 from '@girs/libvirtgconfig-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'LibvirtGConfig', ver?: '1.0'): typeof LibvirtGConfig10;
    }
}

export default NodeGtkGi;

