export interface IRecipient{
    id: number;
    code: string;
    name: string;
    country: string;
    zip: number;
    city: string;
    address: string;
    isOutlander: boolean;
    createdDate: Date;
}

export class Recipient implements IRecipient{
    id: number;
    code: string;
    name: string;
    country: string;
    zip: number;
    city: string;
    address: string;
    isOutlander: boolean;
    createdDate: Date;

    constructor(dto: IRecipient) {
        Object.assign(this, dto);       
    }
}