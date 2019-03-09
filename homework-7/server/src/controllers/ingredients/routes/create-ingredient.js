const Ingredient = require("../../../models/schemas/ingredient");
const { sendCreateSuccess, sendError } = require("../../../servises/send");

const createIngredient = (req, res) => {
  const ingredient = req.body;

  const ingredientData = {
    ...ingredient
  };

  const newIngredient = new Ingredient(ingredientData);

  return newIngredient
    .save()
    .then(newIngredient => sendCreateSuccess(res, newIngredient, "ingredient"))
    .catch(error => sendError(res, error));
};

module.exports = createIngredient;
