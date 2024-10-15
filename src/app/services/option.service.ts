import { Injectable } from '@angular/core';
import { OPTIONS, Option } from '../options.model';

@Injectable({
  providedIn: 'root',
})
export class OptionService {
  options: Option[] = OPTIONS;
  selectedOptionId: string | undefined;

  allOptions() {
    return this.options;
  }
  selectedOption() {
    return this.options.find((option) => option.id === this.selectedOptionId);
  }
  updateSelectedOption(optionId: string) {
    this.selectedOptionId = optionId;
  }
}
