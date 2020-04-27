import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DumbooPage } from './dumboo.page';

describe('DumbooPage', () => {
  let component: DumbooPage;
  let fixture: ComponentFixture<DumbooPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbooPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DumbooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
