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
  CheckboxGroup,
  Toast,
  Uploader,
  ImagePreview,
  AddressList,
  AddressEdit,
  Area
} from 'vant'

Toast.setDefaultOptions('loading', { forbidClick: true, duration: 0 })
Toast.allowMultiple()

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
    .use(Toast)
    .use(Uploader)
    .use(ImagePreview)
    .use(AddressList)
    .use(AddressEdit)
    .use(Area)
}
