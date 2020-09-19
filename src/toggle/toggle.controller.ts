import { Controller, Get, Post } from '@nestjs/common';
import { ToggleService } from './toggle.service';

@Controller('toggle')
export class ToggleController {
  constructor(private toggleService: ToggleService) {}

  @Post()
  toggleColor() {
    const color = this.toggleService.toggleColor();
    return { color };
  }

  @Get()
  getColor() {
    const color = this.toggleService.getColor();
    return { color };
  }
}
