import menus from './menus';

const order = {
  id: 'RECEIPT_ID',
  menu: menus,
  totalPrice: menus.reduce((acc, cur) => acc + cur.price, 0),
};

export default order;
