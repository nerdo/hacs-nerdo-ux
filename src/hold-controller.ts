import type { ReactiveController, ReactiveControllerHost } from 'lit';

export interface HoldOptions {
  /** How long the pointer must stay down, in milliseconds. */
  duration: () => number;
  /** How far the pointer may move, in pixels, before the hold is cancelled. */
  tolerance: () => number;
  /** Runs once when a hold completes. */
  onComplete: () => void;
  /** Runs when a hold ends before completing, with how far it got (0 to 1). */
  onCancel?: (progress: number) => void;
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
  private startedAt = 0;

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
    this.startedAt = performance.now();
    (event.target as Element).setPointerCapture?.(event.pointerId);
    this.setHolding(true);
    this.timer = setTimeout(() => {
      this.stop(false);
      this.options.onComplete();
    }, this.options.duration());
  };

  public readonly pointerMove = (event: PointerEvent): void => {
    if (!this.holding) return;
    const distance = Math.hypot(event.clientX - this.startX, event.clientY - this.startY);
    if (distance > this.options.tolerance()) this.stop(true);
  };

  public readonly pointerUp = (event?: PointerEvent): void => {
    if (event) {
      try {
        (event.target as Element).releasePointerCapture?.(event.pointerId);
      } catch {
        // The capture was already released.
      }
    }
    this.stop(true);
  };

  /** Cancels a hold in progress without completing it. */
  public cancel(): void {
    this.stop(true);
  }

  public hostDisconnected(): void {
    this.stop(true);
  }

  private stop(cancelled: boolean): void {
    const wasHolding = this.holding;
    if (this.timer !== undefined) {
      clearTimeout(this.timer);
      this.timer = undefined;
    }
    this.setHolding(false);
    if (cancelled && wasHolding) {
      const progress = (performance.now() - this.startedAt) / this.options.duration();
      this.options.onCancel?.(Math.min(Math.max(progress, 0), 1));
    }
  }

  private setHolding(holding: boolean): void {
    if (this.holding === holding) return;
    this.holding = holding;
    this.host.requestUpdate();
  }
}
