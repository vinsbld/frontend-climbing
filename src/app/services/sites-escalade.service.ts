import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {SiteEscalade} from '../model/site-escalade.model';


@Injectable({providedIn:"root"})
export class SitesEscaladeService{

constructor(private http:HttpClient) {
}

 getAllSitesEscalade():Observable<SiteEscalade[]>{
  let host=environment.host;
  return this.http.get<SiteEscalade[]>(host+"/sites-escalade");
}
  getOfficielSitesEscalade():Observable<SiteEscalade[]>{
    let host=environment.host;
    return this.http.get<SiteEscalade[]>(host+"/sites-escalade?officiel=true");
  }

}
