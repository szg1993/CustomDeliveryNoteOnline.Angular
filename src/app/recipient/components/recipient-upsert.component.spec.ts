import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientUpsertComponent } from './recipient-upsert.component';

describe('RecipientUpsertComponent', () => {
  let component: RecipientUpsertComponent;
  let fixture: ComponentFixture<RecipientUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
