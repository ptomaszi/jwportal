import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromHome from '../reducers';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
    info$: Observable<string>;

    constructor(private store: Store<fromHome.State>) {
        this.info$ = store.pipe(select(fromHome.getHomeInfo));
    }

    ngOnInit() { }
}
