import { IOrderRepository } from "../domain/interfaces/order.interface";
import { Order } from "../domain/order";

export class OrderService {
    private orderRepository: IOrderRepository;

    constructor(orderRepository: IOrderRepository) {
        this.orderRepository = orderRepository;
    }

    async save(productId: number, total: number): Promise<Order> {
        const order: Order = new Order(productId, total);
        return await this.orderRepository.save(order);
    }

    async findById(id: number): Promise<Order> {
        return await this.orderRepository.findById(id);
    }

    async findAll(): Promise<Order[]> {
        return await this.orderRepository.findAll();
    }

    async delete(id: number): Promise<boolean> {
        return await this.orderRepository.delete(id);
    }

    async update(order: Order): Promise<Order> {
        return await this.orderRepository.update(order);
    }
}