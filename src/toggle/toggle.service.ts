import { Injectable } from '@nestjs/common';

@Injectable()
export class ToggleService {
  private isBlack = false;

  toggleColor(): string {
    this.isBlack = !this.isBlack;
    return this.isBlack ? 'black' : 'white';
  }

  getColor(): string {
    return this.isBlack ? 'black' : 'white';
  }
}
