import { b, $, w, L as LitComponent } from '../common/lit-component-430a97d9.js';
import { e, i, t, o } from '../common/class-map-40cf41c7.js';
import { l } from '../common/if-defined-fd12e107.js';
import { b as a, c as c$1, u as u$1, m, s } from '../common/timeline-entry-14c1c0ec.js';
import { C as Checkbox, i as i$1 } from '../common/menu-ed843685.js';
import { d as definition, T as TemplateComponent } from '../common/index-b5c18b0a.js';
import { Icon } from './theme/icon.js';
import '../common/dropdown-ed8e8c66.js';
import '../common/button-4832c86a.js';
import '../common/link-6c8a35ba.js';
import '../common/switch-2cbdf959.js';
import '../common/text-area-60880b93.js';
import '../common/text-field-cc7ce4be.js';
import { Tooltip } from './base/tooltip.js';
import { C as Card } from '../common/multi-panel-tile-7591ddbe.js';
import '../common/tab-a5a457c0.js';
import '../common/tabs-229c14f9.js';
import '../common/tile-dad3a103.js';
import '../common/accessibility-e96b3ad8-a1d8d2ef.js';

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u=(e,s,t)=>{const r=new Map;for(let l=s;l<=t;l++)r.set(e[l],l);return r},c=e(class extends i{constructor(e){if(super(e),e.type!==t.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,s,t){let r;void 0===t?t=s:void 0!==s&&(r=s);const l=[],o=[];let i=0;for(const s of e)l[i]=r?r(s,i):i,o[i]=t(s,i),i++;return {values:o,keys:l}}render(e,s,t){return this.dt(e,s,t).values}update(s$1,[t,r,c]){var d;const a$1=a(s$1),{values:p,keys:v}=this.dt(t,r,c);if(!Array.isArray(a$1))return this.ut=v,p;const h=null!==(d=this.ut)&&void 0!==d?d:this.ut=[],m$1=[];let y,x,j=0,k=a$1.length-1,w=0,A=p.length-1;for(;j<=k&&w<=A;)if(null===a$1[j])j++;else if(null===a$1[k])k--;else if(h[j]===v[w])m$1[w]=c$1(a$1[j],p[w]),j++,w++;else if(h[k]===v[A])m$1[A]=c$1(a$1[k],p[A]),k--,A--;else if(h[j]===v[A])m$1[A]=c$1(a$1[j],p[A]),u$1(s$1,m$1[A+1],a$1[j]),j++,A--;else if(h[k]===v[w])m$1[w]=c$1(a$1[k],p[w]),u$1(s$1,a$1[j],a$1[k]),k--,w++;else if(void 0===y&&(y=u(v,w,A),x=u(h,j,k)),y.has(h[j]))if(y.has(h[k])){const e=x.get(v[w]),t=void 0!==e?a$1[e]:null;if(null===t){const e=u$1(s$1,a$1[j]);c$1(e,p[w]),m$1[w]=e;}else m$1[w]=c$1(t,p[w]),u$1(s$1,a$1[j],t),a$1[e]=null;w++;}else m(a$1[k]),k--;else m(a$1[j]),j++;for(;w<=A;){const e=u$1(s$1,m$1[A+1]);c$1(e,p[w]),m$1[w++]=e;}for(;j<=k;){const e=a$1[j++];null!==e&&m(e);}return this.ut=v,s(s$1,m$1),b}});

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

const SPACE_BAR_KEY_CODE = 32;

const TINY_ROW_HEIGHT = 26;
const COMPACT_ROW_HEIGHT = 34;
const DEFAULT_ROW_HEIGHT = 50;
const MULTI_SELECTION_COLUMN_WIDTH = 40;
const MIN_COLUMN_RESIZING_WIDTH = 60;
const PINNED_COLUMN_DEFAULT_WIDTH = 150;
const EXPANDABLE_CONTROL_COLUMN_WIDTH = 40;

const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';

/**
 * Add props to the mixin.
 *
 * @function addProps
 * @param {Object} props - props for the mixin
 * @param {String} expandStyle - CSS file for the mixin
 */
const addProps = (props, expandStyle) => target => {
  if (expandStyle) {
    target.style = `${target.style.toString()}${expandStyle.toString()}`;
  }
  target._propDefs = { ...target._propDefs, ...props };
};

var style$6 = ":host(:not([expandable])[multi-select]) th:first-child,\n:host(:not([expandable])[multi-select]) td:first-child,\n:host([multi-select][expandable]) th:nth-child(2),\n:host([multi-select][expandable]) tr td:nth-child(2) {\n  width: 40px;\n}\n\n:host([multi-select]) td,\n:host([single-select]) td {\n  cursor: pointer;\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n\ntr[selected] td,\n:host([striped]) tbody > tr[selected] td {\n  background-color: var(--table-selected, #D3E3F7);\n}\n\n/* Enhancement for checkbox hitting area */\n:host([multi-select]) .checkbox {\n  padding: var(--space-base, 8px);\n}\n\n:host(:not([expandable])[multi-select]) th:first-child,\n:host(:not([expandable])[multi-select]) tr td:first-child {\n  padding-left: var(--space-base, 8px) !important;\n}\n\n:host([multi-select][compact]) .checkbox,\n:host([multi-select][tiny]) .checkbox {\n  padding: var(--space-small, 4px);\n}\n\n:host(:not([expandable])[multi-select][compact]) th:first-child,\n:host(:not([expandable])[multi-select][compact]) tr td:first-child {\n  padding-left: var(--space-small, 4px) !important;\n}\n\n:host(:not([expandable])[multi-select][tiny]) th:first-child,\n:host(:not([expandable])[multi-select][tiny]) tr td:first-child {\n  padding-left: 0 !important;\n}\n\n.multi-select-control {\n  z-index: 4;\n  cursor: pointer;\n  user-select: none;\n  position: sticky;\n  left: 0;\n  background-color: var(--table-background);\n}\n\n:host([expandable]) .multi-select-control {\n  left: 40px;\n}\n\ntr[data-index] .multi-select-control {\n  z-index: 0;\n}\n\n:host(:not([expandable])[striped]) tbody tr:not([selected]):nth-child(even) .multi-select-control {\n  background-color: var(--table-striped-gray, #EBEBEB);\n}\n\n:host(:not([expandable])[striped]) tbody tr:not([selected]):nth-child(even):hover .multi-select-control {\n  background-color: var(--table-hover, #DCDCDC);\n}\n";

// @ts-check

const SelectionMixin = superclass => {
  const MixedClass = class extends superclass {
    static get components() {
      return {
        'eui-checkbox': Checkbox,
      };
    }

    /**
     * overriding & extending constructor
     */
    constructor() {
      super();

      // Set 0 as initial value
      this.prevRowIndex = 0;
    }

    /**
     * Get the header checkbox used for multi select table
     * @returns <eui-checkbox>
     */
    get headerCheckBox() {
      return this.shadowRoot.querySelector('[name=cb-header]');
    }

    /**
     * Restore selection status of all rows
     *
     * @private
     * @function _restoreSelectState
     */
    _restoreSelectState() {
      for (const row of this.data) {
        row.selected = false;
      }
      this._notifyChanges();
    }

    /**
     * Get the correct index against passed row
     * Will be overridden when virtual-scroll is enabled
     *
     * @private
     * @function _getRowIndex
     *
     * @param row - row to get index against
     * @param index - row index among rendered rows
     */
    _getRowIndex(row, index) {
      return index;
    }

    /**
     * Get selected rows
     *
     * @property getSelectedRows
     * @returns {Array} selected rows
     */
    get selectedRows() {
      return this.data.filter(row => row.selected === true);
    }

    /**
     * Exposed api for clear all the selected rows
     *
     * @method clearAllSelected
     */
    clearAllSelected() {
      if (this.multiSelect || this.singleSelect) {
        this._restoreSelectState();
      }
    }

    /**
     * Set the select status of header checkbox
     *
     * @private
     * @function _setHeaderCheckboxStatus
     */
    _setHeaderCheckboxStatus() {
      const tableHeadCheckbox =
        this.shadowRoot && this.shadowRoot.querySelector('[name=cb-header]');
      if (tableHeadCheckbox) {
        const selectedCount = this.selectedRows.length;

        if (selectedCount === this.data.length && this.data.length > 0) {
          this.selectedAny = false;
          tableHeadCheckbox.checked = true;
        } else if (selectedCount > 0) {
          this.selectedAny = true;
          tableHeadCheckbox.indeterminate = true;
        } else {
          this.selectedAny = false;
          tableHeadCheckbox.checked = false;
          tableHeadCheckbox.indeterminate = false;
        }
      }
    }

    /**
     * Handle click event on the header checkbox
     *
     * @private
     * @function _handlerCheckboxHeader
     * @param {Object} detail - detail of the event sent from the checkbox
     */
    _handleHeaderCheckbox(checked) {
      for (const row of this.data) {
        if (this.selectedAny && checked) {
          row.selected = !checked;
        } else if (!this.selectedAny) {
          row.selected = checked;
        }
      }

      this._notifyChanges();
      this._emitRowSelected();
    }

    /**
     * Render a checkbox to the table heading
     *
     * @private
     * @function addHeaderCheckbox
     * @returns {LitComponent}
     */
    _renderHeaderCheckbox() {
      return this.multiSelect
        ? $`<th class="multi-select-control">
            <eui-checkbox
              tabindex="-1"
              name="cb-header"
              class="checkbox"
              ?disabled=${this.data.length === 0}
              @change=${event => {
                this._handleHeaderCheckbox(event.detail.checked);
              }}
            ></eui-checkbox>
          </th>`
        : w;
    }

    /**
     * Render a checkbox to the the row of a table.
     *
     * @private
     * @function addRowCheckbox
     * @param {Object} row - the current table's row
     */
    _renderRowCheckbox(row) {
      return this.multiSelect
        ? $`<td class="multi-select-control">
            <eui-checkbox
              name="cb-row"
              class="checkbox"
              ?checked=${row.selected}
            >
            </eui-checkbox>
          </td>`
        : w;
    }

    /**
     * Flip the select state of given row
     *
     * @private
     * @function _flipRowSelectState
     * @param {Object} row
     */
    _flipRowSelectState(row) {
      row.selected = row.selected === undefined ? true : !row.selected;
    }

    /**
     * Selects checkbox and row on row click
     *
     * @private
     * @function _handleRowClick
     * @param {Object} row - row of column data
     */
    _handleRowClick(event, row, index = 0) {
      const eventTarget = event.target;
      const isExpandCollapseEvent =
        this.expandable &&
        (eventTarget.name === 'chevron-right' ||
          eventTarget.name === 'chevron-down' ||
          eventTarget.classList.contains('expandable-control'));

      // Get correct index for clicked row
      index = this._getRowIndex(row, index);

      this.setFocus(event.currentTarget);

      // Row checkbox will always only select / deselect current clicking row
      if (eventTarget.name === 'cb-row') {
        this._flipRowSelectState(row);
        this.prevRowIndex = index;
      } else if (!isExpandCollapseEvent) {
        const { shiftKey, metaKey } = event;
        // cmd key on Mac
        const ctrlKey = !metaKey ? event.ctrlKey : metaKey;
        if (this.multiSelect) {
          if (shiftKey && this.prevRowIndex !== index) {
            // if shift click, select the range of rows
            const indexLower = Math.min(this.prevRowIndex, index);
            const indexUpper = Math.max(this.prevRowIndex, index);
            this._selectRange(indexLower, indexUpper, ctrlKey);
          } else {
            this.prevRowIndex = index;

            if (ctrlKey) {
              this._flipRowSelectState(row);
            } else {
              if (!(this.selectedRows.length > 1 && row.selected)) {
                this._flipRowSelectState(row);
              }
              this._ensureSingleSelectRow(row);
            }
          }
        } else if (this.singleSelect) {
          this._flipRowSelectState(row);
          this._ensureSingleSelectRow(row);
        }
      }

      this._notifyChanges();
      if (!isExpandCollapseEvent) {
        this._emitEvents(row);
      }
    }

    /**
     * Notify re-render & set header checkbox status accordingly
     *
     * @private
     * @function _notifyChanges
     */
    _notifyChanges() {
      this.data = [...this.data];
      if (this.multiSelect) {
        this._setHeaderCheckboxStatus();
      }
    }

    /**
     * Wrapper of emitting row select & clicking events
     *
     * @private
     * @function _emitEvents
     */
    _emitEvents(row) {
      if (this.multiSelect || this.singleSelect) {
        this._emitRowSelected();
      }

      this._emitRowClick(row);
    }

    /**
     * Emit row-click event with clicked row
     *
     * @private
     * @function _emitRowClick
     * @param {Object} row table row been clicked
     */
    _emitRowClick(row) {
      this.bubble('eui-table:row-click', row);
    }

    /**
     * Emit row selected event with all selected rows
     *
     * @private
     * @function _emitRowSelected
     */
    _emitRowSelected() {
      this.bubble('eui-table:row-select', this.selectedRows);
    }

    /**
     * Select rows in the given range
     *
     * @private
     * @function _selectRange
     * @param {Number} lowerIndex - lower index (inclusive) of the range of selected rows
     * @param {Number} upperIndex - upper index (inclusive) of the range of selected rows
     * @param {Boolean} concatRange - add this range to already selected rows or not?
     */
    _selectRange(lowerIndex, upperIndex, concatRange) {
      for (const [index, row] of this.data.entries()) {
        if (index >= lowerIndex && index <= upperIndex) {
          row.selected = true;
        } else {
          row.selected = !concatRange ? false : row.selected;
        }
      }
    }

    /**
     * selects checkbox and row on space bar press
     *
     * @private
     * @function __handleRowKeyPress
     * @param {object} row -row of column date
     * @param {object} event - bubbled event from keypress on row
     */
    _handleRowKeyPress(event, row, index) {
      if (event.keyCode === SPACE_BAR_KEY_CODE) {
        if (event.preventDefault) {
          event.preventDefault();
          this._handleRowClick(event, row, index);
        }
      }
    }

    /**
     * Select a single row
     *
     * @private
     * @function _selectSingleRow
     * @param {Object} row - row of column data
     */
    _ensureSingleSelectRow(row) {
      const selected = this.selectedRows;
      for (const rowItem of selected) {
        if (rowItem !== row) {
          rowItem.selected = false;
        }
      }
    }

    /**
     * Override _renderColumnGroup to cover the first multi-select column
     *
     * @private
     * @function _renderColumnGroup
     */
    _renderColumnGroup() {
      if (this.multiSelect) {
        // Add extra dummy column as the first one while generating column group
        return super._renderColumnGroup.call({
          expandable: this.expandable,
          columns: [
            { width: `${MULTI_SELECTION_COLUMN_WIDTH}px` },
            ...this.columns,
          ],
        });
      }
      return super._renderColumnGroup();
    }

    /**
     * Select a single row, and de-select any other selected rows in the table
     * The select all check box is updated to reflect new table selection
     *
     * Events dispatched upon completion of row select
     * 1. eui-table:row-click
     * 2. eui-table:row-select
     *
     * @function selectSingleRow
     * @param {<tr>} row - table row (<tr> Element).
     */
    selectSingleRow = row => {
      const focusedRow = this.dataSource[row.getAttribute('data-index')];
      focusedRow.selected = true;
      this._ensureSingleSelectRow(focusedRow);
      this._notifyChanges();
      this._emitEvents(focusedRow);
    };

    /**
     * Select a row. Rows are only set selected if they are not already selected.
     * The select all check box is updated to reflect new table selection
     *
     * Events dispatched upon completion of row select (only if the selection status changes)
     * 1. eui-table:row-click
     * 2. eui-table:row-select
     *
     * @function selectRow
     * @param {<tr>} row - table row (<tr> Element).
     */
    selectRow = row => {
      const focusedRow = this.dataSource[row.getAttribute('data-index')];
      if (!focusedRow.selected) {
        focusedRow.selected = true;
        this._notifyChanges();
        this._emitEvents(focusedRow);
      }
    };

    /**
     * Toggle the selection state of a row.
     * The select all check box is updated to reflect new table selection
     *
     * Events dispatched upon completion of row select/de-select
     * 1. eui-table:row-click
     * 2. eui-table:row-select
     *
     * @function toggleRow
     * @param {<tr>} row - table row (<tr> Element).
     */
    toggleRow = row => {
      const focusedRow = this.dataSource[row.getAttribute('data-index')];
      focusedRow.selected = !focusedRow.selected;
      this._notifyChanges();
      this._emitEvents(focusedRow);
    };

    /**
     * Set header checkbox status for the first time rendering when table is multi-select
     */
    didUpgrade() {
      super.didUpgrade();
      if (this.multiSelect) {
        this._setHeaderCheckboxStatus();
      }
    }

    /**
     * Overriding & extending didChangeProps lifecycle
     * @param {Map} changedProps
     */
    didChangeProps(changedProps) {
      super.didChangeProps(changedProps);

      if (
        (changedProps.has('singleSelect') && !this.singleSelect) ||
        (changedProps.has('multiSelect') && !this.multiSelect)
      ) {
        this._restoreSelectState();
      }

      if (changedProps.has('data') && this.multiSelect) {
        this._setHeaderCheckboxStatus();
      }
    }
  };

  /**
   * @property {Boolean} singleSelect - enable single-select on the table
   * @property {Boolean} multiSelect - enable multi-select on the table
   */
  addProps(
    {
      singleSelect: { attribute: true, type: Boolean },
      multiSelect: { attribute: true, type: Boolean },
    },
    style$6,
  )(MixedClass);

  return MixedClass;
};

var style$5 = ".sortable__cell:hover {\n  cursor: pointer;\n}\n\n.sortable__cell:hover eui-icon{\n  --icon-color: var(--blue, #1174E6);\n}";

// @ts-check

const SortMixin = superClass => {
  const MixedClass = class extends superClass {
    /**
     * Handle click event of column header to be sorted.
     *
     * @private
     * @function _handleHeaderClick
     *
     * @param {Object} event - click event object
     */
    _handleHeaderClick(column) {
      if (this.sortable && column.sortable) {
        this._sort(column);
      }
    }

    /**
     * Sort the column data.
     *
     * @private
     * @function _sort
     *
     * @param {Object} clickedColumn - table column clicked
     */
    _sort(clickedColumn) {
      const preSortStatus = clickedColumn.sort;
      this.columns.forEach(col => {
        col.sort = null;
      });
      clickedColumn.sort = preSortStatus === 'asc' ? 'desc' : 'asc';
      if (clickedColumn.sortType) {
        this.data.sort((rowA, rowB) =>
          clickedColumn.sortType(rowA, rowB, clickedColumn),
        );
      } else {
        this._sortColumn(clickedColumn);
      }
      this.data = [...this.data];
      this.bubble('eui-table:sort', {
        sort: clickedColumn.sort,
        column: clickedColumn,
      });
    }

    /**
     * Sort the column data on which sort prop is set to asc/desc
     *
     * @function _sortColumn
     * @param {Object} column - column definition
     */
    _sortColumn(column) {
      const collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base',
      });
      if (column.sort === 'asc') {
        this.data.sort((rowA, rowB) =>
          collator.compare(rowA[column.attribute], rowB[column.attribute]),
        );
      } else {
        this.data.sort((rowA, rowB) =>
          collator.compare(rowB[column.attribute], rowA[column.attribute]),
        );
      }
    }

    /**
     * Returns the sorting icon-name with respect to the type of sorting(asc|desc) enabled
     * @function getSortDirection
     * @param {String} sort - sort direction of the column
     */
    getSortDirection(sort) {
      if (sort === 'desc') {
        return 'sort-down';
      }
      if (sort === 'asc') {
        return 'sort-up';
      }
      return 'sorting';
    }

    /**
     * Returns the sort-icon on sortable column header,
     * whenever the sortable property is set to true on any column and on the table
     *
     * @function renderSortingControl
     * @param {Object} column - column definition
     */
    renderSortingControl(column) {
      if (this.sortable && column.sortable) {
        return $`<eui-icon
          id="icon-${column.attribute}"
          name=${this.getSortDirection(column.sort)}
          size="14px"
        ></eui-icon>`;
      }
      return w;
    }

    /**
     * Sort the sortable column if the sort is predefined
     * @function _predefinedSort
     */
    _predefinedSort() {
      if (this._predefinedSorted) return;
      if (this.sortable && this.columns && this.data) {
        for (const column of this.columns) {
          if (column.sortable && column.sort) {
            this._sortColumn(column);
            this._predefinedSorted = true;
            break;
          }
        }
      }
    }

    /**
     * Add the class 'sortable__cell' if the column is sortable
     * @function _getClassMapForColumnCell
     * @param {Object} column - column definition
     */
    _getClassMapForColumnCell(column) {
      if (this.sortable) {
        return o({
          table__cell: true,
          sortable__cell: this.sortable && column.sortable,
        });
      }

      return super._getClassMapForColumnCell();
    }

    /**
     * Check for a column on which predefined sort is defined
     * for the first time rendering when table is sortable
     */
    didUpgrade() {
      super.didUpgrade();
      this._predefinedSort();
      this.data = [...this.data];
    }

    /**
     * Overriding & extending didChangeProps lifecycle
     * @param {Map} changedProps
     */
    didChangeProps(changedProps) {
      super.didChangeProps(changedProps);
      if (changedProps.has('sortable') || changedProps.has('columns')) {
        this._predefinedSorted = false;
        this._predefinedSort();
      }

      /**
       * this ensure _predefinedSort() is called only once at the beginning,
       * as data prop changes everytime on sorting a column
       */
      if (changedProps.has('data')) {
        this._predefinedSort();
      }
    }
  };

  /**
   * @property {Boolean} sortable - enable sorting on the table
   */
  addProps(
    {
      sortable: { attribute: true, type: Boolean },
    },
    style$5,
  )(MixedClass);
  return MixedClass;
};

