/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GTop-2.0
 */

import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GTop {

const AUTH_NAMESZ: number
const AUTH_TIMEOUT: number
const CONN_INTERNET: number
const CONN_IPC: number
const CONN_UNIX: number
const DEFAULT_PORT: number
const DEFAUTH_NAME: string
const EOT_CHR: number
const EOT_STR: string
const FALSE: number
const GLIBTOP_CMND_CPU: number
const GLIBTOP_CMND_DISK: number
const GLIBTOP_CMND_FSUSAGE: number
const GLIBTOP_CMND_LOADAVG: number
const GLIBTOP_CMND_MEM: number
const GLIBTOP_CMND_MOUNTLIST: number
const GLIBTOP_CMND_MSG_LIMITS: number
const GLIBTOP_CMND_NETLIST: number
const GLIBTOP_CMND_NETLOAD: number
const GLIBTOP_CMND_PPP: number
const GLIBTOP_CMND_PROCLIST: number
const GLIBTOP_CMND_PROC_AFFINITY: number
const GLIBTOP_CMND_PROC_ARGS: number
const GLIBTOP_CMND_PROC_IO: number
const GLIBTOP_CMND_PROC_KERNEL: number
const GLIBTOP_CMND_PROC_MAP: number
const GLIBTOP_CMND_PROC_MEM: number
const GLIBTOP_CMND_PROC_OPEN_FILES: number
const GLIBTOP_CMND_PROC_SEGMENT: number
const GLIBTOP_CMND_PROC_SIGNAL: number
const GLIBTOP_CMND_PROC_STATE: number
const GLIBTOP_CMND_PROC_TIME: number
const GLIBTOP_CMND_PROC_UID: number
const GLIBTOP_CMND_PROC_WD: number
const GLIBTOP_CMND_QUIT: number
const GLIBTOP_CMND_SEM_LIMITS: number
const GLIBTOP_CMND_SHM_LIMITS: number
const GLIBTOP_CMND_SWAP: number
const GLIBTOP_CMND_SYSDEPS: number
const GLIBTOP_CMND_UPTIME: number
const GLIBTOP_CPU_FREQUENCY: number
const GLIBTOP_CPU_IDLE: number
const GLIBTOP_CPU_IOWAIT: number
const GLIBTOP_CPU_IRQ: number
const GLIBTOP_CPU_NICE: number
const GLIBTOP_CPU_SOFTIRQ: number
const GLIBTOP_CPU_SYS: number
const GLIBTOP_CPU_TOTAL: number
const GLIBTOP_CPU_USER: number
const GLIBTOP_ERROR_METHOD_ABORT: number
const GLIBTOP_ERROR_METHOD_IGNORE: number
const GLIBTOP_ERROR_METHOD_WARN: number
const GLIBTOP_ERROR_METHOD_WARN_ONCE: number
/**
 * Exclude idle processes.
 */
const GLIBTOP_EXCLUDE_IDLE: number
/**
 * Exclude processes without a controlling terminal.
 */
const GLIBTOP_EXCLUDE_NOTTY: number
/**
 * Exclude system (on most UNIXes root's) processes.
 */
const GLIBTOP_EXCLUDE_SYSTEM: number
const GLIBTOP_FEATURES_EXCEPT: number
const GLIBTOP_FEATURES_NO_SERVER: number
const GLIBTOP_FILE_ENTRY_FD: number
const GLIBTOP_FILE_ENTRY_INETSOCKET_DST_HOST: number
const GLIBTOP_FILE_ENTRY_INETSOCKET_DST_PORT: number
const GLIBTOP_FILE_ENTRY_NAME: number
const GLIBTOP_FILE_ENTRY_TYPE: number
const GLIBTOP_FSUSAGE_BAVAIL: number
const GLIBTOP_FSUSAGE_BFREE: number
const GLIBTOP_FSUSAGE_BLOCKS: number
const GLIBTOP_FSUSAGE_BLOCK_SIZE: number
const GLIBTOP_FSUSAGE_FFREE: number
const GLIBTOP_FSUSAGE_FILES: number
const GLIBTOP_FSUSAGE_READ: number
const GLIBTOP_FSUSAGE_WRITE: number
const GLIBTOP_INIT_NO_INIT: number
const GLIBTOP_INIT_NO_OPEN: number
const GLIBTOP_IPC_MSGMAP: number
const GLIBTOP_IPC_MSGMAX: number
const GLIBTOP_IPC_MSGMNB: number
const GLIBTOP_IPC_MSGMNI: number
const GLIBTOP_IPC_MSGPOOL: number
const GLIBTOP_IPC_MSGSSZ: number
const GLIBTOP_IPC_MSGTQL: number
const GLIBTOP_IPC_SEMAEM: number
const GLIBTOP_IPC_SEMMAP: number
const GLIBTOP_IPC_SEMMNI: number
const GLIBTOP_IPC_SEMMNS: number
const GLIBTOP_IPC_SEMMNU: number
const GLIBTOP_IPC_SEMMSL: number
const GLIBTOP_IPC_SEMOPM: number
const GLIBTOP_IPC_SEMUME: number
const GLIBTOP_IPC_SEMUSZ: number
const GLIBTOP_IPC_SEMVMX: number
const GLIBTOP_IPC_SHMALL: number
const GLIBTOP_IPC_SHMMAX: number
const GLIBTOP_IPC_SHMMIN: number
const GLIBTOP_IPC_SHMMNI: number
const GLIBTOP_IPC_SHMSEG: number
/**
 * Return information about all processes
 */
const GLIBTOP_KERN_PROC_ALL: number
const GLIBTOP_KERN_PROC_MASK: number
/**
 * Return all processes in the process group passed in `arg`.
 */
const GLIBTOP_KERN_PROC_PGRP: number
/**
 * Return all processes with the pid which is passed in `arg`. You can use this to find out whether some process still exists.
 */
const GLIBTOP_KERN_PROC_PID: number
/**
 * Return all processes with the real uid passed in `arg`.
 */
const GLIBTOP_KERN_PROC_RUID: number
/**
 * Return all processes in the session passed in `arg`.
 */
const GLIBTOP_KERN_PROC_SESSION: number
/**
 * Return all processes which have the controlling tty passed in `arg`
 * (which is interpreted as the device number).
 */
const GLIBTOP_KERN_PROC_TTY: number
/**
 * Return all processes with the effective uid passed in `arg`.
 */
const GLIBTOP_KERN_PROC_UID: number
const GLIBTOP_LOADAVG_LAST_PID: number
const GLIBTOP_LOADAVG_LOADAVG: number
const GLIBTOP_LOADAVG_NR_RUNNING: number
const GLIBTOP_LOADAVG_NR_TASKS: number
const GLIBTOP_MAP_ENTRY_DEVICE: number
const GLIBTOP_MAP_ENTRY_END: number
const GLIBTOP_MAP_ENTRY_FILENAME: number
const GLIBTOP_MAP_ENTRY_INODE: number
const GLIBTOP_MAP_ENTRY_OFFSET: number
const GLIBTOP_MAP_ENTRY_PERM: number
const GLIBTOP_MAP_ENTRY_PRIVATE_CLEAN: number
const GLIBTOP_MAP_ENTRY_PRIVATE_DIRTY: number
const GLIBTOP_MAP_ENTRY_PSS: number
const GLIBTOP_MAP_ENTRY_RSS: number
const GLIBTOP_MAP_ENTRY_SHARED_CLEAN: number
const GLIBTOP_MAP_ENTRY_SHARED_DIRTY: number
const GLIBTOP_MAP_ENTRY_SIZE: number
const GLIBTOP_MAP_ENTRY_START: number
const GLIBTOP_MAP_ENTRY_SWAP: number
const GLIBTOP_MAP_FILENAME_LEN: number
const GLIBTOP_MAP_PERM_EXECUTE: number
const GLIBTOP_MAP_PERM_PRIVATE: number
const GLIBTOP_MAP_PERM_READ: number
const GLIBTOP_MAP_PERM_SHARED: number
const GLIBTOP_MAP_PERM_WRITE: number
const GLIBTOP_MAX_CMND: number
const GLIBTOP_MAX_CPU: number
const GLIBTOP_MAX_DISK: number
const GLIBTOP_MAX_FSUSAGE: number
const GLIBTOP_MAX_GROUPS: number
const GLIBTOP_MAX_LOADAVG: number
const GLIBTOP_MAX_MAP_ENTRY: number
const GLIBTOP_MAX_MEM: number
const GLIBTOP_MAX_MOUNTLIST: number
const GLIBTOP_MAX_MSG_LIMITS: number
const GLIBTOP_MAX_NETLIST: number
const GLIBTOP_MAX_NETLOAD: number
const GLIBTOP_MAX_OPEN_FILE_ENTRY: number
const GLIBTOP_MAX_PPP: number
const GLIBTOP_MAX_PROCLIST: number
const GLIBTOP_MAX_PROC_AFFINITY: number
const GLIBTOP_MAX_PROC_ARGS: number
const GLIBTOP_MAX_PROC_IO: number
const GLIBTOP_MAX_PROC_KERNEL: number
const GLIBTOP_MAX_PROC_MAP: number
const GLIBTOP_MAX_PROC_MEM: number
const GLIBTOP_MAX_PROC_OPEN_FILES: number
const GLIBTOP_MAX_PROC_SEGMENT: number
const GLIBTOP_MAX_PROC_SIGNAL: number
const GLIBTOP_MAX_PROC_STATE: number
const GLIBTOP_MAX_PROC_TIME: number
const GLIBTOP_MAX_PROC_UID: number
const GLIBTOP_MAX_PROC_WD: number
const GLIBTOP_MAX_SEM_LIMITS: number
const GLIBTOP_MAX_SHM_LIMITS: number
const GLIBTOP_MAX_SWAP: number
const GLIBTOP_MAX_SYSDEPS: number
const GLIBTOP_MAX_SYSINFO: number
const GLIBTOP_MAX_UPTIME: number
const GLIBTOP_MEM_BUFFER: number
const GLIBTOP_MEM_CACHED: number
const GLIBTOP_MEM_FREE: number
const GLIBTOP_MEM_LOCKED: number
const GLIBTOP_MEM_SHARED: number
const GLIBTOP_MEM_TOTAL: number
const GLIBTOP_MEM_USED: number
const GLIBTOP_MEM_USER: number
const GLIBTOP_METHOD_DIRECT: number
const GLIBTOP_METHOD_INET: number
const GLIBTOP_METHOD_PIPE: number
const GLIBTOP_METHOD_UNIX: number
const GLIBTOP_MOUNTENTRY_LEN: number
const GLIBTOP_MOUNTLIST_NUMBER: number
const GLIBTOP_MOUNTLIST_SIZE: number
const GLIBTOP_MOUNTLIST_TOTAL: number
const GLIBTOP_NCPU: number
const GLIBTOP_NDISK: number
const GLIBTOP_NETLIST_NUMBER: number
const GLIBTOP_NETLOAD_ADDRESS: number
const GLIBTOP_NETLOAD_ADDRESS6: number
const GLIBTOP_NETLOAD_BYTES_IN: number
const GLIBTOP_NETLOAD_BYTES_OUT: number
const GLIBTOP_NETLOAD_BYTES_TOTAL: number
const GLIBTOP_NETLOAD_COLLISIONS: number
const GLIBTOP_NETLOAD_ERRORS_IN: number
const GLIBTOP_NETLOAD_ERRORS_OUT: number
const GLIBTOP_NETLOAD_ERRORS_TOTAL: number
const GLIBTOP_NETLOAD_HWADDRESS: number
const GLIBTOP_NETLOAD_IF_FLAGS: number
const GLIBTOP_NETLOAD_MTU: number
const GLIBTOP_NETLOAD_PACKETS_IN: number
const GLIBTOP_NETLOAD_PACKETS_OUT: number
const GLIBTOP_NETLOAD_PACKETS_TOTAL: number
const GLIBTOP_NETLOAD_PREFIX6: number
const GLIBTOP_NETLOAD_SCOPE6: number
const GLIBTOP_NETLOAD_SUBNET: number
const GLIBTOP_OPEN_DEST_HOST_LEN: number
const GLIBTOP_OPEN_FILENAME_LEN: number
const GLIBTOP_PARAM_COMMAND: number
const GLIBTOP_PARAM_ERROR_METHOD: number
const GLIBTOP_PARAM_FEATURES: number
const GLIBTOP_PARAM_HOST: number
const GLIBTOP_PARAM_METHOD: number
const GLIBTOP_PARAM_PORT: number
const GLIBTOP_PARAM_REQUIRED: number
const GLIBTOP_PPP_BYTES_IN: number
const GLIBTOP_PPP_BYTES_OUT: number
const GLIBTOP_PPP_STATE: number
const GLIBTOP_PROCESS_DEAD: number
const GLIBTOP_PROCESS_INTERRUPTIBLE: number
const GLIBTOP_PROCESS_RUNNING: number
const GLIBTOP_PROCESS_STOPPED: number
const GLIBTOP_PROCESS_SWAPPING: number
const GLIBTOP_PROCESS_UNINTERRUPTIBLE: number
const GLIBTOP_PROCESS_ZOMBIE: number
const GLIBTOP_PROCLIST_NUMBER: number
const GLIBTOP_PROCLIST_SIZE: number
const GLIBTOP_PROCLIST_TOTAL: number
const GLIBTOP_PROC_AFFINITY_ALL: number
const GLIBTOP_PROC_AFFINITY_NUMBER: number
const GLIBTOP_PROC_ARGS_SIZE: number
const GLIBTOP_PROC_IO_DISK_RBYTES: number
const GLIBTOP_PROC_IO_DISK_RCHAR: number
const GLIBTOP_PROC_IO_DISK_WBYTES: number
const GLIBTOP_PROC_IO_DISK_WCHAR: number
const GLIBTOP_PROC_KERNEL_CMAJ_FLT: number
const GLIBTOP_PROC_KERNEL_CMIN_FLT: number
const GLIBTOP_PROC_KERNEL_KSTK_EIP: number
const GLIBTOP_PROC_KERNEL_KSTK_ESP: number
const GLIBTOP_PROC_KERNEL_K_FLAGS: number
const GLIBTOP_PROC_KERNEL_MAJ_FLT: number
const GLIBTOP_PROC_KERNEL_MIN_FLT: number
const GLIBTOP_PROC_KERNEL_NWCHAN: number
const GLIBTOP_PROC_KERNEL_WCHAN: number
const GLIBTOP_PROC_MAP_NUMBER: number
const GLIBTOP_PROC_MAP_SIZE: number
const GLIBTOP_PROC_MAP_TOTAL: number
const GLIBTOP_PROC_MEM_RESIDENT: number
const GLIBTOP_PROC_MEM_RSS: number
const GLIBTOP_PROC_MEM_RSS_RLIM: number
const GLIBTOP_PROC_MEM_SHARE: number
const GLIBTOP_PROC_MEM_SIZE: number
const GLIBTOP_PROC_MEM_VSIZE: number
const GLIBTOP_PROC_OPEN_FILES_NUMBER: number
const GLIBTOP_PROC_OPEN_FILES_SIZE: number
const GLIBTOP_PROC_OPEN_FILES_TOTAL: number
const GLIBTOP_PROC_SEGMENT_DATA_RSS: number
const GLIBTOP_PROC_SEGMENT_DIRTY_SIZE: number
const GLIBTOP_PROC_SEGMENT_END_CODE: number
const GLIBTOP_PROC_SEGMENT_SHLIB_RSS: number
const GLIBTOP_PROC_SEGMENT_STACK_RSS: number
const GLIBTOP_PROC_SEGMENT_START_CODE: number
const GLIBTOP_PROC_SEGMENT_START_STACK: number
const GLIBTOP_PROC_SEGMENT_TEXT_RSS: number
const GLIBTOP_PROC_SIGNAL_BLOCKED: number
const GLIBTOP_PROC_SIGNAL_SIGCATCH: number
const GLIBTOP_PROC_SIGNAL_SIGIGNORE: number
const GLIBTOP_PROC_SIGNAL_SIGNAL: number
const GLIBTOP_PROC_STATE_CMD: number
const GLIBTOP_PROC_STATE_GID: number
const GLIBTOP_PROC_STATE_HAS_CPU: number
const GLIBTOP_PROC_STATE_LAST_PROCESSOR: number
const GLIBTOP_PROC_STATE_PROCESSOR: number
const GLIBTOP_PROC_STATE_RGID: number
const GLIBTOP_PROC_STATE_RUID: number
const GLIBTOP_PROC_STATE_STATE: number
const GLIBTOP_PROC_STATE_UID: number
const GLIBTOP_PROC_TIME_CSTIME: number
const GLIBTOP_PROC_TIME_CUTIME: number
const GLIBTOP_PROC_TIME_FREQUENCY: number
const GLIBTOP_PROC_TIME_IT_REAL_VALUE: number
const GLIBTOP_PROC_TIME_RTIME: number
const GLIBTOP_PROC_TIME_START_TIME: number
const GLIBTOP_PROC_TIME_STIME: number
const GLIBTOP_PROC_TIME_TIMEOUT: number
const GLIBTOP_PROC_TIME_UTIME: number
const GLIBTOP_PROC_TIME_XCPU_STIME: number
const GLIBTOP_PROC_TIME_XCPU_UTIME: number
const GLIBTOP_PROC_UID_EGID: number
const GLIBTOP_PROC_UID_EUID: number
const GLIBTOP_PROC_UID_FSGID: number
const GLIBTOP_PROC_UID_FSUID: number
const GLIBTOP_PROC_UID_GID: number
const GLIBTOP_PROC_UID_GROUPS: number
const GLIBTOP_PROC_UID_NGROUPS: number
const GLIBTOP_PROC_UID_NICE: number
const GLIBTOP_PROC_UID_PGRP: number
const GLIBTOP_PROC_UID_PID: number
const GLIBTOP_PROC_UID_PPID: number
const GLIBTOP_PROC_UID_PRIORITY: number
const GLIBTOP_PROC_UID_SESSION: number
const GLIBTOP_PROC_UID_SGID: number
const GLIBTOP_PROC_UID_SUID: number
const GLIBTOP_PROC_UID_TPGID: number
const GLIBTOP_PROC_UID_TTY: number
const GLIBTOP_PROC_UID_UID: number
const GLIBTOP_PROC_WD_EXE: number
const GLIBTOP_PROC_WD_EXE_LEN: number
const GLIBTOP_PROC_WD_NUMBER: number
const GLIBTOP_PROC_WD_ROOT: number
const GLIBTOP_PROC_WD_ROOT_LEN: number
const GLIBTOP_SWAP_FREE: number
const GLIBTOP_SWAP_PAGEIN: number
const GLIBTOP_SWAP_PAGEOUT: number
const GLIBTOP_SWAP_TOTAL: number
const GLIBTOP_SWAP_USED: number
const GLIBTOP_SYSDEPS_ALL: number
const GLIBTOP_SYSDEPS_CPU: number
const GLIBTOP_SYSDEPS_DISK: number
const GLIBTOP_SYSDEPS_FEATURES: number
const GLIBTOP_SYSDEPS_FSUSAGE: number
const GLIBTOP_SYSDEPS_LOADAVG: number
const GLIBTOP_SYSDEPS_MEM: number
const GLIBTOP_SYSDEPS_MOUNTLIST: number
const GLIBTOP_SYSDEPS_MSG_LIMITS: number
const GLIBTOP_SYSDEPS_NETLIST: number
const GLIBTOP_SYSDEPS_NETLOAD: number
const GLIBTOP_SYSDEPS_PPP: number
const GLIBTOP_SYSDEPS_PROCLIST: number
const GLIBTOP_SYSDEPS_PROC_AFFINITY: number
const GLIBTOP_SYSDEPS_PROC_ARGS: number
const GLIBTOP_SYSDEPS_PROC_IO: number
const GLIBTOP_SYSDEPS_PROC_KERNEL: number
const GLIBTOP_SYSDEPS_PROC_MAP: number
const GLIBTOP_SYSDEPS_PROC_MEM: number
const GLIBTOP_SYSDEPS_PROC_OPEN_FILES: number
const GLIBTOP_SYSDEPS_PROC_SEGMENT: number
const GLIBTOP_SYSDEPS_PROC_SIGNAL: number
const GLIBTOP_SYSDEPS_PROC_STATE: number
const GLIBTOP_SYSDEPS_PROC_TIME: number
const GLIBTOP_SYSDEPS_PROC_UID: number
const GLIBTOP_SYSDEPS_PROC_WD: number
const GLIBTOP_SYSDEPS_SEM_LIMITS: number
const GLIBTOP_SYSDEPS_SHM_LIMITS: number
const GLIBTOP_SYSDEPS_SWAP: number
const GLIBTOP_SYSDEPS_UPTIME: number
const GLIBTOP_SYSINFO_CPUINFO: number
const GLIBTOP_SYSINFO_NCPU: number
const GLIBTOP_UPTIME_BOOT_TIME: number
const GLIBTOP_UPTIME_IDLETIME: number
const GLIBTOP_UPTIME_UPTIME: number
const GLIBTOP_XCPU_FLAGS: number
const GLIBTOP_XCPU_IDLE: number
const GLIBTOP_XCPU_IOWAIT: number
const GLIBTOP_XCPU_IRQ: number
const GLIBTOP_XCPU_NICE: number
const GLIBTOP_XCPU_SOFTIRQ: number
const GLIBTOP_XCPU_SYS: number
const GLIBTOP_XCPU_TOTAL: number
const GLIBTOP_XCPU_USER: number
const GLIBTOP_XDISK_SECTORS_READ: number
const GLIBTOP_XDISK_SECTORS_WRITE: number
const GLIBTOP_XDISK_TIME_READ: number
const GLIBTOP_XDISK_TIME_WRITE: number
const HOSTNAMSZ: number
const LIBGTOP_MAJOR_VERSION: number
const LIBGTOP_MICRO_VERSION: number
const LIBGTOP_MINOR_VERSION: number
const MCOOKIE_NAME: string
const MCOOKIE_SCREEN: string
const MCOOKIE_X_NAME: string
const PATCHLEVEL: number
const REPLYSIZ: number
const TABLE_SIZE: number
const TRUE: number
function glibtopClose(): void
function glibtopGetCpu(buf: glibtop_cpu): void
function glibtopGetDisk(buf: glibtop_disk): void
function glibtopGetFsusage(buf: glibtop_fsusage, mountDir: string): void
function glibtopGetLoadavg(buf: glibtop_loadavg): void
function glibtopGetMem(buf: glibtop_mem): void
function glibtopGetMountlist(buf: glibtop_mountlist, allFs: number): glibtop_mountentry[]
function glibtopGetMsgLimits(buf: glibtop_msg_limits): void
function glibtopGetNetlist(buf: glibtop_netlist): string[]
function glibtopGetNetload(buf: glibtop_netload, interface: string): void
function glibtopGetPpp(buf: glibtop_ppp, device: number): void
function glibtopGetProcAffinity(buf: glibtop_proc_affinity, pid: number): number
function glibtopGetProcArgs(buf: glibtop_proc_args, pid: number, maxLen: number): string
function glibtopGetProcArgv(buf: glibtop_proc_args, pid: number, maxLen: number): string[]
function glibtopGetProcIo(buf: glibtop_proc_io, pid: number): void
function glibtopGetProcKernel(buf: glibtop_proc_kernel, pid: number): void
function glibtopGetProcMap(buf: glibtop_proc_map, pid: number): glibtop_map_entry[]
function glibtopGetProcMem(buf: glibtop_proc_mem, pid: number): void
function glibtopGetProcOpenFiles(buf: glibtop_proc_open_files, pid: number): glibtop_open_files_entry[]
function glibtopGetProcSegment(buf: glibtop_proc_segment, pid: number): void
function glibtopGetProcSignal(buf: glibtop_proc_signal, pid: number): void
function glibtopGetProcState(buf: glibtop_proc_state, pid: number): void
function glibtopGetProcTime(buf: glibtop_proc_time, pid: number): void
function glibtopGetProcUid(buf: glibtop_proc_uid, pid: number): void
function glibtopGetProcWd(buf: glibtop_proc_wd, pid: number): string[]
function glibtopGetProclist(buf: glibtop_proclist, which: number, arg: number): number[]
function glibtopGetSemLimits(buf: glibtop_sem_limits): void
function glibtopGetShmLimits(buf: glibtop_shm_limits): void
function glibtopGetSwap(buf: glibtop_swap): void
function glibtopGetSysdeps(buf: glibtop_sysdeps): void
function glibtopGetSysinfo(): glibtop_sysinfo
function glibtopGetUptime(buf: glibtop_uptime): void
function glibtopInit(): glibtop
function glibtopInitR(features: number, flags: number): [ /* returnType */ glibtop, /* serverPtr */ glibtop ]
function glibtopInternetAddr(host: string): number
function glibtopMakeConnection(hostarg: string, portarg: number, s: number): number
class glibtop {
    /* Fields of GTop-2.0.GTop.glibtop */
    readonly flags: number
    readonly method: number
    readonly errorMethod: number
    readonly input: number[]
    readonly output: number[]
    readonly socket: number
    readonly ncpu: number
    readonly realNcpu: number
    readonly osVersionCode: number
    readonly name: string
    readonly serverCommand: string
    readonly serverHost: string
    readonly serverUser: string
    readonly serverRsh: string
    readonly features: number
    readonly serverPort: number
    readonly sysdeps: glibtop_sysdeps
    readonly required: glibtop_sysdeps
    readonly pid: number
    readonly uid: number
    readonly euid: number
    readonly gid: number
    readonly egid: number
    readonly machine: glibtop_machine
    readonly ndisk: number
    readonly realNdisk: number
    /* Methods of GTop-2.0.GTop.glibtop */
    callL(command: number, sendSize: number, sendBuf: object | null, recvSize: number, recvBuf?: object | null): object | null
    callS(command: number, sendSize: number, sendBuf: object | null, recvSize: number, recvBuf?: object | null): object | null
    closeP(): void
    closeR(): void
    closeS(): void
    getCpuL(buf: glibtop_cpu): void
    getCpuS(buf: glibtop_cpu): void
    getDiskL(buf: glibtop_disk): void
    getDiskS(buf: glibtop_disk): void
    getFsusageL(buf: glibtop_fsusage, mountDir: string): void
    getFsusageS(buf: glibtop_fsusage, mountDir: string): void
    getLoadavgL(buf: glibtop_loadavg): void
    getLoadavgS(buf: glibtop_loadavg): void
    getMemL(buf: glibtop_mem): void
    getMemS(buf: glibtop_mem): void
    getMountlistL(allFs: number): [ /* returnType */ glibtop_mountentry[], /* buf */ glibtop_mountlist ]
    getMountlistS(allFs: number): [ /* returnType */ glibtop_mountentry[], /* buf */ glibtop_mountlist ]
    getMsgLimitsL(buf: glibtop_msg_limits): void
    getMsgLimitsS(buf: glibtop_msg_limits): void
    getNetlistL(buf: glibtop_netlist): string[]
    getNetlistS(buf: glibtop_netlist): string[]
    getNetloadL(buf: glibtop_netload, interface: string): void
    getNetloadS(buf: glibtop_netload, interface: string): void
    getParameterL(parameter: number, dataPtr: object | null, dataSize: number): number
    getPppL(buf: glibtop_ppp, device: number): void
    getPppS(buf: glibtop_ppp, device: number): void
    getProcAffinityL(buf: glibtop_proc_affinity, pid: number): number
    getProcAffinityS(buf: glibtop_proc_affinity, pid: number): number
    getProcArgsL(buf: glibtop_proc_args, pid: number, maxLen: number): string
    getProcArgsS(buf: glibtop_proc_args, pid: number, maxLen: number): string
    getProcIoL(buf: glibtop_proc_io, pid: number): void
    getProcIoS(buf: glibtop_proc_io, pid: number): void
    getProcKernelL(buf: glibtop_proc_kernel, pid: number): void
    getProcKernelS(buf: glibtop_proc_kernel, pid: number): void
    getProcMapL(pid: number): [ /* returnType */ glibtop_map_entry[], /* buf */ glibtop_proc_map ]
    getProcMapS(pid: number): [ /* returnType */ glibtop_map_entry[], /* buf */ glibtop_proc_map ]
    getProcMemL(buf: glibtop_proc_mem, pid: number): void
    getProcMemS(buf: glibtop_proc_mem, pid: number): void
    getProcOpenFilesL(pid: number): [ /* returnType */ glibtop_open_files_entry[], /* buf */ glibtop_proc_open_files ]
    getProcOpenFilesS(buf: glibtop_proc_open_files, pid: number): glibtop_open_files_entry
    getProcSegmentL(buf: glibtop_proc_segment, pid: number): void
    getProcSegmentS(buf: glibtop_proc_segment, pid: number): void
    getProcSignalL(buf: glibtop_proc_signal, pid: number): void
    getProcSignalS(buf: glibtop_proc_signal, pid: number): void
    getProcStateL(buf: glibtop_proc_state, pid: number): void
    getProcStateS(buf: glibtop_proc_state, pid: number): void
    getProcTimeL(buf: glibtop_proc_time, pid: number): void
    getProcTimeS(buf: glibtop_proc_time, pid: number): void
    getProcUidL(buf: glibtop_proc_uid, pid: number): void
    getProcUidS(buf: glibtop_proc_uid, pid: number): void
    getProclistL(buf: glibtop_proclist, which: number, arg: number): number[]
    getProclistS(buf: glibtop_proclist, which: number, arg: number): number[]
    getSemLimitsL(buf: glibtop_sem_limits): void
    getSemLimitsS(buf: glibtop_sem_limits): void
    getShmLimitsL(buf: glibtop_shm_limits): void
    getShmLimitsS(buf: glibtop_shm_limits): void
    getSwapL(buf: glibtop_swap): void
    getSwapS(buf: glibtop_swap): void
    getSysdepsR(buf: glibtop_sysdeps): void
    getSysinfoS(): glibtop_sysinfo
    getUptimeL(buf: glibtop_uptime): void
    getUptimeS(buf: glibtop_uptime): void
    initP(features: number, flags: number): void
    openL(programName: string, features: number, flags: number): void
    openP(programName: string, features: number, flags: number): void
    openS(programName: string, features: number, flags: number): void
    setParameterL(parameter: number, dataPtr: object | null, dataSize: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static close(): void
    static getCpu(buf: glibtop_cpu): void
    static getDisk(buf: glibtop_disk): void
    static getFsusage(buf: glibtop_fsusage, mountDir: string): void
    static getLoadavg(buf: glibtop_loadavg): void
    static getMem(buf: glibtop_mem): void
    static getMountlist(buf: glibtop_mountlist, allFs: number): glibtop_mountentry[]
    static getMsgLimits(buf: glibtop_msg_limits): void
    static getNetlist(buf: glibtop_netlist): string[]
    static getNetload(buf: glibtop_netload, interface: string): void
    static getPpp(buf: glibtop_ppp, device: number): void
    static getProcAffinity(buf: glibtop_proc_affinity, pid: number): number
    static getProcArgs(buf: glibtop_proc_args, pid: number, maxLen: number): string
    static getProcArgv(buf: glibtop_proc_args, pid: number, maxLen: number): string[]
    static getProcIo(buf: glibtop_proc_io, pid: number): void
    static getProcKernel(buf: glibtop_proc_kernel, pid: number): void
    static getProcMap(buf: glibtop_proc_map, pid: number): glibtop_map_entry[]
    static getProcMem(buf: glibtop_proc_mem, pid: number): void
    static getProcOpenFiles(buf: glibtop_proc_open_files, pid: number): glibtop_open_files_entry[]
    static getProcSegment(buf: glibtop_proc_segment, pid: number): void
    static getProcSignal(buf: glibtop_proc_signal, pid: number): void
    static getProcState(buf: glibtop_proc_state, pid: number): void
    static getProcTime(buf: glibtop_proc_time, pid: number): void
    static getProcUid(buf: glibtop_proc_uid, pid: number): void
    static getProcWd(buf: glibtop_proc_wd, pid: number): string[]
    static getProclist(buf: glibtop_proclist, which: number, arg: number): number[]
    static getSemLimits(buf: glibtop_sem_limits): void
    static getShmLimits(buf: glibtop_shm_limits): void
    static getSwap(buf: glibtop_swap): void
    static getSysdeps(buf: glibtop_sysdeps): void
    static getSysinfo(): glibtop_sysinfo
    static getUptime(buf: glibtop_uptime): void
    static init(): glibtop
    static initR(features: number, flags: number): [ /* returnType */ glibtop, /* serverPtr */ glibtop ]
    static internetAddr(host: string): number
    static makeConnection(hostarg: string, portarg: number, s: number): number
}
class glibtop_command {
    /* Fields of GTop-2.0.GTop.glibtop_command */
    readonly command: number
    readonly size: number
    readonly dataSize: number
    readonly parameter: number[]
    static name: string
}
class glibtop_cpu {
    /* Fields of GTop-2.0.GTop.glibtop_cpu */
    readonly flags: number
    readonly total: number
    readonly user: number
    readonly nice: number
    readonly sys: number
    readonly idle: number
    readonly iowait: number
    readonly irq: number
    readonly softirq: number
    readonly frequency: number
    readonly xcpuTotal: number[]
    readonly xcpuUser: number[]
    readonly xcpuNice: number[]
    readonly xcpuSys: number[]
    readonly xcpuIdle: number[]
    readonly xcpuIowait: number[]
    readonly xcpuIrq: number[]
    readonly xcpuSoftirq: number[]
    readonly xcpuFlags: number
    static name: string
}
class glibtop_disk {
    /* Fields of GTop-2.0.GTop.glibtop_disk */
    readonly flags: number
    readonly xdiskSectorsRead: number[]
    readonly xdiskTimeRead: number[]
    readonly xdiskSectorsWrite: number[]
    readonly xdiskTimeWrite: number[]
    readonly xdiskFlags: number
    static name: string
}
class glibtop_entry {
    /* Fields of GTop-2.0.GTop.glibtop_entry */
    readonly labels: object[]
    readonly values: GLib.HashTable
    readonly descriptions: GLib.HashTable
    static name: string
}
class glibtop_fsusage {
    /* Fields of GTop-2.0.GTop.glibtop_fsusage */
    readonly flags: number
    readonly blocks: number
    readonly bfree: number
    readonly bavail: number
    readonly files: number
    readonly ffree: number
    readonly blockSize: number
    readonly read: number
    readonly write: number
    static name: string
}
class glibtop_loadavg {
    /* Fields of GTop-2.0.GTop.glibtop_loadavg */
    readonly flags: number
    readonly loadavg: number[]
    readonly nrRunning: number
    readonly nrTasks: number
    readonly lastPid: number
    static name: string
}
class glibtop_machine {
    static name: string
}
class glibtop_map_entry {
    /* Fields of GTop-2.0.GTop.glibtop_map_entry */
    readonly flags: number
    readonly start: number
    readonly end: number
    readonly offset: number
    readonly perm: number
    readonly inode: number
    readonly device: number
    readonly size: number
    readonly rss: number
    readonly sharedClean: number
    readonly sharedDirty: number
    readonly privateClean: number
    readonly privateDirty: number
    readonly pss: number
    readonly swap: number
    readonly filename: number[]
    static name: string
}
class glibtop_mem {
    /* Fields of GTop-2.0.GTop.glibtop_mem */
    readonly flags: number
    readonly total: number
    readonly used: number
    readonly free: number
    readonly shared: number
    readonly buffer: number
    readonly cached: number
    readonly user: number
    readonly locked: number
    static name: string
}
class glibtop_mountentry {
    /* Fields of GTop-2.0.GTop.glibtop_mountentry */
    readonly dev: number
    readonly devname: number[]
    readonly mountdir: number[]
    readonly type: number[]
    static name: string
}
class glibtop_mountlist {
    /* Fields of GTop-2.0.GTop.glibtop_mountlist */
    readonly flags: number
    readonly number: number
    readonly total: number
    readonly size: number
    static name: string
}
class glibtop_msg_limits {
    /* Fields of GTop-2.0.GTop.glibtop_msg_limits */
    readonly flags: number
    readonly msgpool: number
    readonly msgmap: number
    readonly msgmax: number
    readonly msgmnb: number
    readonly msgmni: number
    readonly msgssz: number
    readonly msgtql: number
    static name: string
}
class glibtop_netlist {
    /* Fields of GTop-2.0.GTop.glibtop_netlist */
    readonly flags: number
    /**
     * Number of entries in the returned list.
     */
    readonly number: number
    static name: string
}
class glibtop_netload {
    /* Fields of GTop-2.0.GTop.glibtop_netload */
    readonly flags: number
    readonly ifFlags: number
    readonly mtu: number
    readonly subnet: number
    readonly address: number
    readonly packetsIn: number
    readonly packetsOut: number
    readonly packetsTotal: number
    readonly bytesIn: number
    readonly bytesOut: number
    readonly bytesTotal: number
    readonly errorsIn: number
    readonly errorsOut: number
    readonly errorsTotal: number
    readonly collisions: number
    readonly address6: Uint8Array
    readonly prefix6: Uint8Array
    readonly scope6: number
    readonly hwaddress: Uint8Array
    static name: string
}
class glibtop_open_files_entry {
    /* Fields of GTop-2.0.GTop.glibtop_open_files_entry */
    readonly fd: number
    readonly type: number
    static name: string
}
class glibtop_ppp {
    /* Fields of GTop-2.0.GTop.glibtop_ppp */
    readonly flags: number
    readonly state: number
    readonly bytesIn: number
    readonly bytesOut: number
    static name: string
}
class glibtop_proc_affinity {
    /* Fields of GTop-2.0.GTop.glibtop_proc_affinity */
    readonly flags: number
    readonly number: number
    readonly all: boolean
    static name: string
}
class glibtop_proc_args {
    /* Fields of GTop-2.0.GTop.glibtop_proc_args */
    readonly flags: number
    readonly size: number
    static name: string
}
class glibtop_proc_io {
    /* Fields of GTop-2.0.GTop.glibtop_proc_io */
    readonly flags: number
    /**
     * The number of bytes which this task has caused to be read from storage. This
     * is simply the sum of bytes which this process passed to read() and pread(), also including tty IO,
     * and it is unaffected by whether or not actual physical disk IO was required.
     */
    readonly diskRchar: number
    /**
     * The number of bytes which this task has caused, or shall cause to be written
     * to disk. Similar caveats apply here as with rchar.
     */
    readonly diskWchar: number
    /**
     * Attempt to count the number of bytes which this process really did cause to
     * be fetched from the storage layer. Done at the submit_bio() level, so it is
     * accurate for block-backed filesystems.
     */
    readonly diskRbytes: number
    /**
     * Attempt to count the number of bytes which this process caused to be sent to
     * the storage layer. This is done at page-dirtying time.
     */
    readonly diskWbytes: number
    readonly reserved: number[]
    static name: string
}
class glibtop_proc_kernel {
    /* Fields of GTop-2.0.GTop.glibtop_proc_kernel */
    readonly flags: number
    readonly kFlags: number
    readonly minFlt: number
    readonly majFlt: number
    readonly cminFlt: number
    readonly cmajFlt: number
    readonly kstkEsp: number
    readonly kstkEip: number
    readonly nwchan: number
    readonly wchan: number[]
    static name: string
}
class glibtop_proc_map {
    /* Fields of GTop-2.0.GTop.glibtop_proc_map */
    readonly flags: number
    readonly number: number
    readonly total: number
    readonly size: number
    static name: string
}
class glibtop_proc_mem {
    /* Fields of GTop-2.0.GTop.glibtop_proc_mem */
    readonly flags: number
    readonly size: number
    readonly vsize: number
    readonly resident: number
    readonly share: number
    readonly rss: number
    readonly rssRlim: number
    static name: string
}
class glibtop_proc_open_files {
    /* Fields of GTop-2.0.GTop.glibtop_proc_open_files */
    readonly flags: number
    readonly number: number
    readonly total: number
    readonly size: number
    static name: string
}
class glibtop_proc_segment {
    /* Fields of GTop-2.0.GTop.glibtop_proc_segment */
    readonly flags: number
    readonly textRss: number
    readonly shlibRss: number
    readonly dataRss: number
    readonly stackRss: number
    readonly dirtySize: number
    readonly startCode: number
    readonly endCode: number
    readonly startStack: number
    static name: string
}
class glibtop_proc_signal {
    /* Fields of GTop-2.0.GTop.glibtop_proc_signal */
    readonly flags: number
    readonly signal: number[]
    readonly blocked: number[]
    readonly sigignore: number[]
    readonly sigcatch: number[]
    static name: string
}
class glibtop_proc_state {
    /* Fields of GTop-2.0.GTop.glibtop_proc_state */
    readonly flags: number
    readonly cmd: number[]
    readonly state: number
    readonly uid: number
    readonly gid: number
    readonly ruid: number
    readonly rgid: number
    readonly hasCpu: number
    readonly processor: number
    readonly lastProcessor: number
    static name: string
}
class glibtop_proc_time {
    /* Fields of GTop-2.0.GTop.glibtop_proc_time */
    /**
     * Start time of process in seconds since the epoch.
     */
    readonly startTime: number
    /**
     * Real time accumulated by process (should be `utime` + `stime)`.
     */
    readonly rtime: number
    /**
     * User-mode CPU time accumulated by process.
     */
    readonly utime: number
    /**
     * Kernel-mode CPU time accumulated by process.
     */
    readonly stime: number
    /**
     * Cumulative utime of process and reaped children.
     */
    readonly cutime: number
    /**
     * Cumulative stime of process and reaped children.
     */
    readonly cstime: number
    /**
     * The time (in jiffies) of the process’s next timeout.
     */
    readonly timeout: number
    /**
     * The time (in jiffies) before the next <type>SIGALRM</type>
     * is sent to the process due to an interval timer.
     */
    readonly itRealValue: number
    /**
     * Tick frequency.
     */
    readonly frequency: number
    /**
     * SMP user-mode CPU time accumulated by process.
     */
    readonly xcpuUtime: number[]
    /**
     * SMP kernel-mode CPU time accumulated by process
     */
    readonly xcpuStime: number[]
    static name: string
}
class glibtop_proc_uid {
    /* Fields of GTop-2.0.GTop.glibtop_proc_uid */
    readonly flags: number
    readonly uid: number
    readonly euid: number
    readonly gid: number
    readonly egid: number
    readonly suid: number
    readonly sgid: number
    readonly fsuid: number
    readonly fsgid: number
    readonly pid: number
    readonly ppid: number
    readonly pgrp: number
    readonly session: number
    readonly tty: number
    readonly tpgid: number
    readonly priority: number
    readonly nice: number
    readonly ngroups: number
    readonly groups: number[]
    static name: string
}
class glibtop_proc_wd {
    /* Fields of GTop-2.0.GTop.glibtop_proc_wd */
    readonly flags: number
    readonly number: number
    readonly root: number[]
    readonly exe: number[]
    static name: string
}
class glibtop_proclist {
    /* Fields of GTop-2.0.GTop.glibtop_proclist */
    readonly flags: number
    /**
     * Number of entries in the returned list.
     */
    readonly number: number
    /**
     * Total size of the returned list (this equals `number` * `size)`.
     */
    readonly total: number
    /**
     * Size of a single entry in the returned list
     * (this equals <type>sizeof(unsigned)</type>).
     */
    readonly size: number
    static name: string
}
class glibtop_response {
    /* Fields of GTop-2.0.GTop.glibtop_response */
    readonly offset: number
    readonly size: number
    readonly dataSize: number
    readonly u: glibtop_response_union
    static name: string
}
class glibtop_sem_limits {
    /* Fields of GTop-2.0.GTop.glibtop_sem_limits */
    readonly flags: number
    readonly semmap: number
    readonly semmni: number
    readonly semmns: number
    readonly semmnu: number
    readonly semmsl: number
    readonly semopm: number
    readonly semume: number
    readonly semusz: number
    readonly semvmx: number
    readonly semaem: number
    static name: string
}
class glibtop_shm_limits {
    /* Fields of GTop-2.0.GTop.glibtop_shm_limits */
    readonly flags: number
    readonly shmmax: number
    readonly shmmin: number
    readonly shmmni: number
    readonly shmseg: number
    readonly shmall: number
    static name: string
}
class glibtop_signame {
    /* Fields of GTop-2.0.GTop.glibtop_signame */
    readonly number: number
    readonly name: string
    readonly label: string
    static name: string
}
class glibtop_swap {
    /* Fields of GTop-2.0.GTop.glibtop_swap */
    readonly flags: number
    readonly total: number
    readonly used: number
    readonly free: number
    readonly pagein: number
    readonly pageout: number
    static name: string
}
class glibtop_sysdeps {
    /* Fields of GTop-2.0.GTop.glibtop_sysdeps */
    readonly flags: number
    readonly features: number
    readonly cpu: number
    readonly mem: number
    readonly swap: number
    readonly uptime: number
    readonly loadavg: number
    readonly shmLimits: number
    readonly msgLimits: number
    readonly semLimits: number
    readonly proclist: number
    readonly procState: number
    readonly procUid: number
    readonly procMem: number
    readonly procTime: number
    readonly procSignal: number
    readonly procKernel: number
    readonly procSegment: number
    readonly procArgs: number
    readonly procMap: number
    readonly procOpenFiles: number
    readonly mountlist: number
    readonly fsusage: number
    readonly netlist: number
    readonly netload: number
    readonly ppp: number
    readonly procWd: number
    readonly procAffinity: number
    readonly procIo: number
    readonly disk: number
    readonly reserved1: number
    readonly reserved2: number
    readonly reserved3: number
    readonly reserved4: number
    readonly reserved5: number
    readonly reserved6: number
    readonly reserved7: number
    static name: string
}
class glibtop_sysinfo {
    /* Fields of GTop-2.0.GTop.glibtop_sysinfo */
    readonly flags: number
    readonly ncpu: number
    readonly cpuinfo: glibtop_entry[]
    static name: string
}
class glibtop_uptime {
    /* Fields of GTop-2.0.GTop.glibtop_uptime */
    readonly flags: number
    readonly uptime: number
    readonly idletime: number
    readonly bootTime: number
    static name: string
}
class partition_info {
    /* Fields of GTop-2.0.GTop.partition_info */
    readonly name: number[]
    readonly type: number[]
    readonly raidNum: number[]
    readonly max: number
    static name: string
}
class glibtop_response_union {
    static name: string
}
class glibtop_union {
    static name: string
}
}
export default GTop;