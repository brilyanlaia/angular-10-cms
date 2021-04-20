import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberComponent } from './member.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('MemberComponent', () => {
  let component: MemberComponent;
  let fixture: ComponentFixture<MemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemberComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
