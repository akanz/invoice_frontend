import { create } from "zustand";
import { IStatusType } from "../types/interface";

export type State = {
  sideModal: boolean;
  status: IStatusType;
};

export type Action = {
  toggleSideModal: (sideModal: State["sideModal"]) => void;
  setStatus: (status: State["status"]) => void;
};
export const useStore = create<State & Action>((set) => ({
  sideModal: false,
  toggleSideModal: () => set((state) => ({ sideModal: !state.sideModal })),
  status: "pending",
  setStatus: (newStatus) => set(() => ({ status: newStatus })),
}));
