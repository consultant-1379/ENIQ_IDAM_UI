let i = 0;

export function stubRouter({ hash } = {}) {
  const ROUTE = hash || 'launcher';
  window.EUI = { ...window.EUI };
  window.EUI.Router = {
    currentHref: '',
    goto: () => {},
    routeMap: { launcher: ROUTE },
    addRoute: () => {
      i += 1;
      return i;
    },
    removeRoute: () => {},
  };
  return ROUTE;
}
