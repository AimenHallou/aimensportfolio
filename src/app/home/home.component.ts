import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy } from '@angular/core';
import particlesJS from 'particlesjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      particlesJS(this.el.nativeElement.querySelector('.hero-section'), {
        particles: {
          color: '#FFD700',
          shape: 'circle',
          opacity: 0.7,
          size: 3.5,
          size_random: true,
          nb: 150,
          line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#FFD700',
            opacity: 0.8,
            width: 1,
            condensed_mode: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          },
          anim: {
            enable: true,
            speed: 1
          }
        },
        interactivity: {
          enable: true,
          mouse: {
            distance: 250
          },
          detect_on: 'canvas',
          mode: 'grab',
          line_linked: {
            opacity: 0.5
          },
          events: {
            onclick: {
              push_particles: {
                enable: true,
                nb: 4
              }
            }
          }
        },
        retina_detect: true
      });
    });
  }

  ngOnDestroy() {
    particlesJS.pJSDom = [];
  }
}
