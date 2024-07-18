import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelAluguelComponent } from './imovel-aluguel.component';

describe('ImovelAluguelComponent', () => {
  let component: ImovelAluguelComponent;
  let fixture: ComponentFixture<ImovelAluguelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImovelAluguelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImovelAluguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
