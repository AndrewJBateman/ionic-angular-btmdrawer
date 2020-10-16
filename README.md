# :zap: Ionic Angular Audio Reproduction

* App to open a bottom drawer using gestures. This is another great tutorial from [Simon Grimm 'How to Create an Ionic Bottom Drawer with Gestures'](https://www.youtube.com/watch?v=xl4S8FM8Wcc&t=0s).

## :page_facing_up: Table of contents

* [:zap: Ionic Angular Audio Reproduction](#zap-ionic-angular-audio-reproduction)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-do list](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Ion-button and gestures used to open or close a drawer with text

## :camera: Screenshots

![screenshot](./img/drawer.png)

## :signal_strength: Technologies

* [Ionic v5](https://ionicframework.com/)
* [Ionic/angular v5](https://ionicframework.com/)
* [Angular v10](https://angular.io/)

## :floppy_disk: Setup

* To start the server on _localhost://8100_ type: 'ionic serve'

## :computer: Code Examples

* extract from `drawer.component.ts` to gently open or close the drawer when html button is toggled

```typescript
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
```

## :cool: Features

* scss makes drawer open and close gently

## :clipboard: Status & To-do list

* Status: Working. Toggle button Displays/removes drawer
* To-do: Button text can be linked to drawer status so it says 'open drawer' when drawer closed and 'close drawer' when drawer open. Other scss effects could be added to make the drawer opening/closing more fun.

## :clap: Inspiration

* [Simon Grimm 'How to Create an Ionic Bottom Drawer with Gestures'](https://www.youtube.com/watch?v=xl4S8FM8Wcc&t=0s).

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)