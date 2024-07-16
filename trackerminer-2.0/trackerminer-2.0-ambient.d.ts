
declare module 'gi://TrackerMiner?version=2.0' {
    import TrackerMiner from './trackerminer-2.0.d.ts';
    export default TrackerMiner;
}

declare module 'gi://TrackerMiner' {
    import TrackerMiner20 from 'gi://TrackerMiner?version=2.0';
    export default TrackerMiner20;
}