var style$4 = ":host([resizable]) th {\n  box-sizing: border-box;\n  border-right: 1px solid var(--table-inner-gray, #878787);\n}\n\n:host([resizable][multi-select]) th:first-child,\n:host([resizable][expandable]) th:first-child,\n:host([resizable][expandable][multi-select]) th:nth-child(2) {\n  border-right: none;\n}\n\n:host([resizable]) .th--dummy-column {\n  border-right: none;\n  width: 0;\n  padding: 0;\n}\n\n.th__resize-anchor-left,\n.th__resize-anchor {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  cursor: col-resize;\n  width: var(--space-small, 4px);\n  height: var(--row-height, 50px);\n}\n\n.th__resize-anchor-left {\n  left: 0;\n}\n";

// @ts-check

const ResizeColumnMixin = superclass => {
  const MixedClass = class extends superclass {
    /**
     * Handle mousedown event of column to be resized.
     *
     * @private
     * @function _mousedown
     *
     * @param {Object} event - mousedown event object
     */
    _mousedown = (event, columnIndex) => {
      event.preventDefault();
      event.stopPropagation();

      const evtTarget = event.target;
      const isResizeAnchorForPrevColumn = evtTarget.className.includes(
        'th__resize-anchor-left',
      );
      this._curColumn = isResizeAnchorForPrevColumn
        ? evtTarget
            .closest('tr')
            .querySelector(`[data-column-index="${columnIndex - 1}"]`)
        : evtTarget.closest('th');
      this._curColumn.startPosition = event.clientX;
      this._curColumn.startWidth =
        this._curColumn.getBoundingClientRect().width;

      // Attach mousemove and mouseEnd event handlers to document to handle resizing on the fly
      document.addEventListener('mousemove', this._mousemove);
      document.addEventListener('mouseup', this._mouseEnd);
    };

    /**
     * Triggers when resizing is done on mouseup event,
     * clear mousemove & mouseup resizing event handlers
     *
     * @private
     * @function _mouseEnd
     *
     */
    _mouseEnd = () => {
      document.removeEventListener('mousemove', this._mousemove);
      document.removeEventListener('mouseup', this._mouseEnd);
    };

    /**
     * Handle mousemove event of column to resize.
     *
     * @private
     * @function _mousemove
     *
     * @param {Object} event - mouse event object
     */
    _mousemove = event => {
      const displayColumns = this._getDisplayColumns();
      requestAnimationFrame(() => {
        const { columnIndex } = this._curColumn.dataset;
        const { startWidth, startPosition } = this._curColumn;

        // Fallback minimum 60px for column(s) without width to avoid shrinking to 0
        this._handleMinWidthColumns();

        // Setting resized width to current column
        const moveTo = startWidth + event.clientX - startPosition;
        // only apply changes on display columns
        displayColumns[columnIndex].width = `${this._getResizingWidth(
          moveTo,
        )}px`;

        this._calculateDummyColumnWidth();
      });
    };

    /**
     * Get the calculated width for current resizing column
     *
     * @private
     * @_getResizingWidth
     *
     * @param {Number} moveToWidth new width being resized to
     */
    _getResizingWidth(moveToWidth) {
      return Math.max(MIN_COLUMN_RESIZING_WIDTH, moveToWidth);
    }

    /**
     * Prevent columns which has no width or less than min width shrinking to 0.
     *
     * @param {Boolean} containerOverflow - True if table is overflowing its container
     * @private
     * @function _handleMinWidthColumns
     */
    _handleMinWidthColumns(containerOverflow) {
      const isOverFlow = containerOverflow || this._isOverflowingContainer();
      for (const [index, column] of this._getDisplayColumns().entries()) {
        if (column.width === undefined) {
          if (
            this._getColumnWidthByIndex(index) < MIN_COLUMN_RESIZING_WIDTH ||
            isOverFlow
          ) {
            column.width = `${MIN_COLUMN_RESIZING_WIDTH}px`;
          }
        }
      }
    }

    /**
     * Returns the actual width of a column by its index in the table.
     *
     * @private
     * @function _getColumnWidthByIndex
     * @returns {Number} columnIndex - index of column
     */
    _getColumnWidthByIndex(columnIndex) {
      const column = this.shadowRoot.querySelectorAll('th')[columnIndex];
      return (column && column.getBoundingClientRect().width) || 0;
    }

    /**
     * Disable mouse right click on resize anchor
     * @param {Object} event - event object for right click
     */
    _handleResizeRightClick(event) {
      event.preventDefault();
      event.stopPropagation();
    }

    /**
     * Render resize anchor
     *
     * @private
     * @function _renderResizeAnchor
     *
     * @param {Object} column - column object
     * @param {Number} columnIndex - column rendering index
     * @param {Boolean} isForPrevColumn - indicates whether is for resizing previous column
     */
    _renderResizeAnchor(column, columnIndex, isForPrevColumn) {
      let resizeAnchor = w;

      if (this.resizable) {
        resizeAnchor = $`<div
          class=${isForPrevColumn
            ? 'th__resize-anchor-left th__resize-control'
            : 'th__resize-anchor th__resize-control'}
          @mousedown=${event => this._mousedown(event, columnIndex)}
          @contextmenu=${this._handleResizeRightClick}
          @click=${event => event.stopPropagation()}
        ></div>`;
      }

      // If it's first resize column or prev column is resizable false,
      // no need to render left resize anchor
      if (isForPrevColumn) {
        const preColumn = this._getDisplayColumns()[columnIndex - 1] || {};
        if (preColumn.resizable === false || columnIndex === 0) {
          resizeAnchor = w;
        }
      } else if (column.resizable === false) {
        resizeAnchor = w;
      }

      return resizeAnchor;
    }

    /**
     * Render dummy column at the end when resizing.
     *
     * @private
     * @function _renderDummyColumn
     *
     * @param {Boolean} isHead - Flag indicates if it is dummy head cell
     */
    _renderDummyColumn(isHead) {
      if ((!this.resizable && this._hasResized !== true) || this.noHeader) {
        return w;
      }

      // return <th> if is header column
      if (isHead) {
        return $`<th class="th--dummy-column"></th>`;
      }

      const colGroup = this.shadowRoot.querySelectorAll('col');
      let lastCol;
      let lastColWidth;
      if (colGroup.length) {
        lastCol = colGroup[colGroup.length - 1];
        lastColWidth = parseInt(lastCol.style.width, 10);
      }

      // only render dummy cell if width > 0px
      return lastColWidth ? $`<td class="td--dummy-column"></td>` : w;
    }

    /**
     * Override _renderColumnGroup to cover the resizing dummy column
     *
     * @private
     * @function _renderColumnGroup
     */
    _renderColumnGroup() {
      if (!this.noHeader && (this.resizable || this._hasResized)) {
        // Add extra dummy column as the last col when resizable enabled or has been resized
        return super._renderColumnGroup.call({
          expandable: this.expandable,
          multiSelect: this.multiSelect,
          /**
           * changed from 0px to 1px to show 1px border right,
           * when row is focused - otherwise border will not show
           */
          columns: [
            ...this.columns,
            { width: `${this._dummyColumnWidth || 0}px` },
          ],
        });
      }
      return super._renderColumnGroup();
    }

    /**
     * Calculate width of the last dummy column
     *
     * @private
     * @function _calculateDummyColumnWidth
     */
    _calculateDummyColumnWidth() {
      // If there is auto-width column existing, keep dummy column width 0
      if (this.columns.some(column => column.width === undefined)) {
        this._dummyColumnWidth = 0;
      } else {
        const viewport = this.shadowRoot.querySelector('.table__viewport');
        const viewportWidth = viewport.getBoundingClientRect().width;
        const tableWidth =
          (this.multiSelect ? MULTI_SELECTION_COLUMN_WIDTH : 0) +
          (this.expandable ? EXPANDABLE_CONTROL_COLUMN_WIDTH : 0) +
          this._getDisplayColumns().reduce(
            (acc, cur) => acc + parseInt(cur.width, 10),
            0,
          );
        this._dummyColumnWidth = Math.max(0, viewportWidth - tableWidth);
      }

      // Trigger colgroup updates
      this.columns = [...this.columns];
    }

    /**
     * Set resize observer for table
     * Need to recalculate when table container width changes
     *
     * @private
     * @function _setResizingObserver
     */
    _setTableWidthResizeObserver() {
      // No need to recreate resize observer;
      if (this.tableWidthResizeObserver) return;
      this._hasResized = true;
      this.tableWidthResizeObserver = new ResizeObserver(entries => {
        entries.forEach(() => {
          if (this.resizable) {
            window.requestAnimationFrame(() => {
              this._calculateDummyColumnWidth();
            });
          }
        });
      });
      this.tableWidthResizeObserver.observe(
        this.shadowRoot.querySelector('.table__viewport'),
      );
    }

    /**
     * Override didUpgrade lifecycle
     * Set resize observer when resizable is on by default
     */
    didUpgrade() {
      super.didUpgrade();
      if (this.resizable) {
        this._setTableWidthResizeObserver();
      }
      if (
        this.columns &&
        this.columns.length > 0 &&
        this._isOverflowingContainer()
      ) {
        this.shadowRoot.querySelectorAll('col').forEach(col => {
          if (!col.style.width) {
            col.style.setProperty('width', `${MIN_COLUMN_RESIZING_WIDTH}px`);
          }
        });
      }
    }

    /**
     * Override didChangeProps lifecycle method for preparation work before resizing.
     *
     * @param {Map} changedProps - Map of changed props
     */
    didChangeProps(changedProps) {
      super.didChangeProps(changedProps);

      if (changedProps.has('resizable') && this.resizable) {
        this._setTableWidthResizeObserver();
      }

      if (changedProps.has('multiSelect') && this.resizable) {
        if (this.multiSelect) {
          this._dummyColumnWidth = Math.max(
            0,
            this._dummyColumnWidth - MULTI_SELECTION_COLUMN_WIDTH,
          );
        } else if (this._dummyColumnWidth > 0) {
          this._dummyColumnWidth += MULTI_SELECTION_COLUMN_WIDTH;
        }
      }

      if (changedProps.has('expandable') && this.resizable) {
        if (this.expandable) {
          this._dummyColumnWidth = Math.max(
            0,
            this._dummyColumnWidth - EXPANDABLE_CONTROL_COLUMN_WIDTH,
          );
        } else if (this._dummyColumnWidth > 0) {
          this._dummyColumnWidth += EXPANDABLE_CONTROL_COLUMN_WIDTH;
        }
      }

      if (changedProps.has('columns')) {
        if (this.columns && this.columns.length > 0) {
          const overflow = this._isOverflowingContainer();
          if (overflow) {
            this._handleMinWidthColumns(overflow);
          }
        }
      }
    }

    /**
     * Returns whether the given column widths are greater than the available table width.
     * The table overflows if the total given fixed widths + 60 for each with no width
     * is greater than the actual width of the table.
     *
     * @private
     * @function _isOverflowingContainer
     */
    _isOverflowingContainer() {
      const givenWidth = this._getDisplayColumns().reduce(
        (acc, column) =>
          acc + (parseInt(column.width, 10) || MIN_COLUMN_RESIZING_WIDTH),
        0,
      );
      return (
        givenWidth >
        this.shadowRoot.querySelector('table').getBoundingClientRect().width
      );
    }

    /**
     * Override lifecycle method didDisconnect
     * Clean the resize observer and event listeners
     */
    didDisconnect() {
      if (this.tableWidthResizeObserver) {
        this.tableWidthResizeObserver.disconnect();
      }
      document.removeEventListener('mousemove', this._mousemove);
      document.removeEventListener('mouseup', this._mouseEnd);

      super.didDisconnect();
    }
  };

  /**
   * @property {Boolean} resizable - enables resizable headers on the table
   */
  addProps(
    {
      resizable: { attribute: true, type: Boolean },
    },
    style$4,
  )(MixedClass);

  return MixedClass;
};

