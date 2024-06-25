import { Component, OnInit } from '@angular/core';

declare var cloudinary: any;

@Component({
  standalone: true,
  selector: 'app-upload-widget',
  templateUrl: './upload-widget.component.html',
  styleUrls: ['./upload-widget.component.scss']
})
export class UploadWidgetComponent implements OnInit {
  cloudName = "djdceeamd"; // replace with your own cloud name
  uploadPreset = "cooking"; // replace with your own upload preset
  myWidget: any;
  uploadedImages: string[] = []; 

  removeImage(index: number) {
    this.uploadedImages.splice(index, 1);
    //this.fileNames.splice(index, 1);
  }
  ngOnInit() {
    this.myWidget = cloudinary.createUploadWidget(
      {
        cloudName: this.cloudName,
        uploadPreset: this.uploadPreset,
        multiple: true, 
        maxImageFileSize: 2000000,
        
        
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          this.uploadedImages.push(result.info.secure_url); 
        }
      }
    );
  }

  openWidget() {
    this.myWidget.open(); 
  }
}
