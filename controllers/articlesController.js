// controllers/articlesController.js
// Контролер відповідає за логіку обробки запитів, пов'язаних зі статтями

const getArticles = (req, res) => {
  res.send('Get articles route');
};

const postArticles = (req, res) => {
  res.send('Post articles route');
};

const getArticleById = (req, res) => {
  const { articleId } = req.params;
  res.send(`Get article by Id route: ${articleId}`);
};

const putArticleById = (req, res) => {
  const { articleId } = req.params;
  res.send(`Put article by Id route: ${articleId}`);
};

const deleteArticleById = (req, res) => {
  const { articleId } = req.params;
  res.send(`Delete article by Id route: ${articleId}`);
};

module.exports = {
  getArticles,
  postArticles,
  getArticleById,
  putArticleById,
  deleteArticleById,
};
