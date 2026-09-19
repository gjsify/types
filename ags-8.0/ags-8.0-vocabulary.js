// The widget vocabulary of Ags-8.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Ags-8.0 — prop(s) no TypeScript value satisfies: Ags.File.xml-doc Ags.FileIdRef.node Ags.FileIdRef.reference Ags.FileLaunch.node Ags.FileLaunch.reference Ags.FileLookup.node Ags.FileLookup.reference Ags.Function.pivot-table Ags.MessageEnvelope.xml-doc Ags.SolverMatrix.solver-path Ags.SolverPolynomial.symbol Ags.Turtle.xml-doc
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Ags',
    version: '8.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['Ags.File.xml-doc', 'Ags.FileIdRef.node', 'Ags.FileIdRef.reference', 'Ags.FileLaunch.node', 'Ags.FileLaunch.reference', 'Ags.FileLookup.node', 'Ags.FileLookup.reference', 'Ags.Function.pivot-table', 'Ags.MessageEnvelope.xml-doc', 'Ags.SolverMatrix.solver-path', 'Ags.SolverPolynomial.symbol', 'Ags.Turtle.xml-doc'],
    unresolvedProps: [],
    identifierPrefixes: ['Ags'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    AgsApplicationContext: ['config', 'file', 'main-loop', 'task-launcher'],
    AgsController: ['context-path', 'server'],
    AgsConversion: ['description', 'name'],
    AgsFile: ['audio-encoding', 'audio-format', 'encoding', 'filename', 'xml-doc'],
    AgsFileIdRef: ['file', 'node', 'reference', 'xpath'],
    AgsFileLaunch: ['file', 'node', 'reference'],
    AgsFileLink: ['data', 'filename'],
    AgsFileLookup: ['file', 'node', 'reference'],
    AgsFunction: ['normalized-function', 'pivot-table', 'source-function'],
    AgsMessageEnvelope: ['recipient', 'sender', 'xml-doc'],
    AgsMessageQueue: ['recipient-namespace', 'sender-namespace'],
    AgsRegistry: ['server'],
    AgsReturnableThread: ['thread-pool'],
    AgsSecurityContext: ['certs'],
    AgsServer: ['controller', 'domain', 'front-controller', 'ip4', 'ip6', 'path', 'realm', 'server-port'],
    AgsSolverMatrix: ['solver-path', 'source-function'],
    AgsSolverPolynomial: ['coefficient', 'coefficient-value', 'polynomial', 'symbol'],
    AgsSolverVector: ['source-polynomial'],
    AgsTask: ['task-launcher'],
    AgsTaskCompletion: ['task'],
    AgsThread: ['delay', 'frequency', 'max-precision'],
    AgsThreadApplicationContext: ['thread-pool'],
    AgsThreadPool: ['max-threads', 'max-unused-threads'],
    AgsTurtle: ['filename', 'xml-doc'],
};

