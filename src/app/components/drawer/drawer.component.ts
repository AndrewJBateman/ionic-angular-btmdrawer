import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	Output,
	ViewChild,
} from '@angular/core';
import { GestureController, Platform } from '@ionic/angular';

@Component({
	selector: 'app-drawer',
	templateUrl: './drawer.component.html',
	styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements AfterViewInit {
	@ViewChild('drawer', { read: ElementRef }) drawer: ElementRef;
	@Output('openStateChanged') openState: EventEmitter<
		boolean
	> = new EventEmitter();

	isOpen = false;
	openHeight = 0;

	constructor(private plt: Platform, private gestureCtrl: GestureController) {}

	async ngAfterViewInit() {
		const drawer = this.drawer.nativeElement;
		this.openHeight = (this.plt.height() / 100) * 70;

		const gesture = this.gestureCtrl.create({
			el: drawer,
			gestureName: 'swipe',
			direction: 'y',
			onMove: (ev) => {
				if (ev.deltaY < -this.openHeight) return;
				drawer.style.transform = `translateY(${ev.deltaY}px)`;
			},
			onEnd: (ev) => {
				if (ev.deltaY < -50 && !this.isOpen) {
					drawer.style.transition = '.4s ease-out';
					drawer.style.transform = `translateY(${-this.openHeight}px)`;
					this.openState.emit(true);
					this.isOpen = true;
				} else if (ev.deltaY > 50 && this.isOpen) {
					drawer.style.transition = '.4s ease-out';
					drawer.style.transform = '';
					this.openState.emit(false);
					this.isOpen = false;
				}
			},
		});
		gesture.enable(true);
	}

	// Function activated by html button to open drawer if closed and vice-versa
	// ViewChild 'drawer' used with the read: ElementRef metadata property above
	toggleDrawer() {
		const drawer = this.drawer.nativeElement;
		this.openState.emit(!this.isOpen);

		if (this.isOpen) {
			drawer.style.transition = '.4s ease-out';
			drawer.style.transform = '';
			this.isOpen = false;
		} else {
			drawer.style.transition = '.4s ease-in';
			drawer.style.transform = `translateY(${-this.openHeight}px)`;
			this.isOpen = true;
		}
	}
}