var style$3 = ":host([virtual-scroll]) thead th {\n  top: var(--header-sticky-top, 0); /* work with sticky to re-position table header */\n}\n";

// @ts-check

const VirtualScrollMixin = superclass => {
  const MixedClass = class extends superclass {
    /**
     * Override dataSource property in base table,
     * Get correct data source when virtual-scroll is enabled
     *
     * @property dataSource
     * @returns {Array} - data to render table rows
     */
    get dataSource() {
      if (this.virtualScroll) {
        return this._viewData;
      }

      return this.data;
    }

    /**
     * Get the correct index against passed row
     * If virtual-scroll is enabled, row index against this.data instead of this._viewData
     *
     * @private
     * @function _getRowIndex
     *
     * @param row - row to get index against
     * @param index - row index among rendered rows
     */
    _getRowIndex(row, index) {
      return this.virtualScroll ? row._globalIndex : index;
    }

    /**
     * Event handler for scroll event
     *
     * @function handleEvent
     */
    handleEvent(event) {
      if (this.virtualScroll) {
        if (event.type === 'scroll') {
          requestAnimationFrame(() => {
            this._presentViewport(this.tableContainer.scrollTop);
          });
        }
      }

      if (super.handleEvent) {
        super.handleEvent(event);
      }
    }

    /**
     * Set viewport total height and visible rows count it can hold
     *
     * @private
     * @function _setViewport
     */
    _setViewport() {
      const totalContentHeight = this.data.length * this.rowHeight;
      this.viewport.style.height = `${
        totalContentHeight + (this.noHeader ? 0 : this.rowHeight)
      }px`;
      this._tableContainerHeight =
        this.tableContainer.getBoundingClientRect().height;
      this._visibleRowsCount =
        Math.ceil(this._tableContainerHeight / this.rowHeight) +
        2 * this.nodePadding;
    }

    /**
     * Set global index to row for crossing viewport selection
     *
     * @private
     * @function _setGlobalIndex
     */
    _setGlobalIndex() {
      for (const [index, row] of this.data.entries()) {
        row._globalIndex = index;
      }
    }

    /**
     * Set basic references and configurations for virtual scroll
     *
     * @private
     * @function _setConfigurations
     */
    _setConfigurations() {
      this.tableContainer =
        this.tableContainer &&
        this.shadowRoot.querySelector('.table__container');
      this.viewport = this.shadowRoot.querySelector('.table__viewport');
      this.table = this.shadowRoot.querySelector('table');
      this.nodePadding = 10;
    }

    /**
     * Set resize observer for table
     * Need to recalculate virtual scroll viewport
     *
     * @private
     * @function _setResizingObserver
     */
    _setResizingObserver() {
      // Recalculate visible rows count that can be held in viewport when table size changes
      this.resizeObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
          if (this.virtualScroll) {
            this._tableContainerHeight =
              entry.target.getBoundingClientRect().height;
            this._visibleRowsCount =
              Math.ceil(this._tableContainerHeight / this.rowHeight) +
              2 * this.nodePadding;
            this._presentViewport(this.tableContainer.scrollTop);
          }
        });
      });
      this.resizeObserver.observe(this.tableContainer);
    }

    /**
     * Initialize variables, element observer, data syncing callbacks
     *
     * @private
     * @function _initVirtualScroll
     */
    _initVirtualScroll() {
      // Flag to make sure virtual scroll mode will only be initialized once
      if (this._vsInitialized) return;
      // Skip initialization when data is empty
      if (this.data.length === 0) return;

      // Config metadata and way to sync information between view data and whole dataset
      this._setGlobalIndex();

      // Set basic configurations for virtual scroll table
      this._setConfigurations();

      // Set viewport total height and visible rows count it can hold
      this._setViewport();

      // Set resize observer for table to recalculate virtual scroll viewport
      this._setResizingObserver();

      // First presenting of viewport
      this._presentViewport(0);

      // Set initialization tracking flag
      this._vsInitialized = true;
    }

    /**
     * Get current range of view data range to be presented in viewport
     * Set corresponding offset on Y axis
     *
     * @private
     * @function _presentViewport
     *
     * @param scrollTop - current scroll top position of viewport
     */
    _presentViewport(scrollTop = 0) {
      let startNode = Math.floor(scrollTop / this.rowHeight) - this.nodePadding;
      startNode = this.data.length < startNode ? 0 : Math.max(0, startNode);
      const curVisibleRowsCount = Math.min(
        this.data.length - startNode,
        this._visibleRowsCount,
      );

      // Notify view data updating
      this._viewData = this.data.slice(
        startNode,
        startNode + curVisibleRowsCount,
      );

      const offsetY = startNode * this.rowHeight;
      this.table.style = `transform: translateY(${offsetY}px);`;
      // Safari works a little bit differently,
      // with firefox, chrome & edge on position: sticky & top
      const stickyTop = offsetY > 0 ? -offsetY - 1 : offsetY;
      this.tableContainer.style.setProperty(
        '--header-sticky-top',
        `${this._isSafari ? 0 : stickyTop}px`,
      );
    }

    /**
     * Clear corresponding settings when VirtualScroll is switching off
     *
     * @private
     * @function _clearVirtualScroll
     */
    _clearVirtualScroll() {
      if (!this._vsInitialized) return;

      // Remove offset on Y axis, sticky position setting and view data
      this.table.style.removeProperty('transform');
      this.tableContainer.style.setProperty('--header-sticky-top', 0);
      this._viewData = [];
    }

    /**
     * Override didUpgrade lifecycle method
     * Get browser type
     */
    didUpgrade() {
      super.didUpgrade();

      if (this.virtualScroll) {
        this._initVirtualScroll();
      }

      const userAgentStr = navigator.userAgent.toLowerCase();
      this._isSafari =
        userAgentStr.includes('safari') && !userAgentStr.includes('chrome');
    }

    /**
     * Override didChangeProps lifecycle method
     * Switching on/off virtual scroll mode accordingly
     * Calculate data needs to be presented in viewport when switching virtual scroll on
     */
    didChangeProps(changedProps) {
      super.didChangeProps(changedProps);

      if (changedProps.has('virtualScroll')) {
        if (this.virtualScroll) {
          this._initVirtualScroll();
          this._presentViewport(this.tableContainer.scrollTop);
        } else {
          this._clearVirtualScroll();
        }
      }

      if (
        this._vsInitialized &&
        this.virtualScroll &&
        (changedProps.has('noHeader') ||
          changedProps.has('tiny') ||
          changedProps.has('compact') ||
          changedProps.has('customRowHeight') ||
          changedProps.has('data'))
      ) {
        if (changedProps.has('data')) this._setGlobalIndex();
        this._setViewport();
        this._presentViewport(this.tableContainer.scrollTop);
      }

      // If data is assigned after virtual-scroll enabled, try initialize again
      if (
        changedProps.has('data') &&
        !this._vsInitialized &&
        this.virtualScroll
      ) {
        this._initVirtualScroll();
      }
    }

    /**
     * Override lifecycle method didDisconnect
     * Clean the observer for resizing adjustment
     */
    didDisconnect() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      super.didDisconnect();
    }
  };

  addProps(
    {
      virtualScroll: { attribute: true, type: Boolean },
      _viewData: { type: Array, default: [] },
    },
    style$3,
  )(MixedClass);

  return MixedClass;
};

// @ts-check

