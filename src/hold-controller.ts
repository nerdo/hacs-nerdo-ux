import type { ReactiveController, ReactiveControllerHost } from 'lit';

export interface HoldOptions {
  /** How long the pointer must stay down, in milliseconds. */
  duration: () => number;
  /** How far the pointer may move, in pixels, before the hold is cancelled. */
  tolerance: () => number;
  /** Runs once when a hold completes. */
  onComplete: () => void;
}

/**
 * Press-and-hold detection for a Lit element. Bind `pointerDown`, `pointerMove`
 * and `pointerUp` to the element's pointer events; `holding` is true while a
 * hold is in progress, and the host re-renders when it changes.
 */
export class HoldController implements ReactiveController {
  public holding = false;

  private timer?: ReturnType<typeof setTimeout>;
  private startX = 0;
  private startY = 0;

  constructor(
    private readonly host: ReactiveControllerHost,
    private readonly options: HoldOptions,
  ) {
    host.addController(this);
  }

  public readonly pointerDown = (event: PointerEvent): void => {
    event.preventDefault();
    if (this.holding) return;
    this.startX = event.clientX;
    this.startY = event.clientY;
    (event.target as Element).setPointerCapture?.(event.pointerId);
    this.setHolding(true);
    this.timer = setTimeout(() => {
      this.stop();
      this.options.onComplete();
    }, this.options.duration());
  };

  public readonly pointerMove = (event: PointerEvent): void => {
    if (!this.holding) return;
    const distance = Math.hypot(event.clientX - this.startX, event.clientY - this.startY);
    if (distance > this.options.tolerance()) this.stop();
  };

  public readonly pointerUp = (event?: PointerEvent): void => {
    if (event) {
      try {
        (event.target as Element).releasePointerCapture?.(event.pointerId);
      } catch {
        // The capture was already released.
      }
    }
    this.stop();
  };

  /** Cancels a hold in progress without completing it. */
  public cancel(): void {
    this.stop();
  }

  public hostDisconnected(): void {
    this.stop();
  }

  private stop(): void {
    if (this.timer !== undefined) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
    this.setHolding(false);
  }

  private setHolding(holding: boolean): void {
    if (this.holding === holding) return;
    this.holding = holding;
    this.host.requestUpdate();
  }
}
