import {SelectorComponent} from '@core/SelectorComponent';
import './select.scss';

export class Select extends SelectorComponent {
    static className = 'select';

    constructor($root, data = [], selectedId = null, getValue, setValue) {
        super($root, {
            name: 'Select',
            listeners: ['change', 'click']
        });

        this.root = $root;
        this.data = data;
        this.selectedId = selectedId;
        this.getValue = getValue;
    }

    toHTML(data = [], placeholder, selectedId) {
        let text = placeholder ?? 'Choose';

        const items = data.map(item => {
            let cls = '';
            if (item.id === selectedId) {
                text = item.value;
                cls = 'selected';
            }
            return `
                <li class="select__item ${cls}" data-id="${item.id}" data-type="item">${item.value}</li>
            `;
        });

        return `
                <div class="select__input" data-type="input">
                    <span data-type="value">${text}</span>
                    <div class="select__dropdown">
                        <ul class="select__list">
                            ${items.join('')}
                        </ul>
                    </div>
                </div>
        `;
    }

    get isOpen() {
        return this.root.$el.classList.contains('open');
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        // this.root.$el.id === id &&
        this.root.$el.classList.add('open');
    }

    close() {
        this.root.$el.classList.remove('open');
    }

    onClick(event) {
        const {type} = event.target.dataset;

        if (type === 'input') {
            this.toggle();
        } else if (type === 'item') {
            const id = event.target.dataset.id;
            this.onChange(id);
        }
    }

    get current() {
        return this.data.find(item => item.id === this.selectedId);
    }

    setValue(selectedId) {
        return this.selectedId = selectedId;
    }

    onChange(id) {
        this.selectedId = id;
        this.root.$el.querySelector('[data-type="value"]').textContent = this.current.value;
        this.root.$el.querySelectorAll('[data-type="item"]').forEach(el => {
            el.classList.remove('selected');
        });
        this.root.$el.querySelector(`[data-id="${id}"]`).classList.add('selected');
        this.getValue ? this.getValue(this.current?.value) : null;
        this.close();
    }
}
