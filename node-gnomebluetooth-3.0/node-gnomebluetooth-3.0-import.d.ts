
import GnomeBluetooth30 from '@girs/node-gnomebluetooth-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GnomeBluetooth', ver?: '3.0'): typeof GnomeBluetooth30;
    }
}

export default NodeGtkGi;

