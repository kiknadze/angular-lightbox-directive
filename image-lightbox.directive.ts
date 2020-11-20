import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
    
@Directive({
    selector: '[lightBox]'
})
export class LightBoxDirective {
    lightBox: HTMLElement;

    constructor(private _elementRef: ElementRef, 
                private renderer: Renderer2) {
    }

    @HostListener('document:click', ['$event', '$event.target'])
    public onClick(event: MouseEvent, imageElement: HTMLImageElement): void {
        if (!imageElement) {
            return;
        }

        const clickedInside: boolean = this._elementRef.nativeElement.contains(imageElement);

        if (clickedInside) {
            return this.createLightBox(imageElement.src);
        }

        if (this.lightBox) {
            this.renderer.removeChild(document.body, this.lightBox);
        }
    }

    createLightBox(url: string) {
        this.lightBox = this.renderer.createElement('div');
        this.renderer.addClass(this.lightBox, 'image-lightbox');

        const imageElement: HTMLImageElement = this.renderer.createElement('img');
        this.renderer.addClass(imageElement, 'image-lightbox-img');
        imageElement.src = url;
    
        this.renderer.appendChild(
            this.lightBox,
            imageElement
        );
    
        this.renderer.appendChild(document.body, this.lightBox);
    }
}
