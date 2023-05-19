
import LibvirtGObject10 from '@girs/libvirtgobject-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'LibvirtGObject', ver?: '1.0'): typeof LibvirtGObject10;
    }
}

export default NodeGtkGi;

