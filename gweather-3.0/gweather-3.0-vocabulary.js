// The widget vocabulary of GWeather-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GWeather-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GWeather',
    version: '3.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    GWeatherLocationEntry: ['location', 'show-named-timezones', 'top'],
    GWeatherTimezoneMenu: ['top', 'tzid'],
};

export const OWN_SIGNALS = {};

export const DECLS = {
    GWeatherLocationEntry: ['GWeatherLocationEntry', 'GtkSearchEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GWeatherTimezoneMenu: ['GWeatherTimezoneMenu', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GWeatherConditionPhenomenon: ['invalid', 'none', 'drizzle', 'rain', 'snow', 'snow-grains', 'ice-crystals', 'ice-pellets', 'hail', 'small-hail', 'unknown-precipitation', 'mist', 'fog', 'smoke', 'volcanic-ash', 'sand', 'haze', 'spray', 'dust', 'squall', 'sandstorm', 'duststorm', 'funnel-cloud', 'tornado', 'dust-whirls', 'last'],
    GWeatherConditionQualifier: ['invalid', 'none', 'vicinity', 'light', 'moderate', 'heavy', 'shallow', 'patches', 'partial', 'thunderstorm', 'blowing', 'showers', 'drifting', 'freezing', 'last'],
    GWeatherDistanceUnit: ['invalid', 'default', 'meters', 'km', 'miles'],
    GWeatherLocationLevel: ['world', 'region', 'country', 'adm1', 'city', 'weather-station', 'detached', 'named-timezone'],
    GWeatherPressureUnit: ['invalid', 'default', 'kpa', 'hpa', 'mb', 'mm-hg', 'inch-hg', 'atm'],
    GWeatherSky: ['invalid', 'clear', 'broken', 'scattered', 'few', 'overcast', 'last'],
    GWeatherSpeedUnit: ['invalid', 'default', 'ms', 'kph', 'mph', 'knots', 'bft'],
    GWeatherTemperatureUnit: ['invalid', 'default', 'kelvin', 'centigrade', 'fahrenheit'],
    GWeatherWindDirection: ['invalid', 'variable', 'n', 'nne', 'ne', 'ene', 'e', 'ese', 'se', 'sse', 's', 'ssw', 'sw', 'wsw', 'w', 'wnw', 'nw', 'nnw', 'last'],
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 129 enums a GTK 4 vocabulary carries (104 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'GWeatherConditionPhenomenon.drizzle': 1,
    'GWeatherConditionPhenomenon.dust': 17,
    'GWeatherConditionPhenomenon.dust-whirls': 23,
    'GWeatherConditionPhenomenon.duststorm': 20,
    'GWeatherConditionPhenomenon.fog': 11,
    'GWeatherConditionPhenomenon.funnel-cloud': 21,
    'GWeatherConditionPhenomenon.hail': 7,
    'GWeatherConditionPhenomenon.haze': 15,
    'GWeatherConditionPhenomenon.ice-crystals': 5,
    'GWeatherConditionPhenomenon.ice-pellets': 6,
    'GWeatherConditionPhenomenon.invalid': -1,
    'GWeatherConditionPhenomenon.last': 24,
    'GWeatherConditionPhenomenon.mist': 10,
    'GWeatherConditionPhenomenon.none': 0,
    'GWeatherConditionPhenomenon.rain': 2,
    'GWeatherConditionPhenomenon.sand': 14,
    'GWeatherConditionPhenomenon.sandstorm': 19,
    'GWeatherConditionPhenomenon.small-hail': 8,
    'GWeatherConditionPhenomenon.smoke': 12,
    'GWeatherConditionPhenomenon.snow': 3,
    'GWeatherConditionPhenomenon.snow-grains': 4,
    'GWeatherConditionPhenomenon.spray': 16,
    'GWeatherConditionPhenomenon.squall': 18,
    'GWeatherConditionPhenomenon.tornado': 22,
    'GWeatherConditionPhenomenon.unknown-precipitation': 9,
    'GWeatherConditionPhenomenon.volcanic-ash': 13,
    'GWeatherConditionQualifier.blowing': 9,
    'GWeatherConditionQualifier.drifting': 11,
    'GWeatherConditionQualifier.freezing': 12,
    'GWeatherConditionQualifier.heavy': 4,
    'GWeatherConditionQualifier.invalid': -1,
    'GWeatherConditionQualifier.last': 13,
    'GWeatherConditionQualifier.light': 2,
    'GWeatherConditionQualifier.moderate': 3,
    'GWeatherConditionQualifier.none': 0,
    'GWeatherConditionQualifier.partial': 7,
    'GWeatherConditionQualifier.patches': 6,
    'GWeatherConditionQualifier.shallow': 5,
    'GWeatherConditionQualifier.showers': 10,
    'GWeatherConditionQualifier.thunderstorm': 8,
    'GWeatherConditionQualifier.vicinity': 1,
    'GWeatherDistanceUnit.default': 1,
    'GWeatherDistanceUnit.invalid': 0,
    'GWeatherDistanceUnit.km': 3,
    'GWeatherDistanceUnit.meters': 2,
    'GWeatherDistanceUnit.miles': 4,
    'GWeatherLocationLevel.adm1': 3,
    'GWeatherLocationLevel.city': 4,
    'GWeatherLocationLevel.country': 2,
    'GWeatherLocationLevel.detached': 6,
    'GWeatherLocationLevel.named-timezone': 7,
    'GWeatherLocationLevel.region': 1,
    'GWeatherLocationLevel.weather-station': 5,
    'GWeatherLocationLevel.world': 0,
    'GWeatherPressureUnit.atm': 7,
    'GWeatherPressureUnit.default': 1,
    'GWeatherPressureUnit.hpa': 3,
    'GWeatherPressureUnit.inch-hg': 6,
    'GWeatherPressureUnit.invalid': 0,
    'GWeatherPressureUnit.kpa': 2,
    'GWeatherPressureUnit.mb': 4,
    'GWeatherPressureUnit.mm-hg': 5,
    'GWeatherSky.broken': 1,
    'GWeatherSky.clear': 0,
    'GWeatherSky.few': 3,
    'GWeatherSky.invalid': -1,
    'GWeatherSky.last': 5,
    'GWeatherSky.overcast': 4,
    'GWeatherSky.scattered': 2,
    'GWeatherSpeedUnit.bft': 6,
    'GWeatherSpeedUnit.default': 1,
    'GWeatherSpeedUnit.invalid': 0,
    'GWeatherSpeedUnit.knots': 5,
    'GWeatherSpeedUnit.kph': 3,
    'GWeatherSpeedUnit.mph': 4,
    'GWeatherSpeedUnit.ms': 2,
    'GWeatherTemperatureUnit.centigrade': 3,
    'GWeatherTemperatureUnit.default': 1,
    'GWeatherTemperatureUnit.fahrenheit': 4,
    'GWeatherTemperatureUnit.invalid': 0,
    'GWeatherTemperatureUnit.kelvin': 2,
    'GWeatherWindDirection.e': 5,
    'GWeatherWindDirection.ene': 4,
    'GWeatherWindDirection.ese': 6,
    'GWeatherWindDirection.invalid': -1,
    'GWeatherWindDirection.last': 17,
    'GWeatherWindDirection.n': 1,
    'GWeatherWindDirection.ne': 3,
    'GWeatherWindDirection.nne': 2,
    'GWeatherWindDirection.nnw': 16,
    'GWeatherWindDirection.nw': 15,
    'GWeatherWindDirection.s': 9,
    'GWeatherWindDirection.se': 7,
    'GWeatherWindDirection.sse': 8,
    'GWeatherWindDirection.ssw': 10,
    'GWeatherWindDirection.sw': 11,
    'GWeatherWindDirection.variable': 0,
    'GWeatherWindDirection.w': 13,
    'GWeatherWindDirection.wnw': 14,
    'GWeatherWindDirection.wsw': 12,
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
// reason says nothing about one member's number. 21 writable widget properties in Gtk-4.0
// and Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, ... -- and they are typed bare `number`, so a host without GI
// has nothing to compute one from. Counting is worst exactly here: 95 of 121 Gtk-4.0
// bitfield members disagree with their position, against 29 of 685 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'GWeatherFormatOptions.default': 0,
    'GWeatherFormatOptions.no-capitalization': 2,
    'GWeatherFormatOptions.sentence-capitalization': 1,
    'GWeatherProvider.all': 61,
    'GWeatherProvider.iwin': 4,
    'GWeatherProvider.met-no': 16,
    'GWeatherProvider.metar': 1,
    'GWeatherProvider.none': 0,
    'GWeatherProvider.owm': 32,
    'GWeatherProvider.yahoo': 8,
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
// that OWNS an enum publishes it, so 57 of the 438 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
