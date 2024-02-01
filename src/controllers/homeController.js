const getHomepage = async (req, res) => {
  try {
    const data = await branch.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

//  res.render('home.ejs', {listUser: results})
// query database

module.exports = {
  getHomepage,
};
