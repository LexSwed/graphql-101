const deals = [
  {
    id: '1',
    title: 'Name 1'
  },
  {
    id: '2',
    title: 'Name 2'
  },
  {
    id: '3',
    title: 'Name 3'
  }
];

module.exports = {
  Query: {
    deal: async (parent, { id }, context, info) => {
      return deals.find((deal) => deal.id === id);
    }
  },
  Pipeline: {
    deals: (parent) => deals
  },
  User: {
    name: () => 'Lembit'
  }
};