const AccessibilityMixin = superclass => {
  const MixedClass = class extends superclass {
    /**
     * handle keyboard events:
     * Single Select
     * ----------------------------
     * 1. ⬇ navigate down to the next row and select the row
     * 2. ⬆ navigate up to the previous row and select the row
     *
     * Multi Select
     * ----------------------------
     * 1. SHIFT + ⬇ navigate down to the next row and multi toggle the row
     * 2. SHIFT + ⬆ navigate up to the previous row and multi toggle the row
     * 3. SHIFT + CTRL + ⬇ navigate down to the next row and multi select the row
     * 4. SHIFT + CTRL + ⬆ navigate up to the previous row and multi select the row
     *
     * Common
     * -----------------------------
     * 1. CTRL + ⬇ (CTRL + ALT + ⬇ for MacOs) move focus down to the next row
     * 2. CTRL + ⬆ (CTRL + ALT + ⬆ for MacOs) move focus up to the previous row
     *
     * @function handleEvent
     * @param {Event} event - keyboard events
     */
    handleEvent(event) {
      if (event.key === ARROW_UP_KEY) {
        event.preventDefault();
        const focusedRowBefore = this._findFocusedRow();
        if (this.multiSelect) {
          if (event.shiftKey && event.ctrlKey) {
            this.shiftPlusCtrlPlus(event.key, focusedRowBefore);
          } else if (event.shiftKey) {
            this.shiftPlus(event.key, focusedRowBefore);
          } else if (event.ctrlKey) {
            this.moveFocus(event.key, focusedRowBefore);
          } else {
            const focusedAfter = this.moveFocus(event.key, focusedRowBefore);
            if (focusedAfter != null) {
              this.selectSingleRow(focusedAfter);
            }
            // TODO: This implements setting focus on the "select-all" check box
            // this should be implemented when the checkbox gets accessibility features.
            // if (focusedAfter == null) {
            //   focusedRowBefore.tabIndex = -1;
            //   this.headerCheckBox.focus();
            // } else {
            //   focusedAfter.click();
            // }
          }
        } else if (this.singleSelect) {
          this._handleSingleSelect(event, focusedRowBefore);
        }
      } else if (event.key === ARROW_DOWN_KEY) {
        event.preventDefault();
        const focusedRowBefore = this._findFocusedRow();
        if (this.multiSelect) {
          if (event.shiftKey && event.ctrlKey) {
            this.shiftPlusCtrlPlus(event.key, focusedRowBefore);
          } else if (event.shiftKey) {
            this.shiftPlus(event.key, focusedRowBefore);
          } else if (event.ctrlKey) {
            this.moveFocus(event.key, focusedRowBefore);
          } else {
            const focusedAfter = this.moveFocus(event.key, focusedRowBefore);
            if (focusedAfter != null) {
              this.selectSingleRow(focusedAfter);
            }
          }
        } else if (this.singleSelect) {
          this._handleSingleSelect(event, focusedRowBefore);
        }
      }
      if (super.handleEvent) {
        super.handleEvent(event);
      }
    }

    /**
     * Function to get previous table row that is not an expanded row
     * ie. get the previous row with a data-index attribute
     *
     * @function _getPreviousElementSibling
     * @param {<tr>} row - current row
     */
    _getPreviousElementSibling(row) {
      const prevRow = row.previousElementSibling;
      if (!prevRow) {
        return null;
      }
      if (prevRow.hasAttribute('data-index')) {
        return prevRow;
      }
      return prevRow.previousElementSibling;
    }

    /**
     * Function to get next table row that is not an expanded row
     * ie. get the next row with a data-index attribute
     *
     * @function _getPreviousElementSibling
     * @param {<tr>} row - current row
     */
    _getNextElementSibling(row) {
      const nextRow = row.nextElementSibling;
      if (!nextRow) {
        return null;
      }
      if (nextRow.hasAttribute('data-index')) {
        return nextRow;
      }
      return nextRow.nextElementSibling;
    }

    /**
     * Handle row navigation when the table is in Single Select mode.
     * 1. Move the focus up/down (depending on event.key) and select the focused row
     * 2. CTRL: Move the focus without selecting the row
     *
     * @function _handleSingleSelect
     * @param {Event} event - keydown event
     * @param {<tr>} startRow - current row
     */
    _handleSingleSelect = (event, startRow) => {
      if (event.ctrlKey) {
        this.moveFocus(event.key, startRow);
      } else {
        const focusedAfter = this.moveFocus(event.key, startRow);
        if (focusedAfter != null) {
          this.selectSingleRow(focusedAfter);
        }
      }
    };

    /**
     * Is the row selected?
     *
     * @function _isSelected
     * @param {<tr>} row - row to query
     * @returns Boolean
     */
    _isSelected = row => row.hasAttribute('selected');

    /**
     * Handler for both SHIFT + UP and SHIFT + DOWN key combinations.
     *
     * @function shiftPlus
     * @param {String} key - "ArrowUp"|"ArrowDown"
     * @param {<tr>} startRow - row from where the SHIFT + UP/DOWN key was pressed
     */
    shiftPlus = (key, startRow) => {
      if (startRow == null) {
        this.setFocus(this._rows[0]);
        this.toggleRow(this._rows[0]);
      } else {
        const nextRow =
          key === ARROW_UP_KEY
            ? this._getPreviousElementSibling(startRow)
            : this._getNextElementSibling(startRow);

        if (nextRow == null) {
          // do nothing, the user has reached either the top or the bottom of
          // the table.
          return;
        }

        if (this._isSelected(startRow) && !this._isSelected(nextRow)) {
          this.moveFocus(key, startRow);
          this.toggleRow(nextRow);
        } else if (this._isSelected(startRow) && this._isSelected(nextRow)) {
          this.toggleRow(startRow);
          this.moveFocus(key, startRow);
        } else if (!this._isSelected(startRow) && !this._isSelected(nextRow)) {
          this.selectSingleRow(startRow);
          this.moveFocus(key, startRow);
          this.toggleRow(nextRow);
        } else if (!this._isSelected(startRow) && this._isSelected(nextRow)) {
          this.selectSingleRow(startRow);
          this.moveFocus(key, startRow);
          this.toggleRow(nextRow);
        }
      }
    };

    /**
     * Handler for both SHIFT + CTRL + UP and SHIFT + CTRL + DOWN key combinations.
     *
     * @function shiftPlusCtrlPlus
     * @param {String} key - "ArrowUp"|"ArrowDown"
     * @param {<tr>} startRow - row from where the SHIFT + CTRL + UP/DOWN key
     * combination was pressed
     */
    shiftPlusCtrlPlus = (key, startRow) => {
      if (startRow == null) {
        this.setFocus(this._rows[0]);
        this.selectRow(this._rows[0]);
      } else {
        const nextRow =
          key === ARROW_UP_KEY
            ? this._getPreviousElementSibling(startRow)
            : this._getNextElementSibling(startRow);

        if (nextRow == null) {
          // do nothing, the user has reached either the top or the bottom of
          // the table.
          return;
        }

        if (!this._isSelected(startRow)) {
          this.selectRow(startRow);
          this.moveFocus(key, startRow);
          this.selectRow(nextRow);
        } else {
          this.moveFocus(key, startRow);
          this.selectRow(nextRow);
        }
      }
    };

    /**
     * Find the focused row from the table body.
     * If no row is in focus, return null.
     *
     * @function _findFocusedRow
     * @returns HTML <tr> element
     */
    _findFocusedRow = () => [...this._rows].find(row => row.tabIndex === 0);

    /**
     * Move the focus up/down to the next/previous row in the table
     * The direction to move focus is determined by the key (ArrowUp/ArrowDown) used
     *
     * @function moveFocus
     * @param {String} direction - "ArrowUp"|"ArrowDown"
     * @param {Object} fromRow - currently focused row. null, if no row is focused
     * @returns {HTML <tr> element} - row in focus
     */
    moveFocus = (direction, fromRow) => {
      let rowInFocus = null;

      if (fromRow == null) {
        this._rows[0].focus();
        this._rows[0].tabIndex = 0;
        [rowInFocus] = this._rows;
      } else if (
        direction === ARROW_UP_KEY &&
        this._getPreviousElementSibling(fromRow)
      ) {
        fromRow.tabIndex = -1;
        rowInFocus = this._getPreviousElementSibling(fromRow);
        rowInFocus.tabIndex = 0;
        rowInFocus.focus();
        if (!this.noHeader && !this.virtualScroll) {
          this._scrollRowIntoView(rowInFocus);
        }
      } else if (
        direction === ARROW_DOWN_KEY &&
        this._getNextElementSibling(fromRow)
      ) {
        fromRow.tabIndex = -1;
        rowInFocus = this._getNextElementSibling(fromRow);
        rowInFocus.tabIndex = 0;
        rowInFocus.focus();
      }
      return rowInFocus;
    };

    /**
     * Scroll the row into view so that it is not obscured by the table heading.
     *
     * @function _scrollRowIntoView
     * @param {HTML <tr> element} - row in focus
     * @private
     */
    _scrollRowIntoView = rowInFocus => {
      if (
        rowInFocus.offsetTop - this.tableContainer.scrollTop <=
        rowInFocus.offsetHeight
      ) {
        this.tableContainer.scrollBy(
          0,
          rowInFocus.offsetTop -
            this.tableContainer.scrollTop -
            rowInFocus.offsetHeight,
        );
      }
    };

    /**
     * Set the focus on the row
     *
     * @function setFocus
     * @param {HTML <tr> Element} row - row to set the focus on
     */
    setFocus = row => {
      const focusedRow = this._findFocusedRow();
      if (focusedRow) {
        focusedRow.tabIndex = -1;
      }
      row.tabIndex = 0;
    };
  };

  return MixedClass;
};

var style$2 = ":host([pinned]) table {\n  position: relative;\n}\n\n:host([pinned]) th.cb-header :host([pinned]) td.checkbox,\n:host([pinned]) th.pinned,\n:host([pinned]) td.pinned,\n:host([pinned][multi-select]) th:first-child,\n:host([pinned][multi-select]) td:first-child {\n  position: sticky !important;\n  z-index: 2;\n  background-color: inherit;\n}\n\n:host([pinned]) th.cb-header,\n:host([pinned]) th.pinned,\n:host([pinned][multi-select]) th:first-child {\n  z-index: 3;\n}\n\n:host([pinned]) tr td.pinned:last-of-type,\n:host([pinned]) tr th.pinned:last-of-type {\n  border-right: 1px solid var(--table-inner-gray, #878787);\n}\n\n:host([pinned][multi-select]) th:first-child,\n:host([pinned][multi-select]) td:first-child {\n  left: 0;\n}\n\n:host([pinned]) tr:focus td.pinned::after,\n:host([pinned]) tr:focus td:first-child::before,\n:host([pinned][multi-select]) tr:focus td:first-child::after,\n:host([pinned][expandable]) tr:focus td:first-child::after,\n:host([pinned][expandable][multi-select]) tr:focus td:nth-child(2)::after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 0.5px;\n  top: 0;\n  left: 0;\n  background-color: var(--purple, #a56ebe);\n  z-index: 1;\n}\n\n/* First column use pseudo element to avoid flicker */\n:host([pinned]) tr:focus td:first-child::before {\n  width: 0.5px;\n  height: 100%;\n  bottom: 0;\n}\n\n:host([pinned][striped]) tbody > tr[selected] td,\n:host([pinned][multi-select]) tr[selected] td:first-child,\n:host([pinned]) tr[selected] td.pinned {\n  background-color: var(--table-selected, #D3E3F7);\n}\n\n:host([pinned]) td.last-pinned,\n:host([pinned]) th.pinned.last-pinned {\n  border-right: 1px solid var(--table-inner-gray, #878787);\n}\n";

// @ts-check

const PinColumnMixin = superclass => {
  const MixedClass = class extends superclass {
    /**
     * Get pinned style for rendered column
     *
     * @private
     * @function _getPinnedColumnStickyOffset
     *
     * @param {Object} column Column to be rendered into table
     * @param {Array} columns Array of columns
     */
    _getPinnedColumnStickyOffset(column, columns) {
      if (!this.pinned || !column.pinned) {
        return '';
      }

      // Multiple checkbox column takes fixed 40px width
      let offset = this.multiSelect ? MULTI_SELECTION_COLUMN_WIDTH : 0;

      // Expand icon column takes fixed 40px width
      offset += this.expandable ? EXPANDABLE_CONTROL_COLUMN_WIDTH : 0;

      const pinnedColumns = columns.filter(item => item.pinned);
      for (const col of pinnedColumns) {
        if (column !== col) {
          offset += parseInt(col.width, 10);
        } else {
          break;
        }
      }

      return i$1({ left: `${offset}px` });
    }

    /**
     * Get class for pinned column
     *
     * @private
     * @function _getClassForPinnedColumn
     *
     * @param {Object} column Column to be rendered into table
     */
    _getClassForPinnedColumn(column, index, columns) {
      const lastPinnedCol = columns.filter(item => item.pinned).length - 1;
      return o({
        pinned: this.pinned && column.pinned,
        'last-pinned': lastPinnedCol === index,
      });
    }

    /**
     * Overrides table#_getDisplayColumns
     * Sort pinned columns for pre-defined pinned columns
     *
     * @private
     * @function _getDisplayColumns
     */
    _getDisplayColumns() {
      const displayColumns = super._getDisplayColumns();
      if (this.pinned) {
        displayColumns.sort(
          (pre, next) =>
            Number(next.pinned || false) - Number(pre.pinned || false),
        );
      }
      return displayColumns;
    }

    /**
     * Overrides Resize#_handleColumnCalculation
     * Get the calculated width for current resizing column
     *
     * @function _getResizingWidth
     * @private
     *
     * @param {Number} moveToWidth new width being resized to
     */
    _getResizingWidth(moveToWidth) {
      let width = super._getResizingWidth(moveToWidth);

      if (this.pinned && this._curColumn.className.includes('pinned')) {
        const viewport = this.shadowRoot.querySelector('.table__viewport');
        const pinnedColumns = [
          ...this.shadowRoot.querySelectorAll('tr:first-child > th.pinned'),
        ];
        const otherPinnedColumnsWidth = pinnedColumns
          .filter(item => item !== this._curColumn)
          .reduce((acc, cur) => acc + parseInt(cur.clientWidth, 10), 0);

        // MIN_COLUMN_RESIZING_WIDTH: 60px,
        // will be the kept as safe area when resizing pinned columns
        const leftOver =
          viewport.clientWidth -
          otherPinnedColumnsWidth -
          MIN_COLUMN_RESIZING_WIDTH -
          (this.multiSelect ? MULTI_SELECTION_COLUMN_WIDTH : 0) -
          (this.expandable ? EXPANDABLE_CONTROL_COLUMN_WIDTH : 0);
        width = Math.min(leftOver, width);
      }

      return width;
    }

    /**
     * Overrides lifecycle method didChangeProps
     *
     * @param {Map} changedProps props changed
     */
    didChangeProps(changedProps) {
      if (this.pinned) {
        for (const column of this.columns) {
          if (column.pinned) {
            column.width = column.width || `${PINNED_COLUMN_DEFAULT_WIDTH}px`;
          }
        }
      }
      super.didChangeProps(changedProps);
    }
  };

  /**
   * @property {Boolean} pinned - enables resizable headers on the table
   */
  addProps(
    {
      pinned: { attribute: true, type: Boolean },
    },
    style$2,
  )(MixedClass);

  return MixedClass;
};

var style$1 = ":host([expandable]) th:first-child,\n:host([expandable]) td:first-child {\n  width: 40px;\n}\n\n/* Remove border-bottom if row is expanded */\ntr.open td,\ntr.open:focus td,\n:host([dashed]) tr.open td,\n:host([expandable][pinned]) tr.open:focus td,\n:host([expandable][pinned]) tr.open:focus td.expandable-control {\n  border-bottom-color: transparent;\n}\n\n/* Remove hover effect for expanded row*/\ntbody > tr.expanded-row:hover,\n:host([striped]) tbody > tr.expanded-row:hover {\n  background-color: var(--table-background);\n}\n\n/* Adding purple border to expanded row when previous row is focused*/\ntr.open:focus + tr.expanded-row td{\n  border-bottom: 1px solid var(--purple, #A56EBE);\n}\n\ntr.open:focus + tr.expanded-row td:first-child {\n  border-left: 1px solid var(--purple, #A56EBE);\n}\n\ntr.open:focus + tr.expanded-row td:last-child {\n  border-right: 1px solid var(--purple, #A56EBE);\n}\n\n.expandable-control {\n  cursor: pointer;\n  user-select: none;\n  position: sticky;\n  left: 0;\n  background-color: var(--layer2);\n}\n\ntr:hover .expandable-control,\ntr:hover td.multi-select-control {\n  background-color: var(--table-hover, #DCDCDC);\n}\n\n.expandable-content-holder {\n  display: inline-block;\n  position: sticky;\n}\n\n.dummy-expanded-cell {\n  position: sticky;\n  left: 0;\n}\n\n.expandable-control-heading {\n  z-index: 2;\n  position: sticky;\n  left: 0;\n  background-color: var(--layer2);\n}\n\n/* selected row - background color for expand/collapse and checkbox cols */\ntr[selected] td.expandable-control,\ntr[selected] td.multi-select-control,\ntr[selected]:hover > td.expandable-control,\ntr[selected]:hover > td.multi-select-control {\n  background-color: var(--table-selected, #D3E3F7);\n}\n\n/* Striped and row selected */\n:host([striped]) tr[selected] > .expandable-control,\n:host([striped]) tr[selected] > .multi-select-control\n:host([striped]) tr[selected] > .expandable-control,\n:host([striped]) tr[selected] > .multi-select-control {\n  background-color: var(--table-selected, #D3E3F7);\n}\n\n/* Striped css */\n:host([expandable][striped]) tbody > tr:not([selected]).grey,\n:host([expandable][striped]) tbody > tr.grey.open + tr.expanded-row,\n:host([striped]) tr:not([selected]).grey > .expandable-control,\n:host([striped]) tr:not([selected]).grey > .multi-select-control {\n  background-color: var(--table-striped-gray, #EBEBEB);\n}\n\n/* striped - hover */\n:host([expandable][striped]) tbody > tr.grey:hover,\n:host([expandable][striped]) tr:not([selected]).grey:hover > .expandable-control,\n:host([expandable][striped]) tr:not([selected]).grey:hover > .multi-select-control {\n  background-color: var(--table-hover, #DCDCDC);\n}\n\n/* striped - focused row */\n:host([striped]) tr:focus td,\n:host([striped]) tr.open:focus + tr.expanded-row td {\n  border-bottom-color: var(--purple, #a56ebe);\n}\n\n:host([striped]) tr.open:focus td {\n  border-bottom-color: transparent;\n}\n\n/* Alternate size css */\n\n/* default size */\n:host([expandable]) th:first-child,\n:host([expandable]) tr td:first-child {\n  padding-left: var(--space-large, 16px) !important;\n}\n\n:host([expandable][multi-select]) th:nth-child(2),\n:host([expandable][multi-select]) tr td:nth-child(2) {\n  padding-left: var(--space-base, 8px) !important;\n}\n\n:host([expandable]) .expandable-content-holder {\n  left: 56px; /* 40px for first col + 16px padding*/\n}\n\n:host([expandable][multi-select]) .expandable-content-holder {\n  left: 96px; /* 80px for first two cols + 16px padding*/\n}\n\n/* tiny size */\n:host([expandable][tiny]) th:first-child,\n:host([expandable][tiny]) tr td:first-child,\n:host([expandable][tiny][multi-select]) th:nth-child(2),\n:host([expandable][tiny][multi-select]) tr td:nth-child(2) {\n  padding-left: 0 !important;\n}\n\n:host([expandable][tiny]) .expandable-content-holder {\n  left: 44px; /* 40px for first col + 4px padding for next col cell */\n}\n\n:host([expandable][multi-select][tiny]) .expandable-content-holder {\n  left: 84px; /* 80px for first two cols + 4px padding for next col cell */\n}\n\n/* compact size */\n:host([expandable][compact]) th:first-child,\n:host([expandable][compact]) tr td:first-child,\n:host([expandable][compact][multi-select]) th:nth-child(2),\n:host([expandable][compact][multi-select]) tr td:nth-child(2) {\n  padding-left: var(--space-small, 4px) !important;\n}\n\n:host([expandable][compact]) .expandable-content-holder {\n  left: 48px; /* 40px for first col + 8px padding for next col cell */\n}\n\n:host([expandable][multi-select][compact]) .expandable-content-holder {\n  left: 88px; /* 80px for first two cols + 8px padding for next col cell */\n}\n\n#error-container {\n  display: flex;\n  align-items: center;\n}\n\n#error-message {\n  margin-left: var(--space-small, 4px);\n}\n\n/* color band */\n:host([dashed]) tbody tr[color-band].open td,\ntbody tr[color-band].open td {\n  border-bottom: none;\n}\n\n:host([tiny]) tbody tr[color-band] + .expanded-row td:first-child {\n  box-shadow: inset 2px 0px 0px 0px var(--color-band);\n}\n\n:host([compact]) tbody tr[color-band] + .expanded-row td:first-child {\n  box-shadow: inset 4px 0px 0px 0px var(--color-band);\n}\n\ntbody tr[color-band] + .expanded-row td:first-child {\n  box-shadow: inset 8px 0px 0px 0px var(--color-band);\n}\n\ntbody tr[color-band=\"green\"] + .expanded-row td:first-child {\n  --color-band: var(--green, #329864);\n}\n\ntbody tr[color-band=\"yellow\"] + .expanded-row td:first-child {\n  --color-band: var(--yellow, #A08209);\n}\n\ntbody tr[color-band=\"orange\"] + .expanded-row td:first-child {\n  --color-band: var(--orange, #D46617);\n}\n\ntbody tr[color-band=\"red\"] + .expanded-row td:first-child {\n  --color-band: var(--red, #ED0E00);\n}\n\ntbody tr[color-band=\"gray\"] + .expanded-row td:first-child {\n  --color-band: var(--gray, #878787);\n}\n\ntbody tr[color-band=\"blue\"] + .expanded-row td:first-child {\n  --color-band: var(--blue, #1174E6);\n}";

