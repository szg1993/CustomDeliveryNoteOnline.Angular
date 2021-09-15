import { IRecipient } from "src/app/recipient/models/recipient";

export interface IRecipientListResponse{
    $id: number;
    $values: IRecipient[];
}

// export class RecipientListResponse implements IRecipientListResponse{
//     id: number;
//     values: IRecipient[];

//     constructor(dto: IRecipient) {
//         Object.assign(this, dto);       
//     }

// }