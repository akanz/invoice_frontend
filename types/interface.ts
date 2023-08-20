export interface IStatusProps {
    status: IStatusType;
}

export type IStatusType = "pending" | "paid" | "draft" | "cancelled"

export interface IFormProps {
    type: "create" | "edit";
}
export interface optionProps {
    name: string;
    day: number;
}