// @ts-check

const ExpandableMixin = superClass => {
  const MixedClass = class extends superClass {
    /**
     * Collapses all expanded rows
     *
     * @public
     * @function _collapseAllRows
     *
     */
    collapseAllRows() {
      this.data.forEach(row => {
        if (row.expanded) {
          row.expanded = false;
        }
      });
    }

    /**
     * Get class for rows in expandable table
     *
     * @private
     * @function _getClassForExpandableRow
     *
     * @param {Object} row Row to be rendered into table
     * @param {Number} rowIndex Index of row in data source
     */
    _getClassForExpandableRow(row, rowIndex) {
      return o({
        open: row.expanded,
        grey: this.striped && rowIndex % 2 !== 0,
      });
    }

    /**
     * Lifecycle callback triggered after component is rendered
     *
     * @function didRender
     *
     */
    didRender() {
      if (this._mostRecentIndex && this._mostRecentIndex !== -1) {
        const rowClicked = this.shadowRoot.querySelectorAll(
          'tbody > tr[data-index]',
        )[this._mostRecentIndex];
        const nextRow = rowClicked.nextElementSibling;
        if (
          this.getBoundingClientRect().bottom <
          nextRow.getBoundingClientRect().bottom
        ) {
          this.tableContainer.scrollBy(
            0,
            parseInt(this.expandedRowHeight, 10) + 3,
          );
        }
        this._mostRecentIndex = null;
      }
    }

    /**
     * Render the expand control (the chevron). This function is used
     * to render both the heading and each row.
     * @param {Object} row - row data
     */
    renderExpandControl(row) {
      if (this.expandable) {
        if (row) {
          return $` <td
            class="expandable-control"
            @click=${() => this.toggleExpandControl(row)}
          >
            <eui-icon
              name=${row.expanded ? 'chevron-down' : 'chevron-right'}
            ></eui-icon>
          </td>`;
        }
        return $`<th class="expandable-control-heading"></th>`;
      }
      return w;
    }

    /**
     * Emit expandable-row-toggle event with clicked expand/collapse control
     *
     * @private
     * @function _emitExpandableRowToggle
     * @param {Object} row - table row where icon has been clicked
     */
    _emitExpandableRowToggle(row) {
      this.bubble('eui-table:expandable-row-toggle', row);
    }

    /**
     * Toggle the expanded state of the row.
     *
     * @param {Object} row - row data
     */
    toggleExpandControl(row) {
      row.expanded = !row.expanded;
      if (row.expanded) {
        this._mostRecentIndex = this.virtualScroll
          ? this._viewData.indexOf(row)
          : this.data.indexOf(row);
      }
      this._emitExpandableRowToggle(row);
      this.data = [...this.data];
    }

    /**
     * Render the Expanded row. This function is placed in each expandable row.
     *
     * @param {Object} row - row data
     */
    renderExpandedRow(row) {
      if (this.expandable && row.expanded) {
        return $`<tr class="expanded-row">
          <td class="dummy-expanded-cell"></td>
          <td
            colspan=${this.columns.filter(column => !column.hidden).length +
            (this.multiSelect ? 1 : 0) +
            (this.resizable ? 1 : 0)}
          >
            <div
              id="row-index-${this.data.indexOf(row)}"
              class="expandable-content-holder"
            >
              <div
                class="expanded-row"
                style="height:${this.expandedRowHeight};"
              >
                ${this.custom &&
                typeof this.custom.onCreatedDetailsRow === 'function' &&
                this.custom.onCreatedDetailsRow(row, $)
                  ? this.custom.onCreatedDetailsRow(row, $)
                  : this._emptyPlaceholderMessage()}
              </div>
            </div>
          </td>
        </tr>`;
      }
      return w;
    }

    _emptyPlaceholderMessage() {
      return $`
        <span id="error-container">
          <eui-icon name="info"></eui-icon>
          <span id="error-message"
            >Unable to retrieve data. The server or database is currently
            unavailable</span
          >
        </span>
      `;
    }

    /**
     * Override _renderColumnGroup to include the expand/collapse controls column
     *
     * @private
     * @function _renderColumnGroup
     */
    _renderColumnGroup() {
      if (this.expandable) {
        // Add extra dummy column as the first one while generating column group
        return super._renderColumnGroup.call({
          columns: [
            { width: `${EXPANDABLE_CONTROL_COLUMN_WIDTH}px` },
            ...this.columns,
          ],
        });
      }

      return super._renderColumnGroup();
    }
  };

  addProps(
    {
      expandable: { attribute: true, type: Boolean },
      custom: { type: Object },
      expandedRowHeight: { attribute: true, type: String, default: '100px' },
    },
    style$1,
  )(MixedClass);

  return MixedClass;
};

var style = ":host{\n  display: block;\n  height: inherit;\n  --table-background: var(--layer2, #FAFAFA);\n  --color-band: transparent;\n}\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n*::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n  background: transparent;\n}\n*::-webkit-scrollbar-corner {\n  background: transparent;\n}\n*::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb, rgb(177, 177, 177));\n}\n* { /* Firefox */\n  scrollbar-color: var(--scrollbar-thumb, rgb(177, 177, 177)) transparent;\n  scrollbar-width: thin;\n}\n\n.table__container {\n  position: relative;\n  overflow: auto;\n  border-bottom: 1px solid var(--table-outer-gray, #878787);\n  width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n}\n\ntable {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  table-layout: fixed;\n  background-color: var(--table-background);\n}\n\ntable:focus,\ntbody:focus,\ntr:focus-visible {\n  outline: none !important;\n}\n\nthead, thead tr {\n  background-color: inherit;\n}\n\ntd {\n  color: var(--text, #242424);\n  word-break: break-all;\n}\n\n.table__cell {\n  padding-left: var(--space-large, 16px);\n  cursor: default;\n}\n\ntr td:last-child .table__cell {\n  padding-right: var(--space-large, 16px);\n}\n\ntr {\n  height: var(--row-height, 50px);\n}\n\ntbody > tr {\n  background-color: var(--table-background);\n}\n\ntbody > tr:hover,\n:host([striped]) tbody > tr:hover {\n    background-color: var(--table-hover, #DCDCDC) ;\n}\n\nth {\n  height: var(--heading-height, 50px);\n  padding-top: 0;\n  padding-bottom: 0;\n  font-weight: var(--weight-medium, 500);\n  text-align: left;\n  background-color: inherit;\n  border-bottom: 1px solid var(--table-outer-gray, #878787);\n  position: sticky !important;\n  z-index: 1;\n  top:0;\n}\n\n:host([tiny]) .table__cell {\n  padding-left: var(--space-small, 4px);\n}\n\n:host([tiny]) tr td:last-child .table__cell,\n:host([tiny]) tr th:last-child {\n  padding-right: var(--space-small, 4px);\n}\n\n:host([compact]) .table__cell {\n  padding-left: var(--space-base, 8px);\n}\n\n:host([compact]) tr td:last-child .table__cell {\n  padding-right: var(--space-base, 8px);\n}\n\ntr:not(:last-child) td {\n  border-bottom: 1px solid var(--table-inner-gray, #878787);\n}\n\n:host([dashed]) tr:not(:last-child) td {\n  border-bottom: 1px dashed var(--table-inner-gray, #878787);\n}\n\n:host(:not([expandable])[striped]) tbody tr:nth-child(even) {\n  background-color: var(--table-striped-gray, #EBEBEB);\n}\n\n:host(:not([expandable])[striped]) tbody tr:nth-child(even):hover {\n  background-color: var(--table-hover, #DCDCDC);\n}\n\n:host([striped]) tr:not(:last-child) td {\n  border-bottom-color: transparent;\n}\n\ntbody.contextmenu tr[data-index]:hover td {\n  cursor: context-menu;\n}\n\ntbody.contextmenu tr[data-index]:hover td.expandable-control,\ntbody.contextmenu tr[data-index]:hover td.multi-select-control {\n  cursor: pointer;\n}\n\ntr:focus td,\n:host([dashed]) tr:focus td {\n  border-top: 1px solid var(--purple, #a56ebe);\n  border-bottom: 1px solid var(--purple, #a56ebe);\n}\n\ntr:focus td:first-child {\n  border-left: 1px solid var(--purple, #a56ebe);\n}\n\ntr:focus td:last-child {\n  border-right: 1px solid var(--purple, #a56ebe);\n}\n\ntbody.contextmenu tr.hover-effect,\ntbody.contextmenu tr:not([selected]).hover-effect td.multi-select-control,\ntbody.contextmenu tr:not([selected]).hover-effect td.expandable-control {\n  background-color: var(--table-hover, #DCDCDC) !important;\n}\n\n.table__cell-content {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  flex: auto;\n  padding-right: var(--space-base, 8px);\n}\n\ntd .table__cell {\n  display: flex;\n  align-items: center;\n  height: calc((var(--row-height) - 3px) / var(--cell-count, 1));\n}\n\nth .table__cell {\n  display: flex;\n  align-items: center;\n}\n\nthead tr {\n  height: var(--heading-height);\n}\n\n:host([tiny]) tbody tr[color-band] td:first-child {\n  box-shadow: inset 2px 0px 0px 0px var(--color-band);\n}\n\n:host([compact]) tbody tr[color-band] td:first-child {\n  box-shadow: inset 4px 0px 0px 0px var(--color-band);\n}\n\ntbody tr[color-band] td:first-child {\n  box-shadow: inset 8px 0px 0px 0px var(--color-band);\n}\n\ntbody tr[color-band=\"green\"] td:first-child {\n  --color-band: var(--green, #329864);\n}\n\ntbody tr[color-band=\"yellow\"] td:first-child {\n  --color-band: var(--yellow, #A08209);\n}\n\ntbody tr[color-band=\"orange\"] td:first-child {\n  --color-band: var(--orange, #D46617);\n}\n\ntbody tr[color-band=\"red\"] td:first-child {\n  --color-band: var(--red, #ED0E00);\n}\n\ntbody tr[color-band=\"gray\"] td:first-child {\n  --color-band: var(--gray, #878787);\n}\n\ntbody tr[color-band=\"blue\"] td:first-child {\n  --color-band: var(--blue, #1174E6);\n}\n";

/**
 * Component Table is defined as
 * `<eui-table></eui-table>`
 *
 * Imperatively create component
 * @example
 * let component = new Table();
 *
 * Declaratively create component
 * @example
 * <eui-table></eui-table>
 *
 * @extends {LitComponent}
 */

class BaseTable extends LitComponent {
  /**
   * getter for the row height. This is set from the props (tiny | compact)
   * @property rowHeight
   * @returns {Number} row height
   */
  get rowHeight() {
    let height = DEFAULT_ROW_HEIGHT;
    if (this.customRowHeight) {
      height = this.customRowHeight;
    } else if (this.tiny) {
      height = TINY_ROW_HEIGHT;
    } else if (this.compact) {
      height = COMPACT_ROW_HEIGHT;
    }

    return height;
  }

  /**
   * getter for the heading height. This is set from the props (tiny | compact)
   * @property headingHeight
   * @returns {Number} heading height
   */
  get headingHeight() {
    let height = DEFAULT_ROW_HEIGHT;
    if (this.tiny) {
      height = TINY_ROW_HEIGHT;
    } else if (this.compact) {
      height = COMPACT_ROW_HEIGHT;
    }
    return height;
  }

  /**
   * Get data source
   * Will be overridden when virtual-scroll is enabled
   *
   * @property dataSource
   * @returns {Array} - data to render table rows
   */
  get dataSource() {
    return this.data;
  }

  /**
   * Get the table body rows
   *
   * @property _rows
   * @return [<tr> Elements]
   */
  get _rows() {
    return this.shadowRoot.querySelectorAll('tbody tr');
  }

