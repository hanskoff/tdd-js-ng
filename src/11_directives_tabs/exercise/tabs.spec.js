describe('tabs', function () {

  var $scope;
  var $compile;

  beforeEach(module('bs.tabs'));
  beforeEach(module('templates'));
  beforeEach(inject(function (_$rootScope_, _$compile_) {
    $scope = _$rootScope_;
    $compile = _$compile_;
  }));

  describe('tabs controller', function () {

    var tabsCtrl;

    beforeEach(inject(function ($controller) {
      tabsCtrl = $controller('BsTabsController', {'$scope': $scope});
    }));

    it('should allow adding new tabs making the first one active', function () {
      var t1 = {};
      var t2 = {isActive: true};

      tabsCtrl.addTab(t1);
      expect(t1.isActive).toBeTruthy();

      tabsCtrl.addTab(t2);
      expect(t2.isActive).toBeTruthy();
      expect(t1.isActive).toBeFalsy();
    });

    it('should remove existing tab', function () {
      //given
      var t1 = {};
      tabsCtrl.addTab(t1);
      //when
      tabsCtrl.removeTab(t1);
      //then
      expect($scope.tabs.length).toEqual(0);
    });

    it('should select an active tab based on valid index', function () {
      //given
      var t1 = {};
      var t2 = {isActive: true};

      tabsCtrl.addTab(t1);
      tabsCtrl.addTab(t2);
      //when
      $scope.selectActiveTab(0);

      //then
      expect(t1.isActive).toBeTruthy();
      expect(t2.isActive).toBeFalsy();
    });

    it('should ignore selections with invalid index', function () {
      //given
      var t1 = {};
      var t2 = {isActive: true};

      tabsCtrl.addTab(t1);
      tabsCtrl.addTab(t2);
      //when
      $scope.selectActiveTab(2);

      //then
      expect(t1.isActive).toBeFalsy();
      expect(t2.isActive).toBeTruthy();
    });

    it('should ignore selections with invalid lower index', function () {
      //given
      var t1 = {};
      var t2 = {isActive: true};

      tabsCtrl.addTab(t1);
      tabsCtrl.addTab(t2);
      //when
      $scope.selectActiveTab(-1);

      //then
      expect(t1.isActive).toBeFalsy();
      expect(t2.isActive).toBeTruthy();
    });

  });

  describe('tabs UI', function () {

    function compileElement(elementString, scope) {
      var element = $compile(elementString)(scope);
      scope.$digest();
      return element;
    }

    it('should render tabs marking the first one as active', function () {

      var elm = compileElement(
        '<bs-tabs>' +
          '<bs-tab heading="foo">foo content</bs-tab>' +
          '<bs-tab heading="{{\'bar\'}}">bar content</bs-tab>' +
          '</bs-tabs>', $scope);

      var headings = elm.find('ul.nav-tabs > li');
      var body = elm.find('div.tab-content > div.tab-pane');

      expect(headings.eq(0).find('a').text()).toEqual('foo');
      expect(headings.eq(0)).toHaveClass('active');
      expect(body.eq(0)).toHaveClass('active');
      expect(body.eq(0).text()).toEqual('foo content');

      expect(headings.eq(1).find('a').text()).toEqual('bar');
      expect(headings.eq(1)).not.toHaveClass('active');
      expect(body.eq(1)).not.toHaveClass('active');
      expect(body.eq(1).text()).toEqual('bar content');
    });

    it('should switch active tab on heading click', function () {
      var elm = compileElement(
        '<bs-tabs>' +
          '<bs-tab heading="foo">foo content</bs-tab>' +
          '<bs-tab heading="{{\'bar\'}}">bar content</bs-tab>' +
          '</bs-tabs>', $scope);

      var headings = elm.find('ul.nav-tabs > li');
      var body = elm.find('div.tab-content > div.tab-pane');

      //when
      headings.eq(1).find('a').click();

      //then
      expect(headings.eq(1)).toHaveClass('active');
      expect(body.eq(1)).toHaveClass('active');
    });

  });
});