import {Selector} from '@/components/Selector/Selector';
import {Select} from '@/components/Select/Select';
import './index.scss';

function setValue(selectedId) {
    return selectedId;
}

const selector = new Selector('#app', {
    components: [Select],
    placeholder: 'Choose the value!',
    selectedId: setValue('1'),
    data: [
        {id: '1', value: 'Go'},
        {id: '2', value: 'Swim'},
        {id: '3', value: 'Fly'},
        {id: '4', value: 'Dream'},
    ],
    getValue(item) {
        console.log('The value is:', item);
    }
});

selector.render();

window.CS = selector;
