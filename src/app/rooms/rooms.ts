export interface Room{
    id?: number;
    name?: string;
    type?: string;
}
export interface RoomList{
    roomtype: string;
    ameneties: string;
    price: number;
    photos: string;
    checkinTime:Date;
    chechoutTime:Date;
}