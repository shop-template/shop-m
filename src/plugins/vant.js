import {
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Empty,
  Image as VanImage,
  Lazyload,
  Icon,
  Cell,
  CellGroup,
  Dialog,
  Notify,
  Form,
  Field,
  Tab,
  Tabs,
  Checkbox,
  CheckboxGroup
} from 'vant'

export default function (app) {
  app
    .use(Button)
    .use(NavBar)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Empty)
    .use(VanImage)
    .use(Lazyload)
    .use(Icon)
    .use(Cell)
    .use(CellGroup)
    .use(Dialog)
    .use(Notify)
    .use(Form)
    .use(Field)
    .use(Tab)
    .use(Tabs)
    .use(Checkbox)
    .use(CheckboxGroup)
}
