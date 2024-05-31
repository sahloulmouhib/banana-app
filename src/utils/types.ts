import { type ItemType } from 'react-native-dropdown-picker';

export interface DropDownItem<T = any>
  extends Pick<ItemType<T>, 'label' | 'value'> {}
