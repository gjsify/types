
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gtop-2.0-import.d.ts';
    
/**
 * GTop-2.0
 */

import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export const AUTH_NAMESZ: number
export const AUTH_TIMEOUT: number
export const CONN_INTERNET: number
export const CONN_IPC: number
export const CONN_UNIX: number
export const DEFAULT_PORT: number
export const DEFAUTH_NAME: string
export const EOT_CHR: number
export const EOT_STR: string
export const FALSE: number
export const GLIBTOP_CMND_CPU: number
export const GLIBTOP_CMND_DISK: number
export const GLIBTOP_CMND_FSUSAGE: number
export const GLIBTOP_CMND_LOADAVG: number
export const GLIBTOP_CMND_MEM: number
export const GLIBTOP_CMND_MOUNTLIST: number
export const GLIBTOP_CMND_MSG_LIMITS: number
export const GLIBTOP_CMND_NETLIST: number
export const GLIBTOP_CMND_NETLOAD: number
export const GLIBTOP_CMND_PPP: number
export const GLIBTOP_CMND_PROCLIST: number
export const GLIBTOP_CMND_PROC_AFFINITY: number
export const GLIBTOP_CMND_PROC_ARGS: number
export const GLIBTOP_CMND_PROC_IO: number
export const GLIBTOP_CMND_PROC_KERNEL: number
export const GLIBTOP_CMND_PROC_MAP: number
export const GLIBTOP_CMND_PROC_MEM: number
export const GLIBTOP_CMND_PROC_OPEN_FILES: number
export const GLIBTOP_CMND_PROC_SEGMENT: number
export const GLIBTOP_CMND_PROC_SIGNAL: number
export const GLIBTOP_CMND_PROC_STATE: number
export const GLIBTOP_CMND_PROC_TIME: number
export const GLIBTOP_CMND_PROC_UID: number
export const GLIBTOP_CMND_PROC_WD: number
export const GLIBTOP_CMND_QUIT: number
export const GLIBTOP_CMND_SEM_LIMITS: number
export const GLIBTOP_CMND_SHM_LIMITS: number
export const GLIBTOP_CMND_SWAP: number
export const GLIBTOP_CMND_SYSDEPS: number
export const GLIBTOP_CMND_UPTIME: number
export const GLIBTOP_CPU_FREQUENCY: number
export const GLIBTOP_CPU_IDLE: number
export const GLIBTOP_CPU_IOWAIT: number
export const GLIBTOP_CPU_IRQ: number
export const GLIBTOP_CPU_NICE: number
export const GLIBTOP_CPU_SOFTIRQ: number
export const GLIBTOP_CPU_SYS: number
export const GLIBTOP_CPU_TOTAL: number
export const GLIBTOP_CPU_USER: number
export const GLIBTOP_ERROR_METHOD_ABORT: number
export const GLIBTOP_ERROR_METHOD_IGNORE: number
export const GLIBTOP_ERROR_METHOD_WARN: number
export const GLIBTOP_ERROR_METHOD_WARN_ONCE: number
/**
 * Exclude idle processes.
 */
export const GLIBTOP_EXCLUDE_IDLE: number
/**
 * Exclude processes without a controlling terminal.
 */
export const GLIBTOP_EXCLUDE_NOTTY: number
/**
 * Exclude system (on most UNIXes root's) processes.
 */
export const GLIBTOP_EXCLUDE_SYSTEM: number
export const GLIBTOP_FEATURES_EXCEPT: number
export const GLIBTOP_FEATURES_NO_SERVER: number
export const GLIBTOP_FILE_ENTRY_FD: number
export const GLIBTOP_FILE_ENTRY_INETSOCKET_DST_HOST: number
export const GLIBTOP_FILE_ENTRY_INETSOCKET_DST_PORT: number
export const GLIBTOP_FILE_ENTRY_NAME: number
export const GLIBTOP_FILE_ENTRY_TYPE: number
export const GLIBTOP_FSUSAGE_BAVAIL: number
export const GLIBTOP_FSUSAGE_BFREE: number
export const GLIBTOP_FSUSAGE_BLOCKS: number
export const GLIBTOP_FSUSAGE_BLOCK_SIZE: number
export const GLIBTOP_FSUSAGE_FFREE: number
export const GLIBTOP_FSUSAGE_FILES: number
export const GLIBTOP_FSUSAGE_READ: number
export const GLIBTOP_FSUSAGE_WRITE: number
export const GLIBTOP_INIT_NO_INIT: number
export const GLIBTOP_INIT_NO_OPEN: number
export const GLIBTOP_IPC_MSGMAP: number
export const GLIBTOP_IPC_MSGMAX: number
export const GLIBTOP_IPC_MSGMNB: number
export const GLIBTOP_IPC_MSGMNI: number
export const GLIBTOP_IPC_MSGPOOL: number
export const GLIBTOP_IPC_MSGSSZ: number
export const GLIBTOP_IPC_MSGTQL: number
export const GLIBTOP_IPC_SEMAEM: number
export const GLIBTOP_IPC_SEMMAP: number
export const GLIBTOP_IPC_SEMMNI: number
export const GLIBTOP_IPC_SEMMNS: number
export const GLIBTOP_IPC_SEMMNU: number
export const GLIBTOP_IPC_SEMMSL: number
export const GLIBTOP_IPC_SEMOPM: number
export const GLIBTOP_IPC_SEMUME: number
export const GLIBTOP_IPC_SEMUSZ: number
export const GLIBTOP_IPC_SEMVMX: number
export const GLIBTOP_IPC_SHMALL: number
export const GLIBTOP_IPC_SHMMAX: number
export const GLIBTOP_IPC_SHMMIN: number
export const GLIBTOP_IPC_SHMMNI: number
export const GLIBTOP_IPC_SHMSEG: number
/**
 * Return information about all processes
 */