  /**
   * Add class 'table__cell' to column header
   * @function _getClassMapForColumnCell
   * @param {Object} column - column definition
   */
  _getClassMapForColumnCell() {
    return o({ table__cell: true });
  }

  didConnect() {
    this._registerComponents(this.components);
  }

  /**
   * lifecycle hook
   *
   * @method didUpgrade
   *
   */
  didUpgrade() {
    //  Store references to key elements in the table. Can be used by all mixins.
    this.tableContainer = this.shadowRoot.querySelector('.table__container');
    this.tableBody = this.shadowRoot.querySelector('tbody');
    this.tableHeader = this.shadowRoot.querySelector('thead');
    this.table = this.shadowRoot.querySelector('table');
    this.tableBody.style.setProperty('--row-height', `${this.rowHeight}px`);
    if (this.tableHeader) {
      this._setHeadingHeight();
    }
  }

  /**
   * lifecycle hook didChangeProps
   *
   * @function didChangeProps
   * @param {Map} changedProps - changed props
   */
  didChangeProps(changedProps) {
    // handle change in row-height through props 'tiny/compact/customRowHeight'
    if (
      changedProps.has('tiny') ||
      changedProps.has('compact') ||
      changedProps.has('customRowHeight')
    ) {
      this.tableBody.style.setProperty('--row-height', `${this.rowHeight}px`);
    }
    if (
      this.tableHeader &&
      (changedProps.has('tiny') || changedProps.has('compact'))
    ) {
      this._setHeadingHeight();
    }
    if (changedProps.has('noHeader')) {
      if (this.noHeader) {
        this.tableHeader = null;
      } else {
        window.requestAnimationFrame(() => {
          this.tableHeader = this.shadowRoot.querySelector('thead');
          this._setHeadingHeight();
        });
      }
    }
    if (changedProps.has('components')) {
      this._registerComponents(this.components);
    }
  }

  /**
   * Register components when added in a custom cell
   *
   * @function _registerComponents
   *
   * @param {Object.<string, HTMLElement>} components - components to register
   * @private
   */
  _registerComponents = components => {
    const keys = Object.keys(components);
    keys.forEach(key => {
      this.register(components[key], key);
    });
  };

  /**
   * This method handles the events emitted
   * by the "context-menu" slot
   *
   * @method handleEvent
   * @param {Event} event - event from the component
   * @public
   */
  handleEvent(event) {
    if (event.type === 'slotchange') {
      const elementsInSlot = event.target.assignedNodes();
      if (elementsInSlot.length > 0) {
        this._contextmenu = true;
        [this.contextMenu] = elementsInSlot;
      } else {
        this._contextmenu = false;
        this.contextMenu = null;
      }
    }
    if (event.type === 'eui-menu:hidden' || event.type === 'eui-menu:click') {
      this._removeRowHoverEffect();
    }
  }

  /**
   * Render colgroup
   *
   * @private
   * @function _renderColumnGroup
   */
  _renderColumnGroup() {
    const cols = this.columns.filter(column => !column.hidden);
    return $`
      <colgroup>
        ${c(
          cols,
          column => column.attribute,
          column => $`
            <col
              style=${i$1({
                width: column.width,
                minWidth: column.width,
              })}
            />
          `,
        )}
      </colgroup>
    `;
  }

  /**
   * Get columns to be displayed in table
   *
   * @private
   * @function _getDisplayColumns
   */
  _getDisplayColumns() {
    return this.columns.filter(column => !column.hidden);
  }

  /**
   * Apply style property to table header
   *
   * @private
   * @function _setHeadingHeight
   */
  _setHeadingHeight() {
    this.tableHeader.style.setProperty(
      '--heading-height',
      `${this.headingHeight}px`,
    );
  }

  /**
   * Render table header section
   *
   * @private
   * @function _renderHeader
   */
  _renderHeader() {
    return this.noHeader !== true
      ? $`
          <thead>
            <tr>
              ${this.renderExpandControl()} ${this._renderHeaderCheckbox()}
              ${this._getDisplayColumns().map(
                (column, index, filteredColumns) => $`
                  <th
                    data-column-index=${index}
                    @click=${() => this._handleHeaderClick(column)}
                    style=${this._getPinnedColumnStickyOffset(
                      column,
                      filteredColumns,
                    )}
                    class=${this._getClassForPinnedColumn(
                      column,
                      index,
                      filteredColumns,
                    )}
                  >
                    ${this._renderResizeAnchor(column, index, true)}
                    <div
                      id=${column.attribute}
                      class=${this._getClassMapForColumnCell(column)}
                    >
                      <span class="table__cell-content">${column.title}</span>
                      ${this.renderSortingControl(column)}
                    </div>
                    ${this._renderResizeAnchor(column, index)}
                  </th>
                `,
              )}
              ${this._renderDummyColumn(true)}
            </tr>
          </thead>
        `
      : w;
  }

  /**
   * Override this function when you require custom cell handling.
   * This function takes the value from the row with the corresponding cell attribute.
   *
   * @function cell
   * @param {Object} row - row data.
   * @param {Object} column - column definition.
   */
  cell(row, column) {
    if (column.cell && typeof column.cell === 'function') {
      // to make the examples work in showcase, the html reference is passed as a third argument.
      return column.cell(row, column, $);
    }
    return $` <div class="table__cell">
      <span class="table__cell-content">${row[column.attribute]}</span>
    </div>`;
  }

  /**
   * Removes 'hover-effect' classname from table row
   * (hover style applied to row on right-click but removed using this function
   *  when some other event occurs on the table)
   *
   * @private
   * @function _removeRowHoverEffect
   */
  _removeRowHoverEffect() {
    const rowWithHover = [...this._rows].find(row =>
      row.classList.contains('hover-effect'),
    );
    if (rowWithHover) {
      rowWithHover.classList.remove('hover-effect');
    }
  }

  /**
   * Prevents default context menu, adds hover style effect to row and bubbles
   * 'eui-table:contextmenu' event on right click of table row when actions is true
   *
   * @private
   * @function _handleRightClick
   * @param {Object} event - event object for right click.
   * @param {Object} row - row data for row that was right-clicked.
   * @param {Number} rowIndex - index of row that was right-clicked in this.data
   */
  _handleRightClick(event, row, rowIndex) {
    event.preventDefault();
    const queryString = `tr[data-index="${rowIndex}"]`;
    const targetedRow = this.shadowRoot.querySelector(queryString);
    targetedRow.classList.add('hover-effect');

    this.contextMenu.position = event;
    this.bubble('eui-table:contextmenu', {
      row,
      menu: this.contextMenu,
      position: event,
    });
  }

  /**
   * Render table rows
   *
   * @private
   * @function _renderRows
   */
  _renderRows() {
    // dataSource can be this.data or this._viewData depending on virtual scroll is enabled or not
    // Using repeat with key to avoid unexpected focus status retained when repeatedly rendering
    // rows into table viewport after both selection and virtual-scroll are enabled
    return $`
      ${c(
        this.dataSource,
        row => row._globalIndex || 0,
        (row, rowIndex) => $`
          <tr
            @click=${event => this._handleRowClick(event, row, rowIndex)}
            @keydown=${event => this._handleRowKeyPress(event, row, rowIndex)}
            @contextmenu=${event => {
              if (this._contextmenu) {
                this._handleRightClick(event, row, rowIndex);
              }
            }}
            tabindex="-1"
            ?selected=${row.selected}
            data-index=${rowIndex}
            color-band=${l(row.colorBand)}
            class=${l(
              this.expandable
                ? this._getClassForExpandableRow(row, rowIndex)
                : undefined,
            )}
          >
            ${this.renderExpandControl(row)} ${this._renderRowCheckbox(row)}
            ${this._getDisplayColumns().map(
              (column, columnIndex, filteredColumns) => $`
                <td
                  style=${this._getPinnedColumnStickyOffset(
                    column,
                    filteredColumns,
                  )}
                  class=${this._getClassForPinnedColumn(
                    column,
                    columnIndex,
                    filteredColumns,
                  )}
                >
                  ${this.cell(row, column, rowIndex, columnIndex)}
                </td>
              `,
            )}
            ${this._renderDummyColumn(false)}
          </tr>
          ${this.renderExpandedRow(row)}
        `,
      )}
    `;
  }

  render() {
    return $`
      <div class="table__container" @scroll=${this}>
        <div class="table__viewport">
          <table @keydown=${this} tabindex="0">
            ${this._renderColumnGroup()} ${this._renderHeader()}
            <tbody class=${o({ contextmenu: this._contextmenu })}>
              ${this._renderRows()}
            </tbody>
          </table>
        </div>
        <slot
          @slotchange=${this}
          name="context-menu"
          @eui-menu:hidden=${this}
          @eui-menu:click=${this}
        ></slot>
      </div>
    `;
  }
}

/**
 * @property {Array} columns - column data.
 * @property {Boolean} compact - set the table to compact style.
 * @property {Object} components - list components to be registered.
 * @property {Number} customRowHeight - set the custom height to the table row.
 * @property {Boolean} dashed - set the table to dashed style.
 * @property {Array} data - table data.
 * @property {Boolean} noHeader - makes a table headless
 * @property {Boolean} striped - set the table to striped style.
 * @property {Boolean} tiny - set the table to tiny style.
 */
definition('eui-table', {
  style,
  props: {
    columns: { type: Array, default: [] },
    compact: { attribute: true, type: Boolean },
    customRowHeight: { attribute: true, type: Number },
    dashed: { attribute: true, type: Boolean },
    data: { type: Array, default: [] },
    noHeader: { attribute: true, type: Boolean },
    striped: { attribute: true, type: Boolean },
    tiny: { attribute: true, type: Boolean },
    components: { type: Object, default: {} },
    _contextmenu: { type: Boolean },
  },
})(BaseTable);

// register all the components. This is a good place to register common
// components that are in multiple mixins such as eui-icon
const componentMixin = superclass =>
  class extends superclass {
    static get components() {
      return {
        'eui-icon': Icon,
        ...superclass.components,
      };
    }
  };

// Mix all the extended mixins
class Table extends componentMixin(
  PinColumnMixin(
    VirtualScrollMixin(
      ResizeColumnMixin(
        SortMixin(
          SelectionMixin(ExpandableMixin(AccessibilityMixin(BaseTable))),
        ),
      ),
    ),
  ),
) {}

/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var version = "1.15.0";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, _excluded);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable)) return;
    var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists && !ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown


    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // if there is a last element, it is the target


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();

          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }

          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);

        if (firstChild === dragEl) {
          return completed(false);
        }

        target = firstChild;
        targetRect = getRect(target);

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

var template = "<div class=\"empty-state\">\n  <div>\n    <eui-icon name=\"plus\" size=\"28px\"></eui-icon>\n  </div>\n  <div class=\"title\"></div>\n  <div class=\"description\"></div>\n</div>\n<div class=\"card-container\">\n  <slot></slot>\n</div>\n";

var style$7 = ":host {\n  display: block;\n  position: relative;\n  box-sizing: border-box;\n  min-height: 250px;\n}\n\n:host([border]) {\n  border: 1px solid var(--gray, #878787);\n}\n\n:host([border].drop-over) {\n  border: 1px solid var(--blue, #1174e6);\n}\n\n.empty-state {\n  position: absolute;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 100%;\n  min-height: 250px;\n  align-items: center;\n  text-align: center;\n  pointer-events: none;\n}\n\n.empty-state div:not(:first-child) {\n  margin: var(--space-base, 8px) 0 0 0;\n  font-size: 14px;\n}\n\n.empty-state div.description {\n  color: var(--gray, #878787);\n}\n\n.card-container {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.card-container ::slotted(*) {\n  margin: 0px 0px 8px;\n}\n\n.card-container ::slotted(*:last-child) {\n  margin: 0px;\n}\n\n.hidden {\n  display: none;\n}\n";

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

class DropArea extends TemplateComponent {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  /**
   * Get all draggable items
   *
   * @function _items
   * @private
   */
  get _items() {
    return [...this.children];
  }

  /**
   * Hide empty state and show draggable items
   *
   * @function _hideEmptyState
   * @private
   */
  _hideEmptyState() {
    this._emptyState.classList.add('hidden');
    this._cardContainer.classList.remove('hidden');
  }

  /**
   * Show empty state and hide draggable items
   *
   * @function _showEmptyState
   * @private
   */
  _showEmptyState() {
    this._emptyState.classList.remove('hidden');
    this._cardContainer.classList.add('hidden');
  }

  /**
   * Show blue frame around drop area
   *
   * @function _highLightArea
   * @private
   */
  _highLightArea() {
    this.classList.add('drop-over');
  }

  /**
   * Remove blue frame around drop area
   *
   * @function _lowLightArea
   * @private
   */
  _lowLightArea() {
    this.classList.remove('drop-over');
  }

  /**
   * Show empty state if there are no items
   *
   * @function _updateEmptyState
   * @private
   */
  _updateEmptyState() {
    if (this.children.length > 0) {
      this._hideEmptyState();
    } else {
      this._showEmptyState();
    }
  }

  _updateProps() {
    if (this.dropAreaTitle) {
      this._title.classList.remove('hidden');
    } else {
      this._title.classList.add('hidden');
    }

    if (this.description) {
      this._description.classList.remove('hidden');
    } else {
      this._description.classList.add('hidden');
    }
  }

  /**
   * Creates the sortable plugin
   *
   * @function _createSortable
   * @private
   */
  _createSortable() {
    this.sortable = new Sortable(this, {
      animation: 0,
      group: this.group,
      put: this.group,
      pull: this.group,
      onMove: evt => {
        if (this.highlightedElement && this.highlightedElement !== evt.to) {
          this.highlightedElement._lowLightArea();
        }
        this.highlightedElement = evt.to;
        this.highlightedElement._highLightArea();
      },
      onAdd: () => {
        this._lowLightArea();
      },
      onEnd: () => {
        this._lowLightArea();
      },
    });
  }

  /**
   *  Called each time the component has been connected
   *
   * @function didConnect
   */
  didConnect() {
    this._emptyState = this.shadowRoot.querySelector('.empty-state');
    this._cardContainer = this.shadowRoot.querySelector('.card-container');
    this._itemSlot = this.shadowRoot.querySelector('slot:not([name])');
    this._title = this.shadowRoot.querySelector('.title');
    this._description = this.shadowRoot.querySelector('.description');

    this._itemSlot.addEventListener('slotchange', () => {
      this._updateEmptyState();
    });

    this._title.innerHTML = this.dropAreaTitle ? this.dropAreaTitle : null;
    this._description.innerHTML = this.description ? this.description : null;

    if (!this.sortable) {
      this._createSortable();
    }
    this._updateEmptyState();
    this._updateProps();
  }

