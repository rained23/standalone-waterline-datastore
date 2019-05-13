export async function test(req, res) {
  const users = await req.models.user.find().populate('pets');

  return res.status(200).json(users);
}

export async function fail(req, res) {
  // Expecting datastore
  // https://sailsjs.com/documentation/reference/waterline-orm/models/get-datastore
  console.log(req.models.user.getDatastore('default'));
  const users = await req.models.user.find().populate('pets');

  return res.status(200).json(users);
}
