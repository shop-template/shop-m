import {
  ConfigProvider,
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
  Notify
} from 'vant'

export default function (app) {
  app
    .use(ConfigProvider)
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
}
