export interface IRecipientUpsert
{
    code: string | null;
    name: string | null;
    country: string | null;
    zip: number | null;
    city: string | null;
    address: string | null;
    isOutlander: boolean;
}