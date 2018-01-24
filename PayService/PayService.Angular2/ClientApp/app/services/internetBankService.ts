import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { InternetBankData } from "../models/InternetBankData";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InternetBankService {
    private url = "/api/internet";
    private readonly options: RequestOptions;

    constructor(private readonly http: Http) {
        const headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        this.options = new RequestOptions({ headers: headers });
    }

    createRequest(request: InternetBankData) {
        return this.http.post(this.url, request, this.options)
            .toPromise();
    }
}