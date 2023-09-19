
import GXml014 from '@girs/node-gxml-0.14';

declare global {
    interface NodeGtkGi {
        require(ns: 'GXml', ver?: '0.14'): typeof GXml014;
    }
}

export default NodeGtkGi;

