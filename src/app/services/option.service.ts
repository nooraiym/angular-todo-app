import { Injectable } from '@angular/core';
import { OPTIONS, Option } from '../options.model';

@Injectable({
  providedIn: 'root',
})
export class OptionService {
  private options: Option[] = OPTIONS;
  private selectedOptionId: string | undefined;

  allOptions() {
    return this.options;
  }
  selectedOptionID() {
    const option = this.options.find(
      (option) => option.id === this.selectedOptionId
    );
    return option?.id;
  }
  updateSelectedOption(optionId: string) {
    this.selectedOptionId = optionId;
  }
}
