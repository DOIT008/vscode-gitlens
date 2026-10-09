import type { WalkthroughProgress } from '../../../../constants.walkthroughs.js';

/** Whether the "Try Kepler" banner should show for the given main-walkthrough progress.
 *
 * Custom build: always `false` — the Kepler (agentic AI product) promo banner is removed along
 * with every other AI-related UI surface in this build. The original gating (walkthrough progress,
 * onboarding opt-out, org AI policy) no longer applies.
 *
 * Lives here rather than in `kepler-banner.ts` so consumers keep an explicit side-effect import of the
 * component: a host that imported only a named export from the component module would still register
 * the element today, but silently stop the moment that import was refactored away. */
export function shouldShowKeplerBanner(_options: {
	progress: WalkthroughProgress | undefined;
	onboardingOptedOut: boolean | undefined;
	orgDisabledAi: boolean | undefined;
}): boolean {
	return false;
}
