const { Contact } = require('../../models/');

const getContactsList = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find({ owner: _id }, '', { skip, limit: +limit }).populate(
    'owner',
    '_id name email'
  );
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = { getContactsList };
