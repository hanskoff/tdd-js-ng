angular.module('bs.tooltip', [])
  .directive('bsTooltip', function () {


    // simple tooltip template
    var tooltipTpl =
      '<div class="tooltip">' +
        '<div class="tooltip-inner"></div>' +
        '<div class="tooltip-arrow"></div>' +
      '</div>';

    return {

      compile: function compileFunction(tElement, tAttrs) {

        // prepare directive template!
        // this executes only once for each occurrence of `tooltip` *in template*

        var placement = tAttrs.bsTooltipPlacement || 'top';
        var tooltipTplEl = angular.element(tooltipTpl);
        tooltipTplEl.addClass(placement);

        return function linkingFunction(scope, iElement, iAttrs) {

          // instantiate directive!
          // this executes once for each occurrence of `tooltip` *in the view*

          var tooltipInstanceEl = tooltipTplEl.clone();

          //observe interpolated attributes and update tooltip's content accordingly
          iAttrs.$observe('bsTooltip', function (newContent) {
            tooltipInstanceEl.find('div.tooltip-inner').text(newContent);
          });

          iElement.on('mouseenter', function () {

            //attach tooltip to the DOM to get its size (needed to calculate positioning)
            iElement.after(tooltipInstanceEl);

            //calculate position
            var ttipPosition = calculatePosition(iElement, tooltipInstanceEl, placement);
            tooltipInstanceEl.css(ttipPosition);
            //finally show the tooltip
            tooltipInstanceEl.addClass('in');
          });

          iElement.on('mouseleave', function () {
            tooltipInstanceEl.remove();
          });
        };
      }
    };
  });
