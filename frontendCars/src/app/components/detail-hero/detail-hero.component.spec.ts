import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHeroComponent } from './detail-hero.component';

describe('DetailHeroComponent', () => {
  let component: DetailHeroComponent;
  let fixture: ComponentFixture<DetailHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