export const OWN_SIGNALS = {
    AgsApplicationContext: ['load-config', 'prepare', 'quit', 'register-types', 'setup'],
    AgsConfig: ['get-value', 'load-defaults', 'set-value'],
    AgsConversion: ['convert'],
    AgsFile: ['open', 'open-from-data', 'read', 'read-resolve', 'read-start', 'rw-open', 'write', 'write-concurrent', 'write-resolve'],
    AgsFileIdRef: ['resolved'],
    AgsFileLaunch: ['start'],
    AgsFileLookup: ['resolve'],
    AgsFrontController: ['do-request'],
    AgsMainLoop: ['change-frequency'],
    AgsPriority: ['get-value', 'load-defaults', 'set-value'],
    AgsReturnableThread: ['safe-run'],
    AgsServer: ['listen', 'start', 'stop'],
    AgsTask: ['failure', 'launch'],
    AgsTaskCompletion: ['complete'],
    AgsTaskLauncher: ['run'],
    AgsThread: ['clock', 'recover-dead-lock', 'run', 'start', 'stop'],
    AgsThreadPool: ['start'],
    AgsWorkerThread: ['do-poll'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    AgsApplicationContext: ['AgsApplicationContext', 'GObject', 'AgsConnectable'],
    AgsAuthSecurityContext: ['AgsAuthSecurityContext', 'AgsSecurityContext', 'GObject'],
    AgsAuthenticationManager: ['AgsAuthenticationManager', 'GObject'],
    AgsBusinessGroupManager: ['AgsBusinessGroupManager', 'GObject'],
    AgsCertificateManager: ['AgsCertificateManager', 'GObject'],
    AgsConfig: ['AgsConfig', 'GObject'],
    AgsController: ['AgsController', 'GObject'],
    AgsConversion: ['AgsConversion', 'GObject'],
    AgsDestroyWorker: ['AgsDestroyWorker', 'AgsWorkerThread', 'AgsThread', 'GObject', 'AgsConnectable'],
    AgsFile: ['AgsFile', 'GObject'],
    AgsFileIdRef: ['AgsFileIdRef', 'GObject'],
    AgsFileLaunch: ['AgsFileLaunch', 'GObject'],
    AgsFileLink: ['AgsFileLink', 'GObject', 'AgsPlugin'],
    AgsFileLookup: ['AgsFileLookup', 'GObject'],
    AgsFrontController: ['AgsFrontController', 'AgsController', 'GObject'],
    AgsFunction: ['AgsFunction', 'GObject'],
    AgsGenericMainLoop: ['AgsGenericMainLoop', 'AgsThread', 'GObject', 'AgsConnectable', 'AgsMainLoop'],
    AgsLog: ['AgsLog', 'GObject'],
    AgsMessageDelivery: ['AgsMessageDelivery', 'GObject'],
    AgsMessageEnvelope: ['AgsMessageEnvelope', 'GObject'],
    AgsMessageQueue: ['AgsMessageQueue', 'GObject'],
    AgsPasswordStoreManager: ['AgsPasswordStoreManager', 'GObject'],
    AgsPriority: ['AgsPriority', 'GObject'],
    AgsRegistry: ['AgsRegistry', 'GObject'],
    AgsReturnableThread: ['AgsReturnableThread', 'AgsThread', 'GObject', 'AgsConnectable'],
    AgsSecurityContext: ['AgsSecurityContext', 'GObject'],
    AgsServer: ['AgsServer', 'GObject'],
    AgsServerApplicationContext: ['AgsServerApplicationContext', 'AgsApplicationContext', 'GObject', 'AgsConcurrencyProvider', 'AgsConnectable', 'AgsServiceProvider'],
    AgsServerStatus: ['AgsServerStatus', 'GObject', 'AgsConnectable'],
    AgsSolverMatrix: ['AgsSolverMatrix', 'GObject'],
    AgsSolverPolynomial: ['AgsSolverPolynomial', 'GObject'],
    AgsSolverVector: ['AgsSolverVector', 'GObject'],
    AgsTask: ['AgsTask', 'GObject'],
    AgsTaskCompletion: ['AgsTaskCompletion', 'GObject', 'AgsConnectable'],
    AgsTaskLauncher: ['AgsTaskLauncher', 'GObject', 'AgsConnectable'],
    AgsThread: ['AgsThread', 'GObject', 'AgsConnectable'],
    AgsThreadApplicationContext: ['AgsThreadApplicationContext', 'AgsApplicationContext', 'GObject', 'AgsConcurrencyProvider', 'AgsConnectable'],
    AgsThreadPool: ['AgsThreadPool', 'GObject'],
    AgsTimestamp: ['AgsTimestamp', 'GObject'],
    AgsTurtle: ['AgsTurtle', 'GObject'],
    AgsTurtleManager: ['AgsTurtleManager', 'GObject'],
    AgsWorkerThread: ['AgsWorkerThread', 'AgsThread', 'GObject', 'AgsConnectable'],
    AgsXmlAuthentication: ['AgsXmlAuthentication', 'GObject', 'AgsAuthentication'],
    AgsXmlBusinessGroup: ['AgsXmlBusinessGroup', 'GObject', 'AgsBusinessGroup'],
    AgsXmlCertificate: ['AgsXmlCertificate', 'GObject', 'AgsCertificate'],
    AgsXmlPasswordStore: ['AgsXmlPasswordStore', 'GObject', 'AgsPasswordStore'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    AgsByteOrder: ['byte-order-le', 'byte-order-be'],
    AgsSeekType: ['seek-cur', 'seek-set', 'seek-end'],
    AgsSoundcardFormat: ['soundcard-signed-8-bit', 'soundcard-signed-16-bit', 'soundcard-signed-24-bit', 'soundcard-signed-32-bit', 'soundcard-signed-64-bit', 'soundcard-float', 'soundcard-double', 'soundcard-complex'],
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 137 enums a GTK 4 vocabulary carries (112 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'AgsByteOrder.byte-order-be': 1,
    'AgsByteOrder.byte-order-le': 0,
    'AgsSeekType.seek-cur': 0,
    'AgsSeekType.seek-end': 2,
    'AgsSeekType.seek-set': 1,
    'AgsSoundcardFormat.soundcard-complex': -8,
    'AgsSoundcardFormat.soundcard-double': -15,
    'AgsSoundcardFormat.soundcard-float': -16,
    'AgsSoundcardFormat.soundcard-signed-16-bit': 16,
    'AgsSoundcardFormat.soundcard-signed-24-bit': 24,
    'AgsSoundcardFormat.soundcard-signed-32-bit': 32,
    'AgsSoundcardFormat.soundcard-signed-64-bit': 64,
    'AgsSoundcardFormat.soundcard-signed-8-bit': 8,
};

// The nicks GIR marks `deprecated="1"`.
//
// Two members of one enum may share a value -- that is how GObject spells an alias, and
// `GTK_ALIGN_BASELINE` and `GTK_ALIGN_BASELINE_FILL` are both 4. `ENUM_VALUES` keeps
// both names, so nothing is lost, and this is what says which of the two a number should be
// spelled back as. Stated rather than derived: the pairing is visible in the values, the
// DIRECTION is not.
//
// Read it as evidence, not as a negative: 4 registered-enum members in the 718 GIRs carry
// the attribute at all, and 179 of the 182 value-sharing pairs carry it on neither half.
// A nick missing from here is a nick GIR says nothing about, not a nick GIR calls current.
export const ENUM_DEPRECATED = [];

// The declared remainder: nicks whose GIR `value` is not a number this can carry.
//
// Every nick in `ENUM_NICKS` is in `ENUM_VALUES` or here -- a nick in neither would be a
// silent drop. GIR carries two shapes no integer holds: a symbolic or absent value (Vala
// writes `(null)`, a char enum writes a letter) and an integer past
// `Number.MAX_SAFE_INTEGER`. The value kept here is the raw attribute, so the entry says
// WHAT was unreadable rather than only that something was. Measured over the 718 GIRs in
// ts-for-gir's `girs/`: 32 of 34096 registered-enum members, none in Gtk, Adw, GLib or Gio.
export const ENUM_VALUES_UNREADABLE = {};

// The number behind each member of a registered BITFIELD, keyed the same way.
//
// `ENUM_NICKS` refuses a bitfield because GObject cannot resolve a nick SET, and that
// reason says nothing about one member's number. 23 settable properties in Gtk-4.0 and
// Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, `GtkDropTarget:actions`, ... -- and they are typed bare
// `number`, so a host without GI has nothing to compute one from. Counting is worst
// exactly here: 119 of the 156 Gtk-4.0 bitfield members this vocabulary carries disagree
// with their declaration position, against 29 of 672 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'AgsApplicationContextFlags.application-context-types-registered': 1,
    'AgsFileFlags.file-read': 1,
    'AgsFileFlags.file-read-audio-signal': 2,
    'AgsFileFlags.file-read-embedded-audio': 4,
    'AgsFileFlags.file-write': 8,
    'AgsFileFlags.file-write-audio-signal': 16,
    'AgsFileFlags.file-write-embedded-audio': 32,
    'AgsRegexUtilCompileFlags.regex-util-case-insensitive': 2,
    'AgsRegexUtilCompileFlags.regex-util-no-newline-match': 4,
    'AgsRegexUtilCompileFlags.regex-util-no-position-report-of-matches': 8,
    'AgsRegexUtilCompileFlags.regex-util-posix-extended-syntax': 1,
    'AgsRegexUtilExecuteFlags.regex-util-end-of-line': 2,
    'AgsRegexUtilExecuteFlags.regex-util-not-beginning-of-line': 1,
    'AgsRegexUtilExecuteFlags.regex-util-start-end': 4,
    'AgsReturnableThreadFlags.returnable-thread-in-use': 1,
    'AgsReturnableThreadFlags.returnable-thread-reset': 2,
    'AgsReturnableThreadFlags.returnable-thread-run-once': 4,
    'AgsSecurityContextMode.security-context-account-read': 8,
    'AgsSecurityContextMode.security-context-account-write': 16,
    'AgsSecurityContextMode.security-context-rpc-execute': 4,
    'AgsSecurityContextMode.security-context-rpc-read': 1,
    'AgsSecurityContextMode.security-context-rpc-write': 2,
    'AgsServerFlags.server-any-address': 32,
    'AgsServerFlags.server-auto-start': 64,
    'AgsServerFlags.server-inet4': 8,
    'AgsServerFlags.server-inet6': 16,
    'AgsServerFlags.server-running': 2,
    'AgsServerFlags.server-started': 1,
    'AgsServerFlags.server-terminating': 4,
    'AgsSoundcardCapability.soundcard-capability-capture': 2,
    'AgsSoundcardCapability.soundcard-capability-duplex': 4,
    'AgsSoundcardCapability.soundcard-capability-playback': 1,
    'AgsTaskCompletionFlags.task-completion-busy': 2,
    'AgsTaskCompletionFlags.task-completion-completed': 8,
    'AgsTaskCompletionFlags.task-completion-queued': 1,
    'AgsTaskCompletionFlags.task-completion-ready': 4,
    'AgsThreadApplicationContextFlags.thread-application-context-single-thread': 1,
    'AgsThreadFlags.thread-immediate-sync': 2,
    'AgsThreadFlags.thread-intermediate-post-sync': 8,
    'AgsThreadFlags.thread-intermediate-pre-sync': 4,
    'AgsThreadFlags.thread-mark-synced': 32,
    'AgsThreadFlags.thread-start-synced-freq': 16,
    'AgsThreadFlags.thread-time-accounting': 64,
    'AgsThreadFlags.thread-unref-on-exit': 1,
    'AgsThreadPoolFlags.thread-pool-rt-setup': 2,
    'AgsThreadPoolFlags.thread-pool-running': 1,
    'AgsThreadStatusFlags.thread-status-busy': 1024,
    'AgsThreadStatusFlags.thread-status-initial-run': 4,
    'AgsThreadStatusFlags.thread-status-initial-sync': 2,
    'AgsThreadStatusFlags.thread-status-is-chaos-tree': 8,
    'AgsThreadStatusFlags.thread-status-locked': 512,
    'AgsThreadStatusFlags.thread-status-ready': 64,
    'AgsThreadStatusFlags.thread-status-rt-setup': 1,
    'AgsThreadStatusFlags.thread-status-running': 256,
    'AgsThreadStatusFlags.thread-status-start-done': 32,
    'AgsThreadStatusFlags.thread-status-start-wait': 16,
    'AgsThreadStatusFlags.thread-status-synced': 2048,
    'AgsThreadStatusFlags.thread-status-synced-freq': 4096,
    'AgsThreadStatusFlags.thread-status-waiting': 128,
    'AgsThreadSyncTicFlags.thread-sync-tic-done-0': 2,
    'AgsThreadSyncTicFlags.thread-sync-tic-done-1': 8,
    'AgsThreadSyncTicFlags.thread-sync-tic-done-2': 32,
    'AgsThreadSyncTicFlags.thread-sync-tic-done-3': 128,
    'AgsThreadSyncTicFlags.thread-sync-tic-done-4': 512,
    'AgsThreadSyncTicFlags.thread-sync-tic-done-5': 2048,
    'AgsThreadSyncTicFlags.thread-sync-tic-done-6': 8192,
    'AgsThreadSyncTicFlags.thread-sync-tic-done-7': 32768,
    'AgsThreadSyncTicFlags.thread-sync-tic-done-8': 131072,
    'AgsThreadSyncTicFlags.thread-sync-tic-wait-0': 1,
    'AgsThreadSyncTicFlags.thread-sync-tic-wait-1': 4,
    'AgsThreadSyncTicFlags.thread-sync-tic-wait-2': 16,
    'AgsThreadSyncTicFlags.thread-sync-tic-wait-3': 64,
    'AgsThreadSyncTicFlags.thread-sync-tic-wait-4': 256,
    'AgsThreadSyncTicFlags.thread-sync-tic-wait-5': 1024,
    'AgsThreadSyncTicFlags.thread-sync-tic-wait-6': 4096,
    'AgsThreadSyncTicFlags.thread-sync-tic-wait-7': 16384,
    'AgsThreadSyncTicFlags.thread-sync-tic-wait-8': 65536,
    'AgsTimestampFlags.timestamp-offset': 2,
    'AgsTimestampFlags.timestamp-outdated': 4,
    'AgsTimestampFlags.timestamp-unix': 1,
    'AgsTurtleFlags.turtle-tolower': 1,
    'AgsWorkerThreadStatusFlags.worker-thread-status-run-done': 4,
    'AgsWorkerThreadStatusFlags.worker-thread-status-run-sync': 8,
    'AgsWorkerThreadStatusFlags.worker-thread-status-run-wait': 2,
    'AgsWorkerThreadStatusFlags.worker-thread-status-running': 1,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

// Declaration GType + property name -> the GType of that property's enum or bitfield.
//
// Without it the value tables above are half an answer. A host with no GI knows it must set
// `orientation` to the number behind the nick `vertical`; `ENUM_VALUES` is keyed
// `GtkOrientation.vertical`, and nothing else says that `orientation` is a
// `GtkOrientation`. Deriving it is not available: `never` is a member of several Gtk enums,
// and choosing between them produces a wrong number rather than a missing one.
//
// Only where the property's OWN type is the enum. An array of them and a union that mentions
// one are both entries a consumer would resolve wrongly, so neither is written.
//
// A GType named here has numbers in SOME vocabulary, not necessarily this one: the namespace
// that OWNS an enum publishes it, so 83 of the 909 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {};

// `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
//
// The one table here that is not about a ParamSpec. A GtkBuilder or Blueprint
// `accessibility { … }` block is typed by GTK's ARIA table instead, and the two disagree
// where it matters: `orientation` is settable on a `GtkLabel` that implements no
// `GtkOrientable` and has no such property, and `checked` is a `GtkAccessibleTristate`, so
// `checked: true` means the number 1 and not the boolean. A consumer typing those slots
// from the widget gets both wrong, silently.
//
// Read from each member's own documentation, which is where GTK keeps the table --
// `gtk_accessible_property_init_value()` is the C half and is not introspectable, the
// sentence is. Complete or absent, never partial: a member whose documentation states no
// value type fails generation and names itself, because a missing row is indistinguishable
// from "GTK has no such name" and the plausible fallback emits `true` where GTK means 1.
export const ARIA_VALUE_TYPES = {};

// The same keys, for the `'enum'` rows only -> the GType of the enum.
//
// The join on from a kind to a number, and a table of its own for the reason `PROP_ENUMS`
// is one: folding the GType into `ARIA_VALUE_TYPES` would make its values a mix of six
// reserved words and arbitrary GTypes, and telling them apart would be the consumer's
// problem. With this, `ARIA_VALUE_TYPES[k] === 'enum'` is the whole test, and
// `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
export const ARIA_VALUE_ENUMS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'AgsApplicationContext.config': '3.0.0',
    'AgsApplicationContext.file': '3.0.0',
    'AgsApplicationContext.main-loop': '3.0.0',
    'AgsApplicationContext.task-launcher': '3.0.0',
    'AgsApplicationContext::load-config': '3.0.0',
    'AgsApplicationContext::prepare': '3.0.0',
    'AgsApplicationContext::quit': '3.0.0',
    'AgsApplicationContext::register-types': '3.0.0',
    'AgsApplicationContext::setup': '3.0.0',
    'AgsConfig::get-value': '3.0.0',
    'AgsConfig::load-defaults': '3.0.0',
    'AgsConfig::set-value': '3.0.0',
    'AgsController.context-path': '3.0.0',
    'AgsController.server': '3.0.0',
    'AgsConversion.description': '3.0.0',
    'AgsConversion.name': '3.0.0',
    'AgsConversion::convert': '3.0.0',
    'AgsFile.audio-encoding': '3.0.0',
    'AgsFile.audio-format': '3.0.0',
    'AgsFile.encoding': '3.0.0',
    'AgsFile.filename': '3.0.0',
    'AgsFile.xml-doc': '3.0.0',
    'AgsFile::open': '3.0.0',
    'AgsFile::open-from-data': '3.0.0',
    'AgsFile::read': '3.0.0',
    'AgsFile::read-resolve': '3.0.0',
    'AgsFile::read-start': '3.0.0',
    'AgsFile::write': '3.0.0',
    'AgsFile::write-resolve': '3.0.0',
    'AgsFileIdRef.file': '3.0.0',
    'AgsFileIdRef.node': '3.0.0',
    'AgsFileIdRef.reference': '3.0.0',
    'AgsFileIdRef.xpath': '3.0.0',
    'AgsFileIdRef::resolved': '3.0.0',
    'AgsFileLaunch.file': '3.0.0',
    'AgsFileLaunch.node': '3.0.0',
    'AgsFileLaunch.reference': '3.0.0',
    'AgsFileLaunch::start': '3.0.0',
    'AgsFileLink.data': '3.0.0',
    'AgsFileLink.filename': '3.0.0',
    'AgsFrontController::do-request': '3.0.0',
    'AgsFunction.normalized-function': '3.0.0',
    'AgsFunction.pivot-table': '3.0.0',
    'AgsFunction.source-function': '3.0.0',
    'AgsMainLoop::change-frequency': '3.0.0',
    'AgsMessageEnvelope.recipient': '3.0.0',
    'AgsMessageEnvelope.sender': '3.0.0',
    'AgsMessageEnvelope.xml-doc': '3.0.0',
    'AgsMessageQueue.recipient-namespace': '3.0.0',
    'AgsMessageQueue.sender-namespace': '3.0.0',
    'AgsPriority::get-value': '3.0.0',
    'AgsPriority::load-defaults': '3.0.0',
    'AgsPriority::set-value': '3.0.0',
    'AgsRegistry.server': '3.0.0',
    'AgsReturnableThread.thread-pool': '3.0.0',
    'AgsReturnableThread::safe-run': '3.0.0',
    'AgsSecurityContext.certs': '3.0.0',
    'AgsServer.controller': '3.0.0',
    'AgsServer.domain': '3.0.0',
    'AgsServer.front-controller': '3.0.0',
    'AgsServer.ip4': '3.0.0',
    'AgsServer.ip6': '3.0.0',
    'AgsServer.path': '4.0.0',
    'AgsServer.realm': '3.0.0',
    'AgsServer.server-port': '3.0.0',
    'AgsServer::listen': '3.0.0',
    'AgsServer::start': '3.0.0',
    'AgsServer::stop': '3.0.0',
    'AgsSolverMatrix.solver-path': '6.7.1',
    'AgsSolverMatrix.source-function': '3.9.3',
    'AgsSolverPolynomial.coefficient': '3.2.0',
    'AgsSolverPolynomial.coefficient-value': '3.2.0',
    'AgsSolverPolynomial.polynomial': '3.2.0',
    'AgsSolverPolynomial.symbol': '3.2.0',
    'AgsSolverVector.source-polynomial': '3.9.3',
    'AgsTask.task-launcher': '3.0.0',
    'AgsTask::failure': '3.0.0',
    'AgsTask::launch': '3.0.0',
    'AgsTaskCompletion.task': '3.0.0',
    'AgsTaskCompletion::complete': '3.0.0',
    'AgsTaskLauncher::run': '3.0.0',
    'AgsThread.delay': '3.0.0',
    'AgsThread.frequency': '3.0.0',
    'AgsThread.max-precision': '3.0.0',
    'AgsThread::clock': '3.0.0',
    'AgsThread::recover-dead-lock': '7.1.0',
    'AgsThread::run': '3.0.0',
    'AgsThread::start': '3.0.0',
    'AgsThread::stop': '3.0.0',
    'AgsThreadApplicationContext.thread-pool': '3.0.0',
    'AgsThreadPool.max-threads': '3.0.0',
    'AgsThreadPool.max-unused-threads': '3.0.0',
    'AgsThreadPool::start': '3.0.0',
    'AgsTurtle.filename': '3.0.0',
    'AgsTurtle.xml-doc': '3.0.0',
    'AgsWorkerThread::do-poll': '3.0.0',
};