export const GLIBTOP_KERN_PROC_ALL: number
export const GLIBTOP_KERN_PROC_MASK: number
/**
 * Return all processes in the process group passed in `arg`.
 */
export const GLIBTOP_KERN_PROC_PGRP: number
/**
 * Return all processes with the pid which is passed in `arg`. You can use this to find out whether some process still exists.
 */
export const GLIBTOP_KERN_PROC_PID: number
/**
 * Return all processes with the real uid passed in `arg`.
 */
export const GLIBTOP_KERN_PROC_RUID: number
/**
 * Return all processes in the session passed in `arg`.
 */
export const GLIBTOP_KERN_PROC_SESSION: number
/**
 * Return all processes which have the controlling tty passed in `arg`
 * (which is interpreted as the device number).
 */
export const GLIBTOP_KERN_PROC_TTY: number
/**
 * Return all processes with the effective uid passed in `arg`.
 */
export const GLIBTOP_KERN_PROC_UID: number
export const GLIBTOP_LOADAVG_LAST_PID: number
export const GLIBTOP_LOADAVG_LOADAVG: number
export const GLIBTOP_LOADAVG_NR_RUNNING: number
export const GLIBTOP_LOADAVG_NR_TASKS: number
export const GLIBTOP_MAP_ENTRY_DEVICE: number
export const GLIBTOP_MAP_ENTRY_END: number
export const GLIBTOP_MAP_ENTRY_FILENAME: number
export const GLIBTOP_MAP_ENTRY_INODE: number
export const GLIBTOP_MAP_ENTRY_OFFSET: number
export const GLIBTOP_MAP_ENTRY_PERM: number
export const GLIBTOP_MAP_ENTRY_PRIVATE_CLEAN: number
export const GLIBTOP_MAP_ENTRY_PRIVATE_DIRTY: number
export const GLIBTOP_MAP_ENTRY_PSS: number
export const GLIBTOP_MAP_ENTRY_RSS: number
export const GLIBTOP_MAP_ENTRY_SHARED_CLEAN: number
export const GLIBTOP_MAP_ENTRY_SHARED_DIRTY: number
export const GLIBTOP_MAP_ENTRY_SIZE: number
export const GLIBTOP_MAP_ENTRY_START: number
export const GLIBTOP_MAP_ENTRY_SWAP: number
export const GLIBTOP_MAP_FILENAME_LEN: number
export const GLIBTOP_MAP_PERM_EXECUTE: number
export const GLIBTOP_MAP_PERM_PRIVATE: number
export const GLIBTOP_MAP_PERM_READ: number
export const GLIBTOP_MAP_PERM_SHARED: number
export const GLIBTOP_MAP_PERM_WRITE: number
export const GLIBTOP_MAX_CMND: number
export const GLIBTOP_MAX_CPU: number
export const GLIBTOP_MAX_DISK: number
export const GLIBTOP_MAX_FSUSAGE: number
export const GLIBTOP_MAX_GROUPS: number
export const GLIBTOP_MAX_LOADAVG: number
export const GLIBTOP_MAX_MAP_ENTRY: number
export const GLIBTOP_MAX_MEM: number
export const GLIBTOP_MAX_MOUNTLIST: number
export const GLIBTOP_MAX_MSG_LIMITS: number
export const GLIBTOP_MAX_NETLIST: number
export const GLIBTOP_MAX_NETLOAD: number
export const GLIBTOP_MAX_OPEN_FILE_ENTRY: number
export const GLIBTOP_MAX_PPP: number
export const GLIBTOP_MAX_PROCLIST: number
export const GLIBTOP_MAX_PROC_AFFINITY: number
export const GLIBTOP_MAX_PROC_ARGS: number
export const GLIBTOP_MAX_PROC_IO: number
export const GLIBTOP_MAX_PROC_KERNEL: number
export const GLIBTOP_MAX_PROC_MAP: number
export const GLIBTOP_MAX_PROC_MEM: number
export const GLIBTOP_MAX_PROC_OPEN_FILES: number
export const GLIBTOP_MAX_PROC_SEGMENT: number
export const GLIBTOP_MAX_PROC_SIGNAL: number
export const GLIBTOP_MAX_PROC_STATE: number
export const GLIBTOP_MAX_PROC_TIME: number
export const GLIBTOP_MAX_PROC_UID: number
export const GLIBTOP_MAX_PROC_WD: number
export const GLIBTOP_MAX_SEM_LIMITS: number
export const GLIBTOP_MAX_SHM_LIMITS: number
export const GLIBTOP_MAX_SWAP: number
export const GLIBTOP_MAX_SYSDEPS: number
export const GLIBTOP_MAX_SYSINFO: number
export const GLIBTOP_MAX_UPTIME: number
export const GLIBTOP_MEM_BUFFER: number
export const GLIBTOP_MEM_CACHED: number
export const GLIBTOP_MEM_FREE: number
export const GLIBTOP_MEM_LOCKED: number
export const GLIBTOP_MEM_SHARED: number
export const GLIBTOP_MEM_TOTAL: number
export const GLIBTOP_MEM_USED: number
export const GLIBTOP_MEM_USER: number
export const GLIBTOP_METHOD_DIRECT: number
export const GLIBTOP_METHOD_INET: number
export const GLIBTOP_METHOD_PIPE: number
export const GLIBTOP_METHOD_UNIX: number
export const GLIBTOP_MOUNTENTRY_LEN: number
export const GLIBTOP_MOUNTLIST_NUMBER: number
export const GLIBTOP_MOUNTLIST_SIZE: number
export const GLIBTOP_MOUNTLIST_TOTAL: number
export const GLIBTOP_NCPU: number
export const GLIBTOP_NDISK: number
export const GLIBTOP_NETLIST_NUMBER: number
export const GLIBTOP_NETLOAD_ADDRESS: number
export const GLIBTOP_NETLOAD_ADDRESS6: number
export const GLIBTOP_NETLOAD_BYTES_IN: number
export const GLIBTOP_NETLOAD_BYTES_OUT: number
export const GLIBTOP_NETLOAD_BYTES_TOTAL: number
export const GLIBTOP_NETLOAD_COLLISIONS: number
export const GLIBTOP_NETLOAD_ERRORS_IN: number
export const GLIBTOP_NETLOAD_ERRORS_OUT: number
export const GLIBTOP_NETLOAD_ERRORS_TOTAL: number
export const GLIBTOP_NETLOAD_HWADDRESS: number
export const GLIBTOP_NETLOAD_IF_FLAGS: number
export const GLIBTOP_NETLOAD_MTU: number
export const GLIBTOP_NETLOAD_PACKETS_IN: number
export const GLIBTOP_NETLOAD_PACKETS_OUT: number
export const GLIBTOP_NETLOAD_PACKETS_TOTAL: number
export const GLIBTOP_NETLOAD_PREFIX6: number
export const GLIBTOP_NETLOAD_SCOPE6: number
export const GLIBTOP_NETLOAD_SUBNET: number
export const GLIBTOP_OPEN_DEST_HOST_LEN: number
export const GLIBTOP_OPEN_FILENAME_LEN: number
export const GLIBTOP_PARAM_COMMAND: number
export const GLIBTOP_PARAM_ERROR_METHOD: number
export const GLIBTOP_PARAM_FEATURES: number
export const GLIBTOP_PARAM_HOST: number
export const GLIBTOP_PARAM_METHOD: number
export const GLIBTOP_PARAM_PORT: number
export const GLIBTOP_PARAM_REQUIRED: number
export const GLIBTOP_PPP_BYTES_IN: number
export const GLIBTOP_PPP_BYTES_OUT: number
export const GLIBTOP_PPP_STATE: number
export const GLIBTOP_PROCESS_DEAD: number
export const GLIBTOP_PROCESS_INTERRUPTIBLE: number
export const GLIBTOP_PROCESS_RUNNING: number
export const GLIBTOP_PROCESS_STOPPED: number
export const GLIBTOP_PROCESS_SWAPPING: number
export const GLIBTOP_PROCESS_UNINTERRUPTIBLE: number
export const GLIBTOP_PROCESS_ZOMBIE: number
export const GLIBTOP_PROCLIST_NUMBER: number
export const GLIBTOP_PROCLIST_SIZE: number
export const GLIBTOP_PROCLIST_TOTAL: number
export const GLIBTOP_PROC_AFFINITY_ALL: number
export const GLIBTOP_PROC_AFFINITY_NUMBER: number
export const GLIBTOP_PROC_ARGS_SIZE: number
export const GLIBTOP_PROC_IO_DISK_RBYTES: number
export const GLIBTOP_PROC_IO_DISK_RCHAR: number
export const GLIBTOP_PROC_IO_DISK_WBYTES: number
export const GLIBTOP_PROC_IO_DISK_WCHAR: number
export const GLIBTOP_PROC_KERNEL_CMAJ_FLT: number
export const GLIBTOP_PROC_KERNEL_CMIN_FLT: number
export const GLIBTOP_PROC_KERNEL_KSTK_EIP: number
export const GLIBTOP_PROC_KERNEL_KSTK_ESP: number
export const GLIBTOP_PROC_KERNEL_K_FLAGS: number
export const GLIBTOP_PROC_KERNEL_MAJ_FLT: number
export const GLIBTOP_PROC_KERNEL_MIN_FLT: number
export const GLIBTOP_PROC_KERNEL_NWCHAN: number
export const GLIBTOP_PROC_KERNEL_WCHAN: number
export const GLIBTOP_PROC_MAP_NUMBER: number
export const GLIBTOP_PROC_MAP_SIZE: number
export const GLIBTOP_PROC_MAP_TOTAL: number
export const GLIBTOP_PROC_MEM_RESIDENT: number
export const GLIBTOP_PROC_MEM_RSS: number
export const GLIBTOP_PROC_MEM_RSS_RLIM: number
export const GLIBTOP_PROC_MEM_SHARE: number
export const GLIBTOP_PROC_MEM_SIZE: number
export const GLIBTOP_PROC_MEM_VSIZE: number
export const GLIBTOP_PROC_OPEN_FILES_NUMBER: number
export const GLIBTOP_PROC_OPEN_FILES_SIZE: number
export const GLIBTOP_PROC_OPEN_FILES_TOTAL: number
export const GLIBTOP_PROC_SEGMENT_DATA_RSS: number
export const GLIBTOP_PROC_SEGMENT_DIRTY_SIZE: number
export const GLIBTOP_PROC_SEGMENT_END_CODE: number
export const GLIBTOP_PROC_SEGMENT_SHLIB_RSS: number
export const GLIBTOP_PROC_SEGMENT_STACK_RSS: number
export const GLIBTOP_PROC_SEGMENT_START_CODE: number
export const GLIBTOP_PROC_SEGMENT_START_STACK: number
export const GLIBTOP_PROC_SEGMENT_TEXT_RSS: number
export const GLIBTOP_PROC_SIGNAL_BLOCKED: number
export const GLIBTOP_PROC_SIGNAL_SIGCATCH: number
export const GLIBTOP_PROC_SIGNAL_SIGIGNORE: number
export const GLIBTOP_PROC_SIGNAL_SIGNAL: number
export const GLIBTOP_PROC_STATE_CMD: number
export const GLIBTOP_PROC_STATE_GID: number
export const GLIBTOP_PROC_STATE_HAS_CPU: number
export const GLIBTOP_PROC_STATE_LAST_PROCESSOR: number
export const GLIBTOP_PROC_STATE_PROCESSOR: number
export const GLIBTOP_PROC_STATE_RGID: number
export const GLIBTOP_PROC_STATE_RUID: number
export const GLIBTOP_PROC_STATE_STATE: number
export const GLIBTOP_PROC_STATE_UID: number
export const GLIBTOP_PROC_TIME_CSTIME: number
export const GLIBTOP_PROC_TIME_CUTIME: number
export const GLIBTOP_PROC_TIME_FREQUENCY: number
export const GLIBTOP_PROC_TIME_IT_REAL_VALUE: number
export const GLIBTOP_PROC_TIME_RTIME: number
export const GLIBTOP_PROC_TIME_START_TIME: number
export const GLIBTOP_PROC_TIME_STIME: number
export const GLIBTOP_PROC_TIME_TIMEOUT: number
export const GLIBTOP_PROC_TIME_UTIME: number
export const GLIBTOP_PROC_TIME_XCPU_STIME: number
export const GLIBTOP_PROC_TIME_XCPU_UTIME: number
export const GLIBTOP_PROC_UID_EGID: number
export const GLIBTOP_PROC_UID_EUID: number
export const GLIBTOP_PROC_UID_FSGID: number
export const GLIBTOP_PROC_UID_FSUID: number
export const GLIBTOP_PROC_UID_GID: number
export const GLIBTOP_PROC_UID_GROUPS: number
export const GLIBTOP_PROC_UID_NGROUPS: number
export const GLIBTOP_PROC_UID_NICE: number
export const GLIBTOP_PROC_UID_PGRP: number
export const GLIBTOP_PROC_UID_PID: number
export const GLIBTOP_PROC_UID_PPID: number
export const GLIBTOP_PROC_UID_PRIORITY: number
export const GLIBTOP_PROC_UID_SESSION: number
export const GLIBTOP_PROC_UID_SGID: number
export const GLIBTOP_PROC_UID_SUID: number
export const GLIBTOP_PROC_UID_TPGID: number
export const GLIBTOP_PROC_UID_TTY: number
export const GLIBTOP_PROC_UID_UID: number
export const GLIBTOP_PROC_WD_EXE: number
export const GLIBTOP_PROC_WD_EXE_LEN: number
export const GLIBTOP_PROC_WD_NUMBER: number
export const GLIBTOP_PROC_WD_ROOT: number
export const GLIBTOP_PROC_WD_ROOT_LEN: number
export const GLIBTOP_SWAP_FREE: number
export const GLIBTOP_SWAP_PAGEIN: number
export const GLIBTOP_SWAP_PAGEOUT: number
export const GLIBTOP_SWAP_TOTAL: number
export const GLIBTOP_SWAP_USED: number
export const GLIBTOP_SYSDEPS_ALL: number
export const GLIBTOP_SYSDEPS_CPU: number
export const GLIBTOP_SYSDEPS_DISK: number
export const GLIBTOP_SYSDEPS_FEATURES: number
export const GLIBTOP_SYSDEPS_FSUSAGE: number
export const GLIBTOP_SYSDEPS_LOADAVG: number
export const GLIBTOP_SYSDEPS_MEM: number
export const GLIBTOP_SYSDEPS_MOUNTLIST: number
export const GLIBTOP_SYSDEPS_MSG_LIMITS: number
export const GLIBTOP_SYSDEPS_NETLIST: number
export const GLIBTOP_SYSDEPS_NETLOAD: number
export const GLIBTOP_SYSDEPS_PPP: number
export const GLIBTOP_SYSDEPS_PROCLIST: number
export const GLIBTOP_SYSDEPS_PROC_AFFINITY: number
export const GLIBTOP_SYSDEPS_PROC_ARGS: number
export const GLIBTOP_SYSDEPS_PROC_IO: number
export const GLIBTOP_SYSDEPS_PROC_KERNEL: number
export const GLIBTOP_SYSDEPS_PROC_MAP: number
export const GLIBTOP_SYSDEPS_PROC_MEM: number
export const GLIBTOP_SYSDEPS_PROC_OPEN_FILES: number
export const GLIBTOP_SYSDEPS_PROC_SEGMENT: number
export const GLIBTOP_SYSDEPS_PROC_SIGNAL: number
export const GLIBTOP_SYSDEPS_PROC_STATE: number
export const GLIBTOP_SYSDEPS_PROC_TIME: number
export const GLIBTOP_SYSDEPS_PROC_UID: number
export const GLIBTOP_SYSDEPS_PROC_WD: number
export const GLIBTOP_SYSDEPS_SEM_LIMITS: number
export const GLIBTOP_SYSDEPS_SHM_LIMITS: number
export const GLIBTOP_SYSDEPS_SWAP: number
export const GLIBTOP_SYSDEPS_UPTIME: number
export const GLIBTOP_SYSINFO_CPUINFO: number
export const GLIBTOP_SYSINFO_NCPU: number
export const GLIBTOP_UPTIME_BOOT_TIME: number
export const GLIBTOP_UPTIME_IDLETIME: number
export const GLIBTOP_UPTIME_UPTIME: number
export const GLIBTOP_XCPU_FLAGS: number
export const GLIBTOP_XCPU_IDLE: number
export const GLIBTOP_XCPU_IOWAIT: number
export const GLIBTOP_XCPU_IRQ: number
export const GLIBTOP_XCPU_NICE: number
export const GLIBTOP_XCPU_SOFTIRQ: number
export const GLIBTOP_XCPU_SYS: number
export const GLIBTOP_XCPU_TOTAL: number
export const GLIBTOP_XCPU_USER: number
export const GLIBTOP_XDISK_SECTORS_READ: number
export const GLIBTOP_XDISK_SECTORS_WRITE: number
export const GLIBTOP_XDISK_TIME_READ: number
export const GLIBTOP_XDISK_TIME_WRITE: number
export const HOSTNAMSZ: number
export const LIBGTOP_MAJOR_VERSION: number
export const LIBGTOP_MICRO_VERSION: number
export const LIBGTOP_MINOR_VERSION: number
export const MCOOKIE_NAME: string
export const MCOOKIE_SCREEN: string
export const MCOOKIE_X_NAME: string
export const PATCHLEVEL: number
export const REPLYSIZ: number
export const TABLE_SIZE: number
export const TRUE: number
export function glibtopClose(): void
export function glibtopGetCpu(buf: glibtop_cpu): void
export function glibtopGetDisk(buf: glibtop_disk): void
export function glibtopGetFsusage(buf: glibtop_fsusage, mountDir: string): void
export function glibtopGetLoadavg(buf: glibtop_loadavg): void
export function glibtopGetMem(buf: glibtop_mem): void
export function glibtopGetMountlist(buf: glibtop_mountlist, allFs: number): glibtop_mountentry[]
export function glibtopGetMsgLimits(buf: glibtop_msg_limits): void
export function glibtopGetNetlist(buf: glibtop_netlist): string[]
export function glibtopGetNetload(buf: glibtop_netload, interface: string): void
export function glibtopGetPpp(buf: glibtop_ppp, device: number): void
export function glibtopGetProcAffinity(buf: glibtop_proc_affinity, pid: number): number
export function glibtopGetProcArgs(buf: glibtop_proc_args, pid: number, maxLen: number): string | null
export function glibtopGetProcArgv(buf: glibtop_proc_args, pid: number, maxLen: number): string[]
export function glibtopGetProcIo(buf: glibtop_proc_io, pid: number): void
export function glibtopGetProcKernel(buf: glibtop_proc_kernel, pid: number): void
export function glibtopGetProcMap(buf: glibtop_proc_map, pid: number): glibtop_map_entry[]
export function glibtopGetProcMem(buf: glibtop_proc_mem, pid: number): void
export function glibtopGetProcOpenFiles(buf: glibtop_proc_open_files, pid: number): glibtop_open_files_entry[]
export function glibtopGetProcSegment(buf: glibtop_proc_segment, pid: number): void
export function glibtopGetProcSignal(buf: glibtop_proc_signal, pid: number): void
export function glibtopGetProcState(buf: glibtop_proc_state, pid: number): void
export function glibtopGetProcTime(buf: glibtop_proc_time, pid: number): void
export function glibtopGetProcUid(buf: glibtop_proc_uid, pid: number): void
export function glibtopGetProcWd(buf: glibtop_proc_wd, pid: number): string[]
export function glibtopGetProclist(buf: glibtop_proclist, which: number, arg: number): number[]
export function glibtopGetSemLimits(buf: glibtop_sem_limits): void
export function glibtopGetShmLimits(buf: glibtop_shm_limits): void
export function glibtopGetSwap(buf: glibtop_swap): void
export function glibtopGetSysdeps(buf: glibtop_sysdeps): void
export function glibtopGetSysinfo(): glibtop_sysinfo
export function glibtopGetUptime(buf: glibtop_uptime): void
export function glibtopInit(): glibtop
export function glibtopInitR(features: number, flags: number): [ /* returnType */ glibtop, /* serverPtr */ glibtop ]
export function glibtopInternetAddr(host: string): number
export function glibtopMakeConnection(hostarg: string, portarg: number, s: number): number
export interface glibtop {

