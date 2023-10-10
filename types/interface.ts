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

export const options: optionProps[] = [
    {
        name: "Net 1 Day",
        day: 1,
    },
    {
        name: "Net 7 Days",
        day: 7,
    },
    {
        name: "Net 14 Days",
        day: 14,
    },
    {
        name: "Net 30 Days",
        day: 39,
    },
];