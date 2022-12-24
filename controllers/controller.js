// const createHttpError = require('http-errors')
// const { Category } = require('../database/models')
// const { endpointResponse } = require('../helpers/success')
// const { catchAsync } = require('../helpers/catchAsync')
// const { ErrorObject } = require('../helpers/error')

module.exports = {
  allCategories: catchAsync(async (req, res, next) => {
    try {
      const categories = await Category.findAll()
      endpointResponse({
        res,
        message: 'Categories retrieved successfully',
        body: categories,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving categories] - [Categories - GET]: ${error.message}`,
      )
      next(httpError)
    }
  }),

  getCategory: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        const httpError = createHttpError(404, 'category not found');
        return next(httpError);
      }
      endpointResponse({
        res,
        message: "Category retrieved successfully",
        body: category,
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving Category] - [Category - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),

  postCategory: catchAsync(async (req, res, next) => {
    const { name, description } = req.body;
    try {
      const [category, created] = await Category.findOrCreate({
        where: {
          name,
          description,
        },
      });
      endpointResponse({
        res,
        message: created
          ? "category successfully"
          : "category already exist",
        body: category,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving CategoryPost] - [CategoryPost - POST]: ${error.message}`
      );
      next(httpError);
    }
  }),

  updateCategory: catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        const httpError = createHttpError(404, "Category not found");
        return next(httpError);
      }
      await category.update({
        name,
        description,
      });
      await category.save();

      endpointResponse({
        res,
        message: "Category update succesfully",
        body: category,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving CategoryUpdate] - [Category - Patch]: ${error.message}`
      );
      next(httpError);
    }
  }),

  deleteCategory: catchAsync(async (req, res, next) => {
    const { id } = req.params;

    try {
      const category = await Category.findByPk(id);
      if (category) {
        await category.destroy({
          where: { id }
        });
        // await category.save();

        endpointResponse({
          res,
          message: "Category deleted successfully",
          body: category,
        });
      }
      const httpError = createHttpError(
        404,
        `[Error retrieving Category] - [Category - Del]: ${"Category not found"}`
      );
      next(httpError);
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving Category] - [Category - Del]: ${error.message}`
      );
      next(httpError);
    }
  })
}
