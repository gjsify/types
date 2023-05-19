
import LibvirtGLib10 from '@girs/libvirtglib-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'LibvirtGLib', ver?: '1.0'): typeof LibvirtGLib10;
    }
}

export default NodeGtkGi;

