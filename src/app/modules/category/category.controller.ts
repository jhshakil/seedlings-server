import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CategoryServices } from './category.service';

const getAllCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.getALlCategory();

  sendResponse(res, {
    message: 'category retrieved Successfully',
    data: result,
  });
});

export const CategoryControllers = {
  getAllCategory,
};
