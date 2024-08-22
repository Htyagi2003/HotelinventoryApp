import { Component, OnInit } from '@angular/core';
import { Room ,RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName="Harsh's Hotel"
  totalRooms=10
  hideRooms=false
  rooms:Room={
    id:1,
    name: 'Room1',
    type:'Standard'
  };
roomsList:RoomList[]=[{
  roomtype: 'Standard',
  ameneties: 'Breakfast, WiFi, Spa',
  price: 250,
  photos: 'room1.jpg',
  checkinTime: new Date(),
  chechoutTime: new Date()},
  {roomtype: 'Deluxe',
  ameneties: 'Breakfast, WiFi, Spa, Private balcony',
  price: 350,
  photos: 'room2.jpg',
  checkinTime: new Date(),
  chechoutTime: new Date()},
  {
    roomtype: 'Suite',
    ameneties: 'Breakfast, WiFi, Spa, Private balcony, Gym, Pool',
    price: 500,
    photos: 'room3.jpg',
    checkinTime: new Date(),
    chechoutTime: new Date()
  }
  ,{
    roomtype: 'Villa',
    ameneties: 'Breakfast, WiFi, Spa, Private balcony, Gym, Pool, 2 private bathrooms',
    price: 800,
    photos: 'room4.jpg',
    checkinTime: new Date(),
    chechoutTime: new Date()
  },
  {
    roomtype: 'Luxury',
    ameneties: 'Breakfast, WiFi, Spa, Private balcony, Gym, Pool, 2 private bathrooms, 2 suites',
    price: 1200,
    photos: 'room5.jpg',
    checkinTime: new Date(),
    chechoutTime: new Date()
  },
  {
    roomtype: 'Premium',
    ameneties: 'Breakfast, WiFi, Spa, Private balcony, Gym, Pool, 2 private bathrooms, 2 suites, 2 villas',
    price: 1500,
    photos: 'room6.jpg',
    checkinTime: new Date(),
    chechoutTime: new Date()
  },
  {
    roomtype: 'Economy',
    ameneties: 'Breakfast, WiFi, Spa, Private balcony, Gym, Pool, 2 private bathrooms, 2 villas, 2 suites',
    price: 1000,
    photos: 'room7.jpg',
    checkinTime: new Date(),
    chechoutTime: new Date()
  },
  {
    roomtype: 'Standard',
    ameneties: 'Breakfast, WiFi, Spa',
    price: 250,
    photos: 'room8.jpg',
    checkinTime: new Date(),
    chechoutTime: new Date()}
  ]

constructor(){}
ngOnInit(): void {
    
}
toggle():void{
  this.hideRooms=!this.hideRooms
}
}