  /**
   * Called each time a prop changes on the component
   *
   * @method didChangeProps
   * @param {Map} changedProps - Keys are the names of changed properties;
   * Values are the corresponding previous values.
   */
  didChangeProps(changedProps) {
    if (changedProps.has('group')) {
      if (this.sortable) {
        this.sortable.destroy();
      }
      this._createSortable();
    }

    const titlePropChanged =
      changedProps.has('dropAreaTitle') &&
      changedProps.get('dropAreaTitle') !== this.dropAreaTitle;
    const descriptionPropChanged =
      changedProps.has('description') &&
      changedProps.get('description') !== this.description;

    if (titlePropChanged) {
      this._title.innerHTML = this.dropAreaTitle;
      this._updateProps();
    }

    if (descriptionPropChanged) {
      this._description.innerHTML = this.description;
      this._updateProps();
    }
  }
}

/**
 * @property {String} dropAreaTitle - the title of drop area
 * @property {Boolean} description - the description of drop area
 * @property {String} group - the group indicator of drop area
 * @property {Boolean} border - indicate if presenting border
 */
definition(`eui-drop-area`, {
  style: style$7,
  template,
  props: {
    dropAreaTitle: { attribute: true, type: String },
    description: { attribute: true, type: String },
    group: { attribute: true, type: String, default: 'default-group' },
    border: { attribute: true, type: Boolean },
  },
})(DropArea);

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

var style$8 = "/* style goes here */\n:host {\n  display: block;\n}\n\neui-icon {\n  cursor: pointer;\n}\n\neui-card {\n  margin: var(--space-small, 4px) 0;\n}\n\n.header {\n  padding: 0 var(--space-base, 8px);\n  display: flex;\n}\n\n.header-item {\n  cursor: default;\n  color: var(--gray-text, #6a6a6a);\n}\n\n.enabled {\n  cursor: pointer;\n  color: var(--link-blue, #0069c2);\n}\n\n.enabled:hover {\n  text-decoration: underline;\n}\n\n.showHide {\n  display: flex;\n  margin-left: auto;\n}\n\n.separator {\n  border-left: 1px solid var(--gray-text, #6a6a6a);\n  padding-left: var(--space-small, 4px);\n  margin-left: var(--space-small, 4px);\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.drag-area {\n  min-height: auto;\n}\n\n.pinned-area + .area-divider {\n  margin: 0 var(--space-base, 8px);\n  height: 1px;\n  background-color: var(--gray-text, #6a6a6a);\n}\n\n.all-pinned + .area-divider {\n  display: none !important;\n}\n\n.column-card {\n  overflow: hidden;\n}\n";

/**
 * Component TableSettings is defined as
 * `<eui-table-setting>`
 *
 * Imperatively create component
 * @example
 * let component = new Setting();
 *
 * Declaratively create component
 * @example
 * <eui-table-setting></eui-table-setting>
 *
 * @extends {LitComponent}
 */

class Setting extends LitComponent {
  static get components() {
    return {
      'eui-card': Card,
      'eui-drop-area': DropArea,
      'eui-tooltip': Tooltip,
      'eui-icon': Icon,
    };
  }

  constructor() {
    super();
    this._enableShowAll = false;
    this._enableHideAll = false;
  }

  /**
   * Update private props if this.columns is defined
   *
   * @function didUpgrade
   */
  didUpgrade() {
    if (this.columns) {
      this._pinnedColumns = this._getColumnsByPinState(true);
      this._unpinnedColumns = this._getColumnsByPinState(false);
    }
  }

  /**
   * Prevent default selecting behavior of card
   *
   * @function handleEvent
   * @param {Event} event - an event
   */
  handleEvent(event) {
    if (event.type === 'click' && event.currentTarget.selected) {
      event.currentTarget.selected = !event.currentTarget.selected;
    }
  }

  /**
   * called each time when props are changed.
   *
   * @param {Map} changedProps - keys are the names of changed properties;
   * values are the corresponding previous values.
   */
  didChangeProps(changedProps) {
    if (changedProps.has('columns')) {
      this.columns = this._deepCloneColumns();
      this._pinnedColumns = this._getColumnsByPinState(true);
      this._unpinnedColumns = this._getColumnsByPinState(false);
    }
  }

  /**
   * Get columns by pinned state
   *
   * @function _getColumnsByPinState
   * @private
   *
   * @param {Boolean} isPinned - column's pinned state
   * @private
   */
  _getColumnsByPinState(isPinned) {
    return this.columns.filter(col => (col.pinned || false) === isPinned);
  }

  /**
   * deep clone columns object.
   *
   * @function _deepCloneColumns
   * @param {Object} columns - columns definition
   * @private
   */
  _deepCloneColumns = () => JSON.parse(JSON.stringify(this.columns));

  /**
   * Collect columns according to latest orders
   */
  _collectColumns() {
    // get the draggable area...
    const draggableAreas = this.shadowRoot.querySelectorAll('eui-drop-area');

    // create a new columns array based on the current settings/order of columns...
    const newColumns = [];
    for (const area of draggableAreas) {
      [...area.children].forEach(child => {
        newColumns.push(
          this.columns.find(column => column.attribute === child.id),
        );
      });
    }

    return newColumns;
  }

  /**
   * apply settings.
   *
   * @function apply
   * @public
   */
  apply = () => {
    // bubble out the new settings...
    this.bubble('eui-table-setting:apply', { value: this._collectColumns() });
  };

  /**
   * cancel settings.
   *
   * @function cancel
   * @public
   */
  cancel = () => {
    this.bubble('eui-table-setting:cancel', { value: this.columns });
  };

  /**
   * toggle the eye icon to hide/show table column.
   *
   * @function _toggleColumnShowHide
   * @param {Event} event - a click event
   * @param {Object} column - column definition
   * @private
   */
  _toggleColumnShowHide = (event, column) => {
    event.stopPropagation();
    column.hidden = !column.hidden;
    this.columns = [...this._pinnedColumns, ...this._unpinnedColumns];
  };

  /**
   * add an show/hide icon to each column card except the mandatory ones
   *
   * @function _renderShowHide
   * @private
   *
   * @param {Object} column - column definition
   */
  _renderShowHide(column) {
    if (!column.mandatory) {
      return $`<eui-tooltip
        action
        slot="action"
        position="left"
        message=${this.visibilityActionTooltip}
      >
        <eui-icon
          id="visibility-icon"
          name=${column.hidden ? 'eye' : 'eye-solid'}
          @click=${event => this._toggleColumnShowHide(event, column)}
        ></eui-icon>
      </eui-tooltip>`;
    }
    return w;
  }

  /**
   * Apply the enable/disable classes to the ShowHide header
   *
   * @function _enableDisableShowHide
   * @private
   */
  _enableDisableShowHide = () => {
    const nonMandatoryCols = this.columns.filter(col => !col.mandatory);

    if (nonMandatoryCols.every(col => col.hidden)) {
      this._enableHideAll = false;
      this._enableShowAll = true;
      return;
    }
    if (nonMandatoryCols.every(col => !col.hidden)) {
      this._enableHideAll = true;
      this._enableShowAll = false;
      return;
    }
    if (nonMandatoryCols.some(col => col.hidden)) {
      this._enableShowAll = true;
    }
    if (nonMandatoryCols.some(col => !col.hidden)) {
      this._enableHideAll = true;
    }
  };

  /**
   * Add the Show All and Hide All functionality
   *
   * @function _renderShowHideAll
   * @param {Array} columns - array of columns
   * @private
   */
  _renderShowHideAll = columns => {
    if (columns.some(column => !column.mandatory)) {
      this._enableDisableShowHide();
      return $`
        <span class="showHide">
          <span
            class=${o({
              'header-item': true,
              enabled: this._enableShowAll,
            })}
            @click=${this._showAllCols}
          >
            ${this.showAll}
          </span>
          <span class="separator"></span>
          <span
            class=${o({
              'header-item': true,
              enabled: this._enableHideAll,
            })}
            @click=${this._hideAllCols}
          >
            ${this.hideAll}
          </span>
        </span>
      `;
    }
    return w;
  };

  /**
   * Swap all columns which are hidden to be visible
   *
   * @function _showAllCols
   * @param {Event} event - a click event
   * @private
   */
  _showAllCols = event => {
    for (const column of this.columns) {
      if (column.hidden) {
        this._toggleColumnShowHide(event, column);
      }
    }
  };

  /**
   * Swap all non mandatory columns to be hidden
   *
   * @function _hideAllCols
   * @param {Event} event - a click event
   * @private
   */
  _hideAllCols = event => {
    for (const column of this.columns) {
      if (!column.hidden && !column.mandatory) {
        this._toggleColumnShowHide(event, column);
      }
    }
  };

  /**
   * Event handler for toggling column's pinned state
   *
   * @function _toggleColumnPinState
   * @private
   *
   * @param {Object} event - click event object of clicking on pin/unpin icon
   * @param {Object} column - table column object
   */
  _toggleColumnPinState = (event, column) => {
    event.stopPropagation();

    const prePinState = column.pinned;
    column.pinned = !column.pinned;
    if (prePinState) {
      this._pinnedColumns = this._pinnedColumns.filter(
        col => col.attribute !== column.attribute,
      );
      this._unpinnedColumns.unshift(column);
    } else {
      this._pinnedColumns.push(column);
      this._unpinnedColumns = this._unpinnedColumns.filter(
        col => col.attribute !== column.attribute,
      );
    }
    this.columns = [...this._pinnedColumns, ...this._unpinnedColumns];

    // Prevent duplicate card happened when: pin/unpin a column, sort and then unpin/pin the column
    this.shadowRoot.querySelector(`#${column.attribute}`).remove();
  };

  /**
   * Render pin/unpin icon for column card
   *
   * @function _renderPin
   * @private
   *
   * @param {Object} column - table column
   */
  _renderPin(column) {
    return $`<eui-tooltip
      action
      slot="action"
      position="left"
      message=${this.pinActionTooltip}
    >
      <eui-icon
        id="pin-icon"
        name=${column.pinned ? 'pin-solid' : 'pin'}
        @click=${event => this._toggleColumnPinState(event, column)}
      ></eui-icon>
    </eui-tooltip>`;
  }

  /**
   * Handling column card re-ordering
   *
   * @param {Object} event - dropArea update event object
   */
  _handleDraggingColumn = event => {
    // Force re-rendering to avoid tooltip disappearing because of  column card position change
    this.columns = [...this._collectColumns()];
    // remove duplicates caused by re-ordering
    event.target.remove();
  };

  /**
   * Render pinned / unpinned columns
   *
   * @function _renderColumns
   * @private
   *
   * @param {Boolean} isPinned - indicates to render all / pinned / unpinned columns
   */
  _renderColumns(isPinned) {
    let columnsToRender = [];
    if (isPinned === undefined) {
      // render all columns
      columnsToRender = this.columns;
    } else {
      // render pinned / unpinned columns
      columnsToRender = isPinned ? this._pinnedColumns : this._unpinnedColumns;
    }

    if (columnsToRender.length === 0) {
      return w;
    }

    const allPined = columnsToRender.length === this.columns.length;
    return $`
      <eui-drop-area
        class=${o({
          'drag-area': true,
          'pinned-area': isPinned,
          'all-pinned': allPined,
        })}
        group=${`${isPinned ? 'pinned' : 'default'}-group`}
      >
        ${c(
          columnsToRender,
          () => Math.random(),
          column => $`
            <eui-card
              id=${column.attribute}
              class="column-card"
              drag
              card-title="${column.title}"
              @click=${this}
              @dragend=${this._handleDraggingColumn}
            >
              ${this._renderShowHide(column)}
              ${this.pinned && this._renderPin(column)}
            </eui-card>
          `,
        )}
      </eui-drop-area>
    `;
  }

  /**
   * Render drag & drop columns cards
   */
  _renderDragArea() {
    if (this.pinned) {
      return $`
        ${this._renderColumns(true)}
        <div class="area-divider"></div>
        ${this._renderColumns(false)}
      `;
    }

    return $` ${this._renderColumns()} `;
  }

  /**
   * Render the <eui-table-setting> component. This function is called each time a
   * prop changes.
   */
  render() {
    return $`
      <div class="header">
        <span>${this.subHeading}</span>
        ${this._renderShowHideAll(this.columns)}
      </div>
      ${this._renderDragArea()}
    `;
  }
}

/**
 * @property {Array} columns - column data.
 * @property {Boolean} pinned - pinned columns has been enabled or not.
 * @property {String} visibilityActionTooltip - tooltip message for show hide icon
 * @property {String} pinActionTooltip - tooltip message for pin unpin icon
 * @property {String} subHeading - text for sub heading
 * @property {String} showAll - text for show all link
 * @property {String} hideAll - text for hide all link
 */
definition('eui-table-setting', {
  style: style$8,
  props: {
    columns: { type: Array, default: [] },
    _pinnedColumns: { type: Array, default: [] },
    _unpinnedColumns: { type: Array, default: [] },
    pinned: {
      attribute: true,
      type: Boolean,
      default: false,
    },
    visibilityActionTooltip: {
      attribute: true,
      type: String,
      default: 'hide / show column',
    },
    pinActionTooltip: {
      attribute: true,
      type: String,
      default: 'pin / unpin column',
    },
    subHeading: {
      attribute: true,
      type: String,
      default: 'Columns',
    },
    showAll: {
      attribute: true,
      type: String,
      default: 'Show All',
    },
    hideAll: {
      attribute: true,
      type: String,
      default: 'Hide All',
    },
  },
})(Setting);

/**
 * @license
 * COPYRIGHT Ericsson 2022
 * The copyright to the computer program(s) herein is the property of
 * Ericsson Inc. The programs may be used and/or copied only with written
 * permission from Ericsson Inc. or in accordance with the terms and
 * conditions stipulated in the agreement/contract under which the
 * program(s) have been supplied.
 */

/**
 * CustomPagination is used to customize the internals of the Pagination supplied by EDS.
 *
 * @class CustomPagination
 * @extends EDSDatepicker
 */

class EDSPagination {
  constructor(element) {
    this.dom = {
      paginationGroup: element,
    };
    this.state = {
      currentPage: 1,
      hasNextPage: true,
      hasPreviousPage: false,
      numEntries: 0,
      numPages: 0,
      pageClicked: 0,
    };
    this.data = undefined;
    this.listeners = {
      setNumEntries: e => {
        if (e.detail.value.includes('entries-')) {
          this.state.numEntries = this.getNumEntries(e);
          this.updateState();
        }
      },
    };
  }

  init(nPages) {
    this.setNumPages(nPages);
    this.injectPaginationControls();
    this.updateCurrentPage();
  }

  destroy() {
    this.removeEventHandler();
  }

  eventHandler() {
    const paginationArray = Array.from(
      this.dom.paginationGroup.querySelectorAll('.pagination li'),
    );
    paginationArray.forEach(item => {
      item.addEventListener('click', () => {
        this.state.pageClicked = item.dataset.value;
        this.updateCurrentPage();
        this.injectPaginationControls('update');
        // Deprecated: 'pageIndexChange' event should be removed in the next release
        this.dom.paginationGroup.dispatchEvent(
          new CustomEvent('pageIndexChange', {
            bubbles: true,
            composed: true,
            detail: { state: { ...this.state } }, // snapshot is passed
          }),
        );
        this.dom.paginationGroup.dispatchEvent(
          new CustomEvent('eui-table:page-index-change', {
            bubbles: true,
            composed: true,
            detail: { state: { ...this.state } }, // snapshot is passed
          }),
        );
      });
    });
  }

