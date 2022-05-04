import {
  ConfigProvider,
  Button,
  NavBar,
  Tabbar,
  TabbarItem,
  Empty
} from 'vant'

export default function (app) {
  app
    .use(ConfigProvider)
    .use(Button)
    .use(NavBar)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Empty)
}
