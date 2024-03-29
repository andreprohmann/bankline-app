import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoNewComponent } from './movimentacao-new.component';

describe('MovimentacaoNewComponent', () => {
  let component: MovimentacaoNewComponent;
  let fixture: ComponentFixture<MovimentacaoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimentacaoNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovimentacaoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
