import { L as LitComponent, $ } from '../../common/lit-component-430a97d9.js';
import { o } from '../../common/class-map-40cf41c7.js';
import { d as definition } from '../../common/index-b5c18b0a.js';

function getSide(placement) {
  return placement.split('-')[0];
}

function getAlignment(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === 'x';
  let coords;

  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;

    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;

    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }

  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;

    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }

  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */

const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));

  {
    if (platform == null) {
      console.error(['Floating UI: `platform` property was not passed to config. If you', 'want to use Floating UI on the web, install @floating-ui/dom', 'instead of the /core package. Otherwise, you can create your own', '`platform`: https://floating-ui.com/docs/platform'].join(' '));
    }

    if (middleware.filter(_ref => {
      let {
        name
      } = _ref;
      return name === 'autoPlacement' || name === 'flip';
    }).length > 1) {
      throw new Error(['Floating UI: duplicate `flip` and/or `autoPlacement`', 'middleware detected. This will lead to an infinite loop. Ensure only', 'one of either has been passed to the `middleware` array.'].join(' '));
    }
  }

  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;

  for (let i = 0; i < middleware.length; i++) {
    const {
      name,
      fn
    } = middleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = { ...middlewareData,
      [name]: { ...middlewareData[name],
        ...data
      }
    };

    {
      if (resetCount > 50) {
        console.warn(['Floating UI: The middleware lifecycle appears to be running in an', 'infinite loop. This is usually caused by a `reset` continually', 'being returned without a break condition.'].join(' '));
      }
    }

    if (reset && resetCount <= 50) {
      resetCount++;

      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }

        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }

        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }

      i = -1;
      continue;
    }
  }

  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return { ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(middlewareArguments, options) {
  var _await$platform$isEle;

  if (options === void 0) {
    options = {};
  }

  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === 'floating' ? { ...rects.floating,
      x,
      y
    } : rects.reference,
    offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
    strategy
  }) : rects[elementContext]);
  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}

const min$1 = Math.min;
const max$1 = Math.max;

function within(min$1$1, value, max$1$1) {
  return max$1(min$1$1, min$1(value, max$1$1));
}

/**
 * Positions an inner element of the floating element such that it is centered
 * to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,

  async fn(middlewareArguments) {
    // Since `element` is required, we don't Partial<> the type
    const {
      element,
      padding = 0
    } = options != null ? options : {};
    const {
      x,
      y,
      placement,
      rects,
      platform
    } = middlewareArguments;

    if (element == null) {
      {
        console.warn('Floating UI: No `element` was passed to the `arrow` middleware.');
      }

      return {};
    }

    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const alignment = getAlignment(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const minProp = axis === 'y' ? 'top' : 'left';
    const maxProp = axis === 'y' ? 'bottom' : 'right';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;

    if (clientSize === 0) {
      clientSize = rects.floating[length];
    }

    const centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds

    const min = paddingObject[minProp];
    const max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = within(min, center, max); // Make sure that arrow points at the reference

    const alignmentPadding = alignment === 'start' ? paddingObject[minProp] : paddingObject[maxProp];
    const shouldAddOffset = alignmentPadding > 0 && center !== offset && rects.reference[length] <= rects.floating[length];
    const alignmentOffset = shouldAddOffset ? center < min ? min - center : max - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset
      }
    };
  }

});

const hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, matched => hash$1[matched]);
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }

  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';

  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }

  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

const hash = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, matched => hash[matched]);
}

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

/**
 * Changes the placement of the floating element to one that will fit if the
 * initially specified `placement` does not.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'flip',
    options,

    async fn(middlewareArguments) {
      var _middlewareData$flip;

      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = side === initialPlacement;
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];

      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }

      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
        overflows.push(overflow[main], overflow[cross]);
      }

      overflowsData = [...overflowsData, {
        placement,
        overflows
      }]; // One or more sides is overflowing

      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip$, _middlewareData$flip2;

        const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) != null ? _middlewareData$flip$ : 0) + 1;
        const nextPlacement = placements[nextIndex];

        if (nextPlacement) {
          // Try next placement and re-run the lifecycle
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        let resetPlacement = 'bottom';

        switch (fallbackStrategy) {
          case 'bestFit':
            {
              var _overflowsData$map$so;

              const placement = (_overflowsData$map$so = overflowsData.map(d => [d, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0].placement;

              if (placement) {
                resetPlacement = placement;
              }

              break;
            }

          case 'initialPlacement':
            resetPlacement = initialPlacement;
            break;
        }

        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }

      return {};
    }

  };
};

async function convertValueToCoords(middlewareArguments, value) {
  const {
    placement,
    platform,
    elements
  } = middlewareArguments;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === 'function' ? value(middlewareArguments) : value; // eslint-disable-next-line prefer-const

  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };

  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }

  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
/**
 * Displaces the floating element from its reference element.
 * @see https://floating-ui.com/docs/offset
 */

