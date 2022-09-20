import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const URL="http://35.164.160.147:8083/book"
// http://35.164.160.147:8083/book
const URLGET="https://u8bdum0loh.execute-api.us-west-2.amazonaws.com/Deploy-BookStore/book-store"
// http://35.164.160.147:8083/allBooks

const URLLOGIN="http://35.164.160.147:8088/login" 


@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  

  getBooks(){
    return this.http.get(URLGET)
  }

  searchBooks(authorName:any,publisher:any,category:any,price:any){
    return this.http.get("https://u8bdum0loh.execute-api.us-west-2.amazonaws.com/Deploy-BookStore/%7Bproxy+%7D"+authorName+'/'+publisher+'/'+category+'/'+price);
    // "http://35.164.160.147:8083/searchBy/"
  }
 
 createBook(books:{   title:string;
  category:string;
  image:string;
  price:number;
  publisher:string;
  active:boolean;
  content:string;
  email:string;
  authorName:string;
  

  }){
    return this.http.post(URL, books)

  }

  buyBook(id:number,readers:{ 
    readerEmail:string;
    readerName:string;
    cardNumber:number;
    cvv:number;
    id:number;
  }){

    return this.http.post(`http://35.164.160.147:8085/buy/${id}`, readers)
    // `http://35.164.160.147:8085/buy/${id}`
  }

  authorlogin(author:{ 
    email:string;
    password:string;
    
  
    }){
      return this.http.post(URLLOGIN, author)
  
    }

    retrieveAllByEmail(email:string){
      return this.http.get(`http://35.164.160.147:8083/getbookbyemail/${email}`)

    }
    getReadersBook(id:number){
      return this.http.get(`http://35.164.160.147:8085/getspecificbook/${id}`)

    }



updateBook(id:number, books:{   title:string;
  category:string;
  image:string;
  price:number;
  publisher:string;
  active:boolean;
  content:string;
  
  

  }){
  return this.http.put(`http://35.164.160.147:8083/update/${id}`,books)


}

deleteBook(id:number){
  return this.http.delete(`http://35.164.160.147:8083/book/${id}`);
}

createAuthor( authors:{  
  email:string;
  authorName:string;
  password:string;
  
 

  }      )      {
    return this.http.post("https://u8bdum0loh.execute-api.us-west-2.amazonaws.com/Deploy-BookStore/author-ms", authors)
    // http://35.164.160.147:8088/author

}




  constructor(public http:HttpClient) { }
}


