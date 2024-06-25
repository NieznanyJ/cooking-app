import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';
import { DiffucultyFilterComponent } from 'src/app/components/filter/diffuculty-filter/diffuculty-filter.component';
import { CategoryFilterComponent } from 'src/app/components/filter/category-filter/category-filter.component';
import { TimeFilterComponent } from 'src/app/components/filter/time-filter/time-filter.component';
import { UploadWidgetComponent } from '../upload-widget/upload-widget.component';
import { TextWidgetComponent } from '../text-widget/text-widget.component';

@Component({
  standalone: true,
  selector: 'app-create-recepie-form',
  templateUrl: './create-recepie-form.component.html',
  styleUrls: ['./create-recepie-form.component.scss'],
  imports: [
    ReactiveFormsModule,
    FilterComponent,
    DiffucultyFilterComponent,
    CategoryFilterComponent,
    TimeFilterComponent,
    UploadWidgetComponent,
    TextWidgetComponent
  ],
})
export class CreateRecepieFormComponent {
  recipeForm: FormGroup;
  fileNames: string[] = [];
  imagePreviews: { url: string; file: File | null }[] = [];
  selectedCategories: { name: string; icon: string }[] = [];
  difficulty: { name: string; icon: string } = { name: '', icon: '' };
  time: { name: string; icon: string } = { name: '', icon: '' };

  constructor(private fb: FormBuilder) {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      images: [null],
      imageUrls: ['', Validators.pattern('https?://.+')],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required],
      category: [''],
      difficulty: [''],
      time: [''],
    });
  }

  

  onSubmit() {
    if (this.recipeForm.valid) {
      console.log(this.recipeForm.value);
      // Handle form submission, e.g., send the data to a backend server
    }
  }

  onCategorySelected(event: { name: string; icon: string }): void {
    const { name, icon } = event;
    const index = this.selectedCategories.findIndex((cat) => cat.name === name);

    if (index === -1) {
      this.selectedCategories.push({ name, icon });
    } else {
      this.selectedCategories.splice(index, 1);
    }
  }

  onDifficultySelected(event: { name: string; icon: string }): void {
    this.difficulty = event;
  }

  onTimeSelected(event: { name: string; icon: string }): void {
    this.time = event;
  }
}