  removeEventHandler() {
    const paginationArray = Array.from(
      this.dom.paginationGroup.querySelectorAll('.pagination li'),
    );
    paginationArray.forEach(item => {
      item.removeEventListener('click', () => {
        this.state.pageClicked = item.dataset.value;
        this.updateCurrentPage();
        this.injectPaginationControls('update');
        // Deprecated: 'pageIndexChange' event should be removed in the next release
        this.dom.paginationGroup.dispatchEvent(
          this.events.paginationChangePage,
        );
        this.dom.paginationGroup.dispatchEvent(
          this.events.euiPaginationChangePage,
        );
      });
    });
  }

  updateCurrentPage() {
    // The arrows have been clicked
    if (typeof this.state.pageClicked === 'string') {
      if (this.state.pageClicked.includes('left')) {
        // - Left arrow
        if (this.state.currentPage > 1) {
          this.state.currentPage = parseInt(this.state.currentPage, 10) - 1;
        }
      } else if (this.state.pageClicked.includes('right')) {
        // - Right arrow
        if (this.state.currentPage < this.state.numPages) {
          this.state.currentPage = parseInt(this.state.currentPage, 10) + 1;
        }
      } else if (this.state.pageClicked.length !== 0) {
        this.state.currentPage = parseInt(this.state.pageClicked, 10);
      }
    }

    this.state.hasNextPage = true;
    this.state.hasPreviousPage = true;
    if (this.state.currentPage === 1) {
      // this.state.hasNextPage = true;
      this.state.hasPreviousPage = false;
    }
    if (this.state.currentPage >= this.state.numPages) {
      if (this.state.currentPage > this.state.numPages) {
        this.state.currentPage = this.state.numPages;
      }
      this.state.hasNextPage = false;
      // this.state.hasPreviousPage = true;
    }
  }

  setNumPages(nPages) {
    this.state.numPages = nPages;
  }

  getNumPages(nRows, nEntries) {
    return Math.ceil(nRows / nEntries);
  }

  getNumEntries(event) {
    if (event) {
      return event.detail.value.split('entries-')[1];
    }
    // when method is invoked without event, obtain from dropdown DOM
    const dropdown = this.dom.paginationGroup.querySelector('.right .dropdown');
    const defaultEntries = dropdown.querySelector('.item.highlight');
    return (
      Number.parseInt(defaultEntries.dataset.value.split('entries-')[1], 10) ||
      10
    );
  }

  /**
   * Generate pagination controls dynamically on init and update
   */
  injectPaginationControls(pType = 'init') {
    // Updated hasNextPage and hasPreviousPage if necessary
    this.state.hasNextPage = true;
    this.state.hasPreviousPage = true;

    if (this.state.currentPage === 1) {
      // this.state.hasNextPage = true;
      this.state.hasPreviousPage = false;
    }
    if (this.state.currentPage >= this.state.numPages) {
      if (this.state.currentPage > this.state.numPages) {
        this.state.currentPage = this.state.numPages;
      }
      this.state.hasNextPage = false;
      // this.state.hasPreviousPage = true;
    }

    const pagination = this.dom.paginationGroup.querySelector('.pagination');
    const leftArrow = this.genArrowControl(
      'left',
      this.state.hasPreviousPage,
      pType,
    );
    const rightArrow = this.genArrowControl(
      'right',
      this.state.hasNextPage,
      pType,
    );
    // Creating some const variables for better readability below
    const nPages = this.state.numPages;
    const noEllipseCount = 7;
    const boundVal = 4;

    /**
     * If this is an 'update' call:
     *  - Remove all li elements to recreate them
     *  - Check if currentPage is higher than number of pages.
     *    If so, fix it.
     */
    if (pType === 'update') {
      while (pagination.firstChild) {
        pagination.removeChild(pagination.firstChild);
      }
      if (this.state.currentPage > this.state.numPages) {
        this.state.currentPage = this.state.numPages;
      }
    }
    const currPage = this.state.currentPage;

    // Inject Left arrow
    pagination.appendChild(leftArrow);

    if (nPages > noEllipseCount) {
      // more than 7 pages : ellipses
      if (currPage <= boundVal) {
        // ex: 1 2 3 4 5 ... 10
        for (let i = 1; i <= boundVal + 1; i += 1) {
          pagination.appendChild(this.genPageControl(i, this.isCurrentPage(i)));
        }
        pagination.appendChild(this.genPageControl('', false));
        pagination.appendChild(
          this.genPageControl(nPages, this.isCurrentPage(nPages)),
        );
      } else if (currPage > nPages - boundVal) {
        // ex: 1 ... 6 7 8 9 10
        pagination.appendChild(this.genPageControl(1, this.isCurrentPage(1)));
        pagination.appendChild(this.genPageControl('', false));
        for (let i = nPages - boundVal; i <= nPages; i += 1) {
          pagination.appendChild(this.genPageControl(i, this.isCurrentPage(i)));
        }
      } else {
        // ex: 1 ... n-1 n n+1 ... 10
        pagination.appendChild(this.genPageControl(1, this.isCurrentPage(1)));
        pagination.appendChild(this.genPageControl('', false));
        for (let i = currPage - 1; i <= currPage + 1; i += 1) {
          pagination.appendChild(this.genPageControl(i, this.isCurrentPage(i)));
        }
        pagination.appendChild(this.genPageControl('', false));
        pagination.appendChild(
          this.genPageControl(nPages, this.isCurrentPage(nPages)),
        );
      }
    } else {
      // 7 pages or less : no ellipses
      for (let i = 1; i <= nPages; i += 1) {
        pagination.appendChild(this.genPageControl(i, this.isCurrentPage(i)));
      }
    }

    // Inject Right arrow
    pagination.appendChild(rightArrow);

    this.eventHandler();
  }

  genArrowControl(direction, state, pType) {
    const li = document.createElement('li');
    const i = document.createElement('i');
    li.classList.add(`${direction}-arrow`);
    if (state) {
      li.classList.remove('disabled');
    } else {
      li.classList.add('disabled');
    }
    li.dataset.value = direction;
    i.classList.add('icon', `icon-arrow-${direction}`);
    li.appendChild(i);
    // Adding icons to the arrow list items.
    // Checking if an icon already exists then re-use that one.
    const iconEDS = this.dom.paginationGroup.querySelector(
      `i.icon-arrow-${direction}`,
    );
    if (pType === 'update' && iconEDS?.hasChildNodes()) {
      const iconEUI = iconEDS.firstChild;
      i.appendChild(iconEUI);
    } else {
      const pageArrow = document.createElement('eui-icon');
      pageArrow.name = `arrow-${direction}`;
      i.appendChild(pageArrow);
    }
    return li;
  }

  genPageControl(label, state) {
    const li = document.createElement('li');
    if (state) {
      li.classList.add('active');
    }
    li.dataset.value = label;
    li.innerText = label;
    return li;
  }

  isCurrentPage(pageNum) {
    return (
      Number.parseInt(pageNum, 10) ===
      Number.parseInt(this.state.currentPage, 10)
    );
  }

  triggerChange() {
    this.injectPaginationControls('update');
    this.dom.paginationGroup
      .querySelector(`ul.pagination li[data-value="${this.state.currentPage}"]`)
      .click();
  }
}

var style$9 = "* {\n  box-sizing: border-box;\n  font-family: \"Ericsson Hilda\",Helvetica,Arial,sans-serif;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n}\n\n:host {\n  display: inline-block;\n}\n\n.pagination-group {\n  display: flex;\n  padding-top: var(--space-base, 8px);\n}\n\n.pagination-group.vertical {\n  display: inline-block;\n  margin: 0 var(--space-large, 16px);\n  padding-top: 0;\n}\n.pagination-group.vertical ul.pagination {\n  display: flex;\n  flex-direction: column-reverse;\n}\n.pagination-group.vertical ul.pagination.reverse {\n  flex-direction: column;\n}\n.pagination-group.vertical ul.pagination li {\n  flex: 0 0 auto;\n  margin: var(--space-small, 4px) 0;\n  width: var(--space-xl, 24px);\n  min-height: var(--space-xl, 24px);\n}\n.pagination-group.vertical ul.pagination li.active {\n  font-weight: var(--weight-medium, 500);\n  box-shadow: inset 2px 0 var(--blue, #1174e6);\n}\n.pagination-group .dropdown {\n  margin-top: -6px;\n}\n.pagination-group .dropdown .preffix {\n  margin-right: 6px;\n}\n\n.pagination-group ul.pagination {\n  display: inline-block;\n  padding: 0;\n  user-select: none;\n}\n\n.pagination-group ul.pagination li {\n  display: inline-grid;\n  place-content: center;\n  margin: 0 var(--space-small, 4px);\n  min-width: var(--space-xl, 24px);\n  height: var(--space-xl, 24px);\n  text-align: center;\n  white-space: nowrap;\n  color: var(--gray-text, #6a6a6a);\n}\n\n.pagination-group ul.pagination li:empty::before {\n  content: \"...\";\n}\n.pagination-group ul.pagination li:empty:hover {\n  background-color: transparent;\n  cursor: default;\n}\n\n.pagination-group ul.pagination li:not(.disabled):not(:empty):hover {\n  color: var(--text, #242424);\n  background-color: var(--table-hover, #dcdcdc);\n  cursor: pointer;\n}\n\n.pagination-group ul.pagination li.active {\n  font-weight: var(--weight-medium, 500);\n  box-shadow: inset 0 -2px var(--blue, #1174e6);\n  color: var(--text, #242424);\n}\n\n.pagination-group ul.pagination li.disabled {\n  opacity: .4;\n}\n\n.pagination-group ul.pagination li .icon eui-icon {\n  --icon-color: var(--gray-text, #6a6a6a);\n  font-size: 16px;\n}\n\n.pagination-group ul.pagination li:not(.disabled):hover .icon eui-icon {\n  --icon-color: var(--text, #242424)\n}\n\n.pagination-group .pagination .left-arrow, \n.pagination-group .pagination .right-arrow {\n  margin: 0;\n}\n\n.pagination-group .pagination li:active,\n.pagination-group .pagination li:focus {\n  outline: 1px solid var(--purple, #A56EBE);\n}\n";

/**
 * Component Pagination is defined as
 * `<eui-pagination-v[version]>`
 *
 * Imperatively create component
 * @example
 * let component = new Pagination();
 *
 * Declaratively create component
 * @example
 * <eui-pagination></eui-pagination>
 *
 * @extends {LitComponent}
 */

class Pagination extends LitComponent {
  static get components() {
    return {
      'eui-icon': Icon,
    };
  }

  /**
   * Determine which arrow icons to use depending on orientation and direction.
   * @function _setArrows
   * @private
   */
  _setArrows = () => {
    const leftArrow = this.shadowRoot.querySelector(
      '.pagination li.left-arrow',
    );
    const rightArrow = this.shadowRoot.querySelector(
      '.pagination li.right-arrow',
    );

    if (this.compOrientation === 'vertical') {
      if (this.compDirection === 'normal') {
        // vertical + normal
        leftArrow.querySelector('eui-icon').name = 'arrow-down';
        rightArrow.querySelector('eui-icon').name = 'arrow-up';
      } else {
        // vertical + reverse
        leftArrow.querySelector('eui-icon').name = 'arrow-up';
        rightArrow.querySelector('eui-icon').name = 'arrow-down';
      }
    } else {
      // default: horizontal + normal
      leftArrow.querySelector('eui-icon').name = 'arrow-left';
      rightArrow.querySelector('eui-icon').name = 'arrow-right';
    }
  };

  handleEvent(event) {
    // Deprecated: 'pageIndexChange' event should be removed in the next release
    if (
      event.type === 'pageIndexChange' ||
      event.type === 'eui-table:page-index-change'
    ) {
      const evState = event.detail.state;
      this.currentPage =
        evState.currentPage !== this.currentPage
          ? evState.currentPage
          : this.currentPage;
      this.numPages =
        evState.numPages !== this.numPages ? evState.numPages : this.numPages;
      this.numEntries =
        evState.numEntries !== this.numEntries
          ? evState.numEntries
          : this.numEntries;
    }
  }

  /**
   * Lifecycle callback triggered when props have changed
   *
   * @function didChangeProps
   * @param {Map} changedProps - previous values of the changed props
   */
  didChangeProps(changedProps) {
    if (this.edsPagination) {
      let shouldUpdate = false;
      if (changedProps.has('currentPage')) {
        if (
          changedProps.get('currentPage') ===
          this.edsPagination.state.currentPage
        ) {
          this.edsPagination.state.currentPage = this.currentPage;
          shouldUpdate = true;
        } else {
          this.currentPage = this.edsPagination.state.currentPage;
        }
      }
      if (
        this.numPages !== this.edsPagination.state.numPages ||
        this.numEntries !== this.edsPagination.state.numEntries
      ) {
        this.edsPagination.state.numPages = this.numPages;
        this.edsPagination.state.numEntries = this.numEntries;
        shouldUpdate = true;
      }
      if (shouldUpdate) {
        this.edsPagination.triggerChange();
      }
    }
  }

  /**
   * Lifecycle callback triggered after component is rendered
   *
   * @function didRender
   * @param {Map} changedProps - changed props and their previous values
   */
  didRender(changedProps) {
    if (!this.edsPagination) {
      const paginationGroupElement =
        this.shadowRoot.querySelector('.pagination-group');
      this.edsPagination = new EDSPagination(paginationGroupElement);
      this.edsPagination.state.currentPage = this.currentPage;
      this.edsPagination.state.numEntries = this.numEntries;
      this.edsPagination.init(this.numPages);
    }

    if (
      changedProps.has('compOrientation') ||
      changedProps.has('compDirection') ||
      this.compOrientation === 'vertical'
    ) {
      this._setArrows();
    }
  }

  /**
   * Render the Pagination component. This function is called each time a
   * prop changes.
   */
  render() {
    // Deprecated: 'pageIndexChange' event should be removed in the next release
    return $`
      <div
        @pageIndexChange=${this}
        @eui-table:page-index-change=${this}
        class="pagination-group ${this.compOrientation}"
      >
        <ul class="pagination ${this.compDirection}"></ul>
      </div>
    `;
  }
}

/**
 * @property {Number} currentPage - position of the current Page
 * @property {Number} numPages - number of pages
 * @property {Number} numEntries - number of entries
 * @property {String} compOrientation - sets the orientation of component (horizontal / vertical)
 * @property {String} compDirection - sets the mode of component (reverse / normal)
 */
definition('eui-pagination', {
  style: style$9,
  props: {
    currentPage: { attribute: true, type: Number, default: 1 },
    numEntries: { attribute: true, type: Number, default: 1 },
    numPages: { attribute: true, type: Number, default: 1 },
    compOrientation: { attribute: true, type: String, default: 'horizontal' },
    compDirection: { attribute: true, type: String, default: 'normal' },
  },
})(Pagination);

export { Setting, Table };
