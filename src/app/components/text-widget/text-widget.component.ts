import { Component, Input } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { NgModel } from '@angular/forms';
import { theme } from '@cloudinary/url-gen/actions/effect';

@Component({
  selector: 'app-text-widget',
  standalone: true,
  imports: [QuillModule],
  templateUrl: './text-widget.component.html',
  styleUrl: './text-widget.component.scss',
})
export class TextWidgetComponent {
  @Input() placeholder: string = '';
  
  editorContent: string = ''; // Bindable property to store editor content

  changeContent(event: any) {
    this.editorContent = event.html; // event.html contains the HTML content
  }

  editorConfig = {
      theme: 'snow',
      toolbar: [
        ['bold', 'italic', 'underline'], // toggled buttons
        ['blockquote',],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],

        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        [{ direction: 'rtl' }], // text direction

        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ['clean'], // remove formatting button
      ],
    
  };
}