    // Own fields of GTop-2.0.GTop.glibtop

    flags: number
    method: number
    errorMethod: number
    input: number[]
    output: number[]
    socket: number
    ncpu: number
    realNcpu: number
    osVersionCode: number
    name: string
    serverCommand: string
    serverHost: string
    serverUser: string
    serverRsh: string
    features: number
    serverPort: number
    sysdeps: glibtop_sysdeps
    required: glibtop_sysdeps
    pid: number
    uid: number
    euid: number
    gid: number
    egid: number
    machine: glibtop_machine
    ndisk: number
    realNdisk: number

    // Owm methods of GTop-2.0.GTop.glibtop

    callL(command: number, sendSize: number, sendBuf: any | null, recvSize: number, recvBuf: any | null): any | null
    callS(command: number, sendSize: number, sendBuf: any | null, recvSize: number, recvBuf: any | null): any | null
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
    getParameterL(parameter: number, dataPtr: any | null, dataSize: number): number
    getPppL(buf: glibtop_ppp, device: number): void
    getPppS(buf: glibtop_ppp, device: number): void
    getProcAffinityL(buf: glibtop_proc_affinity, pid: number): number
    getProcAffinityS(buf: glibtop_proc_affinity, pid: number): number
    getProcArgsL(buf: glibtop_proc_args, pid: number, maxLen: number): string | null
    getProcArgsS(buf: glibtop_proc_args, pid: number, maxLen: number): string | null
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
    setParameterL(parameter: number, dataPtr: any | null, dataSize: number): void
}

