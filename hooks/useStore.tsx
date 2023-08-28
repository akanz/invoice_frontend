import { create } from "zustand";
import { IStatusType } from "../types/interface";

export type State = {
  sideModal: boolean;
  status: IStatusType;
  token: string | null;
  user: any;
  invoices: any[];
};

export type Action = {
  toggleSideModal: () => void;
  setStatus: (status: State["status"]) => void;
  updateToken: (newToken: string) => void;
  updateUserDetails: (data: any) => void;
  setInvoices: (data: any[]) => void;
};
export const useStore = create<State & Action>((set) => ({
  sideModal: false,
  toggleSideModal: () => set((state) => ({ sideModal: !state.sideModal })),
  status: "pending",
  setStatus: (newStatus) => set(() => ({ status: newStatus })),
  token: null,
  updateToken: (newToken: string) => set(() => ({ token: newToken })),
  user: null,
  updateUserDetails: (data: any) => set(() => ({ user: data })),
  invoices: [],
  setInvoices: (data: any[]) => set(() => ({ invoices: data })),
}));
