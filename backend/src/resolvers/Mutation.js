const mutations = {
  async createItem(parent, args, ctx, info) {
    // later need to check if user is logged in
    const item = await ctx.db.mutation.createItem(
      {
        data: { ...args }
      },
      info
    );
    return item;
  },
  updateItem(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    const item = await ctx.db.query.item({ where }, "{id title}");
    // later check if user owns item
    return ctx.db.mutation.deleteItem({ where }, info);
  }
};

module.exports = mutations;