export class glibtop {

    // Own properties of GTop-2.0.GTop.glibtop

    static name: string

    // Constructors of GTop-2.0.GTop.glibtop

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
    static getProcArgs(buf: glibtop_proc_args, pid: number, maxLen: number): string | null
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

export interface glibtop_command {

    // Own fields of GTop-2.0.GTop.glibtop_command

    command: number
    size: number
    dataSize: number
    parameter: number[]
}

export class glibtop_command {

    // Own properties of GTop-2.0.GTop.glibtop_command

    static name: string
}

export interface glibtop_cpu {

    // Own fields of GTop-2.0.GTop.glibtop_cpu

    flags: number
    total: number
    user: number
    nice: number
    sys: number
    idle: number
    iowait: number
    irq: number
    softirq: number
    frequency: number
    xcpuTotal: number[]
    xcpuUser: number[]
    xcpuNice: number[]
    xcpuSys: number[]
    xcpuIdle: number[]
    xcpuIowait: number[]
    xcpuIrq: number[]
    xcpuSoftirq: number[]
    xcpuFlags: number
}

export class glibtop_cpu {

    // Own properties of GTop-2.0.GTop.glibtop_cpu

    static name: string
}

export interface glibtop_disk {

    // Own fields of GTop-2.0.GTop.glibtop_disk

