import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from '../filter/filter.component';

@Component({
  standalone: true,
  selector: 'app-create-recepie-form',
  templateUrl: './create-recepie-form.component.html',
  styleUrls: ['./create-recepie-form.component.scss'],
  imports: [ReactiveFormsModule, FilterComponent],
})
export class CreateRecepieFormComponent {
  recipeForm: FormGroup;
  fileNames: string[] = [];
  imagePreviews: { url: string; file: File | null }[] = [];
  selectedCategories: { name: string, icon: string }[] = [];
  difficulty: { name: string, icon: string } = { name: '', icon: '' };
  time: { name: string, icon: string } = { name: '', icon: '' };

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

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.fileNames.push(file.name);

        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.imagePreviews.push({ url: e.target.result, file: file });
        };
        reader.readAsDataURL(file);
      }

      this.recipeForm.patchValue({
        images: files,
      });
    }
  }

  addImageUrl() {
    const url = this.recipeForm.get('imageUrls')?.value;
    if (url) {
      this.imagePreviews.push({ url: url, file: null });
      this.recipeForm.get('imageUrls')?.reset();
    }
  }

  removeImage(index: number) {
    this.imagePreviews.splice(index, 1);
    this.fileNames.splice(index, 1);
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      console.log(this.recipeForm.value);
      // Handle form submission, e.g., send the data to a backend server
    }
  }


  onCategorySelected(event: { name: string, icon: string }): void {
    const { name, icon } = event;
    const index = this.selectedCategories.findIndex(cat => cat.name === name);

    if (index === -1) {
      this.selectedCategories.push({ name, icon });
    } else {
      this.selectedCategories.splice(index, 1);
    }
  }

  onDifficultySelected(event: { name: string, icon: string }): void {
    this.difficulty = event;
  }

  onTimeSelected(event: { name: string, icon: string }): void {
    this.time = event;
  }

  removeCategory(category: { name: string, icon: string }): void {
    const index = this.selectedCategories.findIndex(cat => cat.name === category.name);
    if (index !== -1) {
      this.selectedCategories.splice(index, 1);
    }
  }
  
  clearDifficulty(): void {
    this.difficulty = {name: '', icon: ''};
  }
  
  clearTime(): void {
    this.time = {name: '', icon: ''};
  }

  
}
