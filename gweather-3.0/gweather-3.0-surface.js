// The widget vocabulary of GWeather-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GWeather-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'GWeather-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

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

export const SLOT_CANDIDATES = {};

export const SINCE = {};
