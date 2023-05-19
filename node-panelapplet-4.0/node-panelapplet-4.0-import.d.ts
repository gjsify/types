
import PanelApplet40 from '@girs/panelapplet-4.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'PanelApplet', ver?: '4.0'): typeof PanelApplet40;
    }
}

export default NodeGtkGi;

