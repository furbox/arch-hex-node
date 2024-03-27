import { Order } from "../order";

export interface IOrderRepository {
    save(order: Order): Promise<Order>;
    findById(id: number): Promise<Order>;
    findAll(): Promise<Order[]>;
    delete(id: number): Promise<boolean>;
    update(order: Order): Promise<Order>;
 }