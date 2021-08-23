export interface IRecipient {
    id: number;
    name: string;
    country: string;
    zipCode: string;
    city: string;
    address: string;
    isOutlander: boolean;
    createdDate: Date;
}