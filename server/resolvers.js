module.exports = {
  Query: {
    deal: async (parent, { id }, context, info) => {
      return await getDealById(id);
    }
  },
  Deal: {
    valueObject: (parent) => ({
      number: parent.number_value,
      currency: parent.money_value
    })
  },
  DealValue: {
    combined: (parent) => `${parent.currency}${parent.number}`
  }
};

async function getDealById(id) {
  return {
    id,
    title: 'Our awesome deal',
    number_value: 12,
    money_value: '$'
  };
}
