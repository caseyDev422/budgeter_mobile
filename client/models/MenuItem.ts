import { Menu } from "./enums/MenuTitles";

export interface MenuItem {
  title: string;
  containerStyle?: object;
  titleStyle?: object;
  onPress: () => void;
}