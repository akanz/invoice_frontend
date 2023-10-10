import { instance } from "./axios";

export const createNewInvoice = async (newInvoice: any) => {
    return instance.post("/invoice", newInvoice);
}