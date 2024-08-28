const Accessibility = superclass =>
  class extends superclass {
    _tabIndex;

    constructor() {
      super();
      this._tabIndex = this.getAttribute('tabindex');
      this.addEventListener('focus', () => {
        if (!this.disabled) {
          this._tabIndex = this.getAttribute('tabindex');
          if (this._tabIndex !== null && this._tabIndex !== '-1') {
            this.setAttribute('tabindex', -1);
            this.setInitialFocus?.();
          }
        }
      });
      this.addEventListener('blur', () => {
        this.setDisabledFocusState(this.disabled);
      });
    }

    didConnect() {
      super.didConnect?.();
      if (this.getAttribute('tabindex') == null) {
        // this is needed for Safari.
        this.setAttribute('tabindex', 0);
      }
      this.setDisabledFocusState(this.disabled);
    }

    didChangeProps(changedProps) {
      super.didChangeProps?.(changedProps);
      if (changedProps.has('disabled')) {
        this.setDisabledFocusState(this.disabled);
      }
    }

    setDisabledFocusState(disabled = false) {
      if (disabled) {
        this.setAttribute('tabindex', -1);
      } else if (this._tabIndex == null) {
        this.removeAttribute('tabindex');
      } else {
        this.setAttribute('tabindex', this._tabIndex);
      }
    }
  };

export { Accessibility as A };
