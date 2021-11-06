import { IRecipient } from "src/app/recipient/models/recipient";

export interface IRecipientListResponse{
    $id: number;
    $values: IRecipient[];
}