import {$} from '@core/dom';

export class Selector {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
        this.placeholder = options.placeholder;
        this.data = options.data;
        this.selectedId = options.selectedId;
        this.getValue = options.getValue;
    }

    getRoot() {
        const $root = $.create('div', 'selector');
        this.components = this.components.map((Component, index) => {
            const $el = $.create('div', Component.className, index + 1);
            const component = new Component($el, this.data, this.selectedId, this.getValue);
            $el.html(component.toHTML(this.data, this.placeholder, this.selectedId));
            $root.append($el);
            return component;
        });
        return $root;
    }

    render() {
        this.$el.append(this.getRoot());
        this.components.forEach(component => component.init());
    }
}
