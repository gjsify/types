
/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GTop {

    /**
     * GTop-2.0
     */


    /**
     * @default 15
     */
    const AUTH_NAMESZ: number;

    /**
     * @default 15
     */
    const AUTH_TIMEOUT: number;

    /**
     * @default 1
     */
    const CONN_INTERNET: number;

    /**
     * @default 2
     */
    const CONN_IPC: number;

    /**
     * @default 0
     */
    const CONN_UNIX: number;

    /**
     * @default 21490
     */
    const DEFAULT_PORT: number;

    /**
     * @default GNU-SECURE
     */
    const DEFAUTH_NAME: string;

    /**
     * @default 92
     */
    const EOT_CHR: number;

    /**
     * @default 
     */
    const EOT_STR: string;

    /**
     * @default 0
     */
    const FALSE: number;

    /**
     * @default 2
     */
    const GLIBTOP_CMND_CPU: number;

    /**
     * @default 29
     */
    const GLIBTOP_CMND_DISK: number;

    /**
     * @default 21
     */
    const GLIBTOP_CMND_FSUSAGE: number;

    /**
     * @default 6
     */
    const GLIBTOP_CMND_LOADAVG: number;

    /**
     * @default 3
     */
    const GLIBTOP_CMND_MEM: number;

    /**
     * @default 20
     */
    const GLIBTOP_CMND_MOUNTLIST: number;

    /**
     * @default 8
     */
    const GLIBTOP_CMND_MSG_LIMITS: number;

    /**
     * @default 24
     */
    const GLIBTOP_CMND_NETLIST: number;

    /**
     * @default 22
     */
    const GLIBTOP_CMND_NETLOAD: number;

    /**
     * @default 23
     */
    const GLIBTOP_CMND_PPP: number;

    /**
     * @default 10
     */
    const GLIBTOP_CMND_PROCLIST: number;

    /**
     * @default 27
     */
    const GLIBTOP_CMND_PROC_AFFINITY: number;

    /**
     * @default 18
     */
    const GLIBTOP_CMND_PROC_ARGS: number;

    /**
     * @default 28
     */
    const GLIBTOP_CMND_PROC_IO: number;

    /**
     * @default 16
     */
    const GLIBTOP_CMND_PROC_KERNEL: number;

    /**
     * @default 19
     */
    const GLIBTOP_CMND_PROC_MAP: number;

    /**
     * @default 13
     */
    const GLIBTOP_CMND_PROC_MEM: number;

    /**
     * @default 25
     */
    const GLIBTOP_CMND_PROC_OPEN_FILES: number;

    /**
     * @default 17
     */
    const GLIBTOP_CMND_PROC_SEGMENT: number;

    /**
     * @default 15
     */
    const GLIBTOP_CMND_PROC_SIGNAL: number;

    /**
     * @default 11
     */
    const GLIBTOP_CMND_PROC_STATE: number;

    /**
     * @default 14
     */
    const GLIBTOP_CMND_PROC_TIME: number;

    /**
     * @default 12
     */
    const GLIBTOP_CMND_PROC_UID: number;

    /**
     * @default 26
     */
    const GLIBTOP_CMND_PROC_WD: number;

    /**
     * @default 0
     */
    const GLIBTOP_CMND_QUIT: number;

    /**
     * @default 9
     */
    const GLIBTOP_CMND_SEM_LIMITS: number;

    /**
     * @default 7
     */
    const GLIBTOP_CMND_SHM_LIMITS: number;

    /**
     * @default 4
     */
    const GLIBTOP_CMND_SWAP: number;

    /**
     * @default 1
     */
    const GLIBTOP_CMND_SYSDEPS: number;

    /**
     * @default 5
     */
    const GLIBTOP_CMND_UPTIME: number;

    /**
     * @default 5
     */
    const GLIBTOP_CPU_FREQUENCY: number;

    /**
     * @default 4
     */
    const GLIBTOP_CPU_IDLE: number;

    /**
     * @default 12
     */
    const GLIBTOP_CPU_IOWAIT: number;

    /**
     * @default 13
     */
    const GLIBTOP_CPU_IRQ: number;

    /**
     * @default 2
     */
    const GLIBTOP_CPU_NICE: number;

    /**
     * @default 14
     */
    const GLIBTOP_CPU_SOFTIRQ: number;

    /**
     * @default 3
     */
    const GLIBTOP_CPU_SYS: number;

    /**
     * @default 0
     */
    const GLIBTOP_CPU_TOTAL: number;

    /**
     * @default 1
     */
    const GLIBTOP_CPU_USER: number;

    /**
     * @default 3
     */
    const GLIBTOP_ERROR_METHOD_ABORT: number;

    /**
     * @default 0
     */
    const GLIBTOP_ERROR_METHOD_IGNORE: number;

    /**
     * @default 2
     */
    const GLIBTOP_ERROR_METHOD_WARN: number;

    /**
     * @default 1
     */
    const GLIBTOP_ERROR_METHOD_WARN_ONCE: number;

    /**
     * Exclude idle processes.
     * @default 4096
     */
    const GLIBTOP_EXCLUDE_IDLE: number;

    /**
     * Exclude processes without a controlling terminal.
     * @default 16384
     */
    const GLIBTOP_EXCLUDE_NOTTY: number;

    /**
     * Exclude system (on most UNIXes root's) processes.
     * @default 8192
     */
    const GLIBTOP_EXCLUDE_SYSTEM: number;

    /**
     * @default 8
     */
    const GLIBTOP_FEATURES_EXCEPT: number;

    /**
     * @default 4
     */
    const GLIBTOP_FEATURES_NO_SERVER: number;

    /**
     * @default 0
     */
    const GLIBTOP_FILE_ENTRY_FD: number;

    /**
     * @default 3
     */
    const GLIBTOP_FILE_ENTRY_INETSOCKET_DST_HOST: number;

    /**
     * @default 4
     */
    const GLIBTOP_FILE_ENTRY_INETSOCKET_DST_PORT: number;

    /**
     * @default 1
     */
    const GLIBTOP_FILE_ENTRY_NAME: number;

    /**
     * @default 2
     */
    const GLIBTOP_FILE_ENTRY_TYPE: number;

    /**
     * @default 2
     */
    const GLIBTOP_FSUSAGE_BAVAIL: number;

    /**
     * @default 1
     */
    const GLIBTOP_FSUSAGE_BFREE: number;

    /**
     * @default 0
     */
    const GLIBTOP_FSUSAGE_BLOCKS: number;

    /**
     * @default 5
     */
    const GLIBTOP_FSUSAGE_BLOCK_SIZE: number;

    /**
     * @default 4
     */
    const GLIBTOP_FSUSAGE_FFREE: number;

    /**
     * @default 3
     */
    const GLIBTOP_FSUSAGE_FILES: number;

    /**
     * @default 6
     */
    const GLIBTOP_FSUSAGE_READ: number;

    /**
     * @default 7
     */
    const GLIBTOP_FSUSAGE_WRITE: number;

    /**
     * @default 2
     */
    const GLIBTOP_INIT_NO_INIT: number;

    /**
     * @default 1
     */
    const GLIBTOP_INIT_NO_OPEN: number;

    /**
     * @default 1
     */
    const GLIBTOP_IPC_MSGMAP: number;

    /**
     * @default 2
     */
    const GLIBTOP_IPC_MSGMAX: number;

    /**
     * @default 3
     */
    const GLIBTOP_IPC_MSGMNB: number;

    /**
     * @default 4
     */
    const GLIBTOP_IPC_MSGMNI: number;

    /**
     * @default 0
     */
    const GLIBTOP_IPC_MSGPOOL: number;

    /**
     * @default 5
     */
    const GLIBTOP_IPC_MSGSSZ: number;

    /**
     * @default 6
     */
    const GLIBTOP_IPC_MSGTQL: number;

    /**
     * @default 9
     */
    const GLIBTOP_IPC_SEMAEM: number;

    /**
     * @default 0
     */
    const GLIBTOP_IPC_SEMMAP: number;

    /**
     * @default 1
     */
    const GLIBTOP_IPC_SEMMNI: number;

    /**
     * @default 2
     */
    const GLIBTOP_IPC_SEMMNS: number;

    /**
     * @default 3
     */
    const GLIBTOP_IPC_SEMMNU: number;

    /**
     * @default 4
     */
    const GLIBTOP_IPC_SEMMSL: number;

    /**
     * @default 5
     */
    const GLIBTOP_IPC_SEMOPM: number;

    /**
     * @default 6
     */
    const GLIBTOP_IPC_SEMUME: number;

    /**
     * @default 7
     */
    const GLIBTOP_IPC_SEMUSZ: number;

    /**
     * @default 8
     */
    const GLIBTOP_IPC_SEMVMX: number;

    /**
     * @default 4
     */
    const GLIBTOP_IPC_SHMALL: number;

    /**
     * @default 0
     */
    const GLIBTOP_IPC_SHMMAX: number;

    /**
     * @default 1
     */
    const GLIBTOP_IPC_SHMMIN: number;

    /**
     * @default 2
     */
    const GLIBTOP_IPC_SHMMNI: number;

    /**
     * @default 3
     */
    const GLIBTOP_IPC_SHMSEG: number;

    /**
     * Return information about all processes
     * @default 0
     */
    const GLIBTOP_KERN_PROC_ALL: number;

    /**
     * @default 15
     */
    const GLIBTOP_KERN_PROC_MASK: number;

    /**
     * Return all processes in the process group passed in `arg`.
     * @default 2
     */
    const GLIBTOP_KERN_PROC_PGRP: number;

    /**
     * Return all processes with the pid which is passed in `arg`. You can use this to find out whether some process still exists.
     * @default 1
     */
    const GLIBTOP_KERN_PROC_PID: number;

    /**
     * Return all processes with the real uid passed in `arg`.
     * @default 6
     */
    const GLIBTOP_KERN_PROC_RUID: number;

    /**
     * Return all processes in the session passed in `arg`.
     * @default 3
     */
    const GLIBTOP_KERN_PROC_SESSION: number;

    /**
     * Return all processes which have the controlling tty passed in `arg`
     * (which is interpreted as the device number).
     * @default 4
     */
    const GLIBTOP_KERN_PROC_TTY: number;

    /**
     * Return all processes with the effective uid passed in `arg`.
     * @default 5
     */
    const GLIBTOP_KERN_PROC_UID: number;

    /**
     * @default 3
     */
    const GLIBTOP_LOADAVG_LAST_PID: number;

    /**
     * @default 0
     */
    const GLIBTOP_LOADAVG_LOADAVG: number;

    /**
     * @default 1
     */
    const GLIBTOP_LOADAVG_NR_RUNNING: number;

    /**
     * @default 2
     */
    const GLIBTOP_LOADAVG_NR_TASKS: number;

    /**
     * @default 5
     */
    const GLIBTOP_MAP_ENTRY_DEVICE: number;

    /**
     * @default 1
     */
    const GLIBTOP_MAP_ENTRY_END: number;

    /**
     * @default 6
     */
    const GLIBTOP_MAP_ENTRY_FILENAME: number;

    /**
     * @default 4
     */
    const GLIBTOP_MAP_ENTRY_INODE: number;

    /**
     * @default 2
     */
    const GLIBTOP_MAP_ENTRY_OFFSET: number;

    /**
     * @default 3
     */
    const GLIBTOP_MAP_ENTRY_PERM: number;

    /**
     * @default 11
     */
    const GLIBTOP_MAP_ENTRY_PRIVATE_CLEAN: number;

    /**
     * @default 12
     */
    const GLIBTOP_MAP_ENTRY_PRIVATE_DIRTY: number;

    /**
     * @default 13
     */
    const GLIBTOP_MAP_ENTRY_PSS: number;

    /**
     * @default 8
     */
    const GLIBTOP_MAP_ENTRY_RSS: number;

    /**
     * @default 9
     */
    const GLIBTOP_MAP_ENTRY_SHARED_CLEAN: number;

    /**
     * @default 10
     */
    const GLIBTOP_MAP_ENTRY_SHARED_DIRTY: number;

    /**
     * @default 7
     */
    const GLIBTOP_MAP_ENTRY_SIZE: number;

    /**
     * @default 0
     */
    const GLIBTOP_MAP_ENTRY_START: number;

    /**
     * @default 14
     */
    const GLIBTOP_MAP_ENTRY_SWAP: number;

    /**
     * @default 215
     */
    const GLIBTOP_MAP_FILENAME_LEN: number;

    /**
     * @default 4
     */
    const GLIBTOP_MAP_PERM_EXECUTE: number;

    /**
     * @default 16
     */
    const GLIBTOP_MAP_PERM_PRIVATE: number;

    /**
     * @default 1
     */
    const GLIBTOP_MAP_PERM_READ: number;

    /**
     * @default 8
     */
    const GLIBTOP_MAP_PERM_SHARED: number;

    /**
     * @default 2
     */
    const GLIBTOP_MAP_PERM_WRITE: number;

    /**
     * @default 30
     */
    const GLIBTOP_MAX_CMND: number;

    /**
     * @default 18
     */
    const GLIBTOP_MAX_CPU: number;

    /**
     * @default 4
     */
    const GLIBTOP_MAX_DISK: number;

    /**
     * @default 8
     */
    const GLIBTOP_MAX_FSUSAGE: number;

    /**
     * @default 64
     */
    const GLIBTOP_MAX_GROUPS: number;

    /**
     * @default 4
     */
    const GLIBTOP_MAX_LOADAVG: number;

    /**
     * @default 15
     */
    const GLIBTOP_MAX_MAP_ENTRY: number;

    /**
     * @default 8
     */
    const GLIBTOP_MAX_MEM: number;

    /**
     * @default 3
     */
    const GLIBTOP_MAX_MOUNTLIST: number;

    /**
     * @default 7
     */
    const GLIBTOP_MAX_MSG_LIMITS: number;

    /**
     * @default 1
     */
    const GLIBTOP_MAX_NETLIST: number;

    /**
     * @default 18
     */
    const GLIBTOP_MAX_NETLOAD: number;

    /**
     * @default 5
     */
    const GLIBTOP_MAX_OPEN_FILE_ENTRY: number;

    /**
     * @default 3
     */
    const GLIBTOP_MAX_PPP: number;

    /**
     * @default 3
     */
    const GLIBTOP_MAX_PROCLIST: number;

    /**
     * @default 2
     */
    const GLIBTOP_MAX_PROC_AFFINITY: number;

    /**
     * @default 1
     */
    const GLIBTOP_MAX_PROC_ARGS: number;

    /**
     * @default 3
     */
    const GLIBTOP_MAX_PROC_IO: number;

    /**
     * @default 9
     */
    const GLIBTOP_MAX_PROC_KERNEL: number;

    /**
     * @default 3
     */
    const GLIBTOP_MAX_PROC_MAP: number;

    /**
     * @default 6
     */
    const GLIBTOP_MAX_PROC_MEM: number;

    /**
     * @default 3
     */
    const GLIBTOP_MAX_PROC_OPEN_FILES: number;

    /**
     * @default 8
     */
    const GLIBTOP_MAX_PROC_SEGMENT: number;

    /**
     * @default 4
     */
    const GLIBTOP_MAX_PROC_SIGNAL: number;

    /**
     * @default 9
     */
    const GLIBTOP_MAX_PROC_STATE: number;

    /**
     * @default 11
     */
    const GLIBTOP_MAX_PROC_TIME: number;

    /**
     * @default 18
     */
    const GLIBTOP_MAX_PROC_UID: number;

    /**
     * @default 3
     */
    const GLIBTOP_MAX_PROC_WD: number;

    /**
     * @default 10
     */
    const GLIBTOP_MAX_SEM_LIMITS: number;

    /**
     * @default 5
     */
    const GLIBTOP_MAX_SHM_LIMITS: number;

    /**
     * @default 5
     */
    const GLIBTOP_MAX_SWAP: number;

    /**
     * @default 29
     */
    const GLIBTOP_MAX_SYSDEPS: number;

    /**
     * @default 2
     */
    const GLIBTOP_MAX_SYSINFO: number;

    /**
     * @default 3
     */
    const GLIBTOP_MAX_UPTIME: number;

    /**
     * @default 4
     */
    const GLIBTOP_MEM_BUFFER: number;

    /**
     * @default 5
     */
    const GLIBTOP_MEM_CACHED: number;

    /**
     * @default 2
     */
    const GLIBTOP_MEM_FREE: number;

    /**
     * @default 7
     */
    const GLIBTOP_MEM_LOCKED: number;

    /**
     * @default 3
     */
    const GLIBTOP_MEM_SHARED: number;

    /**
     * @default 0
     */
    const GLIBTOP_MEM_TOTAL: number;

    /**
     * @default 1
     */
    const GLIBTOP_MEM_USED: number;

    /**
     * @default 6
     */
    const GLIBTOP_MEM_USER: number;

    /**
     * @default 1
     */
    const GLIBTOP_METHOD_DIRECT: number;

    /**
     * @default 3
     */
    const GLIBTOP_METHOD_INET: number;

    /**
     * @default 2
     */
    const GLIBTOP_METHOD_PIPE: number;

    /**
     * @default 4
     */
    const GLIBTOP_METHOD_UNIX: number;

    /**
     * @default 79
     */
    const GLIBTOP_MOUNTENTRY_LEN: number;

    /**
     * @default 0
     */
    const GLIBTOP_MOUNTLIST_NUMBER: number;

    /**
     * @default 2
     */
    const GLIBTOP_MOUNTLIST_SIZE: number;

    /**
     * @default 1
     */
    const GLIBTOP_MOUNTLIST_TOTAL: number;

    /**
     * @default 1024
     */
    const GLIBTOP_NCPU: number;

    /**
     * @default 1024
     */
    const GLIBTOP_NDISK: number;

    /**
     * @default 0
     */
    const GLIBTOP_NETLIST_NUMBER: number;

    /**
     * @default 3
     */
    const GLIBTOP_NETLOAD_ADDRESS: number;

    /**
     * @default 14
     */
    const GLIBTOP_NETLOAD_ADDRESS6: number;

    /**
     * @default 7
     */
    const GLIBTOP_NETLOAD_BYTES_IN: number;

    /**
     * @default 8
     */
    const GLIBTOP_NETLOAD_BYTES_OUT: number;

    /**
     * @default 9
     */
    const GLIBTOP_NETLOAD_BYTES_TOTAL: number;

    /**
     * @default 13
     */
    const GLIBTOP_NETLOAD_COLLISIONS: number;

    /**
     * @default 10
     */
    const GLIBTOP_NETLOAD_ERRORS_IN: number;

    /**
     * @default 11
     */
    const GLIBTOP_NETLOAD_ERRORS_OUT: number;

    /**
     * @default 12
     */
    const GLIBTOP_NETLOAD_ERRORS_TOTAL: number;

    /**
     * @default 17
     */
    const GLIBTOP_NETLOAD_HWADDRESS: number;

    /**
     * @default 0
     */
    const GLIBTOP_NETLOAD_IF_FLAGS: number;

    /**
     * @default 1
     */
    const GLIBTOP_NETLOAD_MTU: number;

    /**
     * @default 4
     */
    const GLIBTOP_NETLOAD_PACKETS_IN: number;

    /**
     * @default 5
     */
    const GLIBTOP_NETLOAD_PACKETS_OUT: number;

    /**
     * @default 6
     */
    const GLIBTOP_NETLOAD_PACKETS_TOTAL: number;

    /**
     * @default 15
     */
    const GLIBTOP_NETLOAD_PREFIX6: number;

    /**
     * @default 16
     */
    const GLIBTOP_NETLOAD_SCOPE6: number;

    /**
     * @default 2
     */
    const GLIBTOP_NETLOAD_SUBNET: number;

    /**
     * @default 46
     */
    const GLIBTOP_OPEN_DEST_HOST_LEN: number;

    /**
     * @default 215
     */
    const GLIBTOP_OPEN_FILENAME_LEN: number;

    /**
     * @default 3
     */
    const GLIBTOP_PARAM_COMMAND: number;

    /**
     * @default 6
     */
    const GLIBTOP_PARAM_ERROR_METHOD: number;

    /**
     * @default 2
     */
    const GLIBTOP_PARAM_FEATURES: number;

    /**
     * @default 4
     */
    const GLIBTOP_PARAM_HOST: number;

    /**
     * @default 1
     */
    const GLIBTOP_PARAM_METHOD: number;

    /**
     * @default 5
     */
    const GLIBTOP_PARAM_PORT: number;

    /**
     * @default 7
     */
    const GLIBTOP_PARAM_REQUIRED: number;

    /**
     * @default 1
     */
    const GLIBTOP_PPP_BYTES_IN: number;

    /**
     * @default 2
     */
    const GLIBTOP_PPP_BYTES_OUT: number;

    /**
     * @default 0
     */
    const GLIBTOP_PPP_STATE: number;

    /**
     * @default 64
     */
    const GLIBTOP_PROCESS_DEAD: number;

    /**
     * @default 2
     */
    const GLIBTOP_PROCESS_INTERRUPTIBLE: number;

    /**
     * @default 1
     */
    const GLIBTOP_PROCESS_RUNNING: number;

    /**
     * @default 16
     */
    const GLIBTOP_PROCESS_STOPPED: number;

    /**
     * @default 32
     */
    const GLIBTOP_PROCESS_SWAPPING: number;

    /**
     * @default 4
     */
    const GLIBTOP_PROCESS_UNINTERRUPTIBLE: number;

    /**
     * @default 8
     */
    const GLIBTOP_PROCESS_ZOMBIE: number;

    /**
     * @default 0
     */
    const GLIBTOP_PROCLIST_NUMBER: number;

    /**
     * @default 2
     */
    const GLIBTOP_PROCLIST_SIZE: number;

    /**
     * @default 1
     */
    const GLIBTOP_PROCLIST_TOTAL: number;

    /**
     * @default 1
     */
    const GLIBTOP_PROC_AFFINITY_ALL: number;

    /**
     * @default 0
     */
    const GLIBTOP_PROC_AFFINITY_NUMBER: number;

    /**
     * @default 0
     */
    const GLIBTOP_PROC_ARGS_SIZE: number;

    /**
     * @default 2
     */
    const GLIBTOP_PROC_IO_DISK_RBYTES: number;

    /**
     * @default 0
     */
    const GLIBTOP_PROC_IO_DISK_RCHAR: number;

    /**
     * @default 3
     */
    const GLIBTOP_PROC_IO_DISK_WBYTES: number;

    /**
     * @default 1
     */
    const GLIBTOP_PROC_IO_DISK_WCHAR: number;

    /**
     * @default 4
     */
    const GLIBTOP_PROC_KERNEL_CMAJ_FLT: number;

    /**
     * @default 3
     */
    const GLIBTOP_PROC_KERNEL_CMIN_FLT: number;

    /**
     * @default 6
     */
    const GLIBTOP_PROC_KERNEL_KSTK_EIP: number;

    /**
     * @default 5
     */
    const GLIBTOP_PROC_KERNEL_KSTK_ESP: number;

    /**
     * @default 0
     */
    const GLIBTOP_PROC_KERNEL_K_FLAGS: number;

    /**
     * @default 2
     */
    const GLIBTOP_PROC_KERNEL_MAJ_FLT: number;

    /**
     * @default 1
     */
    const GLIBTOP_PROC_KERNEL_MIN_FLT: number;

    /**
     * @default 7
     */
    const GLIBTOP_PROC_KERNEL_NWCHAN: number;

    /**
     * @default 8
     */
    const GLIBTOP_PROC_KERNEL_WCHAN: number;

    /**
     * @default 0
     */
    const GLIBTOP_PROC_MAP_NUMBER: number;

    /**
     * @default 2
     */
    const GLIBTOP_PROC_MAP_SIZE: number;

    /**
     * @default 1
     */
    const GLIBTOP_PROC_MAP_TOTAL: number;

    /**
     * @default 2
     */
    const GLIBTOP_PROC_MEM_RESIDENT: number;

    /**
     * @default 4
     */
    const GLIBTOP_PROC_MEM_RSS: number;

    /**
     * @default 5
     */
    const GLIBTOP_PROC_MEM_RSS_RLIM: number;

    /**
     * @default 3
     */
    const GLIBTOP_PROC_MEM_SHARE: number;

    /**
     * @default 0
     */
    const GLIBTOP_PROC_MEM_SIZE: number;

    /**
     * @default 1
     */
    const GLIBTOP_PROC_MEM_VSIZE: number;

    /**
     * @default 0
     */
    const GLIBTOP_PROC_OPEN_FILES_NUMBER: number;

    /**
     * @default 2
     */
    const GLIBTOP_PROC_OPEN_FILES_SIZE: number;

    /**
     * @default 1
     */
    const GLIBTOP_PROC_OPEN_FILES_TOTAL: number;

    /**
     * @default 2
     */
    const GLIBTOP_PROC_SEGMENT_DATA_RSS: number;

    /**
     * @default 4
     */
    const GLIBTOP_PROC_SEGMENT_DIRTY_SIZE: number;

    /**
     * @default 6
     */
    const GLIBTOP_PROC_SEGMENT_END_CODE: number;

    /**
     * @default 1
     */
    const GLIBTOP_PROC_SEGMENT_SHLIB_RSS: number;

    /**
     * @default 3
     */
    const GLIBTOP_PROC_SEGMENT_STACK_RSS: number;

    /**
     * @default 5
     */
    const GLIBTOP_PROC_SEGMENT_START_CODE: number;

    /**
     * @default 7
     */
    const GLIBTOP_PROC_SEGMENT_START_STACK: number;

    /**
     * @default 0
     */
    const GLIBTOP_PROC_SEGMENT_TEXT_RSS: number;

    /**
     * @default 1
     */
    const GLIBTOP_PROC_SIGNAL_BLOCKED: number;

    /**
     * @default 3
     */
    const GLIBTOP_PROC_SIGNAL_SIGCATCH: number;

    /**
     * @default 2
     */
    const GLIBTOP_PROC_SIGNAL_SIGIGNORE: number;

    /**
     * @default 0
     */
    const GLIBTOP_PROC_SIGNAL_SIGNAL: number;

    /**
     * @default 0
     */
    const GLIBTOP_PROC_STATE_CMD: number;

    /**
     * @default 3
     */
    const GLIBTOP_PROC_STATE_GID: number;

    /**
     * @default 6
     */
    const GLIBTOP_PROC_STATE_HAS_CPU: number;

    /**
     * @default 8
     */
    const GLIBTOP_PROC_STATE_LAST_PROCESSOR: number;

    /**
     * @default 7
     */
    const GLIBTOP_PROC_STATE_PROCESSOR: number;

    /**
     * @default 5
     */
    const GLIBTOP_PROC_STATE_RGID: number;

    /**
     * @default 4
     */
    const GLIBTOP_PROC_STATE_RUID: number;

    /**
     * @default 1
     */
    const GLIBTOP_PROC_STATE_STATE: number;

    /**
     * @default 2
     */
    const GLIBTOP_PROC_STATE_UID: number;

    /**
     * @default 5
     */
    const GLIBTOP_PROC_TIME_CSTIME: number;

    /**
     * @default 4
     */
    const GLIBTOP_PROC_TIME_CUTIME: number;

    /**
     * @default 8
     */
    const GLIBTOP_PROC_TIME_FREQUENCY: number;

    /**
     * @default 7
     */
    const GLIBTOP_PROC_TIME_IT_REAL_VALUE: number;

    /**
     * @default 1
     */
    const GLIBTOP_PROC_TIME_RTIME: number;

    /**
     * @default 0
     */
    const GLIBTOP_PROC_TIME_START_TIME: number;

    /**
     * @default 3
     */
    const GLIBTOP_PROC_TIME_STIME: number;

    /**
     * @default 6
     */
    const GLIBTOP_PROC_TIME_TIMEOUT: number;

    /**
     * @default 2
     */
    const GLIBTOP_PROC_TIME_UTIME: number;

    /**
     * @default 10
     */
    const GLIBTOP_PROC_TIME_XCPU_STIME: number;

    /**
     * @default 9
     */
    const GLIBTOP_PROC_TIME_XCPU_UTIME: number;

    /**
     * @default 3
     */
    const GLIBTOP_PROC_UID_EGID: number;

    /**
     * @default 1
     */
    const GLIBTOP_PROC_UID_EUID: number;

    /**
     * @default 7
     */
    const GLIBTOP_PROC_UID_FSGID: number;

    /**
     * @default 6
     */
    const GLIBTOP_PROC_UID_FSUID: number;

    /**
     * @default 2
     */
    const GLIBTOP_PROC_UID_GID: number;

    /**
     * @default 17
     */
    const GLIBTOP_PROC_UID_GROUPS: number;

    /**
     * @default 16
     */
    const GLIBTOP_PROC_UID_NGROUPS: number;

    /**
     * @default 15
     */
    const GLIBTOP_PROC_UID_NICE: number;

    /**
     * @default 10
     */
    const GLIBTOP_PROC_UID_PGRP: number;

    /**
     * @default 8
     */
    const GLIBTOP_PROC_UID_PID: number;

    /**
     * @default 9
     */
    const GLIBTOP_PROC_UID_PPID: number;

    /**
     * @default 14
     */
    const GLIBTOP_PROC_UID_PRIORITY: number;

    /**
     * @default 11
     */
    const GLIBTOP_PROC_UID_SESSION: number;

    /**
     * @default 5
     */
    const GLIBTOP_PROC_UID_SGID: number;

    /**
     * @default 4
     */
    const GLIBTOP_PROC_UID_SUID: number;

    /**
     * @default 13
     */
    const GLIBTOP_PROC_UID_TPGID: number;

    /**
     * @default 12
     */
    const GLIBTOP_PROC_UID_TTY: number;

    /**
     * @default 0
     */
    const GLIBTOP_PROC_UID_UID: number;

    /**
     * @default 2
     */
    const GLIBTOP_PROC_WD_EXE: number;

    /**
     * @default 215
     */
    const GLIBTOP_PROC_WD_EXE_LEN: number;

    /**
     * @default 0
     */
    const GLIBTOP_PROC_WD_NUMBER: number;

    /**
     * @default 1
     */
    const GLIBTOP_PROC_WD_ROOT: number;

    /**
     * @default 215
     */
    const GLIBTOP_PROC_WD_ROOT_LEN: number;

    /**
     * @default 2
     */
    const GLIBTOP_SWAP_FREE: number;

    /**
     * @default 3
     */
    const GLIBTOP_SWAP_PAGEIN: number;

    /**
     * @default 4
     */
    const GLIBTOP_SWAP_PAGEOUT: number;

    /**
     * @default 0
     */
    const GLIBTOP_SWAP_TOTAL: number;

    /**
     * @default 1
     */
    const GLIBTOP_SWAP_USED: number;

    /**
     * @default 0
     */
    const GLIBTOP_SYSDEPS_ALL: number;

    /**
     * @default 1
     */
    const GLIBTOP_SYSDEPS_CPU: number;

    /**
     * @default 28
     */
    const GLIBTOP_SYSDEPS_DISK: number;

    /**
     * @default 0
     */
    const GLIBTOP_SYSDEPS_FEATURES: number;

    /**
     * @default 20
     */
    const GLIBTOP_SYSDEPS_FSUSAGE: number;

    /**
     * @default 5
     */
    const GLIBTOP_SYSDEPS_LOADAVG: number;

    /**
     * @default 2
     */
    const GLIBTOP_SYSDEPS_MEM: number;

    /**
     * @default 19
     */
    const GLIBTOP_SYSDEPS_MOUNTLIST: number;

    /**
     * @default 7
     */
    const GLIBTOP_SYSDEPS_MSG_LIMITS: number;

    /**
     * @default 23
     */
    const GLIBTOP_SYSDEPS_NETLIST: number;

    /**
     * @default 21
     */
    const GLIBTOP_SYSDEPS_NETLOAD: number;

    /**
     * @default 22
     */
    const GLIBTOP_SYSDEPS_PPP: number;

    /**
     * @default 9
     */
    const GLIBTOP_SYSDEPS_PROCLIST: number;

    /**
     * @default 26
     */
    const GLIBTOP_SYSDEPS_PROC_AFFINITY: number;

    /**
     * @default 17
     */
    const GLIBTOP_SYSDEPS_PROC_ARGS: number;

    /**
     * @default 27
     */
    const GLIBTOP_SYSDEPS_PROC_IO: number;

    /**
     * @default 15
     */
    const GLIBTOP_SYSDEPS_PROC_KERNEL: number;

    /**
     * @default 18
     */
    const GLIBTOP_SYSDEPS_PROC_MAP: number;

    /**
     * @default 12
     */
    const GLIBTOP_SYSDEPS_PROC_MEM: number;

    /**
     * @default 24
     */
    const GLIBTOP_SYSDEPS_PROC_OPEN_FILES: number;

    /**
     * @default 16
     */
    const GLIBTOP_SYSDEPS_PROC_SEGMENT: number;

    /**
     * @default 14
     */
    const GLIBTOP_SYSDEPS_PROC_SIGNAL: number;

    /**
     * @default 10
     */
    const GLIBTOP_SYSDEPS_PROC_STATE: number;

    /**
     * @default 13
     */
    const GLIBTOP_SYSDEPS_PROC_TIME: number;

    /**
     * @default 11
     */
    const GLIBTOP_SYSDEPS_PROC_UID: number;

    /**
     * @default 25
     */
    const GLIBTOP_SYSDEPS_PROC_WD: number;

    /**
     * @default 8
     */
    const GLIBTOP_SYSDEPS_SEM_LIMITS: number;

    /**
     * @default 6
     */
    const GLIBTOP_SYSDEPS_SHM_LIMITS: number;

    /**
     * @default 3
     */
    const GLIBTOP_SYSDEPS_SWAP: number;

    /**
     * @default 4
     */
    const GLIBTOP_SYSDEPS_UPTIME: number;

    /**
     * @default 1
     */
    const GLIBTOP_SYSINFO_CPUINFO: number;

    /**
     * @default 0
     */
    const GLIBTOP_SYSINFO_NCPU: number;

    /**
     * @default 2
     */
    const GLIBTOP_UPTIME_BOOT_TIME: number;

    /**
     * @default 1
     */
    const GLIBTOP_UPTIME_IDLETIME: number;

    /**
     * @default 0
     */
    const GLIBTOP_UPTIME_UPTIME: number;

    /**
     * @default 11
     */
    const GLIBTOP_XCPU_FLAGS: number;

    /**
     * @default 10
     */
    const GLIBTOP_XCPU_IDLE: number;

    /**
     * @default 15
     */
    const GLIBTOP_XCPU_IOWAIT: number;

    /**
     * @default 16
     */
    const GLIBTOP_XCPU_IRQ: number;

    /**
     * @default 8
     */
    const GLIBTOP_XCPU_NICE: number;

    /**
     * @default 17
     */
    const GLIBTOP_XCPU_SOFTIRQ: number;

    /**
     * @default 9
     */
    const GLIBTOP_XCPU_SYS: number;

    /**
     * @default 6
     */
    const GLIBTOP_XCPU_TOTAL: number;

    /**
     * @default 7
     */
    const GLIBTOP_XCPU_USER: number;

    /**
     * @default 0
     */
    const GLIBTOP_XDISK_SECTORS_READ: number;

    /**
     * @default 2
     */
    const GLIBTOP_XDISK_SECTORS_WRITE: number;

    /**
     * @default 1
     */
    const GLIBTOP_XDISK_TIME_READ: number;

    /**
     * @default 3
     */
    const GLIBTOP_XDISK_TIME_WRITE: number;

    /**
     * @default 255
     */
    const HOSTNAMSZ: number;

    /**
     * @default 2
     */
    const LIBGTOP_MAJOR_VERSION: number;

    /**
     * @default 3
     */
    const LIBGTOP_MICRO_VERSION: number;

    /**
     * @default 41
     */
    const LIBGTOP_MINOR_VERSION: number;

    /**
     * @default MAGIC-1
     */
    const MCOOKIE_NAME: string;

    /**
     * @default 42980
     */
    const MCOOKIE_SCREEN: string;

    /**
     * @default MIT-MAGIC-COOKIE-1
     */
    const MCOOKIE_X_NAME: string;

    /**
     * @default 2
     */
    const PATCHLEVEL: number;

    /**
     * @default 300
     */
    const REPLYSIZ: number;

    /**
     * @default 101
     */
    const TABLE_SIZE: number;

    /**
     * @default 1
     */
    const TRUE: number;

    function glibtop_close(): void;

    /**
     * @param buf 
     */
    function glibtop_get_cpu(buf: glibtop_cpu): void;

    /**
     * @param buf 
     */
    function glibtop_get_disk(buf: glibtop_disk): void;

    /**
     * @param buf 
     * @param mount_dir 
     */
    function glibtop_get_fsusage(buf: glibtop_fsusage, mount_dir: string): void;

    /**
     * @param buf 
     */
    function glibtop_get_loadavg(buf: glibtop_loadavg): void;

    /**
     * @param buf 
     */
    function glibtop_get_mem(buf: glibtop_mem): void;

    /**
     * @param buf 
     * @param all_fs 
     */
    function glibtop_get_mountlist(buf: glibtop_mountlist, all_fs: number): glibtop_mountentry[];

    /**
     * @param buf 
     */
    function glibtop_get_msg_limits(buf: glibtop_msg_limits): void;

    /**
     * @param buf a {@link GTop.glibtop_netlist}
     * @returns an array of network          interface names.
     */
    function glibtop_get_netlist(buf: glibtop_netlist): string[];

    /**
     * @param buf 
     * @param _interface 
     */
    function glibtop_get_netload(buf: glibtop_netload, _interface: string): void;

    /**
     * @param buf 
     * @param device 
     */
    function glibtop_get_ppp(buf: glibtop_ppp, device: number): void;

    /**
     * @param buf 
     * @param pid 
     */
    function glibtop_get_proc_affinity(buf: glibtop_proc_affinity, pid: never): number;

    /**
     * @param buf 
     * @param pid 
     * @param max_len 
     */
    function glibtop_get_proc_args(buf: glibtop_proc_args, pid: never, max_len: number): string;

    /**
     * @param buf 
     * @param pid 
     * @param max_len 
     */
    function glibtop_get_proc_argv(buf: glibtop_proc_args, pid: never, max_len: number): string[];

    /**
     * @param buf 
     * @param pid 
     */
    function glibtop_get_proc_io(buf: glibtop_proc_io, pid: never): void;

    /**
     * @param buf 
     * @param pid 
     */
    function glibtop_get_proc_kernel(buf: glibtop_proc_kernel, pid: never): void;

    /**
     * @param buf 
     * @param pid 
     */
    function glibtop_get_proc_map(buf: glibtop_proc_map, pid: never): glibtop_map_entry[];

    /**
     * @param buf 
     * @param pid 
     */
    function glibtop_get_proc_mem(buf: glibtop_proc_mem, pid: never): void;

    /**
     * @param buf 
     * @param pid 
     */
    function glibtop_get_proc_open_files(buf: glibtop_proc_open_files, pid: never): glibtop_open_files_entry[];

    /**
     * @param buf 
     * @param pid 
     */
    function glibtop_get_proc_segment(buf: glibtop_proc_segment, pid: never): void;

    /**
     * @param buf 
     * @param pid 
     */
    function glibtop_get_proc_signal(buf: glibtop_proc_signal, pid: never): void;

    /**
     * @param buf 
     * @param pid 
     */
    function glibtop_get_proc_state(buf: glibtop_proc_state, pid: never): void;

    /**
     * @param buf 
     * @param pid 
     */
    function glibtop_get_proc_time(buf: glibtop_proc_time, pid: never): void;

    /**
     * @param buf 
     * @param pid 
     */
    function glibtop_get_proc_uid(buf: glibtop_proc_uid, pid: never): void;

    /**
     * @param buf 
     * @param pid 
     */
    function glibtop_get_proc_wd(buf: glibtop_proc_wd, pid: never): string[];

    /**
     * @param buf a {@link GTop.glibtop_proclist}
     * @param which a #GLIBTOP_* constant specifying process type
     * @param arg an argument specific for the process type
     * @returns an array of process     ids
     */
    function glibtop_get_proclist(buf: glibtop_proclist, which: bigint | number, arg: bigint | number): never[];

    /**
     * @param buf 
     */
    function glibtop_get_sem_limits(buf: glibtop_sem_limits): void;

    /**
     * @param buf a {@link GTop.glibtop_shm_limits}
     */
    function glibtop_get_shm_limits(buf: glibtop_shm_limits): void;

    /**
     * @param buf 
     */
    function glibtop_get_swap(buf: glibtop_swap): void;

    /**
     * @param buf 
     */
    function glibtop_get_sysdeps(buf: glibtop_sysdeps): void;

    function glibtop_get_sysinfo(): glibtop_sysinfo;

    /**
     * @param buf 
     */
    function glibtop_get_uptime(buf: glibtop_uptime): void;

    function glibtop_init(): glibtop;

    /**
     * @param features 
     * @param flags 
     */
    function glibtop_init_r(features: bigint | number, flags: number): [glibtop, glibtop];

    /**
     * @param host 
     */
    function glibtop_internet_addr(host: string): number;

    /**
     * @param hostarg 
     * @param portarg 
     * @param s 
     */
    function glibtop_make_connection(hostarg: string, portarg: number, s: number): number;

    /**
     * @gir-type Struct
     */
    class glibtop {
        static $gtype: GObject.GType<glibtop>;

        // Fields
        flags: number;

        method: number;

        error_method: number;

        input: number[];

        output: number[];

        socket: number;

        ncpu: number;

        real_ncpu: number;

        os_version_code: number;

        name: string;

        server_command: string;

        server_host: string;

        server_user: string;

        server_rsh: string;

        features: number;

        server_port: number;

        pid: never;

        uid: never;

        euid: never;

        gid: never;

        egid: never;

        ndisk: number;

        real_ndisk: number;

        // Static methods
        static close(): void;

        /**
         * @param buf 
         */
        static get_cpu(buf: glibtop_cpu): void;

        /**
         * @param buf 
         */
        static get_disk(buf: glibtop_disk): void;

        /**
         * @param buf 
         * @param mount_dir 
         */
        static get_fsusage(buf: glibtop_fsusage, mount_dir: string): void;

        /**
         * @param buf 
         */
        static get_loadavg(buf: glibtop_loadavg): void;

        /**
         * @param buf 
         */
        static get_mem(buf: glibtop_mem): void;

        /**
         * @param buf 
         * @param all_fs 
         */
        static get_mountlist(buf: glibtop_mountlist, all_fs: number): glibtop_mountentry[];

        /**
         * @param buf 
         */
        static get_msg_limits(buf: glibtop_msg_limits): void;

        /**
         * @param buf a {@link GTop.glibtop_netlist}
         */
        static get_netlist(buf: glibtop_netlist): string[];

        /**
         * @param buf 
         * @param _interface 
         */
        static get_netload(buf: glibtop_netload, _interface: string): void;

        /**
         * @param buf 
         * @param device 
         */
        static get_ppp(buf: glibtop_ppp, device: number): void;

        /**
         * @param buf 
         * @param pid 
         */
        static get_proc_affinity(buf: glibtop_proc_affinity, pid: never): number;

        /**
         * @param buf 
         * @param pid 
         * @param max_len 
         */
        static get_proc_args(buf: glibtop_proc_args, pid: never, max_len: number): string;

        /**
         * @param buf 
         * @param pid 
         * @param max_len 
         */
        static get_proc_argv(buf: glibtop_proc_args, pid: never, max_len: number): string[];

        /**
         * @param buf 
         * @param pid 
         */
        static get_proc_io(buf: glibtop_proc_io, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        static get_proc_kernel(buf: glibtop_proc_kernel, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        static get_proc_map(buf: glibtop_proc_map, pid: never): glibtop_map_entry[];

        /**
         * @param buf 
         * @param pid 
         */
        static get_proc_mem(buf: glibtop_proc_mem, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        static get_proc_open_files(buf: glibtop_proc_open_files, pid: never): glibtop_open_files_entry[];

        /**
         * @param buf 
         * @param pid 
         */
        static get_proc_segment(buf: glibtop_proc_segment, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        static get_proc_signal(buf: glibtop_proc_signal, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        static get_proc_state(buf: glibtop_proc_state, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        static get_proc_time(buf: glibtop_proc_time, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        static get_proc_uid(buf: glibtop_proc_uid, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        static get_proc_wd(buf: glibtop_proc_wd, pid: never): string[];

        /**
         * @param buf a {@link GTop.glibtop_proclist}
         * @param which a #GLIBTOP_* constant specifying process type
         * @param arg an argument specific for the process type
         */
        static get_proclist(buf: glibtop_proclist, which: bigint | number, arg: bigint | number): never[];

        /**
         * @param buf 
         */
        static get_sem_limits(buf: glibtop_sem_limits): void;

        /**
         * @param buf a {@link GTop.glibtop_shm_limits}
         */
        static get_shm_limits(buf: glibtop_shm_limits): void;

        /**
         * @param buf 
         */
        static get_swap(buf: glibtop_swap): void;

        /**
         * @param buf 
         */
        static get_sysdeps(buf: glibtop_sysdeps): void;

        static get_sysinfo(): glibtop_sysinfo;

        /**
         * @param buf 
         */
        static get_uptime(buf: glibtop_uptime): void;

        static init(): glibtop;

        /**
         * @param features 
         * @param flags 
         */
        static init_r(features: bigint | number, flags: number): [glibtop, glibtop];

        /**
         * @param host 
         */
        static internet_addr(host: string): number;

        /**
         * @param hostarg 
         * @param portarg 
         * @param s 
         */
        static make_connection(hostarg: string, portarg: number, s: number): number;

        // Methods
        /**
         * @param command 
         * @param send_size 
         * @param send_buf 
         * @param recv_size 
         * @param recv_buf 
         */
        call_l(command: number, send_size: bigint | number, send_buf: null, recv_size: bigint | number, recv_buf: null): null;

        /**
         * @param command 
         * @param send_size 
         * @param send_buf 
         * @param recv_size 
         * @param recv_buf 
         */
        call_s(command: number, send_size: bigint | number, send_buf: null, recv_size: bigint | number, recv_buf: null): null;

        close_p(): void;

        close_r(): void;

        close_s(): void;

        /**
         * @param buf 
         */
        get_cpu_l(buf: glibtop_cpu): void;

        /**
         * @param buf 
         */
        get_cpu_s(buf: glibtop_cpu): void;

        /**
         * @param buf 
         */
        get_disk_l(buf: glibtop_disk): void;

        /**
         * @param buf 
         */
        get_disk_s(buf: glibtop_disk): void;

        /**
         * @param buf 
         * @param mount_dir 
         */
        get_fsusage_l(buf: glibtop_fsusage, mount_dir: string): void;

        /**
         * @param buf 
         * @param mount_dir 
         */
        get_fsusage_s(buf: glibtop_fsusage, mount_dir: string): void;

        /**
         * @param buf 
         */
        get_loadavg_l(buf: glibtop_loadavg): void;

        /**
         * @param buf 
         */
        get_loadavg_s(buf: glibtop_loadavg): void;

        /**
         * @param buf 
         */
        get_mem_l(buf: glibtop_mem): void;

        /**
         * @param buf 
         */
        get_mem_s(buf: glibtop_mem): void;

        /**
         * @param all_fs 
         */
        get_mountlist_l(all_fs: number): [glibtop_mountentry[], glibtop_mountlist];

        /**
         * @param all_fs 
         */
        get_mountlist_s(all_fs: number): [glibtop_mountentry[], glibtop_mountlist];

        /**
         * @param buf 
         */
        get_msg_limits_l(buf: glibtop_msg_limits): void;

        /**
         * @param buf 
         */
        get_msg_limits_s(buf: glibtop_msg_limits): void;

        /**
         * @param buf a {@link GTop.glibtop_netlist}
         * @returns an array of network          interface names.
         */
        get_netlist_l(buf: glibtop_netlist): string[];

        /**
         * @param buf a {@link GTop.glibtop_netlist}
         * @returns an array of network          interface names.
         */
        get_netlist_s(buf: glibtop_netlist): string[];

        /**
         * @param buf 
         * @param _interface 
         */
        get_netload_l(buf: glibtop_netload, _interface: string): void;

        /**
         * @param buf 
         * @param _interface 
         */
        get_netload_s(buf: glibtop_netload, _interface: string): void;

        /**
         * @param parameter 
         * @param data_ptr 
         * @param data_size 
         */
        get_parameter_l(parameter: number, data_ptr: null, data_size: bigint | number): number;

        /**
         * @param buf 
         * @param device 
         */
        get_ppp_l(buf: glibtop_ppp, device: number): void;

        /**
         * @param buf 
         * @param device 
         */
        get_ppp_s(buf: glibtop_ppp, device: number): void;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_affinity_l(buf: glibtop_proc_affinity, pid: never): number;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_affinity_s(buf: glibtop_proc_affinity, pid: never): number;

        /**
         * @param buf 
         * @param pid 
         * @param max_len 
         */
        get_proc_args_l(buf: glibtop_proc_args, pid: never, max_len: number): string;

        /**
         * @param buf 
         * @param pid 
         * @param max_len 
         */
        get_proc_args_s(buf: glibtop_proc_args, pid: never, max_len: number): string;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_io_l(buf: glibtop_proc_io, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_io_s(buf: glibtop_proc_io, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_kernel_l(buf: glibtop_proc_kernel, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_kernel_s(buf: glibtop_proc_kernel, pid: never): void;

        /**
         * @param pid 
         */
        get_proc_map_l(pid: never): [glibtop_map_entry[], glibtop_proc_map];

        /**
         * @param pid 
         */
        get_proc_map_s(pid: never): [glibtop_map_entry[], glibtop_proc_map];

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_mem_l(buf: glibtop_proc_mem, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_mem_s(buf: glibtop_proc_mem, pid: never): void;

        /**
         * @param pid 
         */
        get_proc_open_files_l(pid: never): [glibtop_open_files_entry[], glibtop_proc_open_files];

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_open_files_s(buf: glibtop_proc_open_files, pid: never): glibtop_open_files_entry;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_segment_l(buf: glibtop_proc_segment, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_segment_s(buf: glibtop_proc_segment, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_signal_l(buf: glibtop_proc_signal, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_signal_s(buf: glibtop_proc_signal, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_state_l(buf: glibtop_proc_state, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_state_s(buf: glibtop_proc_state, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_time_l(buf: glibtop_proc_time, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_time_s(buf: glibtop_proc_time, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_uid_l(buf: glibtop_proc_uid, pid: never): void;

        /**
         * @param buf 
         * @param pid 
         */
        get_proc_uid_s(buf: glibtop_proc_uid, pid: never): void;

        /**
         * @param buf a {@link GTop.glibtop_proclist}
         * @param which a #GLIBTOP_* constant specifying process type
         * @param arg an argument specific for the process type
         * @returns an array of process     ids
         */
        get_proclist_l(buf: glibtop_proclist, which: bigint | number, arg: bigint | number): never[];

        /**
         * @param buf a {@link GTop.glibtop_proclist}
         * @param which a #GLIBTOP_* constant specifying process type
         * @param arg an argument specific for the process type
         * @returns an array of process     ids
         */
        get_proclist_s(buf: glibtop_proclist, which: bigint | number, arg: bigint | number): never[];

        /**
         * @param buf 
         */
        get_sem_limits_l(buf: glibtop_sem_limits): void;

        /**
         * @param buf 
         */
        get_sem_limits_s(buf: glibtop_sem_limits): void;

        /**
         * @param buf a {@link GTop.glibtop_shm_limits}
         */
        get_shm_limits_l(buf: glibtop_shm_limits): void;

        /**
         * @param buf a {@link GTop.glibtop_shm_limits}
         */
        get_shm_limits_s(buf: glibtop_shm_limits): void;

        /**
         * @param buf 
         */
        get_swap_l(buf: glibtop_swap): void;

        /**
         * @param buf 
         */
        get_swap_s(buf: glibtop_swap): void;

        /**
         * @param buf 
         */
        get_sysdeps_r(buf: glibtop_sysdeps): void;

        get_sysinfo_s(): glibtop_sysinfo;

        /**
         * @param buf 
         */
        get_uptime_l(buf: glibtop_uptime): void;

        /**
         * @param buf 
         */
        get_uptime_s(buf: glibtop_uptime): void;

        /**
         * @param features 
         * @param flags 
         */
        init_p(features: bigint | number, flags: number): void;

        /**
         * @param program_name 
         * @param features 
         * @param flags 
         */
        open_l(program_name: string, features: bigint | number, flags: number): void;

        /**
         * @param program_name 
         * @param features 
         * @param flags 
         */
        open_p(program_name: string, features: bigint | number, flags: number): void;

        /**
         * @param program_name 
         * @param features 
         * @param flags 
         */
        open_s(program_name: string, features: bigint | number, flags: number): void;

        /**
         * @param parameter 
         * @param data_ptr 
         * @param data_size 
         */
        set_parameter_l(parameter: number, data_ptr: null, data_size: bigint | number): void;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_command {
        static $gtype: GObject.GType<glibtop_command>;

        // Fields
        command: number;

        size: number;

        data_size: number;

        parameter: number[];
    }


    /**
     * @gir-type Struct
     */
    class glibtop_cpu {
        static $gtype: GObject.GType<glibtop_cpu>;

        // Fields
        flags: number;

        total: number;

        user: number;

        nice: number;

        sys: number;

        idle: number;

        iowait: number;

        irq: number;

        softirq: number;

        frequency: number;

        xcpu_total: number[];

        xcpu_user: number[];

        xcpu_nice: number[];

        xcpu_sys: number[];

        xcpu_idle: number[];

        xcpu_iowait: number[];

        xcpu_irq: number[];

        xcpu_softirq: number[];

        xcpu_flags: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_disk {
        static $gtype: GObject.GType<glibtop_disk>;

        // Fields
        flags: number;

        xdisk_sectors_read: number[];

        xdisk_time_read: number[];

        xdisk_sectors_write: number[];

        xdisk_time_write: number[];

        xdisk_flags: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_entry {
        static $gtype: GObject.GType<glibtop_entry>;

        // Fields
        labels: null[];
    }


    /**
     * @gir-type Struct
     */
    class glibtop_fsusage {
        static $gtype: GObject.GType<glibtop_fsusage>;

        // Fields
        flags: number;

        blocks: number;

        bfree: number;

        bavail: number;

        files: number;

        ffree: number;

        block_size: number;

        read: number;

        write: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_loadavg {
        static $gtype: GObject.GType<glibtop_loadavg>;

        // Fields
        flags: number;

        loadavg: number[];

        nr_running: number;

        nr_tasks: number;

        last_pid: number;
    }


    /**
     * @gir-type Struct
     */
    abstract class glibtop_machine {
        static $gtype: GObject.GType<glibtop_machine>;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_map_entry {
        static $gtype: GObject.GType<glibtop_map_entry>;

        // Fields
        flags: number;

        start: number;

        end: number;

        offset: number;

        perm: number;

        inode: number;

        device: number;

        size: number;

        rss: number;

        shared_clean: number;

        shared_dirty: number;

        private_clean: number;

        private_dirty: number;

        pss: number;

        swap: number;

        filename: number[];
    }


    /**
     * @gir-type Struct
     */
    class glibtop_mem {
        static $gtype: GObject.GType<glibtop_mem>;

        // Fields
        flags: number;

        total: number;

        used: number;

        free: number;

        shared: number;

        buffer: number;

        cached: number;

        user: number;

        locked: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_mountentry {
        static $gtype: GObject.GType<glibtop_mountentry>;

        // Fields
        dev: number;

        devname: number[];

        mountdir: number[];

        type: number[];
    }


    /**
     * @gir-type Struct
     */
    class glibtop_mountlist {
        static $gtype: GObject.GType<glibtop_mountlist>;

        // Fields
        flags: number;

        number: number;

        total: number;

        size: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_msg_limits {
        static $gtype: GObject.GType<glibtop_msg_limits>;

        // Fields
        flags: number;

        msgpool: number;

        msgmap: number;

        msgmax: number;

        msgmnb: number;

        msgmni: number;

        msgssz: number;

        msgtql: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_netlist {
        static $gtype: GObject.GType<glibtop_netlist>;

        // Fields
        flags: number;

        number: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_netload {
        static $gtype: GObject.GType<glibtop_netload>;

        // Fields
        flags: number;

        if_flags: number;

        mtu: number;

        subnet: number;

        address: number;

        packets_in: number;

        packets_out: number;

        packets_total: number;

        bytes_in: number;

        bytes_out: number;

        bytes_total: number;

        errors_in: number;

        errors_out: number;

        errors_total: number;

        collisions: number;

        address6: Uint8Array;

        prefix6: Uint8Array;

        scope6: number;

        hwaddress: Uint8Array;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_open_files_entry {
        static $gtype: GObject.GType<glibtop_open_files_entry>;

        // Fields
        fd: number;

        type: number;

        // Constructors

        constructor(properties?: Partial<{
            fd: number;
            type: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class glibtop_ppp {
        static $gtype: GObject.GType<glibtop_ppp>;

        // Fields
        flags: number;

        state: number;

        bytes_in: number;

        bytes_out: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_proc_affinity {
        static $gtype: GObject.GType<glibtop_proc_affinity>;

        // Fields
        flags: number;

        number: number;

        all: boolean;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_proc_args {
        static $gtype: GObject.GType<glibtop_proc_args>;

        // Fields
        flags: number;

        size: number;
    }


    /**
     * Process disk io data filled by `glibtop_get_proc_io()`.
     * @gir-type Struct
     */
    class glibtop_proc_io {
        static $gtype: GObject.GType<glibtop_proc_io>;

        // Fields
        flags: number;

        disk_rchar: number;

        disk_wchar: number;

        disk_rbytes: number;

        disk_wbytes: number;

        reserved: number[];
    }


    /**
     * @gir-type Struct
     */
    class glibtop_proc_kernel {
        static $gtype: GObject.GType<glibtop_proc_kernel>;

        // Fields
        flags: number;

        k_flags: number;

        min_flt: number;

        maj_flt: number;

        cmin_flt: number;

        cmaj_flt: number;

        kstk_esp: number;

        kstk_eip: number;

        nwchan: number;

        wchan: number[];
    }


    /**
     * @gir-type Struct
     */
    class glibtop_proc_map {
        static $gtype: GObject.GType<glibtop_proc_map>;

        // Fields
        flags: number;

        number: number;

        total: number;

        size: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_proc_mem {
        static $gtype: GObject.GType<glibtop_proc_mem>;

        // Fields
        flags: number;

        size: number;

        vsize: number;

        resident: number;

        share: number;

        rss: number;

        rss_rlim: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_proc_open_files {
        static $gtype: GObject.GType<glibtop_proc_open_files>;

        // Fields
        flags: number;

        number: number;

        total: number;

        size: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_proc_segment {
        static $gtype: GObject.GType<glibtop_proc_segment>;

        // Fields
        flags: number;

        text_rss: number;

        shlib_rss: number;

        data_rss: number;

        stack_rss: number;

        dirty_size: number;

        start_code: number;

        end_code: number;

        start_stack: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_proc_signal {
        static $gtype: GObject.GType<glibtop_proc_signal>;

        // Fields
        flags: number;

        signal: number[];

        blocked: number[];

        sigignore: number[];

        sigcatch: number[];
    }


    /**
     * @gir-type Struct
     */
    class glibtop_proc_state {
        static $gtype: GObject.GType<glibtop_proc_state>;

        // Fields
        flags: number;

        cmd: number[];

        state: number;

        uid: number;

        gid: number;

        ruid: number;

        rgid: number;

        has_cpu: number;

        processor: number;

        last_processor: number;
    }


    /**
     * Process time data filled by `glibtop_get_proc_time()`.
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
     * @gir-type Struct
     */
    class glibtop_proc_time {
        static $gtype: GObject.GType<glibtop_proc_time>;

        // Fields
        start_time: number;

        rtime: number;

        utime: number;

        stime: number;

        cutime: number;

        cstime: number;

        timeout: number;

        it_real_value: number;

        frequency: number;

        xcpu_utime: number[];

        xcpu_stime: number[];
    }


    /**
     * @gir-type Struct
     */
    class glibtop_proc_uid {
        static $gtype: GObject.GType<glibtop_proc_uid>;

        // Fields
        flags: number;

        uid: number;

        euid: number;

        gid: number;

        egid: number;

        suid: number;

        sgid: number;

        fsuid: number;

        fsgid: number;

        pid: number;

        ppid: number;

        pgrp: number;

        session: number;

        tty: number;

        tpgid: number;

        priority: number;

        nice: number;

        ngroups: number;

        groups: number[];
    }


    /**
     * @gir-type Struct
     */
    class glibtop_proc_wd {
        static $gtype: GObject.GType<glibtop_proc_wd>;

        // Fields
        flags: number;

        number: number;

        root: number[];

        exe: number[];
    }


    /**
     * @gir-type Struct
     */
    class glibtop_proclist {
        static $gtype: GObject.GType<glibtop_proclist>;

        // Fields
        flags: number;

        number: number;

        total: number;

        size: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_response {
        static $gtype: GObject.GType<glibtop_response>;

        // Fields
        offset: number;

        size: number;

        data_size: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_sem_limits {
        static $gtype: GObject.GType<glibtop_sem_limits>;

        // Fields
        flags: number;

        semmap: number;

        semmni: number;

        semmns: number;

        semmnu: number;

        semmsl: number;

        semopm: number;

        semume: number;

        semusz: number;

        semvmx: number;

        semaem: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_shm_limits {
        static $gtype: GObject.GType<glibtop_shm_limits>;

        // Fields
        flags: number;

        shmmax: number;

        shmmin: number;

        shmmni: number;

        shmseg: number;

        shmall: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_signame {
        static $gtype: GObject.GType<glibtop_signame>;

        // Fields
        number: number;

        name: string;

        label: string;

        // Constructors

        constructor(properties?: Partial<{
            number: number;
            name: string;
            label: string;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class glibtop_swap {
        static $gtype: GObject.GType<glibtop_swap>;

        // Fields
        flags: number;

        total: number;

        used: number;

        free: number;

        pagein: number;

        pageout: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_sysdeps {
        static $gtype: GObject.GType<glibtop_sysdeps>;

        // Fields
        flags: number;

        features: number;

        cpu: number;

        mem: number;

        swap: number;

        uptime: number;

        loadavg: number;

        shm_limits: number;

        msg_limits: number;

        sem_limits: number;

        proclist: number;

        proc_state: number;

        proc_uid: number;

        proc_mem: number;

        proc_time: number;

        proc_signal: number;

        proc_kernel: number;

        proc_segment: number;

        proc_args: number;

        proc_map: number;

        proc_open_files: number;

        mountlist: number;

        fsusage: number;

        netlist: number;

        netload: number;

        ppp: number;

        proc_wd: number;

        proc_affinity: number;

        proc_io: number;

        disk: number;

        reserved1: number;

        reserved2: number;

        reserved3: number;

        reserved4: number;

        reserved5: number;

        reserved6: number;

        reserved7: number;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_sysinfo {
        static $gtype: GObject.GType<glibtop_sysinfo>;

        // Fields
        flags: number;

        ncpu: number;

        cpuinfo: glibtop_entry[];
    }


    /**
     * @gir-type Struct
     */
    class glibtop_uptime {
        static $gtype: GObject.GType<glibtop_uptime>;

        // Fields
        flags: number;

        uptime: number;

        idletime: number;

        boot_time: number;
    }


    /**
     * @gir-type Struct
     */
    class partition_info {
        static $gtype: GObject.GType<partition_info>;

        // Fields
        name: number[];

        type: number[];

        raid_num: number[];

        max: number;

        // Constructors

        constructor(properties?: Partial<{
            name: number[];
            type: number[];
            raid_num: number[];
            max: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class glibtop_response_union {
        static $gtype: GObject.GType<glibtop_response_union>;
    }


    /**
     * @gir-type Struct
     */
    class glibtop_union {
        static $gtype: GObject.GType<glibtop_union>;
    }


    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;

    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default GTop;

// END
