
import ReactGA from 'react-ga';

export function trackPageView() {
	ReactGA.pageview(window.location.pathname + window.location.search);
}