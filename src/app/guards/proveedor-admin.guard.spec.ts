import { TestBed } from '@angular/core/testing';

import { ProveedorAdminGuard } from './proveedor-admin.guard';

describe('ProveedorAdminGuard', () => {
  let guard: ProveedorAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProveedorAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
