import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slice } from '../models/slice';
import { Channel } from '../models/channel'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient ) { }

  
  getAllSlices():Observable<Slice>{
    const url = 'http://localhost:3000/slices';

    return this.httpClient.get<Slice>(url);
  }

  getSlice(id):Observable<Slice>{
    const url = 'http://localhost:3000/slices/:' + id;

    return this.httpClient.get<Slice>(url);
  }

  createSlice(sliceBody):Observable<Slice>{
    const url = 'http://localhost:3000/slices';
    return this.httpClient.post<Slice>(url, sliceBody);
  }
 
  updateSlice(sliceId, sliceBody):Observable<Slice>{
    const url = 'http://localhost:3000/slices';
    const x = url + sliceId
    return this.httpClient.put<Slice>(x, sliceBody);
  }


  deleteSlice(sliceId):Observable<Slice>{
    const url = 'http://localhost:3000/slices/';
    const x= url + sliceId
    return this.httpClient.delete<Slice>(x);
  }


  
  getAllChannels():Observable<Channel>{
    const url = 'http://localhost:3000/channels';

    return this.httpClient.get<Channel>(url);
  }

  getChannel(id):Observable<Channel>{
    const url = 'http://localhost:3000/channels/:' + id;

    return this.httpClient.get<Channel>(url);
  }

  createChannel(sliceBody):Observable<Channel>{
    const url = 'http://localhost:3000/channels';
    return this.httpClient.post<Channel>(url, sliceBody);
  }
 
  updateChannel(sliceId, sliceBody):Observable<Channel>{
    const url = 'http://localhost:3000/channels';
    const x = url + sliceId
    return this.httpClient.put<Channel>(x, sliceBody);
  }


  deleteChannel(sliceId):Observable<Channel>{
    const url = 'http://localhost:3000/channels/';
    const x= url + sliceId
    return this.httpClient.delete<Channel>(x);
  }

}
