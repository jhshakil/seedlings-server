import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OrderServices } from './order.service';

const createOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.createOrderIntoDB(req.body);

  sendResponse(res, {
    message: 'Order Create SUccessfully',
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
};
