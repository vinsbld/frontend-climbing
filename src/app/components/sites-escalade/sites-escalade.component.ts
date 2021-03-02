import { Component, OnInit } from '@angular/core';
import {SitesEscaladeService} from '../../services/sites-escalade.service';
import {SiteEscalade} from '../../model/site-escalade.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sites-escalade',
  templateUrl: './sites-escalade.component.html',
  styleUrls: ['./sites-escalade.component.css']
})
export class SitesEscaladeComponent implements OnInit {

  sitesEscalade$:Observable<SiteEscalade[]>|null=null;

  constructor(private sitesEscaladeService:SitesEscaladeService) { }

  ngOnInit(): void {
  }

  onGetAllSitesEscalade() {
    this.sitesEscalade$=this.sitesEscaladeService.getAllSitesEscalade();
  }

}
