import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailItemComponent } from './detail-item.component';

describe('DetailItemComponent', () => {
  let component: DetailItemComponent;
  let fixture: ComponentFixture<DetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
