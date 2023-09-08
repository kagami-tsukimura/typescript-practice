//npm install --save-dev @types/lodash
import * as _ from 'lodash';

interface Profile {
  id: number;
  name: string;
}

const profiles: Profile[] = [
  { id: 1, name: '月村' },
  { id: 2, name: '幸村' },
  { id: 3, name: '鏡' },
];
console.log(_.sample(profiles));
