import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { merge, Observable, throwError } from "rxjs";
import { catchError, concatAll, map, tap } from 'rxjs/operators';
import { IRecipient, Recipient } from "../models/recipient";
import { IRecipientListResponse } from "src/app/shared/response/recipient-list-response";
import { RecipientListComponent } from "../components/recipient-list.component";


@Injectable({
    providedIn: 'root'
})

export class RecipientService{

    private recipientUrl = "https://localhost:44389/api/v1/recipients/";

    constructor(private http: HttpClient){}

       getAllRecipients(): Observable<IRecipient[]>{
           return this.http.get<IRecipientListResponse>(this.recipientUrl).pipe(
               map(x => x.$values)
           );
       }

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
}
