import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Transaction } from "../models/Transaction"
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TransactionService {
    private url = "/api/transactions";
    private readonly options: RequestOptions;

    constructor(private readonly http: Http) {
        const headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        this.options = new RequestOptions({ headers: headers });
    }

    createTransaction(transaction: Transaction) {
        return this.http.post(this.url, transaction, this.options)
            .toPromise();
    }
}