import {SelectorComponent} from '@core/SelectorComponent';

export class Select extends SelectorComponent {
    static className = 'selector__select';

    constructor($root) {
        super($root, {
            name: 'Select',
            listeners: ['change']
        });
    }

    toHTML() {
        return '<h1>select</h1>';
    }

    onChange(event) {
        console.log('event.target.value', event.target.value);
    }
}
