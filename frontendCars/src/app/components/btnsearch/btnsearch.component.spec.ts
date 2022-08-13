import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsearchComponent } from './btnsearch.component';

describe('BtnsearchComponent', () => {
  let component: BtnsearchComponent;
  let fixture: ComponentFixture<BtnsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
