import { Order } from "../domain/order";
import { IOrderRepository } from "../domain/interfaces/order.interface";

export class orderRepository implements IOrderRepository {
    public async save(order: Order): Promise<Order> {
        return await prisma
    }

    async findById(id: number): Promise<Order> {
        return await Order .findByPk(id);
    }

    async findAll(): Promise<Order[]> {
        return await Order.findAll();
    }

    async delete(id: number): Promise<boolean> {
        const order: Order = await Order.findByPk(id);
        await order.destroy();
        return true;
    }

    async update(order: Order): Promise<Order> {
        return await order.save();
    }

}