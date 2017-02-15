import { Renderer } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { IImageView, IImageCropView } from '../../model';
import { IImageCropperSetting } from '../image-cropper/image-cropper.component';
export declare class InputImageCrop implements ControlValueAccessor {
    private sanitizer;
    private modal;
    private renderer;
    settings: IImageCropperSetting;
    recropable: boolean;
    modalTitle: string;
    buttonSaveCaption: string;
    buttonCloseCaption: string;
    cropperOptions: any;
    private onChange;
    private onTouched;
    private croppedUrl;
    private croppedRelativeUrl;
    private value;
    private origin;
    private fileName;
    private cropbox;
    private containerRef;
    constructor(sanitizer: DomSanitizer, modal: Modal, renderer: Renderer);
    writeValue(value?: IImageView | IImageCropView): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    openCropperWindow(input: HTMLInputElement): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    remove(ev: Event): void;
    editImage(evnt: Event): void;
    readonly isEmpty: boolean;
    private openModal(imageUrl);
    private updateValue(result);
    private transform(result);
}