    flags: number
    xdiskSectorsRead: number[]
    xdiskTimeRead: number[]
    xdiskSectorsWrite: number[]
    xdiskTimeWrite: number[]
    xdiskFlags: number
}

export class glibtop_disk {

    // Own properties of GTop-2.0.GTop.glibtop_disk

    static name: string
}

export interface glibtop_entry {

    // Own fields of GTop-2.0.GTop.glibtop_entry

    labels: any[]
    values: GLib.HashTable
    descriptions: GLib.HashTable
}

export class glibtop_entry {

    // Own properties of GTop-2.0.GTop.glibtop_entry

    static name: string
}

export interface glibtop_fsusage {

    // Own fields of GTop-2.0.GTop.glibtop_fsusage

    flags: number
    blocks: number
    bfree: number
    bavail: number
    files: number
    ffree: number
    blockSize: number
    read: number
    write: number
}

export class glibtop_fsusage {

    // Own properties of GTop-2.0.GTop.glibtop_fsusage

    static name: string
}

export interface glibtop_loadavg {

    // Own fields of GTop-2.0.GTop.glibtop_loadavg

    flags: number
    loadavg: number[]
    nrRunning: number
    nrTasks: number
    lastPid: number
}

export class glibtop_loadavg {

    // Own properties of GTop-2.0.GTop.glibtop_loadavg

