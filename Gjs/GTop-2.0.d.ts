/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GTop-2.0
 */

import type * as Gjs from './Gjs';
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
function glibtop_close(): void
function glibtop_get_cpu(buf: glibtop_cpu): void
function glibtop_get_disk(buf: glibtop_disk): void
function glibtop_get_fsusage(buf: glibtop_fsusage, mount_dir: string): void
function glibtop_get_loadavg(buf: glibtop_loadavg): void
function glibtop_get_mem(buf: glibtop_mem): void
function glibtop_get_mountlist(buf: glibtop_mountlist, all_fs: number): glibtop_mountentry[]
function glibtop_get_msg_limits(buf: glibtop_msg_limits): void
function glibtop_get_netlist(buf: glibtop_netlist): string[]
function glibtop_get_netload(buf: glibtop_netload, interface: string): void
function glibtop_get_ppp(buf: glibtop_ppp, device: number): void
function glibtop_get_proc_affinity(buf: glibtop_proc_affinity, pid: number): number
function glibtop_get_proc_args(buf: glibtop_proc_args, pid: number, max_len: number): string
function glibtop_get_proc_argv(buf: glibtop_proc_args, pid: number, max_len: number): string[]
function glibtop_get_proc_io(buf: glibtop_proc_io, pid: number): void
function glibtop_get_proc_kernel(buf: glibtop_proc_kernel, pid: number): void
function glibtop_get_proc_map(buf: glibtop_proc_map, pid: number): glibtop_map_entry[]
function glibtop_get_proc_mem(buf: glibtop_proc_mem, pid: number): void
function glibtop_get_proc_open_files(buf: glibtop_proc_open_files, pid: number): glibtop_open_files_entry[]
function glibtop_get_proc_segment(buf: glibtop_proc_segment, pid: number): void
function glibtop_get_proc_signal(buf: glibtop_proc_signal, pid: number): void
function glibtop_get_proc_state(buf: glibtop_proc_state, pid: number): void
function glibtop_get_proc_time(buf: glibtop_proc_time, pid: number): void
function glibtop_get_proc_uid(buf: glibtop_proc_uid, pid: number): void
function glibtop_get_proc_wd(buf: glibtop_proc_wd, pid: number): string[]
function glibtop_get_proclist(buf: glibtop_proclist, which: number, arg: number): number[]
function glibtop_get_sem_limits(buf: glibtop_sem_limits): void
function glibtop_get_shm_limits(buf: glibtop_shm_limits): void
function glibtop_get_swap(buf: glibtop_swap): void
function glibtop_get_sysdeps(buf: glibtop_sysdeps): void
function glibtop_get_sysinfo(): glibtop_sysinfo
function glibtop_get_uptime(buf: glibtop_uptime): void
function glibtop_init(): glibtop
function glibtop_init_r(features: number, flags: number): [ /* returnType */ glibtop, /* server_ptr */ glibtop ]
function glibtop_internet_addr(host: string): number
function glibtop_make_connection(hostarg: string, portarg: number, s: number): number
class glibtop {
    /* Fields of GTop-2.0.GTop.glibtop */
    flags: number
    method: number
    error_method: number
    input: number[]
    output: number[]
    socket: number
    ncpu: number
    real_ncpu: number
    os_version_code: number
    name: string
    server_command: string
    server_host: string
    server_user: string
    server_rsh: string
    features: number
    server_port: number
    sysdeps: glibtop_sysdeps
    required: glibtop_sysdeps
    pid: number
    uid: number
    euid: number
    gid: number
    egid: number
    machine: glibtop_machine
    ndisk: number
    real_ndisk: number
    /* Methods of GTop-2.0.GTop.glibtop */
    call_l(command: number, send_size: number, send_buf: object | null, recv_size: number, recv_buf?: object | null): object | null
    call_s(command: number, send_size: number, send_buf: object | null, recv_size: number, recv_buf?: object | null): object | null
    close_p(): void
    close_r(): void
    close_s(): void
    get_cpu_l(buf: glibtop_cpu): void
    get_cpu_s(buf: glibtop_cpu): void
    get_disk_l(buf: glibtop_disk): void
    get_disk_s(buf: glibtop_disk): void
    get_fsusage_l(buf: glibtop_fsusage, mount_dir: string): void
    get_fsusage_s(buf: glibtop_fsusage, mount_dir: string): void
    get_loadavg_l(buf: glibtop_loadavg): void
    get_loadavg_s(buf: glibtop_loadavg): void
    get_mem_l(buf: glibtop_mem): void
    get_mem_s(buf: glibtop_mem): void
    get_mountlist_l(all_fs: number): [ /* returnType */ glibtop_mountentry[], /* buf */ glibtop_mountlist ]
    get_mountlist_s(all_fs: number): [ /* returnType */ glibtop_mountentry[], /* buf */ glibtop_mountlist ]
    get_msg_limits_l(buf: glibtop_msg_limits): void
    get_msg_limits_s(buf: glibtop_msg_limits): void
    get_netlist_l(buf: glibtop_netlist): string[]
    get_netlist_s(buf: glibtop_netlist): string[]
    get_netload_l(buf: glibtop_netload, interface: string): void
    get_netload_s(buf: glibtop_netload, interface: string): void
    get_parameter_l(parameter: number, data_ptr: object | null, data_size: number): number
    get_ppp_l(buf: glibtop_ppp, device: number): void
    get_ppp_s(buf: glibtop_ppp, device: number): void
    get_proc_affinity_l(buf: glibtop_proc_affinity, pid: number): number
    get_proc_affinity_s(buf: glibtop_proc_affinity, pid: number): number
    get_proc_args_l(buf: glibtop_proc_args, pid: number, max_len: number): string
    get_proc_args_s(buf: glibtop_proc_args, pid: number, max_len: number): string
    get_proc_io_l(buf: glibtop_proc_io, pid: number): void
    get_proc_io_s(buf: glibtop_proc_io, pid: number): void
    get_proc_kernel_l(buf: glibtop_proc_kernel, pid: number): void
    get_proc_kernel_s(buf: glibtop_proc_kernel, pid: number): void
    get_proc_map_l(pid: number): [ /* returnType */ glibtop_map_entry[], /* buf */ glibtop_proc_map ]
    get_proc_map_s(pid: number): [ /* returnType */ glibtop_map_entry[], /* buf */ glibtop_proc_map ]
    get_proc_mem_l(buf: glibtop_proc_mem, pid: number): void
    get_proc_mem_s(buf: glibtop_proc_mem, pid: number): void
    get_proc_open_files_l(pid: number): [ /* returnType */ glibtop_open_files_entry[], /* buf */ glibtop_proc_open_files ]
    get_proc_open_files_s(buf: glibtop_proc_open_files, pid: number): glibtop_open_files_entry
    get_proc_segment_l(buf: glibtop_proc_segment, pid: number): void
    get_proc_segment_s(buf: glibtop_proc_segment, pid: number): void
    get_proc_signal_l(buf: glibtop_proc_signal, pid: number): void
    get_proc_signal_s(buf: glibtop_proc_signal, pid: number): void
    get_proc_state_l(buf: glibtop_proc_state, pid: number): void
    get_proc_state_s(buf: glibtop_proc_state, pid: number): void
    get_proc_time_l(buf: glibtop_proc_time, pid: number): void
    get_proc_time_s(buf: glibtop_proc_time, pid: number): void
    get_proc_uid_l(buf: glibtop_proc_uid, pid: number): void
    get_proc_uid_s(buf: glibtop_proc_uid, pid: number): void
    get_proclist_l(buf: glibtop_proclist, which: number, arg: number): number[]
    get_proclist_s(buf: glibtop_proclist, which: number, arg: number): number[]
    get_sem_limits_l(buf: glibtop_sem_limits): void
    get_sem_limits_s(buf: glibtop_sem_limits): void
    get_shm_limits_l(buf: glibtop_shm_limits): void
    get_shm_limits_s(buf: glibtop_shm_limits): void
    get_swap_l(buf: glibtop_swap): void
    get_swap_s(buf: glibtop_swap): void
    get_sysdeps_r(buf: glibtop_sysdeps): void
    get_sysinfo_s(): glibtop_sysinfo
    get_uptime_l(buf: glibtop_uptime): void
    get_uptime_s(buf: glibtop_uptime): void
    init_p(features: number, flags: number): void
    open_l(program_name: string, features: number, flags: number): void
    open_p(program_name: string, features: number, flags: number): void
    open_s(program_name: string, features: number, flags: number): void
    set_parameter_l(parameter: number, data_ptr: object | null, data_size: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    static close(): void
    static get_cpu(buf: glibtop_cpu): void
    static get_disk(buf: glibtop_disk): void
    static get_fsusage(buf: glibtop_fsusage, mount_dir: string): void
    static get_loadavg(buf: glibtop_loadavg): void
    static get_mem(buf: glibtop_mem): void
    static get_mountlist(buf: glibtop_mountlist, all_fs: number): glibtop_mountentry[]
    static get_msg_limits(buf: glibtop_msg_limits): void
    static get_netlist(buf: glibtop_netlist): string[]
    static get_netload(buf: glibtop_netload, interface: string): void
    static get_ppp(buf: glibtop_ppp, device: number): void
    static get_proc_affinity(buf: glibtop_proc_affinity, pid: number): number
    static get_proc_args(buf: glibtop_proc_args, pid: number, max_len: number): string
    static get_proc_argv(buf: glibtop_proc_args, pid: number, max_len: number): string[]
    static get_proc_io(buf: glibtop_proc_io, pid: number): void
    static get_proc_kernel(buf: glibtop_proc_kernel, pid: number): void
    static get_proc_map(buf: glibtop_proc_map, pid: number): glibtop_map_entry[]
    static get_proc_mem(buf: glibtop_proc_mem, pid: number): void
    static get_proc_open_files(buf: glibtop_proc_open_files, pid: number): glibtop_open_files_entry[]
    static get_proc_segment(buf: glibtop_proc_segment, pid: number): void
    static get_proc_signal(buf: glibtop_proc_signal, pid: number): void
    static get_proc_state(buf: glibtop_proc_state, pid: number): void
    static get_proc_time(buf: glibtop_proc_time, pid: number): void
    static get_proc_uid(buf: glibtop_proc_uid, pid: number): void
    static get_proc_wd(buf: glibtop_proc_wd, pid: number): string[]
    static get_proclist(buf: glibtop_proclist, which: number, arg: number): number[]
    static get_sem_limits(buf: glibtop_sem_limits): void
    static get_shm_limits(buf: glibtop_shm_limits): void
    static get_swap(buf: glibtop_swap): void
    static get_sysdeps(buf: glibtop_sysdeps): void
    static get_sysinfo(): glibtop_sysinfo
    static get_uptime(buf: glibtop_uptime): void
    static init(): glibtop
    static init_r(features: number, flags: number): [ /* returnType */ glibtop, /* server_ptr */ glibtop ]
    static internet_addr(host: string): number
    static make_connection(hostarg: string, portarg: number, s: number): number
}
class glibtop_command {
    /* Fields of GTop-2.0.GTop.glibtop_command */
    command: number
    size: number
    data_size: number
    parameter: number[]
    static name: string
}
class glibtop_cpu {
    /* Fields of GTop-2.0.GTop.glibtop_cpu */
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
    xcpu_total: number[]
    xcpu_user: number[]
    xcpu_nice: number[]
    xcpu_sys: number[]
    xcpu_idle: number[]
    xcpu_iowait: number[]
    xcpu_irq: number[]
    xcpu_softirq: number[]
    xcpu_flags: number
    static name: string
}
class glibtop_disk {
    /* Fields of GTop-2.0.GTop.glibtop_disk */
    flags: number
    xdisk_sectors_read: number[]
    xdisk_time_read: number[]
    xdisk_sectors_write: number[]
    xdisk_time_write: number[]
    xdisk_flags: number
    static name: string
}
class glibtop_entry {
    /* Fields of GTop-2.0.GTop.glibtop_entry */
    labels: object[]
    values: GLib.HashTable
    descriptions: GLib.HashTable
    static name: string
}
class glibtop_fsusage {
    /* Fields of GTop-2.0.GTop.glibtop_fsusage */
    flags: number
    blocks: number
    bfree: number
    bavail: number
    files: number
    ffree: number
    block_size: number
    read: number
    write: number
    static name: string
}
class glibtop_loadavg {
    /* Fields of GTop-2.0.GTop.glibtop_loadavg */
    flags: number
    loadavg: number[]
    nr_running: number
    nr_tasks: number
    last_pid: number
    static name: string
}
class glibtop_machine {
    static name: string
}
class glibtop_map_entry {
    /* Fields of GTop-2.0.GTop.glibtop_map_entry */
    flags: number
    start: number
    end: number
    offset: number
    perm: number
    inode: number
    device: number
    size: number
    rss: number
    shared_clean: number
    shared_dirty: number
    private_clean: number
    private_dirty: number
    pss: number
    swap: number
    filename: number[]
    static name: string
}
class glibtop_mem {
    /* Fields of GTop-2.0.GTop.glibtop_mem */
    flags: number
    total: number
    used: number
    free: number
    shared: number
    buffer: number
    cached: number
    user: number
    locked: number
    static name: string
}
class glibtop_mountentry {
    /* Fields of GTop-2.0.GTop.glibtop_mountentry */
    dev: number
    devname: number[]
    mountdir: number[]
    type: number[]
    static name: string
}
class glibtop_mountlist {
    /* Fields of GTop-2.0.GTop.glibtop_mountlist */
    flags: number
    number: number
    total: number
    size: number
    static name: string
}
class glibtop_msg_limits {
    /* Fields of GTop-2.0.GTop.glibtop_msg_limits */
    flags: number
    msgpool: number
    msgmap: number
    msgmax: number
    msgmnb: number
    msgmni: number
    msgssz: number
    msgtql: number
    static name: string
}
class glibtop_netlist {
    /* Fields of GTop-2.0.GTop.glibtop_netlist */
    flags: number
    /**
     * Number of entries in the returned list.
     */
    number: number
    static name: string
}
class glibtop_netload {
    /* Fields of GTop-2.0.GTop.glibtop_netload */
    flags: number
    if_flags: number
    mtu: number
    subnet: number
    address: number
    packets_in: number
    packets_out: number
    packets_total: number
    bytes_in: number
    bytes_out: number
    bytes_total: number
    errors_in: number
    errors_out: number
    errors_total: number
    collisions: number
    address6: Uint8Array
    prefix6: Uint8Array
    scope6: number
    hwaddress: Uint8Array
    static name: string
}
class glibtop_open_files_entry {
    /* Fields of GTop-2.0.GTop.glibtop_open_files_entry */
    fd: number
    type: number
    static name: string
}
class glibtop_ppp {
    /* Fields of GTop-2.0.GTop.glibtop_ppp */
    flags: number
    state: number
    bytes_in: number
    bytes_out: number
    static name: string
}
class glibtop_proc_affinity {
    /* Fields of GTop-2.0.GTop.glibtop_proc_affinity */
    flags: number
    number: number
    all: boolean
    static name: string
}
class glibtop_proc_args {
    /* Fields of GTop-2.0.GTop.glibtop_proc_args */
    flags: number
    size: number
    static name: string
}
class glibtop_proc_io {
    /* Fields of GTop-2.0.GTop.glibtop_proc_io */
    flags: number
    /**
     * The number of bytes which this task has caused to be read from storage. This
     * is simply the sum of bytes which this process passed to read() and pread(), also including tty IO,
     * and it is unaffected by whether or not actual physical disk IO was required.
     */
    disk_rchar: number
    /**
     * The number of bytes which this task has caused, or shall cause to be written
     * to disk. Similar caveats apply here as with rchar.
     */
    disk_wchar: number
    /**
     * Attempt to count the number of bytes which this process really did cause to
     * be fetched from the storage layer. Done at the submit_bio() level, so it is
     * accurate for block-backed filesystems.
     */
    disk_rbytes: number
    /**
     * Attempt to count the number of bytes which this process caused to be sent to
     * the storage layer. This is done at page-dirtying time.
     */
    disk_wbytes: number
    reserved: number[]
    static name: string
}
class glibtop_proc_kernel {
    /* Fields of GTop-2.0.GTop.glibtop_proc_kernel */
    flags: number
    k_flags: number
    min_flt: number
    maj_flt: number
    cmin_flt: number
    cmaj_flt: number
    kstk_esp: number
    kstk_eip: number
    nwchan: number
    wchan: number[]
    static name: string
}
class glibtop_proc_map {
    /* Fields of GTop-2.0.GTop.glibtop_proc_map */
    flags: number
    number: number
    total: number
    size: number
    static name: string
}
class glibtop_proc_mem {
    /* Fields of GTop-2.0.GTop.glibtop_proc_mem */
    flags: number
    size: number
    vsize: number
    resident: number
    share: number
    rss: number
    rss_rlim: number
    static name: string
}
class glibtop_proc_open_files {
    /* Fields of GTop-2.0.GTop.glibtop_proc_open_files */
    flags: number
    number: number
    total: number
    size: number
    static name: string
}
class glibtop_proc_segment {
    /* Fields of GTop-2.0.GTop.glibtop_proc_segment */
    flags: number
    text_rss: number
    shlib_rss: number
    data_rss: number
    stack_rss: number
    dirty_size: number
    start_code: number
    end_code: number
    start_stack: number
    static name: string
}
class glibtop_proc_signal {
    /* Fields of GTop-2.0.GTop.glibtop_proc_signal */
    flags: number
    signal: number[]
    blocked: number[]
    sigignore: number[]
    sigcatch: number[]
    static name: string
}
class glibtop_proc_state {
    /* Fields of GTop-2.0.GTop.glibtop_proc_state */
    flags: number
    cmd: number[]
    state: number
    uid: number
    gid: number
    ruid: number
    rgid: number
    has_cpu: number
    processor: number
    last_processor: number
    static name: string
}
class glibtop_proc_time {
    /* Fields of GTop-2.0.GTop.glibtop_proc_time */
    /**
     * Start time of process in seconds since the epoch.
     */
    start_time: number
    /**
     * Real time accumulated by process (should be `utime` + `stime)`.
     */
    rtime: number
    /**
     * User-mode CPU time accumulated by process.
     */
    utime: number
    /**
     * Kernel-mode CPU time accumulated by process.
     */
    stime: number
    /**
     * Cumulative utime of process and reaped children.
     */
    cutime: number
    /**
     * Cumulative stime of process and reaped children.
     */
    cstime: number
    /**
     * The time (in jiffies) of the process’s next timeout.
     */
    timeout: number
    /**
     * The time (in jiffies) before the next <type>SIGALRM</type>
     * is sent to the process due to an interval timer.
     */
    it_real_value: number
    /**
     * Tick frequency.
     */
    frequency: number
    /**
     * SMP user-mode CPU time accumulated by process.
     */
    xcpu_utime: number[]
    /**
     * SMP kernel-mode CPU time accumulated by process
     */
    xcpu_stime: number[]
    static name: string
}
class glibtop_proc_uid {
    /* Fields of GTop-2.0.GTop.glibtop_proc_uid */
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
    static name: string
}
class glibtop_proc_wd {
    /* Fields of GTop-2.0.GTop.glibtop_proc_wd */
    flags: number
    number: number
    root: number[]
    exe: number[]
    static name: string
}
class glibtop_proclist {
    /* Fields of GTop-2.0.GTop.glibtop_proclist */
    flags: number
    /**
     * Number of entries in the returned list.
     */
    number: number
    /**
     * Total size of the returned list (this equals `number` * `size)`.
     */
    total: number
    /**
     * Size of a single entry in the returned list
     * (this equals <type>sizeof(unsigned)</type>).
     */
    size: number
    static name: string
}
class glibtop_response {
    /* Fields of GTop-2.0.GTop.glibtop_response */
    offset: number
    size: number
    data_size: number
    u: glibtop_response_union
    static name: string
}
class glibtop_sem_limits {
    /* Fields of GTop-2.0.GTop.glibtop_sem_limits */
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
    static name: string
}
class glibtop_shm_limits {
    /* Fields of GTop-2.0.GTop.glibtop_shm_limits */
    flags: number
    shmmax: number
    shmmin: number
    shmmni: number
    shmseg: number
    shmall: number
    static name: string
}
class glibtop_signame {
    /* Fields of GTop-2.0.GTop.glibtop_signame */
    number: number
    name: string
    label: string
    static name: string
}
class glibtop_swap {
    /* Fields of GTop-2.0.GTop.glibtop_swap */
    flags: number
    total: number
    used: number
    free: number
    pagein: number
    pageout: number
    static name: string
}
class glibtop_sysdeps {
    /* Fields of GTop-2.0.GTop.glibtop_sysdeps */
    flags: number
    features: number
    cpu: number
    mem: number
    swap: number
    uptime: number
    loadavg: number
    shm_limits: number
    msg_limits: number
    sem_limits: number
    proclist: number
    proc_state: number
    proc_uid: number
    proc_mem: number
    proc_time: number
    proc_signal: number
    proc_kernel: number
    proc_segment: number
    proc_args: number
    proc_map: number
    proc_open_files: number
    mountlist: number
    fsusage: number
    netlist: number
    netload: number
    ppp: number
    proc_wd: number
    proc_affinity: number
    proc_io: number
    disk: number
    reserved1: number
    reserved2: number
    reserved3: number
    reserved4: number
    reserved5: number
    reserved6: number
    reserved7: number
    static name: string
}
class glibtop_sysinfo {
    /* Fields of GTop-2.0.GTop.glibtop_sysinfo */
    flags: number
    ncpu: number
    cpuinfo: glibtop_entry[]
    static name: string
}
class glibtop_uptime {
    /* Fields of GTop-2.0.GTop.glibtop_uptime */
    flags: number
    uptime: number
    idletime: number
    boot_time: number
    static name: string
}
class partition_info {
    /* Fields of GTop-2.0.GTop.partition_info */
    name: number[]
    type: number[]
    raid_num: number[]
    max: number
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