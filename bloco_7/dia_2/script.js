const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, 
// entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`);
}

customerInfo(order);

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o 
// total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
const orderModifier = (order) => {
  order.order.delivery.deliveryPerson = 'Luiz Silva';
  order.order.pizza.muzzarella = 'muzzarella';
  order.order.pizza.calabresa = 'calabresa';
  order.order.drinks.cocaZero = 'Coca-Cola Zero';
  order.payment.total = 50;
  console.log(`Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de ${order.order.pizza.muzzarella}, ${order.order.pizza.calabresa} e ${order.order.drinks.cocaZero} é R$${order.payment.total},00`);
}

orderModifier(order);