    static name: string
}

export interface glibtop_machine {
}

export class glibtop_machine {

    // Own properties of GTop-2.0.GTop.glibtop_machine

    static name: string
}

export interface glibtop_map_entry {

    // Own fields of GTop-2.0.GTop.glibtop_map_entry

    flags: number
    start: number
    end: number
    offset: number
    perm: number
    inode: number
    device: number
    size: number
    rss: number
    sharedClean: number
    sharedDirty: number
    privateClean: number
    privateDirty: number
    pss: number
    swap: number
    filename: number[]
}

export class glibtop_map_entry {

    // Own properties of GTop-2.0.GTop.glibtop_map_entry

    static name: string
}

export interface glibtop_mem {

    // Own fields of GTop-2.0.GTop.glibtop_mem

    flags: number
    total: number
    used: number
    free: number
    shared: number
    buffer: number
    cached: number
    user: number
    locked: number
}

export class glibtop_mem {

    // Own properties of GTop-2.0.GTop.glibtop_mem

    static name: string
}

export interface glibtop_mountentry {

    // Own fields of GTop-2.0.GTop.glibtop_mountentry

    dev: number
    devname: number[]
    mountdir: number[]
    type: number[]
}

export class glibtop_mountentry {

    // Own properties of GTop-2.0.GTop.glibtop_mountentry

    static name: string
}

export interface glibtop_mountlist {

    // Own fields of GTop-2.0.GTop.glibtop_mountlist

    flags: number
    number: number
    total: number
    size: number
}

export class glibtop_mountlist {

    // Own properties of GTop-2.0.GTop.glibtop_mountlist

    static name: string
}

export interface glibtop_msg_limits {

    // Own fields of GTop-2.0.GTop.glibtop_msg_limits

    flags: number
    msgpool: number
    msgmap: number
    msgmax: number
    msgmnb: number
    msgmni: number
    msgssz: number
    msgtql: number
}

export class glibtop_msg_limits {

    // Own properties of GTop-2.0.GTop.glibtop_msg_limits

    static name: string
}

export interface glibtop_netlist {

    // Own fields of GTop-2.0.GTop.glibtop_netlist

    flags: number
    /**
     * Number of entries in the returned list.
     * @field 
     */
    number: number
}

export class glibtop_netlist {

    // Own properties of GTop-2.0.GTop.glibtop_netlist

    static name: string
}

export interface glibtop_netload {

    // Own fields of GTop-2.0.GTop.glibtop_netload

    flags: number
    ifFlags: number
    mtu: number
    subnet: number
    address: number
    packetsIn: number
    packetsOut: number
    packetsTotal: number
    bytesIn: number
    bytesOut: number
    bytesTotal: number
    errorsIn: number
    errorsOut: number
    errorsTotal: number
    collisions: number
    address6: number[]
    prefix6: number[]
    scope6: number
    hwaddress: number[]
}

export class glibtop_netload {

    // Own properties of GTop-2.0.GTop.glibtop_netload

    static name: string
}

export interface glibtop_open_files_entry {

    // Own fields of GTop-2.0.GTop.glibtop_open_files_entry

    fd: number
    type: number
}

export class glibtop_open_files_entry {

    // Own properties of GTop-2.0.GTop.glibtop_open_files_entry

    static name: string
}

export interface glibtop_ppp {

    // Own fields of GTop-2.0.GTop.glibtop_ppp

    flags: number
    state: number
    bytesIn: number
    bytesOut: number
}

export class glibtop_ppp {

    // Own properties of GTop-2.0.GTop.glibtop_ppp

    static name: string
}

export interface glibtop_proc_affinity {

    // Own fields of GTop-2.0.GTop.glibtop_proc_affinity

    flags: number
    number: number
    all: boolean
}

export class glibtop_proc_affinity {

    // Own properties of GTop-2.0.GTop.glibtop_proc_affinity

    static name: string
}

export interface glibtop_proc_args {

    // Own fields of GTop-2.0.GTop.glibtop_proc_args

    flags: number
    size: number
}

export class glibtop_proc_args {

    // Own properties of GTop-2.0.GTop.glibtop_proc_args

    static name: string
}

export interface glibtop_proc_io {

    // Own fields of GTop-2.0.GTop.glibtop_proc_io

