import { definition, TemplateComponent } from '../../../../pkg/@eui/component.js';

var style = ":host{\n  --icon-color: var(--text,  #242424);\n  --icon-size: 16px;\n  display:inline-block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.icon {\n  display: flex;\n  align-items: center;\n  width: var(--icon-size);\n  height:  var(--icon-size);\n  line-height: var(--icon-size);\n}\n\n.eds-icon,\n.eui-icon {\n  display: none;\n}\n\n.eds-icon.show,\n.eui-icon.show {\n  display: inline-block;\n}\n\n.eds-icon {\n  font-family: 'Ericsson Icons' !important;\n  vertical-align: middle;\n  font-style: normal;\n  font-weight: 400;\n  font-variant: normal;\n  text-transform: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: var(--icon-color);\n  font-size: var(--icon-size);\n}\n\n.eds-icon::before {\n  content: var(--content);\n}\n\n/* Legacy to maintain icons which release-delayed by EDS */\n.eui-icon {\n  width: var(--icon-size);\n  height:  var(--icon-size);\n  fill:  var(--icon-color);\n}";

var template = "<div class=\"icon\">\n  <i class=\"eds-icon\"></i>\n</div>\n";

var airbag = "\\e901";
var alarm = "\\e9e5";
var antenna = "\\e908";
var attach = "\\e910";
var avatar = "\\e912";
var bank = "\\e9e6";
var block = "\\e9e8";
var blog = "\\e916";
var bluetooth = "\\e917";
var bookmark = "\\e919";
var brakes = "\\e91a";
var bug = "\\e91b";
var calculator = "\\e9e9";
var calendar = "\\e91c";
var check = "\\e921";
var circle = "\\e927";
var cloud = "\\e928";
var code = "\\e929";
var compare = "\\e9ec";
var copy = "\\e92a";
var core = "\\ea1f";
var cpu = "\\e92b";
var creditcard = "\\e92c";
var crop = "\\e92d";
var cross = "\\e92f";
var crown = "\\e930";
var dashboard = "\\e931";
var database = "\\e9e1";
var diagnose = "\\e9ed";
var dial = "\\e932";
var dialpad = "\\ea29";
var diamond = "\\e933";
var document$1 = "\\e934";
var door = "\\e935";
var duplicate = "\\e938";
var eSIM = "\\ea3c";
var econ = "\\e939";
var edit = "\\e93a";
var ellipsis = "\\e93b";
var email = "\\e93c";
var engine = "\\e93d";
var enterprises = "\\ea3b";
var eraser = "\\e93e";
var eula = "\\e93f";
var expand = "\\ea23";
var eye = "\\e941";
var failed = "\\ea21";
var fault = "\\ea2a";
var favorite = "\\e943";
var feedback = "\\e9ef";
var fika = "\\e944";
var file = "\\e945";
var filter = "\\e946";
var flag = "\\e947";
var flash = "\\ea2c";
var floor = "\\e948";
var flow = "\\e949";
var folder = "\\e94a";
var forward = "\\ea2d";
var fuel = "\\e94b";
var globe = "\\e94c";
var group = "\\e950";
var heart = "\\e952";
var heatmap = "\\e953";
var help = "\\e954";
var home = "\\e955";
var iSIM = "\\ea3d";
var image = "\\e956";
var info = "\\e957";
var infrastructure = "\\e9d9";
var invisible = "\\ea22";
var invoice = "\\e958";
var keyboard = "\\e9f5";
var language = "\\e959";
var launch = "\\e95a";
var layers = "\\e95b";
var lightbulb = "\\e95c";
var link = "\\e95d";
var list = "\\e9f6";
var login = "\\e9f7";
var logout = "\\e960";
var loudspeaker = "\\e961";
var magnet = "\\e962";
var manual = "\\e963";
var manufacturing = "\\e9c7";
var map = "\\e964";
var maximize = "\\e965";
var medal = "\\e966";
var mic = "\\e96c";
var microwave = "\\e9ce";
var minihub = "\\e9d7";
var minimize = "\\e96d";
var minus = "\\e96f";
var mobile = "\\ea00";
var money = "\\e970";
var more = "\\e971";
var nav = "\\e972";
var network = "\\e973";
var node = "\\e974";
var notification = "\\e976";
var oil = "\\e977";
var options = "\\e978";
var paint = "\\e9c8";
var pin = "\\e97c";
var plus = "\\e97e";
var podium = "\\ea30";
var polygon = "\\e980";
var position = "\\e981";
var print = "\\ea05";
var profile = "\\e982";
var projects = "\\e983";
var redo = "\\e984";
var reload = "\\e985";
var reply = "\\ea32";
var restore = "\\e988";
var room = "\\e989";
var routing = "\\e98a";
var rss = "\\e98b";
var ruler = "\\e98c";
var satellite = "\\e9d3";
var save = "\\ea09";
var scan = "\\e98d";
var search = "\\e98e";
var select = "\\ea26";
var send = "\\e98f";
var server = "\\e990";
var settings = "\\e991";
var shapes = "\\e998";
var share = "\\e999";
var signal = "\\e99f";
var simcard = "\\e9a0";
var sizes = "\\e9a1";
var sorting = "\\e9a4";
var spectrum = "\\e9d2";
var square = "\\e9a6";
var subtitles = "\\e9aa";
var success = "\\ea27";
var swap = "\\ea33";
var switching = "\\e9d1";
var table = "\\e9ab";
var tasks = "\\e9ac";
var terminal = "\\e9ad";
var time = "\\e9ae";
var trashcan = "\\e9b0";
var triangle = "\\e9b3";
var trophy = "\\e9b4";
var trowel = "\\e9b5";
var truck = "\\e9b6";
var undo = "\\e9b7";
var unlink = "\\ea0d";
var upload = "\\e9b8";
var versions = "\\ea12";
var warehouse = "\\ea0b";
var wifi = "\\e9c4";
var wireline = "\\e9cf";
var edsIcons = {
	"abs-brakes": "\\e900",
	airbag: airbag,
	alarm: alarm,
	"alarm-level1": "\\e902",
	"alarm-level2": "\\e903",
	"alarm-level3": "\\e904",
	"alarm-level4": "\\e905",
	"alarm-level5": "\\e906",
	"alarm-level6": "\\e907",
	"alarm-off": "\\e9e3",
	"alarm-on": "\\e9e4",
	antenna: antenna,
	"antenna-microwave": "\\e9e2",
	"app-launcher": "\\e909",
	"arrow-down": "\\e90a",
	"arrow-left": "\\e90b",
	"arrow-right": "\\e90c",
	"arrow-rotate-horizontal": "\\e90d",
	"arrow-rotate-vertical": "\\e90e",
	"arrow-up": "\\e90f",
	attach: attach,
	"automotive-battery": "\\e911",
	avatar: avatar,
	bank: bank,
	"bar-code": "\\e9e7",
	"battery-charging": "\\e913",
	"battery-empty": "\\e914",
	"battery-full": "\\e915",
	block: block,
	blog: blog,
	bluetooth: bluetooth,
	bookmark: bookmark,
	"bookmark-solid": "\\e918",
	brakes: brakes,
	bug: bug,
	calculator: calculator,
	calendar: calendar,
	"calendar-off": "\\e9ea",
	"camera-cctv": "\\e91d",
	"camera-classic": "\\e91e",
	"camera-photo": "\\e91f",
	"change-user": "\\ea28",
	check: check,
	"check-small": "\\e920",
	"chevron-down": "\\e922",
	"chevron-left": "\\e923",
	"chevron-right": "\\e924",
	"chevron-up": "\\e925",
	circle: circle,
	"circle-dashed": "\\e926",
	cloud: cloud,
	code: code,
	"code-scan": "\\ea1d",
	"collapse-all": "\\e9eb",
	compare: compare,
	copy: copy,
	core: core,
	"counter-summary": "\\ea39",
	cpu: cpu,
	creditcard: creditcard,
	crop: crop,
	cross: cross,
	"cross-small": "\\e92e",
	crown: crown,
	dashboard: dashboard,
	database: database,
	diagnose: diagnose,
	dial: dial,
	dialpad: dialpad,
	diamond: diamond,
	document: document$1,
	door: door,
	"download-save": "\\e936",
	"drag-handle": "\\e937",
	duplicate: duplicate,
	eSIM: eSIM,
	econ: econ,
	edit: edit,
	"electric-charging-station": "\\ea3a",
	ellipsis: ellipsis,
	email: email,
	"email-open": "\\ea20",
	"end-point": "\\e9e0",
	engine: engine,
	enterprises: enterprises,
	eraser: eraser,
	eula: eula,
	expand: expand,
	"expand-all": "\\e9ee",
	eye: eye,
	"eye-solid": "\\e940",
	failed: failed,
	fault: fault,
	favorite: favorite,
	"favorite-solid": "\\e942",
	feedback: feedback,
	"fibre-hub": "\\e9df",
	fika: fika,
	file: file,
	"file-add": "\\e9f0",
	"file-approved": "\\e9f1",
	filter: filter,
	"filter-clear": "\\e9f2",
	"filter-off": "\\e9f3",
	flag: flag,
	"flag-solid": "\\ea2b",
	flash: flash,
	floor: floor,
	flow: flow,
	folder: folder,
	"font-bold": "\\ea4e",
	"font-italic": "\\ea4f",
	"font-strikethrough": "\\ea50",
	"font-underline": "\\ea51",
	forward: forward,
	fuel: fuel,
	"gateway-function": "\\e9dd",
	"gateway-function-small": "\\e9de",
	globe: globe,
	"graph-circle": "\\e94d",
	"graph-line": "\\e94e",
	"graph-plot": "\\e94f",
	group: group,
	"hardware-platform": "\\e9dc",
	heart: heart,
	"heart-solid": "\\e951",
	heatmap: heatmap,
	help: help,
	"hierarchy-chart": "\\e9db",
	"highest-value": "\\e9f4",
	home: home,
	iSIM: iSIM,
	image: image,
	info: info,
	"info-solid": "\\e9cc",
	infrastructure: infrastructure,
	"infrastructure-small": "\\e9da",
	invisible: invisible,
	invoice: invoice,
	keyboard: keyboard,
	language: language,
	"laptop-devices": "\\ea3e",
	launch: launch,
	layers: layers,
	lightbulb: lightbulb,
	"lightbulb-off": "\\ea24",
	link: link,
	list: list,
	"lock-locked": "\\e95e",
	"lock-unlocked": "\\e95f",
	login: login,
	logout: logout,
	loudspeaker: loudspeaker,
	"lowest-value": "\\e9f8",
	magnet: magnet,
	manual: manual,
	manufacturing: manufacturing,
	map: map,
	"map-directions": "\\e9f9",
	"map-important-building": "\\e9fa",
	"map-location": "\\e9fc",
	"map-location-filled": "\\e9fb",
	"map-navigation": "\\e9fd",
	"map-terrain": "\\e9fe",
	maximize: maximize,
	medal: medal,
	"message-contact-us": "\\e967",
	"message-double": "\\e968",
	"message-single": "\\e969",
	"message-smiley": "\\e96a",
	mic: mic,
	"mic-off": "\\e96b",
	microwave: microwave,
	"microwave-small": "\\e9d8",
	minihub: minihub,
	minimize: minimize,
	minus: minus,
	"minus-small": "\\e96e",
	mobile: mobile,
	"mobile-devices": "\\e9cd",
	money: money,
	"money-transaction": "\\ea01",
	more: more,
	nav: nav,
	network: network,
	"network-element": "\\ea25",
	"no-invoice": "\\ea3f",
	"no-maintenance": "\\ea40",
	"no-task": "\\ea41",
	node: node,
	"node-network": "\\e9d6",
	notification: notification,
	"notification-off": "\\ea02",
	"notification-ring": "\\e975",
	oil: oil,
	options: options,
	paint: paint,
	"phone-classic": "\\e979",
	"phone-cobra": "\\e97a",
	"phone-hangup": "\\e97b",
	pin: pin,
	"pin-solid": "\\ea03",
	"ping-ip": "\\ea04",
	"plane-landing": "\\ea2e",
	"plane-take-off": "\\ea2f",
	plus: plus,
	"plus-small": "\\e97d",
	podium: podium,
	polygon: polygon,
	"polygon-dashed": "\\e97f",
	position: position,
	print: print,
	profile: profile,
	"profile-suspended": "\\ea4d",
	projects: projects,
	"qr-code": "\\ea06",
	"radio-base-antenna": "\\e9d5",
	redo: redo,
	reload: reload,
	reply: reply,
	"reply-all": "\\ea31",
	"request-access": "\\ea42",
	"reset-password": "\\ea07",
	"resize-down": "\\e986",
	"resize-up": "\\e987",
	restore: restore,
	"robot-head": "\\ea08",
	"robotic-arm": "\\ea43",
	room: room,
	routing: routing,
	rss: rss,
	ruler: ruler,
	satellite: satellite,
	"satellite-gateway": "\\e9d4",
	save: save,
	scan: scan,
	"scan-bar-code": "\\ea0a",
	"scan-qr-code": "\\e9ff",
	"screen-desktop": "\\ea44",
	search: search,
	select: select,
	send: send,
	server: server,
	settings: settings,
	"severity-cleared": "\\e992",
	"severity-critical": "\\e993",
	"severity-indeterminate": "\\e994",
	"severity-major": "\\e995",
	"severity-minor": "\\e996",
	"severity-warning": "\\e997",
	shapes: shapes,
	share: share,
	"shopping-cart": "\\e99a",
	"sidemenu-left-close": "\\e99b",
	"sidemenu-left-open": "\\e99c",
	"sidemenu-right-close": "\\e99d",
	"sidemenu-right-open": "\\e99e",
	signal: signal,
	simcard: simcard,
	sizes: sizes,
	"smartwatch-devices": "\\ea45",
	"sort-down": "\\e9a3",
	"sort-up": "\\e9a2",
	sorting: sorting,
	spectrum: spectrum,
	square: square,
	"square-dashed": "\\e9a5",
	"step-back": "\\e9ca",
	"step-forward": "\\e9c9",
	"stroke-curved": "\\e9a7",
	"stroke-dashed": "\\e9a8",
	"stroke-straight": "\\e9a9",
	subtitles: subtitles,
	success: success,
	swap: swap,
	switching: switching,
	table: table,
	"table-columns": "\\ea46",
	"table-compact-row": "\\ea47",
	"table-default-row": "\\ea48",
	"table-row-group": "\\ea49",
	"table-tiny-row": "\\ea4a",
	"tablet-devices": "\\ea4b",
	tasks: tasks,
	terminal: terminal,
	"text-bulletpoints": "\\ea53",
	"text-numbering": "\\ea54",
	"thumb-down": "\\ea34",
	"thumb-up": "\\ea35",
	time: time,
	"traffic-lights": "\\e9af",
	trashcan: trashcan,
	"tree-subcategories": "\\ea36",
	triangle: triangle,
	"triangle-dashed": "\\e9b1",
	"triangle-solid": "\\ea37",
	"triangle-warning": "\\e9b2",
	trophy: trophy,
	trowel: trowel,
	truck: truck,
	"under-construction": "\\ea0c",
	undo: undo,
	unlink: unlink,
	upload: upload,
	"vehicle-bus": "\\ea0e",
	"vehicle-car": "\\ea0f",
	"vehicle-parking": "\\ea4c",
	"vehicle-train": "\\ea10",
	"vehicle-truck": "\\ea11",
	versions: versions,
	"video-back": "\\e9b9",
	"video-forward": "\\e9ba",
	"video-pause": "\\e9bb",
	"video-play": "\\e9bc",
	"video-stop": "\\e9bd",
	"view-list": "\\e9be",
	"view-tiles": "\\e9bf",
	"volume-high": "\\e9c0",
	"volume-low": "\\e9c1",
	"volume-mute": "\\e9c2",
	"walkie-talkie": "\\ea38",
	warehouse: warehouse,
	"warning-circle": "\\e9cb",
	"washer-fluid": "\\e9c3",
	"weather-fog": "\\ea13",
	"weather-humidity": "\\ea14",
	"weather-moon": "\\ea52",
	"weather-precipitation": "\\ea15",
	"weather-rain": "\\ea16",
	"weather-snow": "\\ea17",
	"weather-storm": "\\ea18",
	"weather-sun": "\\ea1a",
	"weather-sun-cloud": "\\ea19",
	"weather-wind": "\\ea1b",
	"weather-windforce": "\\ea1c",
	wifi: wifi,
	"wifi-modem": "\\ea1e",
	wireline: wireline,
	"wireline-small": "\\e9d0",
	"zoom-in": "\\e9c5",
	"zoom-out": "\\e9c6"
};

