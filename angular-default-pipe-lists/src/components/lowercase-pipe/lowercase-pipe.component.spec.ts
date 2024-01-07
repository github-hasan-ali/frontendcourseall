import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowercasePipeComponent } from './lowercase-pipe.component';

describe('LowercasePipeComponent', () => {
  let component: LowercasePipeComponent;
  let fixture: ComponentFixture<LowercasePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowercasePipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowercasePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
