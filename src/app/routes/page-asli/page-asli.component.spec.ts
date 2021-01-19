import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAsliComponent } from './page-asli.component';

describe('PageAsliComponent', () => {
  let component: PageAsliComponent;
  let fixture: ComponentFixture<PageAsliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAsliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAsliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
