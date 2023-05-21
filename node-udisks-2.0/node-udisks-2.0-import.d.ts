
import UDisks20 from '@girs/node-udisks-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'UDisks', ver?: '2.0'): typeof UDisks20;
    }
}

export default NodeGtkGi;