var euiIcons = {
	
};

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class Icon extends TemplateComponent {
  constructor() {
    super();
    this._icon = this.shadowRoot.querySelector('.icon');
    this._edsIcon = this.shadowRoot.querySelector('.eds-icon');
    this._svgIcon = null;
  }

  /**
   * Get icon unicode from icon:unicode mapper
   */
  get iconCode() {
    return edsIcons[this.name];
  }

  /**
   * Set css variable based on value and variable name
   * @param { String } name  - name of the css variable
   * @param { String } value - value for css variable
   *
   * @private
   */
  _setCssVariable(name, value) {
    if (value) {
      this._icon.style.setProperty(name, value);
    } else {
      this._icon.style.removeProperty(name);
    }
  }

  /**
   * Set icon size css variable
   */
  _setIconSizeCssVariable() {
    this._setCssVariable('--icon-size', this.size);
  }

  /**
   * Set icon color css variable
   */
  _setIconColorCssVariable() {
    this._setCssVariable('--icon-color', this.color);
  }

  /**
   * Set icon code css variable
   */
  _setIconCodeCssVariable() {
    this._setCssVariable(
      '--content',
      this.iconCode ? `'${this.iconCode}'` : '',
    );
  }

  /**
   * Generate svg icon
   */
  _setSvgIcon() {
    this._svgIcon = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg',
    );
    this._svgIcon.classList.add('icon', 'eui-icon', 'show');
    this._svgIcon.setAttribute('viewBox', '0 0 102.4 102.4');
    const svgPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path',
    );
    svgPath.setAttribute('transform', 'scale(0.1,-0.1) translate(0,-960)');

    const path = euiIcons[this.name];
    if (path) {
      svgPath.setAttribute('d', path);
    } else {
      svgPath.removeAttribute('d');
    }

    this._svgIcon.appendChild(svgPath);
    this._icon.appendChild(this._svgIcon);

    // clean callback for removing unnecessary svg icon node
    return () => {
      if (this._svgIcon) {
        this._svgIcon.remove();
        this._svgIcon = null;
      }
    };
  }

  /**
   * Set correct icon & status
   *
   * @private
   */
  _setIcon() {
    if (this.iconCode !== undefined || !euiIcons[this.name]) {
      this._setIconCodeCssVariable();
      this._edsIcon.classList.add('show');
      if (this._cleanSvgIcon) {
        this._cleanSvgIcon();
      }
    } else {
      this._edsIcon.classList.remove('show');
      this._cleanSvgIcon = this._setSvgIcon();
    }
  }

  /**
   *
   * @function didConnect
   * @description lifecycle hook
   * triggers when component connected to DOM.
   */
  didConnect() {
    this._setIconColorCssVariable();
    this._setIconSizeCssVariable();
    this._setIcon();
  }

  /**
   * Lifecycle callback executed each time the components props are updated
   *
   * @method didChangeProps
   * @param {Map} changedProps - the previous values of the components changed props
   */
  didChangeProps(changedProps) {
    if (changedProps.has('name')) {
      this._setIcon();
    }

    if (changedProps.has('size')) {
      this._setIconSizeCssVariable();
    }

    if (changedProps.has('color')) {
      this._setIconColorCssVariable();
    }
  }
}

/**
 * @property {string} color - color for icon
 * @property {string} name - name of the icon
 * @property {string} size - size of icon
 */
definition(`eui-icon`, {
  style,
  template,
  props: {
    color: { attribute: true, type: String },
    name: { attribute: true, type: String, required: true },
    size: { attribute: true, type: String },
  },
})(Icon);

export { Icon };