const offset = function (value) {
  if (value === void 0) {
    value = 0;
  }

  return {
    name: 'offset',
    options: value,

    async fn(middlewareArguments) {
      const {
        x,
        y
      } = middlewareArguments;
      const diffCoords = await convertValueToCoords(middlewareArguments, value);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }

  };
};

function isWindow(value) {
  return value && value.document && value.location && value.alert && value.setInterval;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function getNodeName(node) {
  return isWindow(node) ? '' : node ? (node.nodeName || '').toLowerCase() : '';
}

function getUAString() {
  const uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(item => item.brand + "/" + item.version).join(' ');
  }

  return navigator.userAgent;
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  const {
    overflow,
    overflowX,
    overflowY
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  // TODO: Try and use feature detection here instead
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle$1(element); // This is non-exhaustive but covers the most common CSS properties that
  // create a containing block.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

  return css.transform !== 'none' || css.perspective !== 'none' || // @ts-ignore (TS 4.1 compat)
  css.contain === 'paint' || ['transform', 'perspective'].includes(css.willChange) || isFirefox && css.willChange === 'filter' || isFirefox && (css.filter ? css.filter !== 'none' : false);
}
function isLayoutViewport() {
  // Not Safari
  return !/^((?!chrome|android).)*safari/i.test(getUAString()); // Feature detection for this fails in various ways
  // • Always-visible scrollbar or not
  // • Width of <html>, etc.
  // const vV = win.visualViewport;
  // return vV ? Math.abs(win.innerWidth / vV.scale - vV.width) < 0.5 : true;
}

const min = Math.min;
const max = Math.max;
const round = Math.round;

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  var _win$visualViewport$o, _win$visualViewport, _win$visualViewport$o2, _win$visualViewport2;

  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  const win = isElement(element) ? getWindow(element) : window;
  const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  const x = (clientRect.left + (addVisualOffsets ? (_win$visualViewport$o = (_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) != null ? _win$visualViewport$o : 0 : 0)) / scaleX;
  const y = (clientRect.top + (addVisualOffsets ? (_win$visualViewport$o2 = (_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) != null ? _win$visualViewport$o2 : 0 : 0)) / scaleY;
  const width = clientRect.width / scaleX;
  const height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

function isScaled(element) {
  const rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, // @ts-ignore - checked above (TS 4.1 compat)
  isOffsetParentAnElement && isScaled(offsetParent), strategy === 'fixed');
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // @ts-ignore
    node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    node.parentNode || ( // DOM Element detected
    isShadowRoot(node) ? node.host : null) || // ShadowRoot detected
    getDocumentElement(node) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
}

function getContainingBlock(element) {
  let currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && !['html', 'body'].includes(getNodeName(currentNode))) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      const parent = currentNode.parentNode;
      currentNode = isShadowRoot(parent) ? parent.host : parent;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  const window = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getDimensions(element) {
  if (isHTMLElement(element)) {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }

  const rect = getBoundingClientRect(element);
  return {
    width: rect.width,
    height: rect.height
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);

  if (offsetParent === documentElement) {
    return rect;
  }

  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } // This doesn't appear to be need to be negated.
    // else if (documentElement) {
    //   offsets.x = getWindowScrollBarX(documentElement);
    // }

  }

  return { ...rect,
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width,
    height,
    x,
    y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width,
    height,
    x,
    y
  };
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);

  if (['html', 'body', '#document'].includes(getNodeName(parentNode))) {
    // @ts-ignore assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }

  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;

  if (list === void 0) {
    list = [];
  }

  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  const target = isBody ? [win].concat(win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []) : scrollableAncestor;
  const updatedList = list.concat(target);
  return isBody ? updatedList : // @ts-ignore: isBody tells us target will be an HTMLElement here
  updatedList.concat(getOverflowAncestors(target));
}

