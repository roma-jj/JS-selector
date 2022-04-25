import {Selector} from '@/components/Selector/Selector';
import {Select} from '@/components/Select/Select';

const selector = new Selector('#app', {
    components: [Select]
});

selector.render();
