
import ClutterGst30 from '@girs/node-cluttergst-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'ClutterGst', ver?: '3.0'): typeof ClutterGst30;
    }
}

export default NodeGtkGi;

