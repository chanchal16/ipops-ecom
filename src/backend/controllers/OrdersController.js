import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid"
/**
 * All the routes related to orders are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's orders.
 * send GET Request at /api/user/order
 * */
export const getOrderProductHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userOrders = schema.users.findBy({ _id: userId }).orders;
  return new Response(200, {}, { orders: userOrders });
};

/**
 * This handler handles adding items to user's orders.
 * send POST Request at /api/user/oders
 * body contains {orders}
 * */
export const addOrderProductHandler = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
      if (!userId) {
        new Response(
          404,
          {},
          {
            errors: ["The email you entered is not Registered. Not Found error"],
          }
        );
      }
      const userOrders = schema.users.findBy({ _id: userId }).orders;
      const { order } = JSON.parse(request.requestBody);
      userOrders.push({ 
        ...order,
        order_id:uuid(),
        createdAt: formatDate(),
        updatedAt: formatDate(),
      });
      this.db.users.update({ _id: userId }, { orders: userOrders });
      return new Response(201, {}, { orders: userOrders });
    } catch (error) {
      return new Response(
        500,
        {},
        {
          error,
        }
      );
    }
};