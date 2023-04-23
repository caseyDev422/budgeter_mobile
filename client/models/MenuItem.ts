import { Menu } from "./enums/MenuTitles";

export interface MenuItem {
  title: Menu;
  containerStyle?: object;
  titleStyle?: object;
  onPress: () => void;
}