    flags: number
    /**
     * The number of bytes which this task has caused to be read from storage. This
     * is simply the sum of bytes which this process passed to read() and pread(), also including tty IO,
     * and it is unaffected by whether or not actual physical disk IO was required.
     * @field 
     */
    diskRchar: number
    /**
     * The number of bytes which this task has caused, or shall cause to be written
     * to disk. Similar caveats apply here as with rchar.
     * @field 
     */
    diskWchar: number
    /**
     * Attempt to count the number of bytes which this process really did cause to
     * be fetched from the storage layer. Done at the submit_bio() level, so it is
     * accurate for block-backed filesystems.
     * @field 
     */
    diskRbytes: number
    /**
     * Attempt to count the number of bytes which this process caused to be sent to
     * the storage layer. This is done at page-dirtying time.
     * @field 
     */
    diskWbytes: number
    reserved: number[]
}

/**
 * Process disk io data filled by glibtop_get_proc_io().
 * @record 
 */
export class glibtop_proc_io {

    // Own properties of GTop-2.0.GTop.glibtop_proc_io

    static name: string
}

export interface glibtop_proc_kernel {

    // Own fields of GTop-2.0.GTop.glibtop_proc_kernel

    flags: number
    kFlags: number
    minFlt: number
    majFlt: number
    cminFlt: number
    cmajFlt: number
    kstkEsp: number
    kstkEip: number
    nwchan: number
    wchan: number[]
}

export class glibtop_proc_kernel {

    // Own properties of GTop-2.0.GTop.glibtop_proc_kernel

    static name: string
}

export interface glibtop_proc_map {

    // Own fields of GTop-2.0.GTop.glibtop_proc_map

    flags: number
    number: number
    total: number
    size: number
}

export class glibtop_proc_map {

    // Own properties of GTop-2.0.GTop.glibtop_proc_map

    static name: string
}

export interface glibtop_proc_mem {

    // Own fields of GTop-2.0.GTop.glibtop_proc_mem

    flags: number
    size: number
    vsize: number
    resident: number
    share: number
    rss: number
    rssRlim: number
}

export class glibtop_proc_mem {

    // Own properties of GTop-2.0.GTop.glibtop_proc_mem

    static name: string
}

export interface glibtop_proc_open_files {

    // Own fields of GTop-2.0.GTop.glibtop_proc_open_files

    flags: number
    number: number
    total: number
    size: number
}

export class glibtop_proc_open_files {

    // Own properties of GTop-2.0.GTop.glibtop_proc_open_files

    static name: string
}

export interface glibtop_proc_segment {

    // Own fields of GTop-2.0.GTop.glibtop_proc_segment

    flags: number
    textRss: number
    shlibRss: number
    dataRss: number
    stackRss: number
    dirtySize: number
    startCode: number
    endCode: number
    startStack: number
}

export class glibtop_proc_segment {

    // Own properties of GTop-2.0.GTop.glibtop_proc_segment

    static name: string
}

export interface glibtop_proc_signal {

    // Own fields of GTop-2.0.GTop.glibtop_proc_signal

    flags: number
    signal: number[]
    blocked: number[]
    sigignore: number[]
    sigcatch: number[]
}

export class glibtop_proc_signal {

    // Own properties of GTop-2.0.GTop.glibtop_proc_signal

    static name: string
}

export interface glibtop_proc_state {

    // Own fields of GTop-2.0.GTop.glibtop_proc_state

    flags: number
    cmd: number[]
    state: number
    uid: number
    gid: number
    ruid: number
    rgid: number
    hasCpu: number
    processor: number
    lastProcessor: number
}

export class glibtop_proc_state {

    // Own properties of GTop-2.0.GTop.glibtop_proc_state

    static name: string
}

export interface glibtop_proc_time {

    // Own fields of GTop-2.0.GTop.glibtop_proc_time

    /**
     * Start time of process in seconds since the epoch.
     * @field 
     */
    startTime: number
    /**
     * Real time accumulated by process (should be `utime` + `stime)`.
     * @field 
     */
    rtime: number
    /**
     * User-mode CPU time accumulated by process.
     * @field 
     */
    utime: number
    /**
     * Kernel-mode CPU time accumulated by process.
     * @field 
     */
    stime: number
    /**
     * Cumulative utime of process and reaped children.
     * @field 
     */
    cutime: number
    /**
     * Cumulative stime of process and reaped children.
     * @field 
     */
    cstime: number
    /**
     * The time (in jiffies) of the process’s next timeout.
     * @field 
     */
    timeout: number
    /**
     * The time (in jiffies) before the next <type>SIGALRM</type>
     * is sent to the process due to an interval timer.
     * @field 
     */
    itRealValue: number
    /**
     * Tick frequency.
     * @field 
     */
    frequency: number
    /**
     * SMP user-mode CPU time accumulated by process.
     * @field 
     */
    xcpuUtime: number[]
    /**
     * SMP kernel-mode CPU time accumulated by process
     * @field 
     */
    xcpuStime: number[]
}

/**
 * Process time data filled by glibtop_get_proc_time().
 * 
 * Under Linux the `start_time` value may be wrong due to the information
 * available from the kernel.
 * 
 * The Linux kernel defines <type>INITIAL_JIFFIES</type> which implies a time
 * shift. Because <type>INITIAL_JIFFIES</type> is not user-space defined,
 * we cannot use it to compute an accurate `start_time`. On Linux 2.6,
 * <type>INITIAL_JIFFIES</type> is 300 so `start_time` is
 * always 3s different from the real start time of the given process. You
 * may also get shift results if your system clock is not synchronised
 * with your hardware clock. See <command>man hwclock</command>.
 * @record 
 */
export class glibtop_proc_time {

    // Own properties of GTop-2.0.GTop.glibtop_proc_time

    static name: string
}

export interface glibtop_proc_uid {

    // Own fields of GTop-2.0.GTop.glibtop_proc_uid

    flags: number
    uid: number
    euid: number
    gid: number
    egid: number
    suid: number
    sgid: number
    fsuid: number
    fsgid: number
    pid: number
    ppid: number
    pgrp: number
    session: number
    tty: number
    tpgid: number
    priority: number
    nice: number
    ngroups: number
    groups: number[]
}

export class glibtop_proc_uid {

    // Own properties of GTop-2.0.GTop.glibtop_proc_uid

    static name: string
}

export interface glibtop_proc_wd {

