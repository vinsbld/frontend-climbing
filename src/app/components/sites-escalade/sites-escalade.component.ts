import { Component, OnInit } from '@angular/core';
import {SitesEscaladeService} from '../../services/sites-escalade.service';
import {SiteEscalade} from '../../model/site-escalade.model';
import {Observable, of} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {AppDataState, DataStateEnum} from '../../state/site-escalade.state';

@Component({
  selector: 'app-sites-escalade',
  templateUrl: './sites-escalade.component.html',
  styleUrls: ['./sites-escalade.component.css']
})
export class SitesEscaladeComponent implements OnInit {
  sitesEscalade$:Observable<AppDataState<SiteEscalade[]>> |null=null;

  constructor(private sitesEscaladeService:SitesEscaladeService) { }

  ngOnInit(): void {
  }

  onGetAllSitesEscalade() {
    this.sitesEscalade$=
      this.sitesEscaladeService.getAllSitesEscalade().
      pipe(
        map(
          (data)=>
            ({dataState:DataStateEnum.LOADED, data:data} as AppDataState<SiteEscalade[]>)),
      startWith({dataState:DataStateEnum.LOADING} as AppDataState<SiteEscalade[]>),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

}
