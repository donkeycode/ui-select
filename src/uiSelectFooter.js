uis.directive('uiSelectFooter', [
  function() {
    return {
      restrict: 'EA',
      require: '^uiSelect',
      replace: true,
      transclude: true,
      templateUrl: function(tElement) {
        // Gets theme attribute from parent (ui-select)
        tElement.addClass('ui-select-footer');
        var theme = tElement.parent().attr('theme') || uiSelectConfig.theme;
        return theme + '/footer.tpl.html';
      }
    };
}]);