    // Own fields of GTop-2.0.GTop.glibtop_proc_wd

    flags: number
    number: number
    root: number[]
    exe: number[]
}

export class glibtop_proc_wd {

    // Own properties of GTop-2.0.GTop.glibtop_proc_wd

    static name: string
}

export interface glibtop_proclist {

    // Own fields of GTop-2.0.GTop.glibtop_proclist

    flags: number
    /**
     * Number of entries in the returned list.
     * @field 
     */
    number: number
    /**
     * Total size of the returned list (this equals `number` * `size)`.
     * @field 
     */
    total: number
    /**
     * Size of a single entry in the returned list
     * (this equals <type>sizeof(unsigned)</type>).
     * @field 
     */
    size: number
}

export class glibtop_proclist {

    // Own properties of GTop-2.0.GTop.glibtop_proclist

    static name: string
}

export interface glibtop_response {

    // Own fields of GTop-2.0.GTop.glibtop_response

    offset: number
    size: number
    dataSize: number
    u: glibtop_response_union
}

export class glibtop_response {

    // Own properties of GTop-2.0.GTop.glibtop_response

    static name: string
}

export interface glibtop_sem_limits {

    // Own fields of GTop-2.0.GTop.glibtop_sem_limits

    flags: number
    semmap: number
    semmni: number
    semmns: number
    semmnu: number
    semmsl: number
    semopm: number
    semume: number
    semusz: number
    semvmx: number
    semaem: number
}

export class glibtop_sem_limits {

    // Own properties of GTop-2.0.GTop.glibtop_sem_limits

    static name: string
}

export interface glibtop_shm_limits {

    // Own fields of GTop-2.0.GTop.glibtop_shm_limits

    flags: number
    shmmax: number
    shmmin: number
    shmmni: number
    shmseg: number
    shmall: number
}

export class glibtop_shm_limits {

    // Own properties of GTop-2.0.GTop.glibtop_shm_limits

    static name: string
}

export interface glibtop_signame {

    // Own fields of GTop-2.0.GTop.glibtop_signame

    number: number
    name: string
    label: string
}

export class glibtop_signame {

    // Own properties of GTop-2.0.GTop.glibtop_signame

    static name: string
}

export interface glibtop_swap {

    // Own fields of GTop-2.0.GTop.glibtop_swap

    flags: number
    total: number
    used: number
    free: number
    pagein: number
    pageout: number
}

export class glibtop_swap {

    // Own properties of GTop-2.0.GTop.glibtop_swap

    static name: string
}

export interface glibtop_sysdeps {

    // Own fields of GTop-2.0.GTop.glibtop_sysdeps

    flags: number
    features: number
    cpu: number
    mem: number
    swap: number
    uptime: number
    loadavg: number
    shmLimits: number
    msgLimits: number
    semLimits: number
    proclist: number
    procState: number
    procUid: number
    procMem: number
    procTime: number
    procSignal: number
    procKernel: number
    procSegment: number
    procArgs: number
    procMap: number
    procOpenFiles: number
    mountlist: number
    fsusage: number
    netlist: number
    netload: number
    ppp: number
    procWd: number
    procAffinity: number
    procIo: number
    disk: number
    reserved1: number
    reserved2: number
    reserved3: number
    reserved4: number
    reserved5: number
    reserved6: number
    reserved7: number
}

export class glibtop_sysdeps {

    // Own properties of GTop-2.0.GTop.glibtop_sysdeps

    static name: string
}

export interface glibtop_sysinfo {

    // Own fields of GTop-2.0.GTop.glibtop_sysinfo

    flags: number
    ncpu: number
    cpuinfo: glibtop_entry[]
}

export class glibtop_sysinfo {

    // Own properties of GTop-2.0.GTop.glibtop_sysinfo

    static name: string
}

export interface glibtop_uptime {

    // Own fields of GTop-2.0.GTop.glibtop_uptime

    flags: number
    uptime: number
    idletime: number
    bootTime: number
}

export class glibtop_uptime {

    // Own properties of GTop-2.0.GTop.glibtop_uptime

    static name: string
}

export interface partition_info {

    // Own fields of GTop-2.0.GTop.partition_info

    name: number[]
    type: number[]
    raidNum: number[]
    max: number
}

export class partition_info {

    // Own properties of GTop-2.0.GTop.partition_info

    static name: string
}

export interface glibtop_response_union {

    // Own fields of GTop-2.0.GTop.glibtop_response_union

    data: glibtop_union
    sysdeps: glibtop_sysdeps
}

export class glibtop_response_union {

    // Own properties of GTop-2.0.GTop.glibtop_response_union

    static name: string
}

export interface glibtop_union {

    // Own fields of GTop-2.0.GTop.glibtop_union

    cpu: glibtop_cpu
    disk: glibtop_disk
    mem: glibtop_mem
    swap: glibtop_swap
    uptime: glibtop_uptime
    loadavg: glibtop_loadavg
    shmLimits: glibtop_shm_limits
    msgLimits: glibtop_msg_limits
    semLimits: glibtop_sem_limits
    proclist: glibtop_proclist
    procState: glibtop_proc_state
    procUid: glibtop_proc_uid
    procMem: glibtop_proc_mem
    procTime: glibtop_proc_time
    procSignal: glibtop_proc_signal
    procKernel: glibtop_proc_kernel
    procSegment: glibtop_proc_segment
    procArgs: glibtop_proc_args
    procMap: glibtop_proc_map
    mountlist: glibtop_mountlist
    fsusage: glibtop_fsusage
    netlist: glibtop_netlist
    netload: glibtop_netload
    ppp: glibtop_ppp
    procOpenFiles: glibtop_proc_open_files
    procWd: glibtop_proc_wd
    procAffinity: glibtop_proc_affinity
    procIo: glibtop_proc_io
}

export class glibtop_union {

    // Own properties of GTop-2.0.GTop.glibtop_union

    static name: string
}

// END