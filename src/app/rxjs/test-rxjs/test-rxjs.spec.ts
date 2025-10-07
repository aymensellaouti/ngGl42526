import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRxjs } from './test-rxjs';

describe('TestRxjs', () => {
  let component: TestRxjs;
  let fixture: ComponentFixture<TestRxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRxjs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRxjs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
