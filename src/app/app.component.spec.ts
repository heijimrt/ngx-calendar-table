import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxCalendarTableModule } from '../../projects/ngx-calendar-table/src/lib/ngx-calendar-table.module';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ NgxCalendarTableModule ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
