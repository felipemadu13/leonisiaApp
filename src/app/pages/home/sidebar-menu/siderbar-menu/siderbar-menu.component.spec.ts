import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderbarMenuComponent } from './siderbar-menu.component';

describe('SiderbarMenuComponent', () => {
  let component: SiderbarMenuComponent;
  let fixture: ComponentFixture<SiderbarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiderbarMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiderbarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