function contains(parent, child) {
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;

    do {
      // use `===` replace node.isSameNode()
      if (next && parent === next) {
        return true;
      } // @ts-ignore: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  }

  return false;
}

function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, false, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}

function getClientRectFromClippingAncestor(element, clippingParent, strategy) {
  if (clippingParent === 'viewport') {
    return rectToClientRect(getViewportRect(element, strategy));
  }

  if (isElement(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent, strategy);
  }

  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping ancestor" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingAncestors(element) {
  const clippingAncestors = getOverflowAncestors(element);
  const canEscapeClipping = ['absolute', 'fixed'].includes(getComputedStyle$1(element).position);
  const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // @ts-ignore isElement check ensures we return Array<Element>


  return clippingAncestors.filter(clippingAncestors => isElement(clippingAncestors) && contains(clippingAncestors, clipperElement) && getNodeName(clippingAncestors) !== 'body');
} // Gets the maximum area that the element is visible in due to any number of
// clipping ancestors


function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const mainClippingAncestors = boundary === 'clippingAncestors' ? getClippingAncestors(element) : [].concat(boundary);
  const clippingAncestors = [...mainClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getElementRects: _ref => {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    return {
      reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
      floating: { ...getDimensions(floating),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: element => Array.from(element.getClientRects()),
  isRTL: element => getComputedStyle$1(element).direction === 'rtl'
};

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */

const computePosition = (reference, floating, options) => computePosition$1(reference, floating, {
  platform,
  ...options
});

var style = ":host {\n  font-family: var(--font-main, 'Ericsson Hilda', 'Helvetica');\n  display: inline-block;\n}\n\n:host([action]) .message {\n  background-color: var(--tooltip-background-action, #1174e6);\n  color: var(--white, #fff);\n}\n\n:host([action]) .arrow {\n  background-color: var(--tooltip-background-action, #1174e6);\n  color: var(--white, #fff);\n}\n\n:host([action]) #tooltip-wrapper {\n  cursor: pointer;\n}\n\n.tooltip.dotted {\n  border-bottom: 1px dotted var(--text, #242424);\n}\n\n#tooltip-wrapper {\n  position: relative;\n}\n\n.message {\n  background-color: var(--tooltip-background, #4e4e4e);\n  color: var(--tooltip-text, #f2f2f2);\n  opacity: 0;\n  visibility: hidden;\n  font-size: 12px;\n  padding: 7px;\n  line-height: 1.5em;\n  white-space: nowrap;\n  position: fixed;\n  z-index: 100;\n  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);\n}\n\n.arrow {\n  position: absolute;\n  background: var(--tooltip-background, #4e4e4e);\n  width: 8px;\n  height: 8px;\n  transform: rotate(45deg);\n}\n\n.complex_message {\n  white-space: normal;\n}\n\n.message.hidden, .tooltip:hover .message.hidden {\n  visibility: hidden;\n}\n\n.message.visible, .tooltip:hover .message.visible {\n  opacity: 1;\n  visibility: visible;\n}\n\n .message.show {\n  cursor: default;\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 0.18s ease-in-out 0.18s;\n}\n\n.message:hover {\n  opacity: 0;\n}\n\n.message.visible {\n  position: absolute;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2023
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

const DEFAULT_POSITION = 'bottom';

/**
 * @property {Boolean} dotted - sets the hovered item to be underlined dotted
 * @property {String} message - message displayed by the tooltip
 * @property {String} position - sets the position of the tooltip
 * @property {String} visible - defines display mode of the tooltip, can be (null|'always'|'never')
 * @property {Number} delay - sets the delay time when the tooltip should be visible,
 * if not set will be visible after 500ms, time unit is millisecond
 * @property {Boolean} action - sets the tooltip background to blue and
 * cursor to pointer for elements that perform an action when clicked
 */
class Tooltip extends LitComponent {
  /**
   * Returns if visible attribute is set to a meaning value
   *
   * @field
   * @returns {boolean}
   */
  get hasVisible() {
    return this.visible === 'always' || this.visible === 'never';
  }

  /**
   * Calculates position between element and tooltip
   * Using computePosition function from Floating UI 3pp
   *
   * @method
   * @param component {HTMLElement} Element to track hover
   */
  update(component) {
    const tooltip = this.shadowRoot.querySelector('#tooltip');
    const tooltipArrow = this.shadowRoot.querySelector('.arrow');

    // useragent margin affects calculation
    const margin = parseInt(getComputedStyle(document.body).margin, 10);
    const lowerBoundary = document.body.clientHeight - margin;
    const rightBoundary = document.body.clientWidth - margin;

    let overflowDetected = false;
    const { visible } = this;

    const middleware = {
      name: 'overflow', // Name in MiddlewareData
      async fn(middlewareArguments) {
        if (visible === 'always') {
          // Note: do not run middleware when always visible.
          // always visible is absolute to the contents whereas
          // normal tooltips are relative to the viewport
          return {};
        }

        const { placement, x, y, rects } = middlewareArguments;

        const overflow = await detectOverflow(middlewareArguments, {
          elementContext: 'reference',
        });

        let newX = x;
        let newY = y;

        // positive values mean overflowing, Negative it fits the container
        if (overflow.right > 0) {
          if (
            placement === 'right' ||
            placement === 'top-end' ||
            placement === 'right-end' ||
            placement === 'right-start' ||
            placement === 'bottom-end'
          ) {
            overflowDetected = true;
            newX = x - overflow.right;
          } else if (placement === 'top' || placement === 'bottom') {
            overflowDetected = true;
            newX = x - overflow.right / 2;
          }
        }

        if (overflow.bottom > 0) {
          if (placement === 'right' || placement === 'left') {
            overflowDetected = true;
            newY = y - overflow.bottom / 2;
          } else if (
            placement === 'bottom' ||
            placement === 'bottom-end' ||
            placement === 'bottom-start' ||
            placement === 'left-end' ||
            placement === 'right-end'
          ) {
            overflowDetected = true;
            newY = y - overflow.bottom;
          }
        }

        let reset = null;
        const order = [
          'top-start',
          'top',
          'top-end',
          'bottom-start',
          'bottom',
          'bottom-end',
          'left-start',
          'left',
          'left-end',
          'right-start',
          'right',
          'right-end',
        ];

        // If outside valid boundary, reset with new position
        if (newY < margin || newX < margin) {
          const oldIndex = order.indexOf(placement);
          const newIndex = oldIndex - 1;

          // safeguard to avoid next position set
          if (newIndex % 3 !== 2) {
            reset = {
              placement: order[newIndex],
            };
          }
        } else if (
          newY > lowerBoundary - rects.floating.height ||
          newX > rightBoundary - rects.floating.width
        ) {
          const oldIndex = order.indexOf(placement);
          const newIndex = oldIndex + 1;

          // safeguard to avoid next position set
          if (newIndex % 3 !== 0) {
            reset = {
              placement: order[newIndex],
            };
          }
        }

        return { x: newX, y: newY, data: overflow, reset };
      },
    };

    computePosition(component, tooltip, {
      placement: this.position,
      middleware: [
        flip({ flipAlignment: false }),
        arrow({ element: tooltipArrow }),
        middleware,
        offset(10),
      ],
    }).then(data => {
      this._safePosition = data.placement;
      if (this.smart && !overflowDetected) {
        return;
      }

      const { x, y, placement, middlewareData } = data;
      Object.assign(tooltip.style, {
        left: `${x}px`,
        top: `${y}px`,
      });

      const { x: arrowX, y: arrowY } = middlewareData.arrow;
      const mainStaticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]];

      const crossStaticSide = {
        'right-start': 'top',
        'left-start': 'top',
        'right-end': 'bottom',
        'left-end': 'bottom',
        'top-end': 'right',
        'bottom-end': 'right',
        'top-start': 'left',
        'bottom-start': 'left',
      }[placement];

      const unsetSides = {
        top: '',
        left: '',
        right: '',
        bottom: '',
      };

      // is non-center aligned
      if (placement.split('-')[1]) {
        Object.assign(tooltipArrow.style, {
          ...unsetSides,
          [crossStaticSide]: '5px',
          [mainStaticSide]: '-3.5px',
        });
      } else {
        Object.assign(tooltipArrow.style, {
          ...unsetSides,
          left: arrowX != null ? `${arrowX}px` : '',
          top: arrowY != null ? `${arrowY}px` : '',
          [mainStaticSide]: '-3.5px',
        });
      }
      tooltip.classList.add('show');
    });
  }

  /**
   * Observer for always visible option
   * Only run update when tooltip enter screen
   */
  observerForVisibleAlways() {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        // run update when enter screen
        if (entry.isIntersecting) {
          this.update(this.tooltipWrapper);
        }
      },
      {
        threshold: 1,
      },
    );

    observer.observe(this.tooltipWrapper);
  }

  /**
   * lifecycle hook
   *
   * @method didUpgrade
   *
   */
  didUpgrade() {
    this.tooltipWrapper = this.shadowRoot.querySelector('#tooltip-wrapper');
    this.tooltip = this.shadowRoot.querySelector('#tooltip');
    this.arrow = this.shadowRoot.querySelector('.arrow');
    if (!this.hasVisible) {
      this.makeHoverable();
    } else if (this.visible === 'always') {
      this.observerForVisibleAlways();
    } else if (this.visible === 'never') {
      this.hideTooltip();
    }
  }

  /**
   * Hook into the lifecycle callback to trigger the toggle event when the
   * on prop is changed.
   *
   * @function didChangeProps
   * @param {Map} changedProps - previous values of the changed props
   */
  didChangeProps(changedProps) {
    if (this.tooltip && changedProps.has('visible')) {
      if (this.visible === 'always') {
        this.update(this.tooltipWrapper);
      } else if (this.visible === 'never') {
        this.hideTooltip();
      }
    }
  }

  /**
   * @method didDisconnect
   * @description lifecycle hook triggers before component will be disconnected
   */
  didDisconnect() {
    document.removeEventListener('wheel', this.hideTooltip);
  }

  /**
   * Will remove hooks from the element disabling the normal popup behaviour
   *
   * @method
   */
  makeStatic() {
    this.tooltipWrapper.removeEventListener('mouseenter', this.showTooltip);
    this.tooltipWrapper.removeEventListener('mouseleave', this.hideTooltip);
    document.removeEventListener('wheel', this.hideTooltip);
    this.tooltip.removeAttribute('style');
  }

  /**
   * Will add hooks from the element enabling the normal popup behaviour
   *
   * @method
   */
  makeHoverable() {
    this.makeStatic();

    this.tooltipWrapper.addEventListener('mouseenter', () => {
      this.showTooltip(this.tooltipWrapper);
    });

    this.tooltipWrapper.addEventListener('mouseleave', this.hideTooltip);
  }

  /**
   * Hide a tooltip
   *
   * @method
   */
  hideTooltip = () => {
    document.removeEventListener('wheel', this.hideTooltip);
    this.shadowRoot.querySelector('#tooltip').classList.remove('show');

    if (this.showTooltipTimeout) {
      clearTimeout(this.showTooltipTimeout);
      delete this.showTooltipTimeout;
    }
  };

  /**
   *
   * @param {Object} component - component that tooltip is added on hover
   */
  showTooltip = (component = this.tooltipWrapper) => {
    if (!this.showTooltipTimeout) {
      this.showTooltipTimeout = setTimeout(() => {
        this.update(component);
        document.addEventListener('wheel', this.hideTooltip);
        delete this.showTooltipTimeout;
      }, this.delay);
    }
  };

  /**
   * Render the <eui-tooltip> component. This function is called each time a
   * prop changes.
   */
  render() {
    const message = () => {
      if (!this.message || this.message.trim() === '') {
        return $`<div
          id="tooltip"
          class=${o({
            message: true,
            visible: this.visible === 'always',
            hidden: this.visible === 'never',
            complex_message: !this.message,
          })}
        >
          <div class="arrow"></div>
          <slot name="message"></slot>
        </div>`;
      }

      return $`<div
        id="tooltip"
        class=${o({
          message: true,
          visible: this.visible === 'always',
          hidden: this.visible === 'never',
          complex_message: !this.message,
        })}
      >
        <div class="arrow"></div>
        ${this.message}
      </div>`;
    };

    return $`
      <span
        id="tooltip-wrapper"
        class=${o({
          tooltip: true,
          dotted: this.dotted,
          [this._safePosition]: true,
        })}
      >
        <slot id="content-slot"></slot>
        ${message()}
      </span>
    `;
  }
}

definition('eui-tooltip', {
  style,
  props: {
    dotted: { attribute: true, type: Boolean },
    message: { attribute: true, type: String },
    position: { attribute: true, type: String, default: DEFAULT_POSITION },
    visible: { attribute: true, type: String },
    delay: { attribute: true, type: Number, default: 500 },
    smart: { attribute: true, type: Boolean },
    _safePosition: { type: String },
    action: { attribute: true, type: Boolean },
  },
})(Tooltip);

export { Tooltip };
