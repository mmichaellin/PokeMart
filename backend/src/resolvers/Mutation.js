const mutations = {
  async createItem(parent, args, ctx, info){
    // later need to check if user is logged in
    const item = await ctx.db.mutation.createItem({
      data: {...args}
    }, info)
    return item
  }
};

module.exports = mutations;
