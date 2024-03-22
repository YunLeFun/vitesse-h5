// https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-api#add-custom-events
// if you want to use clarity, you need to add the following script to your index.html
// <script type="text/javascript">
//   (function(c,l,a,r,i,t,y){
//       c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
//       t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
//       y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
//   })(window, document, "clarity", "script", "YOUR_ID");
// </script>
//
// Replace YOUR_ID with your Clarity ID
// https://clarity.microsoft.com/projects

/**
 * @see https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-api#add-custom-events
 */
export function addCustomEvent(eventName: string) {
  if (window.clarity)
    window.clarity('event', eventName)
}

/**
 * @see https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-api#add-custom-tags
 */
export function addCustomTag(key: string, value: string | string[]) {
  if (window.clarity)
    window.clarity('set', key, value)
}
